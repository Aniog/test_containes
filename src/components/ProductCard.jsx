import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/StarRating"
import { PLACEHOLDER } from "@/components/ImageLoader"

export default function ProductCard({ product }) {
  const { add } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    add(product, { tone: "Gold", qty: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[pc-${product.id}-name] [pc-${product.id}-desc]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[pc-${product.id}-name] [pc-${product.id}-desc] worn`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 text-cream py-3 text-[11px] uppercase tracking-widest2 hover:bg-ink"
          >
            <ShoppingBag size={14} /> Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={`pc-${product.id}-name`}
          className="font-serif text-lg uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p
          id={`pc-${product.id}-desc`}
          className="mt-1 text-xs text-stone line-clamp-1 px-2"
        >
          {product.shortDesc}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating value={product.rating} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-lg text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
