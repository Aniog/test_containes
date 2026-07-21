import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { StarRating } from '@/components/ui/StarRating'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export function ProductCard({ product, className }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { quantity: 1, tone: product.tone || 'gold' })
  }

  return (
    <Link to={`/product/${product.slug}`} className={cn('group block', className)}>
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <img
          src={PLACEHOLDER}
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-luxe group-hover:opacity-0"
        />
        <img
          src={PLACEHOLDER}
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-luxe group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1 font-medium">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-400 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 text-cream py-3.5 text-[11px] uppercase tracking-widest2 font-medium hover:bg-ink transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
