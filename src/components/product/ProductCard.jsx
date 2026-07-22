import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

export default function ProductCard({ product }) {
  // NOTE: src must be an inline string literal (not a const) so the strk-img
  // build plugin can resolve the placeholder fallback and inline the real
  // image URL. A const identifier reference is not detected.
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones[0], quantity: 1 })
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="aspect-[3/4] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 aspect-[3/4] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/95 py-3 text-[11px] uppercase tracking-widest2 text-ivory backdrop-blur transition-colors hover:bg-gold hover:text-ink"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest2 text-stone">
          {product.type}
        </p>
        <h3
          id={product.titleId}
          className="mt-1 font-serif text-lg uppercase tracking-widest3 text-ink"
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
        <p className="mt-2 text-sm tracking-wide text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
