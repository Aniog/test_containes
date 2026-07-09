import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, resolveStrkImage } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export default function ProductCard({ product, className }) {
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, { tone: "gold", quantity: 1 })
  }

  return (
    <div className={cn("group block", className)}>
      <div className="relative overflow-hidden bg-sand/40 aspect-[4/5]">
        <Link to={`/product/${product.id}`} className="absolute inset-0" aria-label={product.name}>
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={resolveStrkImage(product.imgId) || TRANSPARENT_PIXEL}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
          />
          {/* Secondary image revealed on hover */}
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${product.descId}] worn styled ${product.name}`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={resolveStrkImage(product.imgIdAlt) || TRANSPARENT_PIXEL}
            className="absolute inset-0 h-full w-full object-cover opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 px-4 py-3 text-[11px] uppercase tracking-widest2 text-ivory backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-lg uppercase tracking-widest2 text-ink transition-colors hover:text-gold md:text-xl"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-taupe">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}
