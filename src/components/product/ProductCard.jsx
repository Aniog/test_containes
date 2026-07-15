import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import Stars from "@/components/ui/Stars"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
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
          className="aspect-[4/5] w-full object-cover transition-opacity duration-700 ease-luxury group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] ${product.subtitle} worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-700 ease-luxury group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 ease-luxury group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 py-3 text-[11px] uppercase tracking-widest2 text-cream backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <Plus className="h-3.5 w-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.14em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="mt-1 text-xs text-stone">
          {product.subtitle}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
