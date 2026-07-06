import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

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
      <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-2">
              <span className="text-gold text-lg font-serif">V</span>
            </div>
            <p id={product.titleId} className="text-xs text-stone font-light">{product.name}</p>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold text-lg font-serif">V</span>
            </div>
          </div>
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-charcoal/90 text-cream py-3 text-xs font-medium tracking-wider flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="product-name text-xs md:text-sm text-charcoal mb-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
            />
          ))}
          <span className="text-[10px] text-stone ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-charcoal font-medium">${product.price}</p>
      </div>
    </Link>
  )
}
