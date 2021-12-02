import Link from "next/link";
import { Product } from "../types/Product";

interface ProductItemProps {
  product: Product;
  pathname: string;
}

const ProductItem = ({ product, pathname }: ProductItemProps) => {
  return (
    <Link
      href={{
        pathname,
        query: {
          id: product.id,
        },
      }}
    >
      <a>
        <h3>{product.title} &rarr;</h3>
        <p>{product.description}</p>
      </a>
    </Link>
  );
};

export default ProductItem;
