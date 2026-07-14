import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const containerRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <div
      ref={containerRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 text-brand-cream text-xs font-sans font-medium tracking-wide-xl uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <h3
          id={product.titleId}
          className="font-sans text-[11px] font-medium tracking-product uppercase text-brand-charcoal"
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-sans text-brand-muted">
          ${product.price}
        </p>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
      </Link>
    </div>
  )
}
