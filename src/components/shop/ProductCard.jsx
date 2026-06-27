import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"
import { ProductImage } from "@/components/ui/ProductImage"
import { StarRating } from "@/components/ui/StarRating"

export function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <article
      className={cn("group relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <ProductImage
            product={product}
            ratio="4x5"
            width={600}
            query={`[${product.id}-title]`}
            className={cn(
              "h-full w-full object-cover transition-transform duration-700 ease-out",
              isHovered && "scale-105"
            )}
          />
          {product.badge && (
            <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-charcoal backdrop-blur-sm">
              {product.badge}
            </span>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              addItem(product, 1, product.toneOptions[0])
            }}
            className={cn(
              "absolute bottom-0 left-0 right-0 flex h-12 translate-y-full items-center justify-center gap-2 bg-charcoal text-ivory text-xs font-medium uppercase tracking-widest transition-transform duration-300",
              isHovered && "translate-y-0"
            )}
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <StarRating rating={product.rating} size={12} className="mb-2 justify-center" />
        <h3
          id={`${product.id}-title`}
          className="font-serif text-sm uppercase tracking-[0.18em] text-charcoal"
        >
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-warm-gray">${product.price}</p>
      </div>
    </article>
  )
}
