import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { PLACEHOLDER } from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id])

  const titleId = `pc-${product.id}-title`
  const descId = `pc-${product.id}-desc`
  const imgId = `pc-${product.id}-img`
  const img2Id = `pc-${product.id}-img2`

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone, qty: 1 })
  }

  return (
    <Link
      ref={ref}
      to={`/product/${product.slug}`}
      className="group block animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} worn`}
          data-strk-img-id={img2Id}
          data-strk-img={`[${titleId}] gold jewelry worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badges */}
        {product.badges?.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <span
                key={b}
                className="bg-ivory/90 backdrop-blur-sm text-ink text-[10px] uppercase tracking-widest3 px-2.5 py-1"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-espresso/95 text-ivory text-[11px] uppercase tracking-widest3 py-3 hover:bg-gold hover:text-espresso transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest3 text-sand mb-1">
          {product.category}
        </p>
        <h3
          id={titleId}
          className="font-serif text-lg text-ink uppercase tracking-wider leading-tight"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.short}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-sand">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
