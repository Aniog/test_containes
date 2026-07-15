import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [primary, secondary] = product.images

  return (
    <div className="group relative flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-deep">
          <img
            alt={product.name}
            data-strk-img-id={primary.imgId}
            data-strk-img={`[${primary.descId}] [${primary.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          {secondary && (
            <img
              alt={`${product.name} alternate view`}
              data-strk-img-id={secondary.imgId}
              data-strk-img={`[${secondary.descId}] [${secondary.titleId}] worn on model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}

          {product.badge && (
            <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-charcoal">
              {product.badge}
            </span>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-ink/90 py-3 text-[11px] uppercase tracking-widest2 text-cream transition-transform duration-300 group-hover:translate-y-0 hover:bg-ink"
          >
            <ShoppingBag size={14} /> Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 flex flex-col">
        <h3
          id={primary.titleId}
          className="text-sm uppercase tracking-widest2 text-charcoal"
        >
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={primary.descId} className="sr-only">
          {product.tagline}
        </p>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-sm text-stone">{formatPrice(product.price)}</span>
          <StarRating rating={product.rating} size={12} />
        </div>
      </div>
    </div>
  )
}
