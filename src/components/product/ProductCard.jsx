import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"


export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { quantity: 1, tone: "Gold" })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          alt={product.name}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 px-5 py-4 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full border border-gold-light/60 py-3 font-sans text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold hover:border-gold"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-wide2 text-ink"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="mt-1 font-sans text-xs text-stone"
        >
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="font-sans text-[11px] text-stone">
            ({product.reviews})
          </span>
        </div>
        <p className="mt-2 font-serif text-base text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
