import { useProduct } from "../../lib/hooks";

export function ProductId({ productId }) {
  const productData = useProduct(productId);
  return (
    <div>
      <div>{productData}</div>
    </div>
  );
}
