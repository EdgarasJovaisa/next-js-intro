import ProductItem from "./ProductItem";
import { Product } from "../types/Product";

interface ProductsProps {
  products: Product[];
  pathname: string;
}

const ProductsList = ({ products, pathname }: ProductsProps) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} pathname={pathname} />
      ))}
    </div>
  );
};

export default ProductsList;
