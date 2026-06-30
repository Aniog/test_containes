import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, openCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id: product.id, name: product.name, price: product.price, variant: product.variants[0] })
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-[#E8E0D5]/30 overflow-hidden mb-4">
        <img
          data-strk-img-id={`product-${product.id}-img-${isHovered ? '2' : '1'}`}
          data-strk-img={`[product-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {product.badges.map((b) => (
              <span key={b} className="bg-cream/90 text-warm-dark text-[10px] tracking-wider uppercase px-2.5 py-1 font-sans">
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-warm-dark/90 hover:bg-warm-dark text-cream text-xs tracking-wider uppercase py-3 font-sans transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-serif text-sm md:text-base tracking-super-wide uppercase text-warm-dark">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mt-1">
        <div className="flex text-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className={i >= Math.floor(product.rating) ? 'text-warm-dark/20' : ''} />
          ))}
        </div>
        <span className="text-[11px] text-muted font-sans">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-sans text-warm-dark mt-1">${product.price}</p>

      <span id={`product-${product.id}-name`} className="hidden">{product.name} gold jewelry</span>
    </Link>
  )
}