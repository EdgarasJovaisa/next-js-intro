import type { GetStaticProps, NextPage } from "next";
import Meta from "../components/Meta";
import ProductsList from "../components/ProductsList";
import { Product } from "../types/Product";

interface ProductsPageProps {
  products: Product[];
}

const Products: NextPage<ProductsPageProps> = ({ products }) => {
  return (
    <div>
      <Meta />
      <ProductsList products={products} pathname={"/product-fallback/[id]"} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=10`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 30,
  };
};

export default Products;
