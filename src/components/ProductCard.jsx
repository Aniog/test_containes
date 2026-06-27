import { Link } from 'react-router-dom'
import { Star, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { PLACEHOLDER } from '@/lib/strk'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [primary, secondary] = product.images

  const quickAdd = (e) => {
    e.preventDefault()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <img
          src={PLACEHOLDER}
          alt={primary.alt}
          data-strk-img-id={primary.id}
          data-strk-img={product.name}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {secondary && (
          <img
            src={PLACEHOLDER}
            alt={secondary.alt}
            data-strk-img-id={secondary.id}
            data-strk-img={`${product.name} worn`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 transition-transform duration-700"
          />
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <button
            type="button"
            onClick={quickAdd}
            className="w-full bg-cream/95 backdrop-blur text-ink py-3 text-[0.65rem] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 hover:bg-ink hover:text-cream transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-serif text-[0.95rem] uppercase tracking-[0.15em] leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-ink-soft">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium mt-1.5 tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
