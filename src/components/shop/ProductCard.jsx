import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] || 'Gold')
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-square bg-cream overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            loading="lazy"
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-warm-black text-white text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 bg-warm-black/90 backdrop-blur-sm text-white py-2.5 flex items-center justify-center gap-2 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-gold-dark ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-product-name uppercase text-warm-black group-hover:text-gold-dark transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-text">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-warm-black">{formatPrice(product.price)}</span>
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star size={12} fill="#C6A355" className="text-gold" />
              <span className="text-xs text-muted-text">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
