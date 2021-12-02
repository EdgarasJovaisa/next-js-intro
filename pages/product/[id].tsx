import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ProductPage from "../../components/ProductPage";
import { Product } from "../../types/Product";

interface ProductPageProps {
  product: Product;
}

const Product: NextPage<ProductPageProps> = ({ product }) => {
  return <ProductPage product={product} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${context.params?.id}`
  );

  const product = await res.json();

  return {
    props: {
      product,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  //  can be most popular
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=5`
  );
  const products = (await res.json()) as Product[];

  const ids = products.map((product) => product.id);
  const paths = locales
    ? locales.reduce<string[]>((arr, locale) => {
        ids.forEach((id) => {
          arr.push(`/${locale}/product/${id}`);
        });
        return arr;
      }, [])
    : ids.map((id) => `/product/${id}`);

  return {
    paths,
    fallback: "blocking",
  };
};

export default Product;
