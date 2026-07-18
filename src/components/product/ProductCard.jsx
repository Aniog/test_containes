import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import StarRating from "@/components/ui/StarRating"
import { getProductById } from "@/data/products"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  const full = getProductById(product.id) || product

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      productId: full.id,
      name: full.name,
      price: full.price,
      tone: full.tones?.[0] || "Gold",
      qty: 1,
      imgId: full.imgId,
      titleId: full.titleId,
      descId: full.descId,
    })
  }

  return (
    <Link
      ref={containerRef}
      to={`/products/${full.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <img
          alt={full.name}
          data-strk-img-id={full.imgId}
          data-strk-img={`[${full.descId}] [${full.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          alt={full.name}
          data-strk-img-id={full.imgId2}
          data-strk-img={`[${full.descId}] [${full.titleId}] worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {full.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-espresso backdrop-blur-sm">
            {full.badge}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-espresso/95 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-colors hover:bg-ink"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={full.titleId}
          className="font-sans text-[11px] uppercase tracking-[0.18em] text-espresso"
        >
          {full.name}
        </h3>
        <p id={full.descId} className="sr-only">
          {full.shortDesc}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating value={full.rating} size={12} />
          <span className="text-[11px] text-taupe">({full.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg text-espresso">
          {formatPrice(full.price)}
        </p>
      </div>
    </Link>
  )
}
