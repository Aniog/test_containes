import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = React.useState(false)
  const [added, setAdded] = React.useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white rounded-sm mb-3">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Quick Add button on hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <button
            onClick={handleQuickAdd}
            className={`w-full py-2.5 rounded-full text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
              added
                ? 'bg-charcoal text-white'
                : 'bg-white/95 text-charcoal hover:bg-gold hover:text-white shadow-lg'
            }`}
          >
            {added ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-full text-[10px] font-medium flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span>{product.rating}</span>
        </div>
      </div>

      <h3 className="product-name group-hover:text-gold transition-colors">{product.name}</h3>
      <p className="font-serif text-lg text-charcoal mt-0.5">${product.price}</p>
    </Link>
  )
}