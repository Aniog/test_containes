import { products } from "@/data/products";

/**
 * Hidden build-time image slots so the stock-image plugin creates config
 * entries for every possible cart item (`cart-${product.id}`). These entries
 * are then reused by the cart drawer at runtime.
 */
export function CartImageSlots() {
  return (
    <div aria-hidden="true" className="sr-only">
      {products.map((product) => (
        <div key={product.id}>
          <span id={`cart-preload-${product.id}-name`}>{product.name}</span>
          <span id={`cart-preload-${product.id}-query`}>{product.imageQuery}</span>
          <img
            data-strk-img-id={`cart-${product.id}`}
            data-strk-img={`[cart-preload-${product.id}-query] [cart-preload-${product.id}-name]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
