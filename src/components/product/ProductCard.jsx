import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: "Gold", quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group block bg-white",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary (hover) image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId2}] [${product.titleId}] worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-espresso">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-espresso/95 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ivory backdrop-blur transition-colors hover:bg-gold"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="px-1 pt-4">
        <div className="flex items-center justify-between gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <h3
          id={product.titleId}
          className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-espresso"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.tagline}
        </p>
        <p id={product.descId2} className="sr-only">
          {product.description}
        </p>
        <p className="mt-1 font-serif text-lg text-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
