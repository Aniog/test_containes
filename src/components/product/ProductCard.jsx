import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import Stars from '@/components/ui/Stars'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const defaultTone = product.tones[0]

  return (
    <article className={className}>
      <div className="group relative overflow-hidden bg-cream-deep">
        <Link to={`/product/${product.id}`} className="block">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            className="aspect-[3/4] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            alt={product.name}
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add to cart */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product.id, defaultTone, 1)}
            className="flex w-full items-center justify-center gap-2 bg-ink/95 px-4 py-3.5 text-[11px] uppercase tracking-widest2 text-cream backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink"
          >
            <ShoppingBag width={14} height={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest2 text-stone">
          {product.category}
        </p>
        <h3
          id={product.titleId}
          className="mt-1.5 font-serif text-base uppercase tracking-widest3 text-ink md:text-lg"
        >
          <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="sr-only">
          {product.short}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg text-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
