import { Link } from 'react-router-dom'

const ProductCard = ({ product, onAddToCart, priority = false }) => {
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const altId = `product-${product.id}-alt`
  const primaryImageId = `product-${product.id}-primary-9f2a`
  const hoverImageId = `product-${product.id}-hover-4bc8`

  return (
    <article className="group">
      <Link to={`/shop/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-mist shadow-card">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              data-strk-img-id={primaryImageId}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width={priority ? '1000' : '800'}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} alternate view`}
              data-strk-img-id={hoverImageId}
              data-strk-img={`[${altId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            />
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onAddToCart(product, 1, product.variants[0])
            }}
            className="absolute inset-x-4 bottom-4 rounded-full bg-ivory px-4 py-3 text-xs uppercase tracking-brand text-noir opacity-100 shadow-soft transition sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="space-y-2 px-1 pt-5 text-noir">
        <p id={titleId} className="font-display text-xl uppercase tracking-brand text-noir">
          {product.name}
        </p>
        <p id={descId} className="text-sm leading-6 text-taupe">
          {product.shortDescription}
        </p>
        <p id={altId} className="sr-only">
          {product.gallery[1]?.scene || product.description}
        </p>
        <div className="flex items-center justify-between gap-4 border-t border-noir/10 pt-3 text-sm uppercase tracking-[0.18em] text-taupe">
          <span>{product.category}</span>
          <span className="text-noir">${product.price}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
