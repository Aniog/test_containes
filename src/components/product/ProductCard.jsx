import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import StockImage from "@/components/ui/StockImage"
import StarRating from "@/components/ui/StarRating"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  if (!product) return null
  const primary = product.images?.[0]
  const secondary = product.images?.[1] || primary
  const defaultVariant = product.variants?.[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, defaultVariant, 1)
  }

  return (
    <Link
      to={`/shop/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="product-image-stack relative overflow-hidden bg-ivory-soft">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-ivory/95 px-2.5 py-1 text-[10px] tracking-[0.22em] uppercase text-espresso backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {primary && (
          <StockImage
            id={`card-${product.id}-1`}
            alt={product.name}
            query={primary.query}
            ratio={primary.ratioKey || "4x5"}
            width={800}
            containerClassName="aspect-[4/5] w-full"
            imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}

        {secondary && secondary !== primary && (
          <div className="product-image-secondary absolute inset-0 pointer-events-none">
            <StockImage
              id={`card-${product.id}-2`}
              alt={`${product.name} alternate view`}
              query={secondary.query}
              ratio={secondary.ratioKey || "4x5"}
              width={800}
              containerClassName="aspect-[4/5] w-full h-full"
              imgClassName="h-full w-full"
            />
          </div>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 z-10 inline-flex items-center justify-center gap-2 bg-espresso/95 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-espresso"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          <span>Add to Cart</span>
        </button>
      </div>

      <div className="mt-5 flex flex-col items-center text-center">
        <span className="eyebrow">{product.eyebrow}</span>
        <h3 className="product-name mt-2">{product.name}</h3>
        <div className="mt-2 flex items-center gap-3">
          <StarRating value={product.rating} count={product.reviewCount} size={12} />
        </div>
        <p className="mt-2 text-sm font-medium text-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}