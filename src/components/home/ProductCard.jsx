import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.value || 'gold')
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [hovered])

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, selectedVariant)
  }

  return (
    <div
      ref={containerRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-surface rounded-lg overflow-hidden">
          {/* Primary image */}
          <img
            data-strk-img-id={`${product.id}-primary-card`}
            data-strk-img={`[${product.id}-name] ${product.name} jewelry product`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={`${product.id}-hover-card`}
            data-strk-img={`[${product.id}-name] worn detail closeup jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-gold text-velmora-bg text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded">
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 bg-velmora-cream text-velmora-bg text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-velmora-gold`}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>

        {/* Product info */}
        <div className="mt-4 space-y-1.5" id={`${product.id}-name`}>
          <h3 className="font-serif text-sm md:text-base tracking-widest-xl uppercase text-velmora-cream group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className={i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
                />
              ))}
            </div>
            <span className="text-xs text-velmora-muted">({product.reviewCount})</span>
          </div>
          <p className="text-sm text-velmora-gold font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
