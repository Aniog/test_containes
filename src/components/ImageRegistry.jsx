import { products } from '@/data/products'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

/**
 * Visually hidden registry that statically references every product image
 * so the build-time image plugin can discover and resolve all IDs.
 * Renders nothing visible; exists solely for static analysis.
 */
export default function ImageRegistry() {
  return (
    <div aria-hidden="true" className="sr-only">
      {products.map((product) => (
        <span key={product.id}>
          <span id={product.titleId}>{product.name}</span>
          <span id={product.descId}>{product.tagline}</span>
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${product.descId}] ${product.name} worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            alt=""
          />
        </span>
      ))}
    </div>
  )
}
