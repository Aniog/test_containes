import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i <= Math.round(rating)
              ? "fill-champagne text-champagne"
              : "text-ink/20"
          }`}
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="aspect-[4/5] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary (hover) image */}
        <img
          alt=""
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] ${product.name} worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 py-3 text-xs uppercase tracking-[0.18em] text-cream backdrop-blur-sm transition-colors duration-300 hover:bg-champagne hover:text-ink"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] uppercase tracking-[0.18em] text-taupe">
            {product.subcategory}
          </p>
          <Stars rating={product.rating} />
        </div>
        <h3
          id={product.titleId}
          className="mt-1.5 font-serif text-lg uppercase tracking-[0.12em] text-ink transition-colors duration-300 group-hover:text-champagne-deep"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <p className="mt-1 text-sm font-medium text-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
