import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[3/4] bg-velvet-100 relative overflow-hidden mb-4">
        <div
          className={`absolute inset-0 transition-all duration-500 flex items-center justify-center ${
            hovered ? 'opacity-80 scale-105' : 'opacity-100 scale-100'
          }`}
          style={{
            background: `linear-gradient(135deg, ${product.id === 'golden-sphere-huggies' ? '#f5e6d3' : product.id === 'amber-lace-earrings' ? '#f0e4d4' : product.id === 'majestic-flora-nectar' ? '#f3e8db' : product.id === 'royal-heirloom-set' ? '#f2e5d0' : '#f5ebe0'}, #e8d9c7)`,
          }}
        >
          <span className="font-serif text-4xl text-velvet-400/30 italic">
            {product.name.charAt(0)}
          </span>
        </div>

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-cream shadow-lg flex items-center justify-center rounded-full transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-4 h-4 text-velvet-800" />
        </button>

        {product.newArrival && (
          <span className="absolute top-3 left-3 bg-cream/90 text-velvet-800 text-[10px] uppercase tracking-wider px-2 py-1 font-sans">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className="font-serif text-sm lg:text-base tracking-wider text-velvet-900 uppercase leading-tight mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold-400 text-gold-400'
                    : 'fill-velvet-200 text-velvet-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-velvet-500 font-sans">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-velvet-700 font-medium">${product.price}</p>
      </div>
    </Link>
  )
}