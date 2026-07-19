import { Link } from "react-router-dom"
import { Plus, Star } from "lucide-react"
import { useState } from "react"
import ProductImage from "@/components/product/ProductImage"
import { useCart } from "@/hooks/useCart"
import { formatPrice, cn } from "@/lib/utils"

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart()
  const [hover, setHover] = useState(false)
  const primary = product.imageQueries[0]
  const secondary = product.imageQueries[1] || primary

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-bone">
          {/* Primary image */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              hover ? "opacity-0" : "opacity-100",
            )}
          >
            <ProductImage
              query={primary}
              ratio="4x5"
              width={600}
              imgId={`${product.id}-primary`}
              alt={product.name}
            />
          </div>
          {/* Secondary image (revealed on hover) */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              hover ? "opacity-100" : "opacity-0",
            )}
          >
            <ProductImage
              query={secondary}
              ratio="4x5"
              width={600}
              imgId={`${product.id}-secondary`}
              alt={product.name}
            />
          </div>

          {product.badge && (
            <span className="absolute top-3 left-3 label-2 bg-cream/95 text-ink px-2.5 py-1.5">
              {product.badge}
            </span>
          )}

          {/* Quick add — appears on hover (desktop) / always-visible on touch */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              addItem({ id: product.id, name: product.name, price: product.price, imageQuery: primary }, "default", 1)
            }}
            className={cn(
              "absolute bottom-3 right-3 w-10 h-10 bg-ink text-cream flex items-center justify-center transition-all duration-300",
              "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
              "md:flex hidden",
            )}
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="pt-4 pb-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="product-name leading-tight">{product.name}</h3>
            <p className="text-sm text-ink tabular-nums whitespace-nowrap pt-0.5">
              {formatPrice(product.price)}
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-mist">
            <span className="inline-flex items-center gap-1">
              <Star
                className="w-3 h-3 text-champagne fill-champagne"
                aria-hidden="true"
              />
              <span className="tabular-nums text-ink">{product.rating}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
        </div>
      </Link>

      {/* Mobile quick-add (always visible, full-width subtle) */}
      <button
        type="button"
        onClick={() =>
          addItem({ id: product.id, name: product.name, price: product.price, imageQuery: primary }, "default", 1)
        }
        className="md:hidden w-full mt-1 py-2.5 text-[10px] label border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors"
      >
        Add to Bag
      </button>
    </article>
  )
}
