import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, className = '' }) {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className={`group relative ${className}`}>
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-surface aspect-[3/4]">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgIds.main}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgIds.hover}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('new') && (
              <span className="bg-obsidian text-on-dark font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                New
              </span>
            )}
            {product.tags.includes('bestseller') && (
              <span className="bg-gold-dust text-obsidian font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                Bestseller
              </span>
            )}
          </div>

          {/* Quick add — appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-on-dark font-manrope text-[10px] tracking-widest uppercase py-3.5 hover:bg-gold-dust hover:text-obsidian transition-colors duration-300"
            >
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <p
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest text-ink font-medium leading-tight"
          >
            {product.name}
          </p>
          <p
            id={product.descId}
            className="font-manrope text-xs text-muted mt-1"
          >
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="font-cormorant text-xl text-ink font-medium">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    style={i < Math.floor(product.rating) ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#E8E2D9', fill: '#E8E2D9' }}
                  />
                ))}
              </div>
              <span className="font-manrope text-[10px] text-whisper">({product.reviewCount})</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
