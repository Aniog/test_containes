import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [adding, setAdding] = useState(false)

  const titleId = `pc-${product.id}-title`
  const descId = `pc-${product.id}-desc`

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    addItem(product, { tone: product.tone[0], quantity: 1 })
    setTimeout(() => setAdding(false), 800)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden bg-stone aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${titleId}] ${product.subType} worn detail`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-ultra text-espresso backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleAdd}
            disabled={adding}
            className="w-full bg-espresso/95 text-cream py-3 text-[11px] uppercase tracking-widest backdrop-blur-sm transition-colors hover:bg-gold disabled:opacity-70"
          >
            {adding ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-ultra text-gold mb-1">
          {product.subType}
        </p>
        <h3
          id={titleId}
          className="font-serif text-lg leading-tight text-espresso uppercase tracking-widest"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-espresso/50">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-espresso/80 tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
