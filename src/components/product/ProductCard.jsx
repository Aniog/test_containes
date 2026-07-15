import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Check } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useEffect, useRef } from "react"

export default function ProductCard({ product, eager = false, onAddRef }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const cardRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, product.variants?.[0]?.id || "gold", 1)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col"
    >
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-taupe-100 aspect-[4/5]"
        aria-label={product.name}
      >
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-editorial",
            hovered ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100",
          )}
        />
        {/* Hover image */}
        {product.imgId2 && (
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            aria-hidden
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-editorial",
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]",
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-cream/90 text-espresso text-[10px] uppercase tracking-wider-3 font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-500 ease-editorial",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
          )}
        >
          <button
            onClick={handleAdd}
            className={cn(
              "w-full inline-flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-wider-3 font-medium transition-all duration-300",
              added
                ? "bg-espresso text-cream"
                : "bg-cream/95 text-espresso hover:bg-gold-500 hover:text-cream",
            )}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" strokeWidth={1.6} /> Added
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" strokeWidth={1.6} /> Quick Add
              </>
            )}
          </button>
        </div>
      </Link>

      <div className="pt-4 sm:pt-5 flex flex-col">
        <p className="product-name text-[12px] sm:text-[13px] text-espresso">
          {product.name}
        </p>
        <div className="mt-1.5 flex items-center gap-3">
          <span className="font-serif text-[16px] sm:text-[18px] text-espresso">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[13px] text-mocha-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
