import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/context/CartContext"
import { toast } from "sonner"

export default function ProductCard({ product, eager = false }) {
  const cardRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    if (!cardRef.current) return
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [product.id])

  const primary = product.images?.[0]
  const secondary = product.images?.[1] || primary
  const colors = product.colors || []
  const showSecond = product.images?.length > 1

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { color: colors[0]?.value, quantity: 1 })
    toast.success(`${product.name} added to bag`)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      ref={cardRef}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-2">
        {primary && (
          <img
            alt={product.name}
            data-strk-img-id={`${product.id}-primary`}
            data-strk-img={primary.query}
            data-strk-img-ratio={primary.ratio || "3x4"}
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading={eager ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out-soft ${
              showSecond ? "group-hover:opacity-0" : ""
            }`}
          />
        )}
        {showSecond && (
          <img
            alt=""
            aria-hidden
            data-strk-img-id={`${product.id}-secondary`}
            data-strk-img={secondary.query}
            data-strk-img-ratio={secondary.ratio || "3x4"}
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out-soft group-hover:opacity-100"
          />
        )}

        {/* Quick add — appears on hover (desktop) */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 hidden md:block">
          <button
            type="button"
            onClick={handleAdd}
            className="pointer-events-auto w-full translate-y-2 bg-paper/95 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-ink opacity-0 shadow-sm transition-all duration-500 ease-out-soft group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink hover:text-paper"
          >
            Add to Bag
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p
            id={`${product.id}-name`}
            className="product-name text-ink"
          >
            {product.name}
          </p>
          <p
            id={`${product.id}-category`}
            className="mt-1 text-[10px] uppercase tracking-[0.28em] text-text-muted"
          >
            {product.category}
          </p>
        </div>
        <p className="text-sm font-medium text-ink">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Color dots */}
      {colors.length > 1 && (
        <div className="mt-3 flex items-center gap-1.5">
          {colors.map((c) => (
            <span
              key={c.value}
              aria-label={c.name}
              className={`inline-block h-2 w-2 rounded-full border border-ink/15 ${
                c.value === "gold" ? "bg-gold" : "bg-champagne"
              }`}
            />
          ))}
        </div>
      )}
    </Link>
  )
}
