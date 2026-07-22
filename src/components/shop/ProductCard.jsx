import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Check } from "lucide-react"
import { formatPrice, cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <article className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="product-card-img relative">
          {product.badge && (
            <span
              className={cn(
                "absolute top-3 left-3 z-10 text-[10px] uppercase tracking-widest2 px-2.5 py-1",
                product.badge === "Bestseller"
                  ? "bg-espresso-800 text-cream-50"
                  : product.badge === "Gift"
                  ? "bg-gold-300 text-espresso-800"
                  : "bg-cream-50 text-espresso-800"
              )}
            >
              {product.badge}
            </span>
          )}

          <img
            data-strk-img-id={product.imgId}
            data-strk-img={product.imageQuery}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            alt={product.name}
            loading={priority ? "eager" : "lazy"}
            className="primary absolute inset-0 h-full w-full object-cover"
          />
          <img
            data-strk-img-id={product.altImgId}
            data-strk-img={product.imageQuery}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="secondary absolute inset-0 h-full w-full object-cover opacity-0"
          />

          {/* Quick add — desktop hover, mobile always visible */}
          <div className="absolute inset-x-3 bottom-3 z-10 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
            <button
              type="button"
              onClick={handleQuickAdd}
              className={cn(
                "w-full inline-flex items-center justify-center gap-2 py-3 text-[11px] uppercase tracking-widest2 backdrop-blur-sm transition-colors",
                added
                  ? "bg-espresso-800 text-cream-50"
                  : "bg-cream-50/95 text-espresso-800 hover:bg-espresso-800 hover:text-cream-50"
              )}
            >
              {added ? (
                <>
                  <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Added
                </>
              ) : (
                <>
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Quick Add
                </>
              )}
            </button>
          </div>
        </div>

        <div className="pt-4 pb-2">
          <h3 className="product-name text-[12px] md:text-[13px] text-espresso-800">
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-baseline justify-between">
            <p className="text-sm text-ink-muted font-sans">
              {formatPrice(product.price)}
            </p>
            <p className="text-[11px] text-ink-muted/70">
              {product.rating} ★ ({product.reviews})
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}
