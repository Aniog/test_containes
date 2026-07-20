import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StrkImage from "@/components/ui/StrkImage"
import StarRating from "@/components/ui/StarRating"

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const titleId = `pc-${product.id}-title`
  const descId = `pc-${product.id}-desc`

  const quickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        {/* Primary image */}
        <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
          <StrkImage
            imgId={`${product.images[0].id}-card`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x5"
            width={600}
            alt={product.images[0].alt}
          />
        </div>
        {/* Secondary image on hover */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <StrkImage
            imgId={`${product.images[1].id}-card`}
            query={`[${descId}] [${titleId}] worn`}
            ratio="4x5"
            width={600}
            alt={product.images[1].alt}
          />
        </div>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={quickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 py-3 text-xs uppercase tracking-[0.2em] text-ivory backdrop-blur-sm hover:bg-gold-deep transition-colors"
          >
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-base uppercase tracking-[0.18em] text-ink"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
