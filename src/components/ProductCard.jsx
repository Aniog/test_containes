import { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { StrkImage, PLACEHOLDER } from "@/components/ui/StrkImage"

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const nameId = `pc-${product.id}-name`
  const descId = `pc-${product.id}-desc`

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone || "gold", quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream-200 aspect-[4/5]">
        {/* Primary image */}
        <StrkImage
          imgId={`${product.images[0].id}-card`}
          query={`[${descId}] [${nameId}]`}
          ratio="4x5"
          width={600}
          alt={product.images[0].alt}
          src={PLACEHOLDER}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            hovered && product.images[1] ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Secondary image on hover */}
        {product.images[1] && (
          <StrkImage
            imgId={`${product.images[1].id}-card`}
            query={`[${descId}] [${nameId}] worn on model`}
            ratio="4x5"
            width={600}
            alt={product.images[1].alt}
            src={PLACEHOLDER}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream-50/90 backdrop-blur-sm text-ink-900 text-[10px] uppercase tracking-widest2 font-medium px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 transition-all duration-300",
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink-900/90 backdrop-blur-sm text-cream-50 text-xs uppercase tracking-widest2 font-medium py-3.5 hover:bg-gold-500 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
          <span className="text-xs text-ink-500">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <h3
          id={nameId}
          className="font-serif text-base md:text-lg text-ink-900 uppercase tracking-widest2 leading-snug"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.shortDesc}
        </p>
        <p className="text-sm text-ink-600 mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
