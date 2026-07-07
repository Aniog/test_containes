import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import RatingStars from '@/components/shared/RatingStars'

export default function ProductCard({ product, priority = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const titleId = `product-card-${product.slug}-title`
  const primaryCueId = `product-card-${product.slug}-primary-cue`
  const secondaryCueId = `product-card-${product.slug}-secondary-cue`

  return (
    <article
      className="group flex h-full flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-sand">
        <Link to={`/products/${product.slug}`} className="block aspect-[3/4] overflow-hidden">
          <div
            className={`h-full w-full bg-cover bg-center transition duration-500 ${
              isHovered ? 'scale-[1.02] opacity-0' : 'scale-100 opacity-100'
            }`}
            role="img"
            aria-label={product.name}
            data-strk-bg-id={`product-primary-${product.slug}`}
            data-strk-bg={`[${primaryCueId}] [${titleId}]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="720"
            data-priority={priority ? 'true' : 'false'}
          />
          <div
            className={`absolute inset-0 h-full w-full bg-cover bg-center transition duration-500 ${
              isHovered ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
            }`}
            role="img"
            aria-label={`${product.name} on model`}
            data-strk-bg-id={`product-secondary-${product.slug}`}
            data-strk-bg={`[${secondaryCueId}] [${titleId}]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="720"
          />
        </Link>

        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-between gap-3 opacity-100 transition duration-300 sm:translate-y-6 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <span className="rounded-full bg-porcelain/90 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-espresso backdrop-blur">
            {product.badge}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product, { tone: 'Gold Tone', quantity: 1 })}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-obsidian px-4 py-2 text-xs font-semibold uppercase tracking-widest text-porcelain transition duration-300 hover:bg-espresso"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">{product.category}</p>
          <p className="text-sm font-medium text-espresso/70">{formatPrice(product.price)}</p>
        </div>
        <div className="space-y-2">
          <Link to={`/products/${product.slug}`}>
            <h3 id={titleId} className="product-name transition duration-300 group-hover:text-champagne">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm leading-7 text-espresso/78">{product.shortDescription}</p>
        </div>
        <RatingStars value={product.rating} reviewCount={product.reviews} />
      </div>

      <p id={primaryCueId} className="sr-only">
        {product.imageCues.primary}
      </p>
      <p id={secondaryCueId} className="sr-only">
        {product.imageCues.secondary}
      </p>
    </article>
  )
}
