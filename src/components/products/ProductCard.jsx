import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { formatPrice, cn } from '@/lib/utils'
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
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-brand-cream overflow-hidden mb-4">
        {/* Primary image */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            hovered ? 'opacity-0' : 'opacity-100'
          )}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        >
          <div className="w-full h-full bg-gradient-to-br from-brand-gold/10 via-brand-cream to-brand-gold/5" />
        </div>

        {/* Secondary image (hover) */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            hovered ? 'opacity-100' : 'opacity-0'
          )}
          data-strk-img-id={product.secondaryImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        >
          <div className="w-full h-full bg-gradient-to-tl from-brand-gold/15 via-brand-warm-white to-brand-gold/5" />
        </div>

        {/* Tag badge */}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-brand-charcoal text-brand-text-light text-[10px] tracking-widest-xl uppercase py-1.5 px-3 z-10">
            {product.tag}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 left-3 right-3 bg-brand-charcoal/90 backdrop-blur-sm text-brand-text-light py-3 flex items-center justify-center gap-2 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-gold hover:text-brand-charcoal z-10',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          )}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-xs tracking-widest-xl uppercase text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < Math.floor(product.rating)
                    ? 'fill-brand-gold text-brand-gold'
                    : 'text-brand-divider-light'
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-brand-muted-light">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm font-medium text-brand-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
