import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import StarRating from '@/components/common/StarRating.jsx'

const placeholderSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const formatPrice = (price) => `$${price}`

const ProductCard = ({ product, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const visibleImageId = isHovered ? product.altImageId : product.imageId

  return (
    <article
      className="group flex h-full flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-[1.75rem] bg-sand">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            alt={product.name}
            src={placeholderSrc}
            data-strk-img-id={visibleImageId}
            data-strk-img={`[${product.descriptionId}] [${product.titleId}] [bestsellers-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '700'}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                addToCart(product, 1, product.tones[0])
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-ink bg-ink px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ivory shadow-soft transition hover:bg-bronze hover:text-ink"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-3">
        <div className="space-y-2">
          <p id={product.titleId} className="font-display text-2xl uppercase tracking-[0.28em] text-ink">
            {product.name}
          </p>
          <p id={product.descriptionId} className="text-sm leading-7 text-muted">
            {product.shortDescription}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm uppercase tracking-[0.24em] text-ink">{formatPrice(product.price)}</span>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
