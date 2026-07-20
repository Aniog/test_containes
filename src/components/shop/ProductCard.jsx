import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, className = '' }) {
  const { add } = useCart()
  const ref = useRef(null)
  const defaultVariant = product.variants[0]

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    add(product, defaultVariant, 1, `[${product.descId}] [${product.titleId}]`)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
    >
      <div ref={ref} className="relative overflow-hidden bg-ivory border border-sand aspect-[3x4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ivory/95 backdrop-blur-sm text-ink hover:bg-champagne hover:text-ivory transition-colors py-3 text-[11px] uppercase tracking-widest2 font-medium rounded-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest2 text-taupe mb-1">
          {product.category}
        </p>
        <h3
          id={product.titleId}
          className="font-serif text-lg text-ink uppercase tracking-widest3 leading-snug"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center">
          <StarRating value={product.rating} size={12} showValue reviewCount={product.reviews} />
        </div>
        <p className="mt-1.5 text-sm text-stone">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
