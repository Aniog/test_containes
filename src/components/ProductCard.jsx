import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StarRating from './StarRating.jsx'
import { formatPrice } from '@/lib/utils.js'
import { useCart } from '@/context/CartContext.jsx'
import { getProductImages } from '@/data/productImages.js'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const variant = product.tone_variants?.[0] || 'gold'
  const images = getProductImages(product.slug)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, variant, 1)
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        {images?.card ? (
          <>
            <img
              src={images.card}
              alt={product.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {images.hover && (
              <img
                src={images.hover}
                alt={`${product.name} alternate view`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-surface" />
        )}

        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-foreground py-3 text-xs font-medium uppercase tracking-widest text-background transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } hover:bg-accent`}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      <div className="mt-4 space-y-1.5">
        <StarRating rating={product.rating} count={product.review_count} size={12} />
        <h3 className="font-serif text-sm font-medium uppercase tracking-widest-custom text-foreground">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground">{formatPrice(product.price)}</span>
          {product.compare_price > 0 && (
            <span className="text-sm text-muted line-through">
              {formatPrice(product.compare_price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
