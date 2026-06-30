// This component is intentionally hidden. It exists only so the build-time
// strk-img plugin can resolve dynamic image IDs against the static products
// array and populate strk-img-config.json with product image URLs. Those
// entries are then applied at runtime by ImageHelper.loadImages in the real
// product components (ProductCard, ProductDetail).
import { products } from '@/data/products'

export function ProductImageSeed() {
  return (
    <div aria-hidden="true" className="hidden">
      {/* Hidden title nodes used by image queries */}
      {products.map((product) => (
        <h3 key={`title-${product.id}`} id={`product-title-${product.id}`}>
          {product.name}
        </h3>
      ))}

      {/* Product card images */}
      {products.map((product) => (
        <img
          key={`card-${product.id}`}
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-title-${product.id}] gold jewelry editorial product photography warm neutral`}
          data-strk-img-ratio="3x4"
          data-strk-img-width={600}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
      ))}

      {/* Product detail main gallery images */}
      {products.map((product) =>
        Array.from({ length: product.images }).map((_, index) => (
          <img
            key={`main-${product.id}-${index}`}
            data-strk-img-id={`product-main-${product.id}-${index}`}
            data-strk-img={`[product-title-${product.id}] gold jewelry editorial product photography`}
            data-strk-img-ratio="4x5"
            data-strk-img-width={900}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} main ${index + 1}`}
          />
        ))
      )}

      {/* Product detail thumbnail images */}
      {products.map((product) =>
        Array.from({ length: product.images }).map((_, index) => (
          <img
            key={`thumb-${product.id}-${index}`}
            data-strk-img-id={`product-thumb-${product.id}-${index}`}
            data-strk-img={`[product-title-${product.id}] gold jewelry detail angle ${index + 1}`}
            data-strk-img-ratio="1x1"
            data-strk-img-width={300}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} view ${index + 1}`}
          />
        ))
      )}
    </div>
  )
}
