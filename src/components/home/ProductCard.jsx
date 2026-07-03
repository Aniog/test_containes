import { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"
import StrkImage from "@/components/StrkImage"

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart()
  const [hovering, setHovering] = useState(false)
  const primary = product.images?.[0]
  const secondary = product.images?.[1]

  return (
    <article
      className="group"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-surface"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          {primary && (
            <StrkImage
              id={primary.id}
              query={primary.query}
              ratio="4x5"
              width={900}
              alt={primary.alt}
              eager={eager}
              imgClassName={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-soft",
                secondary && hovering ? "opacity-0" : "opacity-100",
              )}
            />
          )}
          {secondary && (
            <StrkImage
              id={secondary.id}
              query={secondary.query}
              ratio="4x5"
              width={900}
              alt={secondary.alt}
              imgClassName={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-soft",
                hovering ? "opacity-100" : "opacity-0",
              )}
            />
          )}

          {/* Quick add overlay (desktop) */}
          <div
            className={cn(
              "absolute inset-x-0 bottom-0 hidden md:flex justify-center p-3",
              "transition-all duration-500 ease-soft",
              hovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
            )}
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product.id, product.tone || "gold", 1)
              }}
              className="w-full bg-base/90 backdrop-blur text-ink-primary text-[12px] uppercase tracking-name font-medium py-3 hover:bg-accent hover:text-ink-onAccent transition-colors duration-300"
            >
              <span className="inline-flex items-center gap-2">
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                Add to Bag
              </span>
            </button>
          </div>

          {product.compareAt && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-base/80 backdrop-blur text-[10px] uppercase tracking-eyebrow text-accent">
              Set
            </div>
          )}
        </div>
      </Link>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link to={`/product/${product.id}`}>
            <h3 className="product-name text-ink-primary truncate group-hover:text-accent transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          <div className="mt-1.5 flex items-center gap-1.5 text-ink-muted text-[11px]">
            <Star className="h-3 w-3 fill-accent text-accent" />
            <span className="tabular-nums">{product.rating}</span>
            <span className="text-ink-muted/60">·</span>
            <span>{product.reviews} reviews</span>
          </div>
        </div>
        <div className="text-right text-sm flex-shrink-0">
          {product.compareAt ? (
            <div>
              <span className="text-ink-primary tabular-nums">
                {formatPrice(product.price)}
              </span>
              <span className="ml-2 text-ink-muted line-through text-xs tabular-nums">
                {formatPrice(product.compareAt)}
              </span>
            </div>
          ) : (
            <span className="text-ink-primary tabular-nums">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
