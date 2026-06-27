import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect fill='%23D4C9B8' width='3' height='4'/%3E%3C/svg%3E`
            }}
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={product.name}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          )}
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.stopPropagation()
          addItem(product)
        }}
        className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-velmora-espresso shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-velmora-espresso hover:text-white ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
        aria-label="Add to cart"
      >
        <ShoppingBag size={16} />
      </button>

      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-velmora-taupe">({product.reviews})</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm font-medium uppercase tracking-[0.15em] text-velmora-espresso transition-colors hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-velmora-warm-gray">
          ${product.price}
        </p>
      </div>
    </div>
  )
}
