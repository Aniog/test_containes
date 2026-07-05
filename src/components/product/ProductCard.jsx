import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import StockImage from "@/components/ui/StockImage"

export default function ProductCard({ product, className = "", priority = false }) {
  const { addToCart } = useCart()
  const [hover, setHover] = useState(false)

  const onQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product.id, product.defaultVariant, 1)
  }

  return (
    <article
      className={cn("group relative", className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block focus:outline-none"
        aria-label={`View ${product.name}`}
      >
        <div className="relative overflow-hidden bg-bone-2">
          <StockImage
            imgId={`${product.imgId}-card`}
            query={`[${product.descId}] [${product.nameId}]`}
            ratio="3x4"
            width={800}
            alt={product.name}
            className="w-full transition-opacity duration-500"
            imgClassName={cn(
              "transition-opacity duration-500",
              hover ? "opacity-0" : "opacity-100"
            )}
            priority={priority}
          />
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500 pointer-events-none",
              hover ? "opacity-100" : "opacity-0"
            )}
            aria-hidden="true"
          >
            <StockImage
              imgId={`${product.img2Id || product.imgId}-card-2`}
              query={`[${product.descId}] [${product.nameId}] editorial close-up`}
              ratio="3x4"
              width={800}
              alt=""
              className="w-full h-full"
            />
          </div>

          {/* Quick add */}
          <div
            className={cn(
              "absolute left-3 right-3 bottom-3 transition-all duration-300 ease-out",
              hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            )}
          >
            <button
              type="button"
              onClick={onQuickAdd}
              className="w-full h-10 bg-ink/95 text-bone text-[0.65rem] uppercase tracking-eyebrow font-medium inline-flex items-center justify-center gap-2 rounded-full hover:bg-ink transition-colors backdrop-blur-sm"
            >
              <Plus size={12} strokeWidth={1.6} /> Quick Add
            </button>
          </div>

          {product.bestseller && (
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-eyebrow text-ink/80 font-sans">
              <span className="border-b border-gold pb-0.5">Bestseller</span>
            </span>
          )}
        </div>

        <div className="pt-4 pb-2 px-1">
          <p className="text-[11px] uppercase tracking-eyebrow text-muted-2 font-sans">
            {product.materialLabel}
          </p>
          <h3
            id={product.nameId}
            className="product-name mt-1.5 leading-snug group-hover:text-ink-soft transition-colors"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">
            {product.desc}
          </p>
          <div className="mt-2.5 flex items-center justify-between">
            <span className="font-sans text-sm font-medium text-ink">
              {formatPrice(product.price)}
            </span>
            <StarRating value={product.rating} count={product.reviewCount} size={11} />
          </div>
        </div>
      </Link>
    </article>
  )
}
