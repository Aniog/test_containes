import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import Stars from '@/components/ui/Stars'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      lineId: `${product.id}-Gold`,
      id: product.id,
      name: product.name,
      price: product.price,
      tone: 'Gold',
      qty: 1,
      imgId: product.imgId,
      shortDesc: product.shortDesc,
    })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          src={resolveStrkImageUrl(product.imgId)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={product.name}
          src={resolveStrkImageUrl(product.imgIdAlt)}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-cream/95 backdrop-blur text-ink text-[11px] uppercase tracking-[0.2em] py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-cream transition-colors"
          >
            <ShoppingBag width={14} height={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.14em] leading-tight"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <Stars rating={product.rating} size={12} />
          <span className="text-xs text-muted">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-1.5 font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
