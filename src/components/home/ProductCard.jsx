import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../cart/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-3">
          <img
            alt={product.name}
            data-strk-img-id={`product-card-${product.imgId}`}
            data-strk-img={`[product-name-${product.id}] gold jewelry elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 hover:bg-gold hover:text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </Link>
      <div>
        <h3
          id={`product-name-${product.id}`}
          className="font-sans text-xs font-medium uppercase tracking-product text-charcoal"
        >
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm text-muted-fg">${product.price}</p>
      </div>
    </div>
  )
}
