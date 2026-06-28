import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import RatingStars from '@/components/products/RatingStars'
import { formatCurrency } from '@/lib/format'
import { imagePlaceholder } from '@/lib/media'
import { useStrkImages } from '@/lib/useStrkImages'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, priority = false, compact = false }) {
  const containerRef = useRef(null)
  const { addToCart } = useCart()
  const primaryImageId = `product-card-${product.id}-primary`
  const secondaryImageId = `product-card-${product.id}-secondary`

  useStrkImages(containerRef, [primaryImageId, secondaryImageId])

  return (
    <article
      ref={containerRef}
      className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_16px_45px_rgba(28,25,23,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(28,25,23,0.1)]"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-stone-100">
        <div className={`${compact ? 'aspect-[4/5]' : 'aspect-[4/5]'} relative overflow-hidden`}>
          <img
            alt={product.alt}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '600'}
            src={imagePlaceholder}
          />
          <img
            alt={`${product.alt} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
            data-strk-img-id={secondaryImageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width={priority ? '900' : '600'}
            src={imagePlaceholder}
          />
        </div>
      </Link>

      <div className="space-y-4 px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-stone-500">
              {product.category}
            </p>
            <Link to={`/product/${product.id}`}>
              <h3
                id={product.titleId}
                className="mt-2 font-[Cormorant_Garamond] text-[1.65rem] uppercase tracking-[0.18em] text-stone-950"
              >
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm font-medium text-stone-900">
            {formatCurrency(product.price)}
          </p>
        </div>

        <p id={product.descId} className="line-clamp-2 text-sm leading-7 text-stone-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-stone-800">
            {product.badge}
          </span>
        </div>

        <Button
          className="w-full"
          variant="secondary"
          onClick={() => addToCart(product, product.variants[0], 1)}
        >
          Quick add
        </Button>
      </div>
    </article>
  )
}
