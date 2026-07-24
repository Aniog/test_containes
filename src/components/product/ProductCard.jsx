import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import StrkImage from '@/components/ui/StrkImage'
import StarRating from '@/components/ui/StarRating'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/ToastContext'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: 'gold', quantity: 1 })
    toast(`${product.name} added to bag`)
  }

  const titleId = `pc-${product.id}-title`
  const subId = `pc-${product.id}-sub`

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-cream-deep aspect-[4x5]">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${subId}] [${titleId}] gold jewelry`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-elegant group-hover:opacity-0"
          />
          <img
            alt={product.name}
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${subId}] [${titleId}] gold jewelry worn`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-elegant group-hover:opacity-100"
          />

          {product.badge && (
            <span className="absolute left-4 top-4 bg-cream-soft/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full p-3 transition-transform duration-300 ease-elegant group-hover:translate-y-0">
        <button
          type="button"
          onClick={handleQuickAdd}
          className="flex w-full items-center justify-center gap-2 bg-ink/90 px-4 py-3 text-[11px] uppercase tracking-widest2 text-cream-soft backdrop-blur-sm transition-colors hover:bg-gold"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Quick Add
        </button>
      </div>

      <Link to={`/product/${product.id}`} className="block">
        <div className="mt-4 text-center">
          <h3
            id={titleId}
            className="font-serif text-lg uppercase tracking-widest2 text-ink"
          >
            {product.name}
          </h3>
          <p id={subId} className="mt-1 text-xs text-ink-muted">
            {product.subtitle}
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <StarRating rating={product.rating} size={12} />
            <span className="text-[11px] text-ink-muted">({product.reviews})</span>
          </div>
          <p className="mt-2 text-sm font-medium text-ink">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  )
}
