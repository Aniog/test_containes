import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../../strk-img-config.json"
import { Plus, Star } from "lucide-react"
import { useCart } from "../../lib/cart"
import { formatPrice, cn } from "../../lib/utils"

export default function ProductCard({ product, showQuickAdd = true }) {
  const { addItem } = useCart()
  const ref = useRef(null)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [product.id])

  const images = product.images || []
  const primary = images[0]
  const secondary = images[1]

  const onQuickAdd = (event) => {
    event.preventDefault()
    event.stopPropagation()
    addItem(product.id, product.tone || "gold", 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="group flex flex-col" ref={ref}>
      <Link
        to={`/product/${product.id}`}
        className="block relative luxury-tone overflow-hidden"
        style={{ aspectRatio: "4 / 5" }}
        onMouseEnter={() => secondary && setActiveImage(1)}
        onMouseLeave={() => setActiveImage(0)}
      >
        {primary && (
          <img
            alt={product.name}
            data-strk-img-id={primary.id}
            data-strk-img={primary.query}
            data-strk-img-ratio={primary.ratio}
            data-strk-img-width={primary.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-soft",
              secondary && activeImage === 1 ? "opacity-0" : "opacity-100"
            )}
          />
        )}
        {secondary && (
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={secondary.id}
            data-strk-img={secondary.query}
            data-strk-img-ratio={secondary.ratio}
            data-strk-img-width={secondary.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-soft",
              activeImage === 1 ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 bg-bone/95 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-ink">
            {product.badge}
          </span>
        )}
        {showQuickAdd && (
          <button
            type="button"
            onClick={onQuickAdd}
            className={cn(
              "absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-soft",
              added
                ? "bg-champagne text-ink"
                : "bg-bone/95 text-ink opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            )}
            aria-label={`Quick add ${product.name}`}
          >
            {added ? (
              <span className="text-[9px] font-medium uppercase tracking-[0.18em]">Added</span>
            ) : (
              <Plus className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        )}
      </Link>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-[12px] font-medium uppercase tracking-[0.22em] text-ink">
              {product.name}
            </h3>
            <p
              id={`${product.id}-subtitle`}
              className="mt-1 text-[12px] text-ink/55"
            >
              {product.subtitle}
            </p>
          </Link>
          <span className="mt-0.5 text-sm tabular-nums text-ink">
            {formatPrice(product.price)}
          </span>
        </div>
        {typeof product.rating === "number" && (
          <div className="mt-2 flex items-center gap-1 text-[11px] text-ink/55">
            <Star className="h-3 w-3 fill-champagne text-champagne" strokeWidth={0} />
            <span className="tabular-nums">{product.rating.toFixed(1)}</span>
            <span className="text-ink/40">· {product.reviews} reviews</span>
          </div>
        )}
      </div>
    </article>
  )
}
