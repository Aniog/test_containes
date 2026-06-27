import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const defaultMaterial = product.materials[0]

  return (
    <article
      className="group relative flex flex-col animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            alt={`${product.name} worn`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {product.badge && (
            <span className="absolute left-3 top-3 bg-ink/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      {/* Quick add to cart */}
      <button
        type="button"
        onClick={() => addItem(product, defaultMaterial, 1)}
        className="absolute left-3 right-3 top-[calc(75%-2.75rem)] z-10 flex translate-y-3 items-center justify-center gap-2 bg-ink/90 py-3 text-[11px] uppercase tracking-[0.2em] text-ivory opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-ink group-hover:translate-y-0 group-hover:opacity-100"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        Add to Cart
      </button>

      <div className="flex flex-col gap-1.5 pt-4">
        <div className="flex items-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.12em] text-ink"
        >
          <Link to={`/product/${product.id}`} className="hover:text-gold-deep transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="text-xs text-muted">
          {product.tagline}
        </p>
        <p className="pt-1 text-sm font-medium tracking-wide text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}
