import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductCard({ product, onQuickAdd }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0], 1)
    onQuickAdd?.(product)
  }

  return (
    <Link ref={containerRef} to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <img
          alt={product.name}
          data-strk-img-id={`${product.images[0].imgId}-card`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          alt={product.name}
          data-strk-img-id={`${product.images[1].imgId}-card`}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-gold py-3 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-wider text-ink transition-colors group-hover:text-gold"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="mt-1 text-xs text-stone">
          {product.subtitle}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
