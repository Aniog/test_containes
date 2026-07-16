import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { toast } from 'sonner'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, priority = false }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? 'fill-brand-500 text-brand-500'
            : 'fill-midnight-200 text-midnight-200'
        }`}
      />
    ))
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-midnight-100 rounded-sm">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
            loading={priority ? 'eager' : 'lazy'}
          />
          {isHovered && product.hoverImage && (
            <img
              src={product.hoverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden
            />
          )}

          {/* Quick add button */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                addItem(product, 'gold', 1)
                toast.success(`${product.name} added to cart`, {
                  description: 'Gold finish · Qty 1',
                  duration: 2500,
                })
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-midnight-950 py-3 font-sans text-xs font-medium uppercase tracking-wider hover:bg-midnight-950 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3 space-y-1.5">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="product-name text-xs">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1">
          {renderStars(product.rating)}
          <span className="text-[10px] text-midnight-400 font-sans ml-1">({product.reviews})</span>
        </div>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  )
}