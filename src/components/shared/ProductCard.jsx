import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [showQuickAdd, setShowQuickAdd] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <div ref={containerRef} className="group">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div
          className="relative aspect-[3x4] overflow-hidden bg-charcoal/5"
          onMouseEnter={() => { setHovered(true); setShowQuickAdd(true) }}
          onMouseLeave={() => { setHovered(false); setShowQuickAdd(false) }}
        >
          {/* Primary image */}
          <img
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={product.images[0].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* Secondary image (hover) */}
          <img
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
            data-strk-img-ratio={product.images[1].ratio}
            data-strk-img-width={product.images[1].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick Add button */}
          <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${showQuickAdd ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <button
              onClick={handleQuickAdd}
              className="w-full bg-charcoal text-cream font-sans text-xs tracking-ui uppercase py-2.5 hover:bg-gold hover:text-charcoal transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="pt-3">
          <h3 id={product.titleId} className="font-serif text-sm md:text-base tracking-product uppercase text-charcoal">{product.name}</h3>
          <p id={product.descId} className="font-sans text-xs text-text-muted-dark mt-1 line-clamp-2">{product.description}</p>
          <p className="font-sans text-sm font-medium text-charcoal mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
