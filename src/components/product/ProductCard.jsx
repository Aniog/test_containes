import { useState } from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '@/components/shared/RatingStars.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const ProductCard = ({ product, priority = false }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const containerRef = useStrkImages([hovered])
  const primaryTitleId = `${product.slug}-card-title`
  const primaryDescId = `${product.slug}-card-desc`
  const secondaryTitleId = `${product.slug}-card-alt-title`
  const secondaryDescId = `${product.slug}-card-alt-desc`

  const currentPrompt = hovered
    ? `[${secondaryDescId}] [${secondaryTitleId}]`
    : `[${primaryDescId}] [${primaryTitleId}]`

  return (
    <article
      ref={containerRef}
      className="group flex h-full flex-col rounded-[2rem] bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link className="block" to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden rounded-[1.6rem] bg-porcelain">
          <img
            alt={product.name}
            className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            data-strk-img={currentPrompt}
            data-strk-img-id={`${product.slug}-card-main`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            fetchPriority={priority ? 'high' : 'auto'}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-velvet px-5 py-3 text-xs uppercase tracking-[0.24em] text-porcelain shadow-soft">
              Quick Add
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-champagne">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={primaryTitleId}
                className="mt-2 font-editorial text-2xl uppercase tracking-[0.18em] text-velvet"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="pt-2 text-sm font-medium text-velvet">
            {formatPrice(product.price)}
          </span>
        </div>

        <p id={primaryDescId} className="text-sm leading-7 text-truffle">
          {product.shortDescription}
        </p>

        <p id={secondaryTitleId} className="sr-only">
          {product.name} alternate styling
        </p>
        <p id={secondaryDescId} className="sr-only">
          Gift-ready alternate editorial view of {product.name.toLowerCase()} with warm premium lighting.
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          <button
            type="button"
            className="text-xs uppercase tracking-[0.22em] text-truffle transition-colors duration-300 hover:text-champagne"
            onClick={() => addItem(product, 1, product.variants[0])}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
