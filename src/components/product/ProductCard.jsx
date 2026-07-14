import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context.jsx"
import { formatPrice, cn } from "@/lib/utils.js"
import ProductImage from "./ProductImage.jsx"

export default function ProductCard({ product, eager = false }) {
  const { addItem, openCart } = useCart()
  const [hovering, setHovering] = useState(false)
  const [added, setAdded] = useState(false)

  if (!product) return null

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({ id: product.id, tone: product.tone, qty: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link
        to={`/shop/${product.id}`}
        className="block focus:outline-none"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <ProductImage
            product={product}
            ratio="4x5"
            width={900}
            showSecond
            priority={eager ? "eager" : "default"}
            className="h-full w-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
          />

          {/* Bestseller tag */}
          {product.bestseller && (
            <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 font-sans text-[10px] uppercase tracking-[0.22em] text-espresso">
              Bestseller
            </span>
          )}

          {/* Quick add — appears on hover (desktop) or always (mobile) */}
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              "absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 bg-ivory/95 backdrop-blur-sm py-3 font-sans text-[11px] uppercase tracking-[0.22em] text-espresso transition-all duration-500 ease-editorial",
              "md:opacity-0 md:translate-y-2",
              (hovering || added) && "md:opacity-100 md:translate-y-0",
              "hover:bg-espresso hover:text-ivory"
            )}
            aria-label={`Add ${product.name} to bag`}
          >
            <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
            {added ? "Added" : "Quick Add"}
          </button>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="product-name truncate text-[13px] text-espresso">
              {product.name}
            </h3>
            <p className="mt-1 truncate text-xs text-taupe">{product.short}</p>
          </div>
          <p className="font-sans text-sm text-espresso whitespace-nowrap">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  )
}
