import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <div ref={containerRef} className={cn('group', className)}>
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-4">
          <img
            src={PLACEHOLDER}
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={PLACEHOLDER}
            alt={product.name}
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-ivory/90 text-espresso text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <button
              onClick={handleQuickAdd}
              className="w-full bg-espresso text-cream py-3 text-xs tracking-[0.25em] uppercase hover:bg-gold transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3
            id={product.titleId}
            className="font-serif text-base md:text-lg uppercase tracking-[0.12em] text-espresso group-hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.shortDesc}</p>

          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs text-taupe">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <p className="text-sm text-cocoa mt-2">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  )
}
