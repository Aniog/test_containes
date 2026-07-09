import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice, cn } from '../lib/utils'

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-muted rounded-sm overflow-hidden mb-4">
        {/* Placeholder image with jewelry-themed gradient */}
        <div
          className={cn(
            'absolute inset-0 transition-transform duration-700 ease-out',
            hovered && 'scale-105'
          )}
        >
          <div className="w-full h-full bg-gradient-to-br from-stone-200 via-amber-100 to-stone-300 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full border-2 border-accent/40 flex items-center justify-center">
                <span className="font-serif text-accent text-lg">V</span>
              </div>
              <span className="text-xs text-muted-foreground/60 tracking-wide uppercase">Velmora</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 left-3 right-3 bg-card/95 backdrop-blur-sm text-foreground text-xs tracking-nav uppercase font-medium py-2.5 rounded-sm flex items-center justify-center gap-2 transition-all duration-300',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm md:text-base tracking-product uppercase text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">({product.reviewCount})</span>
        </div>

        <p className="text-sm font-medium text-foreground">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
