import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group block"
      data-strk-img-scope
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-paper">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.id}-name] gold jewelry on warm cream background editorial still life`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          loading={eager ? "eager" : "lazy"}
          className="product-card-img absolute inset-0 h-full w-full object-cover img-placeholder"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {/* Alt (hover) image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${product.id}-name] gold jewelry worn by model warm light editorial close up`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          loading="lazy"
          className="product-card-img product-card-second absolute inset-0 h-full w-full object-cover img-placeholder"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 eyebrow-sm bg-cream/95 text-ink px-2.5 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add — appears on hover (desktop only) */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="hidden md:flex absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-ink/95 text-cream items-center justify-center gap-2 py-3 eyebrow"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Quick Add
        </button>
      </div>

      <div className="pt-5 pb-2 px-1 text-center">
        <h3
          id={`${product.id}-name`}
          className="font-serif text-ink uppercase tracking-wider2 text-[15px] md:text-[16px] font-medium"
        >
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-center gap-2.5">
          <StarRating value={product.rating} size={11} />
          <span className="text-[11px] text-muted-soft">({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-[14px] text-ink/80 tracking-wider">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
