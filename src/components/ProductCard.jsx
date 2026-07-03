import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { StockImage } from "./StockImage"
import { StarRating } from "./StarRating"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

export function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false)
  const { addToCart } = useCart()
  const firstTone = product.tone?.[0] || "Gold"
  const primaryImage = product.images[firstTone]?.[0]
  const secondaryImage = product.images[firstTone]?.[1]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, { tone: firstTone, quantity: 1 })
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn("group block", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-paper/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-ink">
            {product.badge}
          </span>
        )}

        <StockImage
          id={`product-${product.id}-primary`}
          query={`[product-${product.id}-name]`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {secondaryImage && (
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-400",
              hovered ? "opacity-100" : "opacity-0"
            )}
          >
            <StockImage
              id={`product-${product.id}-secondary`}
              query={`[product-${product.id}-name]`}
              ratio="4x5"
              width={600}
              alt={`${product.name} alternate view`}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex translate-y-full justify-center pb-4 transition-transform duration-300 group-hover:translate-y-0",
            hovered ? "translate-y-0" : ""
          )}
        >
          <Button
            size="sm"
            onClick={handleQuickAdd}
            className="bg-white text-ink shadow-lg hover:bg-ink hover:text-white"
          >
            <ShoppingBag size={14} className="mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm font-medium uppercase tracking-ultra text-ink"
        >
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} count={product.reviews} size={12} />
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-ink">${product.price}</p>
      </div>
    </Link>
  )
}
