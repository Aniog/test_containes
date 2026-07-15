import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import StrkImage from "@/components/ui/StrkImage"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

/**
 * ProductCard
 * - First image is shown by default; on hover (or tap on mobile) the
 *   second image cross-fades in.
 * - A small "Add to Cart" affordance slides in from the bottom on hover.
 */
export default function ProductCard({ product, eager = false, className }) {
  const { addItem } = useCart()
  const [hover, setHover] = useState(false)
  const ref = useRef(null)

  // Re-scan the card subtree in case its inner img tags are re-mounted.
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [hover])

  const firstImageId = `${product.id}-img-1-${eager ? "eager" : "lazy"}`
  const secondImageId = `${product.id}-img-2-${eager ? "eager" : "lazy"}`
  const altText = `${product.name} — Velmora Fine Jewelry`

  return (
    <article
      ref={ref}
      className={cn("group relative flex flex-col", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden"
        aria-label={`View ${product.name}`}
      >
        <div className="relative">
          <StrkImage
            id={firstImageId}
            query={`[${product.descId}] [${product.titleId}] editorial gold jewelry on dark background`}
            ratio="4x5"
            width={900}
            eager={eager}
            alt={altText}
            fallback="bg-hairline/60"
          />
          {/* Second image — overlaid, fades in on hover */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-editorial",
              hover ? "opacity-100" : "opacity-0",
            )}
          >
            <StrkImage
              id={secondImageId}
              query={`[${product.titleId}] [${product.descId}] model wearing gold ${product.name}`}
              ratio="4x5"
              width={900}
              alt={`${product.name} alternate view`}
              fallback="bg-hairline/60"
            />
          </div>

          {product.badge && (
            <span className="absolute left-3 top-3 z-10 inline-flex items-center bg-canvas/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink">
              {product.badge}
            </span>
          )}

          {product.compareAt && (
            <span className="absolute right-3 top-3 z-10 inline-flex items-center bg-ink/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-onNight">
              Save {formatPrice(product.compareAt - product.price)}
            </span>
          )}
        </div>
      </Link>

      {/* Quick add — slides up on hover (desktop) */}
      <button
        type="button"
        onClick={() => addItem(product, product.tones?.[0] || "gold")}
        className={cn(
          "pointer-events-auto absolute left-3 right-3 z-10 inline-flex items-center justify-center gap-2 bg-ink/95 text-onNight text-[11px] font-semibold uppercase tracking-[0.22em] py-3 transition-all duration-500 ease-editorial md:left-5 md:right-5",
          "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
          "bottom-[120px] md:bottom-[126px]",
        )}
        aria-label={`Add ${product.name} to bag`}
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
        Quick add
      </button>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            id={product.titleId}
            className="product-name truncate text-ink"
          >
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <p
            id={product.descId}
            className="mt-1 truncate text-[12px] font-light text-inkSoft"
          >
            {categoryLabel(product.category)}
          </p>
        </div>
        <p className="whitespace-nowrap text-sm font-medium text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}

function categoryLabel(id) {
  switch (id) {
    case "earrings":
      return "Earring"
    case "necklaces":
      return "Necklace"
    case "huggies":
      return "Huggie"
    case "sets":
      return "Gift Set"
    default:
      return id
  }
}
