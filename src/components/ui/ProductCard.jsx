import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StockImage } from './StockImage'
import { StarRating } from './StarRating'
import { Badge } from './Badge'
import { useCart } from '@/context/CartContext'

export function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, openCart } = useCart()
  const secondImage = product.images[1] || product.images[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    openCart()
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-velmora-warm mb-4">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge>{product.badge}</Badge>
          </div>
        )}
        <StockImage
          id={`product-${product.id}-primary`}
          query={`[product-${product.id}-name]`}
          ratio="3x4"
          width={600}
          alt={product.name}
          className={cn(
            'transition-opacity duration-500',
            isHovered ? 'opacity-0' : 'opacity-100'
          )}
        />
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <StockImage
            id={`product-${product.id}-hover`}
            query={secondImage.query}
            ratio="3x4"
            width={600}
            alt={`${product.name} alternate view`}
          />
        </div>
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-3.5 bg-velmora-dark/90 text-velmora-cream text-xs tracking-widest uppercase font-sans translate-y-full transition-transform duration-300 group-hover:translate-y-0',
            isHovered ? 'translate-y-0' : ''
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="text-center">
        <StarRating rating={product.rating} count={product.reviewCount} size={12} className="justify-center mb-2" />
        <h3 id={`product-${product.id}-name`} className="font-serif text-base md:text-lg text-velmora-dark tracking-wide uppercase mb-1">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-velmora-stone">${product.price}</p>
      </div>
    </Link>
  )
}

