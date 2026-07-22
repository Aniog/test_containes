import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Stars from '@/components/ui/Stars'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const quickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones[0], qty: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-cream overflow-hidden">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover second image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] ${product.name} worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            type="button"
            onClick={quickAdd}
            className="w-full bg-espresso/90 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-[0.2em] py-3 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag width={13} height={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-[0.14em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.short}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
