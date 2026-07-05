import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import StrkImage from "@/components/ui/StrkImage"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [img1, img2] = product.images

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { tone: product.tones?.[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <StrkImage
          imgId={img1.imgId}
          query={`[${product.titleId}] [${product.descId}]`}
          ratio="4x5"
          width={700}
          alt={product.name}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Secondary image revealed on hover */}
        {img2 && (
          <StrkImage
            imgId={img2.imgId}
            query={`[${product.titleId}] [${product.descId}]`}
            ratio="4x5"
            width={700}
            alt={product.name}
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.18em] px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 text-cream backdrop-blur-sm py-3 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={14} /> Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-[0.14em] leading-snug"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm tracking-wide">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
