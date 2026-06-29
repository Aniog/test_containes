import { products } from '@/data/products';

/**
 * Hidden static map used at build time by the strk-img plugin.
 * It provides a resolvable `products.map()` so every product imgId and
 * thumbnail imgId gets an entry in strk-img-config.json.
 */
export function ProductImageConfig() {
  return (
    <div aria-hidden="true" className="hidden">
      {products.map((product) => (
        <div key={product.id}>
          <span id={`product-search-${product.id}`}>{product.searchTerms}</span>
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-search-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
          {[1, 2, 3, 4].map((idx) => (
            <img
              key={idx}
              data-strk-img-id={`${product.imgId}-thumb-${idx}`}
              data-strk-img={`[product-search-${product.id}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${idx}`}
            />
          ))}
          <img
            data-strk-img-id={`cart-${product.imgId}`}
            data-strk-img={`[product-search-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} in cart`}
          />
        </div>
      ))}
    </div>
  );
}
