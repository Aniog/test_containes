import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, resolveImgUrl } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import { PLACEHOLDER } from "@/context/CartContext"

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
    addItem(product, product.material, 1)
  }

  return (
    <Link
      ref={ref}
      to={`/products/${product.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden bg-cream-100 aspect-[4x5]">
        <img
          alt={product.name}
          src={resolveImgUrl(product.imgId) || PLACEHOLDER}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            "md:group-hover:opacity-0",
          )}
        />
        <img
          alt={product.name}
          src={resolveImgUrl(product.imgId2) || PLACEHOLDER}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            "opacity-0 md:group-hover:opacity-100",
          )}
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 text-espresso text-[10px] uppercase tracking-widest2 px-3 py-1.5">
            {product.badge}
          </span>
        )}

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 p-4 transition-all duration-500",
            "md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-espresso/95 text-cream text-[11px] uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-espresso transition-colors"
          >
            <ShoppingBag width={14} height={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg text-espresso uppercase tracking-widest2 leading-snug"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-espresso-700 tracking-wide">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
