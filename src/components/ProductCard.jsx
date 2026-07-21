import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Check } from "lucide-react"
import StockImage from "@/components/StockImage"
import Rating from "@/components/Rating"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

export default function ProductCard({ product, eager = false, compact = false }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, "gold", 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name} — ${formatPrice(product.price)}`}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-ivory-200",
          compact ? "aspect-[4/5]" : "aspect-[4/5]"
        )}
      >
        {/* Primary image */}
        <StockImage
          id={`card-${product.id}-primary`}
          query={product.images[0].query}
          ratio={product.images[0].ratio}
          width={product.images[0].width}
          alt={product.images[0].alt}
          eager={eager}
          className="absolute inset-0"
          imgClassName="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Hover image */}
        <StockImage
          id={`card-${product.id}-hover`}
          query={product.images[1].query}
          ratio={product.images[1].ratio}
          width={product.images[1].width}
          alt={product.images[1].alt}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          imgClassName="w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="px-2.5 py-1 text-[10px] tracking-[0.22em] uppercase font-medium bg-ivory-100/95 text-espresso-800">
              New
            </span>
          )}
          {product.oldPrice && (
            <span className="px-2.5 py-1 text-[10px] tracking-[0.22em] uppercase font-medium bg-espresso-800/90 text-ivory">
              Set
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className={cn(
            "absolute left-3 right-3 bottom-3 z-10 flex items-center justify-center gap-2 h-10 text-[11px] tracking-[0.22em] uppercase font-medium",
            "bg-ivory-100/95 backdrop-blur-sm text-espresso-800 border border-transparent",
            "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
            "transition-all duration-500 ease-elegant",
            "hover:bg-espresso-800 hover:text-ivory-100",
            added && "bg-espresso-800 text-ivory-100 translate-y-0 opacity-100"
          )}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" strokeWidth={2} />
              Added
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
              Quick Add
            </>
          )}
        </button>
      </div>

      <div className="pt-4 pb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="product-name text-[0.72rem] truncate">{product.name}</h3>
          <p className="text-[11px] tracking-[0.12em] text-taupe-500 mt-1 italic font-serif">
            {product.subtitle}
          </p>
          <div className="mt-2">
            <Rating value={product.rating} count={product.reviewCount} size="xs" />
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-sm font-medium tabular-nums text-espresso-800">
            {formatPrice(product.price)}
          </p>
          {product.oldPrice && (
            <p className="text-xs text-taupe-400 line-through tabular-nums mt-0.5">
              {formatPrice(product.oldPrice)}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
