import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones?.[0] })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <img
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] ${product.name} worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        />
        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-velmora-ink/90 py-3 text-[10px] uppercase tracking-[0.2em] text-velmora-cream backdrop-blur-sm transition-colors hover:bg-velmora-gold"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-sans text-[11px] uppercase tracking-[0.18em] text-velmora-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.tagline}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={11} />
          <span className="text-[10px] text-velmora-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg text-velmora-gold">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
