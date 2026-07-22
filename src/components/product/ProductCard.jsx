import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice, resolveImgUrl } from "@/lib/utils"

export default function ProductCard({ product, titleId, descId }) {
  const { addItem } = useCart()
  const tId = titleId || `pc-${product.id}-title`
  const dId = descId || `pc-${product.id}-desc`

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: "Gold", quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        <img
          alt={product.name}
          src={resolveImgUrl(product.imgId)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          alt={product.name}
          src={resolveImgUrl(product.imgIdAlt)}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-ivory/90 text-espresso text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-medium">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-espresso/95 text-ivory py-4 text-[11px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={tId}
          className="font-serif text-lg uppercase tracking-[0.14em] text-espresso"
        >
          {product.name}
        </h3>
        <p id={dId} className="mt-1 text-xs text-taupe">
          {product.tagline}
        </p>
        <div className="mt-2 flex items-center justify-center">
          <StarRating rating={product.rating} size={12} showValue count={product.reviews} />
        </div>
        <p className="mt-2 font-serif text-lg text-cocoa">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
