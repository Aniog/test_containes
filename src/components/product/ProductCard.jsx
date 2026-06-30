import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-linen overflow-hidden mb-4">
        {/* Placeholder image with warm gradient */}
        <div className={`absolute inset-0 transition-transform duration-700 ease-out ${hovered ? 'scale-105' : 'scale-100'}`}>
          <div className="w-full h-full bg-gradient-to-br from-linen via-sand to-taupe/30 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gold/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gold/40" />
              </div>
              <span className="text-[10px] text-taupe uppercase tracking-wider">{product.category}</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-cream text-[10px] uppercase tracking-wider px-2.5 py-1 font-sans">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 backdrop-blur-sm text-charcoal text-xs uppercase tracking-wider font-sans flex items-center justify-center gap-2 border-none transition-all duration-300 hover:bg-charcoal hover:text-cream ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-widest-plus text-charcoal mb-1.5 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-taupe font-light">${product.price}</p>
      </div>
    </Link>
  )
}
