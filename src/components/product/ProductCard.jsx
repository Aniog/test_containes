import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { StarRating } from "@/components/ui/StarRating"
import { products } from "@/data/products"

// Static registry so the strk-img plugin can statically resolve card image IDs
// (it cannot trace runtime prop values). Rendered hidden.
const CARD_IMG_REGISTRY = products.map((p) => (
  <span key={`registry-${p.id}`} className="hidden" aria-hidden="true">
    <img
      alt={p.name}
      data-strk-img-id={p.cardImgId}
      data-strk-img={`[pcard-${p.id}-title] gold jewelry product`}
      data-strk-img-ratio="4x5"
      data-strk-img-width="600"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
    <img
      alt={`${p.name} worn`}
      data-strk-img-id={p.cardImgIdAlt}
      data-strk-img={`[pcard-${p.id}-title] gold jewelry worn on model`}
      data-strk-img-ratio="4x5"
      data-strk-img-width="600"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  </span>
))

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const titleId = `pcard-${product.id}-title`
  const descId = `pcard-${product.id}-desc`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      {CARD_IMG_REGISTRY}
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.cardImgId}
          data-strk-img={`[${descId}] [${titleId}] gold jewelry product`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary (hover) image */}
        <img
          alt={`${product.name} worn`}
          data-strk-img-id={product.cardImgIdAlt}
          data-strk-img={`[${titleId}] gold jewelry worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.18em] px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 text-cream text-xs uppercase tracking-[0.18em] py-3 hover:bg-gold hover:text-ink transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-base md:text-lg uppercase tracking-[0.15em] text-ink"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink font-medium">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
