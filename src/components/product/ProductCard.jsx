import { Link } from 'react-router-dom'
import { Plus, Star } from 'lucide-react'
import { toast } from 'sonner'
import { useCart } from '@/context/CartContext.jsx'
import { resolveStrkImg } from '@/lib/strkImg.js'
import { formatPrice } from '@/lib/utils'
import { CATEGORY_LABELS } from '@/data/products.js'
import { PRODUCT_IMAGE_MAP } from '@/data/productImages.js'

export function StarRating({ rating = 5, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.round(rating) ? 'fill-gold text-gold' : 'fill-line text-line'
          }`}
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const img = PRODUCT_IMAGE_MAP[product.slug]

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants?.[0] ?? 'gold', 1)
    toast.success(`${product.name} added to your bag`)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-sand">
        <img
          src={resolveStrkImg(img?.mainId ?? `product-${product.slug}-main`, 700)}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        <img
          src={resolveStrkImg(img?.wornId ?? `product-${product.slug}-worn`, 700)}
          alt={`${product.name} worn`}
          loading="lazy"
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {product.bestseller && (
          <span className="absolute left-3 top-3 bg-ink/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            Bestseller
          </span>
        )}

        <button
          onClick={handleAdd}
          className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-center gap-2 bg-cream/95 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-gold group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Plus className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-bronze">
          {CATEGORY_LABELS[product.category] ?? product.category}
        </p>
        <h3 className="mt-1.5 font-serif text-lg font-semibold uppercase tracking-[0.14em] text-ink">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm font-medium tracking-wide text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
