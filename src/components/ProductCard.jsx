import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from '@/components/ui/StarRating'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, titleId, descId }) {
  const { addItem } = useCart()
  const [adding, setAdding] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    addItem(product, product.tone[0], 1)
    setTimeout(() => setAdding(false), 800)
  }

  return (
    <Link ref={ref} to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (hover) */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${descId}] [${titleId}] gold jewelry worn`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-espresso text-[10px] uppercase tracking-[0.18em] px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleQuickAdd}
            className={cn(
              'w-full bg-espresso text-ivory text-[11px] uppercase tracking-[0.2em] py-3 hover:bg-gold transition-colors',
              adding && 'bg-gold'
            )}
          >
            {adding ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-lg uppercase tracking-[0.18em] text-espresso"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.short}
        </p>
        <div className="mt-1 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviewsCount})</span>
        </div>
        <p className="mt-2 text-sm text-cocoa">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
