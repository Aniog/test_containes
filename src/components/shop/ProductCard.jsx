import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, product.variants[0], 1)
  }

  return (
    <div
      className={cn('group', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-sm bg-muted">
        <Link to={`/product/${product.id}`} className="block h-full w-full">
          <img
            data-strk-img={`[product-${product.id}-name]`}
            data-strk-img-id={`product-main-${product.id}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              'h-full w-full object-cover transition-transform duration-700',
              hovered && 'scale-105'
            )}
          />
          <img
            data-strk-img={`[product-${product.id}-hover]`}
            data-strk-img-id={`product-hover-${product.id}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            aria-hidden="true"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>
        <button
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-md bg-background py-3 text-sm font-medium text-foreground shadow-lg transition-all duration-300 hover:bg-accent hover:text-white',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <Plus className="h-4 w-4" />
          Quick Add
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="block space-y-1.5">
        <h3 id={`product-${product.id}-name`} className="font-serif text-xs uppercase tracking-[0.16em] text-foreground">
          {product.name}
        </h3>
        <p id={`product-${product.id}-hover`} className="sr-only" aria-hidden="true">
          {product.hoverQuery}
        </p>
        <p className="text-xs text-muted-foreground line-clamp-1">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">${product.price}</span>
          <StarRating rating={product.rating} count={product.reviewCount} size={12} />
        </div>
      </Link>
    </div>
  )
}
