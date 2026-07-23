import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StockImage from "@/components/ui/StockImage"

// Variants:
// - "default"   : editorial card, name + price
// - "editorial" : bigger, used on homepage
// - "compact"   : used in related products row
export default function ProductCard({
  product,
  variant = "default",
  className = "",
}) {
  const { addItem } = useCart()
  const ratio = variant === "editorial" ? "3x4" : "3x4"
  const cardWidth = variant === "compact" ? 600 : 800
  const firstVariant = product.variants[0]

  const onQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product.id, firstVariant.id, 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group block card-hover",
        className
      )}
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-umber",
          variant === "editorial" ? "aspect-[3/4]" : "aspect-[3/4]"
        )}
      >
        <StockImage
          imgId={`${product.id}-${variant}-1`}
          query={`[product-${product.id}-name]`}
          alt={product.name}
          ratio={ratio}
          width={cardWidth}
          className="absolute inset-0 card-hover-img-1"
          imgClassName="w-full h-full object-cover"
        />
        <StockImage
          imgId={`${product.id}-${variant}-2`}
          query={`[product-${product.id}-name] alternate view`}
          alt={`${product.name} alternate view`}
          ratio={ratio}
          width={cardWidth}
          className="absolute inset-0 card-hover-img-2"
          imgClassName="w-full h-full object-cover"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-widest2 uppercase bg-ink/85 text-bone border border-bone/10">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className="absolute bottom-3 left-3 right-3 h-10 bg-ink/90 text-bone border border-bone/10 text-[11px] tracking-widest2 uppercase flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-ink"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Quick add
        </button>
      </div>

      <div className="pt-4 flex items-start justify-between gap-3">
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-[14px] md:text-[15px] tracking-widest2 uppercase text-bone"
        >
          {product.name}
        </h3>
        <p className="font-serif text-[14px] md:text-[15px] text-bone/85 whitespace-nowrap">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
