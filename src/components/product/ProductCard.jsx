import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { PLACEHOLDER } from "@/components/ui/StrkImage"

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const img = product.images[0]
  const img2 = product.images[1] || product.images[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tone, qty: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-cream">
        {/* Primary image */}
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          data-strk-img-id={img.imgId}
          data-strk-img={`[${img.descId}] [${img.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src={PLACEHOLDER}
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          data-strk-img-id={img2.imgId}
          data-strk-img={`[${img2.descId}] [${img2.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src={PLACEHOLDER}
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex w-full items-center justify-center gap-2 bg-espresso/95 px-4 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <h3
          id={img.titleId}
          className="mt-2 font-serif text-lg uppercase tracking-[0.12em] text-ink md:text-xl"
        >
          {product.name}
        </h3>
        <p id={img.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <p className="mt-1 font-sans text-sm text-taupe">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
