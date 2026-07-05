import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const titleId = `prod-${product.id}-title`
  const subtitleId = `prod-${product.id}-subtitle`
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, cardRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const primaryQuery = `[${subtitleId}] [${titleId}] gold jewelry editorial warm`
  const hoverQuery = `[${titleId}] gold jewelry worn model close up`

  return (
    <article
      ref={cardRef}
      className="group flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative w-full overflow-hidden bg-cream aspect-[3/4]">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={primaryQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-0"
          />
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgIdHover}
            data-strk-img={hoverQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.04]"
          />

          {product.badges?.length > 0 && (
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest2 font-medium bg-ivory/90 text-espresso px-2.5 py-1">
              {product.badges[0]}
            </span>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product.id, product.defaultTone, 1)
            }}
            className="absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-espresso/95 text-ivory text-[11px] uppercase tracking-widest2 font-medium py-3.5 hover:bg-noir"
            aria-label={`Quick add ${product.name} to bag`}
          >
            Quick add
          </button>
        </div>
      </Link>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 id={titleId} className="product-name truncate">
            {product.name}
          </h3>
          <p id={subtitleId} className="text-xs text-taupe mt-1 truncate">
            {product.subtitle}
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <StarRating value={product.rating} size={12} />
            <span className="text-[11px] text-taupe">({product.reviewCount})</span>
          </div>
        </div>
        <p className="text-sm whitespace-nowrap text-espresso">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
