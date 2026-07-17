import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [])

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] overflow-hidden mb-4">
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[${product.name}] [${product.description}] gold jewelry elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[0].alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[${product.name}] [${product.description}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} - worn view`}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 velmora-btn-primary py-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="velmora-product-name text-sm md:text-base">{product.name}</h3>
        <p className="text-xs text-[var(--velmora-text-muted)] mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-medium">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-[var(--velmora-accent)] text-[var(--velmora-accent)]" />
            <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
