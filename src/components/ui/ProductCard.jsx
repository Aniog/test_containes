import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <div
      ref={containerRef}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            data-strk-bg-id={`card-bg-${product.id}-1`}
            data-strk-bg={`[${product.id}-name] [product-card-title]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            style={{ backgroundColor: '#E8E0D5' }}
          />
          {/* Second image on hover */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
            data-strk-bg-id={`card-bg-${product.id}-2`}
            data-strk-bg={`[${product.id}-name] [product-card-title]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            style={{ backgroundColor: '#D5CFC5' }}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest px-3 py-1.5">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-foreground text-xs uppercase tracking-widest py-3 transition-all duration-300 flex items-center justify-center gap-2 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 id={`${product.id}-name`} className="product-name text-sm md:text-base text-foreground mb-1.5">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <StarRating rating={product.rating} />
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <p className="text-accent font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}
