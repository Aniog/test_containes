import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from '@/components/ui/StarRating'
import { PLACEHOLDER_SVG } from '@/components/ui/ProductImage'
import { cn } from '@/lib/utils'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
    >
      <div className="relative overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER_SVG}
          alt={product.name}
          loading="lazy"
          className="w-full aspect-[4/5] object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <img
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] ${product.name} worn styled`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER_SVG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add button */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute left-1/2 bottom-4 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-ink/90 text-cream text-[11px] tracking-[0.18em] uppercase px-5 py-3 flex items-center gap-2 hover:bg-champagne"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg md:text-xl uppercase tracking-[0.14em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-stone tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
