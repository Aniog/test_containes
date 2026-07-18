import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

export default function ProductCard({ product, titleId, descId }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone[0], quantity: 1 })
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Secondary image (hover) */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`[${descId}] ${product.subtitle} worn model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-ivory/90 text-ink text-[10px] uppercase tracking-widest2 font-medium px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-espresso/95 text-ivory text-[11px] uppercase tracking-widest2 font-medium py-3 hover:bg-gold transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-base md:text-lg text-ink uppercase tracking-product leading-snug"
        >
          {product.name}
        </h3>
        <p id={descId} className="text-xs text-taupe mt-1">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="text-sm text-gold font-medium mt-2">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
