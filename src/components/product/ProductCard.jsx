import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand/30 aspect-[4/5]">
        {/* Primary image */}
        <img
          src={PLACEHOLDER}
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          src={PLACEHOLDER}
          alt={product.name}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 backdrop-blur-sm text-cream py-3 text-[11px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-gold-deep transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone mb-1.5">
          {product.type}
        </p>
        <h3
          id={product.titleId}
          className="font-serif text-lg text-ink uppercase tracking-[0.12em] leading-tight"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.round(product.rating)
                    ? "fill-gold text-gold"
                    : "text-sand"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink tracking-wide">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
