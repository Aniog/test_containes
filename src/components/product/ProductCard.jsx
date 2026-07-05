import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const primary = product.images[0]
  const secondary = product.images[1] || product.images[0]

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.tone || "gold", 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-espresso-50">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={primary.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={secondary.imgId + "-alt"}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-cream/95 px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleAdd}
            className="flex w-full items-center justify-center gap-2 border border-espresso-800 py-2.5 text-xs uppercase tracking-widest text-espresso-800 transition-colors hover:bg-espresso-800 hover:text-cream"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-sans text-[11px] uppercase tracking-ultra text-espresso-800"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={11} />
          <span className="text-[10px] text-espresso-400">({product.reviews})</span>
        </div>
        <p className="mt-1.5 font-serif text-lg text-espresso-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
