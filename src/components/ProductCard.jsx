import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { getImgUrl } from "@/lib/imgConfig"


export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addItem(product, { tone: product.tones[0], quantity: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          src={getImgUrl(product.imgId)}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
            "group-hover:opacity-0"
          )}
        />
        {/* Secondary image (hover) */}
        <img
          src={getImgUrl(product.imgId2)}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
            "opacity-0 group-hover:opacity-100"
          )}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-editorial">
          <button
            onClick={handleQuickAdd}
            className={cn(
              "w-full text-xs uppercase tracking-widest2 py-3 transition-colors duration-300",
              added ? "bg-gold-deep text-cream" : "bg-cream/95 text-ink hover:bg-gold hover:text-cream"
            )}
          >
            {added ? "Added" : "Quick Add"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.subtitle}
        </p>
        <p className="text-xs text-stone mt-1">{product.subtitle}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={cn(
                  "w-3 h-3",
                  s <= Math.round(product.rating)
                    ? "fill-gold text-gold"
                    : "text-stone-light"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-stone-light">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-2">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
