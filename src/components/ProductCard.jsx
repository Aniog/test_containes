import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/StarRating'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const cardRef = useRef(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (cardRef.current) {
        ImageHelper.loadImages(strkImgConfig, cardRef.current)
      }
    }, 50)
    return () => window.clearTimeout(timer)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { quantity: 1, tone: product.tone || 'gold' })
  }

  return (
    <Link
      ref={cardRef}
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width={600}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn model editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width={600}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-2 opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ivory/95 backdrop-blur-sm text-ink text-[11px] uppercase tracking-widest2 font-medium py-3 hover:bg-gold hover:text-ivory transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg text-ink uppercase tracking-widest3 leading-tight"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-sand">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
