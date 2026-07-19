import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] || 'Gold')
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square bg-stone-100 overflow-hidden">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-stone-900/90 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-gold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm font-medium text-stone-900 uppercase tracking-product">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-stone-400">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-stone-900">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
