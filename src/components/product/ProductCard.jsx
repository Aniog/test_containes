import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Stars from "@/components/ui/Stars"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
  }

  return (
    <Link
      ref={ref}
      to={`/products/${product.slug}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
        />
        {/* Secondary image revealed on hover */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] ${product.name} worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 text-cream py-3.5 text-[11px] uppercase tracking-widest2 hover:bg-ink"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="sr-only"
        >
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-sm text-champagne-deep tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
