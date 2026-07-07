import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Check } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { StarRating } from './StarRating'
import { useCart } from '@/context/CartContext'

export function ProductCard({ product, className }) {
  const { addToCart } = useCart()
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const image = product.images?.gold?.[0]
  const hoverImage = product.hoverImage || product.images?.gold?.[1] || image

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, { variant: 'gold', quantity: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-velvet-secondary">
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          className={cn(
            'h-full w-full object-cover transition-transform duration-700 ease-out',
            hovered && 'scale-105'
          )}
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            'absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-3 text-xs font-sans uppercase tracking-widest font-medium transition-all duration-300',
            added
              ? 'bg-success text-velvet'
              : 'bg-cream text-velvet opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-ivory-dark'
          )}
        >
          {added ? (
            <>
              <Check size={14} /> Added
            </>
          ) : (
            <>
              <ShoppingBag size={14} /> Add to Cart
            </>
          )}
        </button>
      </div>

      <div className="mt-4 space-y-1.5">
        <StarRating rating={product.rating} count={product.reviewCount} size={12} />
        <h3 className="font-serif text-sm uppercase tracking-widest text-cream font-medium leading-snug">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-warm-gray">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
