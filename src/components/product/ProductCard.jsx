import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { Stars } from "@/components/ui/Stars"
import { strkImgSrc } from "@/lib/images"
import { formatPrice, cn } from "@/lib/utils"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()

  const quickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { quantity: 1, tone: product.tone })
  }

  const primarySrc = strkImgSrc(product.imgId, 600)
  const secondarySrc = strkImgSrc(product.imgId2, 600)

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3x4]">
        {/* Primary image */}
        <img
          alt={product.name}
          src={primarySrc}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={product.name}
          src={secondarySrc}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform duration-700"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 text-ink text-[10px] uppercase tracking-widest3 px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button
            onClick={quickAdd}
            className="w-full bg-ink/90 text-ivory text-[11px] uppercase tracking-widest3 font-medium py-3 hover:bg-gold hover:text-ink transition-colors duration-300 backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg text-ink uppercase tracking-wider leading-snug"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <Stars rating={product.rating} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-1.5">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
