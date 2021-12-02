import { Product } from "../types/Product";
import Image from "next/image";
import { useRouter } from "next/router";
import Meta from "./Meta";

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const router = useRouter();

  return (
    <div>
      <Meta title={product.title} description={product.description} />
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        height={1500}
        width={1000}
        layout="responsive"
        alt=""
      />
      <img src={product.image} alt="" />
      <p>{product.price}</p>
      <p>{product.description}</p>
      <br />
      <button type="button" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
};

export default ProductPage;
