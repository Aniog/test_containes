import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCartActions } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductCard({ product, eager = false, compact = false }) {
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])

  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCartActions()
  const [added, setAdded] = useState(false)

  const onQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0].id, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const main = product.images[0]
  const hover = product.images[1] || product.images[0]

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setActiveImage(1)}
      onMouseLeave={() => setActiveImage(0)}
      onFocus={() => setActiveImage(1)}
      onBlur={() => setActiveImage(0)}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-bone-soft",
          compact ? "aspect-[4/5]" : "aspect-[1/1]"
        )}
      >
        <img
          alt={product.name}
          data-strk-img-id={main.id}
          data-strk-img={`[prod-${product.id}-title] [${product.id}-title] [home-bestsellers-title]`}
          data-strk-img-ratio={main.ratio}
          data-strk-img-width={eager ? "800" : "600"}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading={eager ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft",
            activeImage === 0 ? "opacity-100" : "opacity-0"
          )}
        />
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={hover.id}
          data-strk-img={`[prod-${product.id}-desc] [prod-${product.id}-title] [home-bestsellers-title]`}
          data-strk-img-ratio={hover.ratio}
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading="lazy"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-soft",
            activeImage === 1 ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Bestseller tag */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-bone/95 text-ink text-[9px] tracking-widest3 uppercase">
            Bestseller
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 px-3 pb-3">
          <button
            type="button"
            onClick={onQuickAdd}
            className={cn(
              "w-full inline-flex items-center justify-center gap-2",
              "px-4 py-3 text-[10px] tracking-widest2 uppercase font-medium",
              "transition-all duration-400 ease-out-soft",
              "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
              added
                ? "bg-ink text-bone"
                : "bg-bone/95 text-ink hover:bg-ink hover:text-bone"
            )}
            aria-label={`Quick add ${product.name} to bag`}
          >
            {added ? (
              "Added to Bag"
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      <div className="pt-4 md:pt-5 pb-1 text-center">
        <h3
          id={`prod-${product.id}-title`}
          className="text-[11px] md:text-[12px] tracking-widest2 uppercase text-ink font-medium"
        >
          {product.name}
        </h3>
        <p className="mt-1.5 text-[13px] text-muted">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
