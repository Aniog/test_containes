import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Star } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { cn, formatPrice } from "@/lib/utils"

export default function ProductCard({ product, eager = false }) {
  const [hovered, setHovered] = useState(false)
  const { addItem, openCart } = useCart()
  const gallery = product.gallery?.length ? product.gallery : []
  const primary = gallery[0]
  const secondary = gallery[1] || gallery[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone, quantity: 1 })
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-ink aspect-[4/5]">
        {/* Primary image */}
        {primary && (
          <img
            src={primary}
            alt={product.name}
            loading={eager ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-elegant",
              hovered && secondary ? "opacity-0" : "opacity-100"
            )}
          />
        )}
        {/* Secondary image on hover — only mounted when hovered so it can never intercept clicks */}
        {hovered && secondary && (
          <img
            src={secondary}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-cream/95 text-ink text-[9px] uppercase tracking-[0.2em] font-sans z-10">
            {product.badge}
          </span>
        )}

        {/* Quick add button — slides up on hover */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 z-20 transition-all duration-500 ease-elegant",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 backdrop-blur text-ink text-[10px] uppercase tracking-[0.25em] py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-ink transition-colors"
            aria-label={`Quick add ${product.name} to bag`}
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-4 space-y-1.5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="product-name text-[11px] md:text-xs text-ink truncate">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-ink whitespace-nowrap">
            {formatPrice(product.price)}
          </p>
        </div>
        <p className="text-xs text-muted-light font-light truncate">{product.tagline}</p>
        <div className="flex items-center gap-1.5 pt-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.round(product.rating) ? "fill-gold text-gold" : "text-ink/20"
                )}
                strokeWidth={1.2}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted-light">({product.reviews})</span>
        </div>
      </div>
    </Link>
  )
}
