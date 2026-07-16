import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Stars from '@/components/ui/Stars'


export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: 'Gold', quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial warm`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image on hover */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn on model styling detail`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 z-10 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-wide2 text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 py-3 text-[11px] uppercase tracking-wide2 text-ivory backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-wide2 text-ink"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="mt-1 text-xs text-stone"
        >
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone-light">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
