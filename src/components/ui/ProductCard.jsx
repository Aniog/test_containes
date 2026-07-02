import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatPrice } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { StarRating } from "./StarRating"

export function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1, product.tone?.[0] || "gold")
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn("group block", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out",
            hovered && "scale-105"
          )}
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              hovered ? "opacity-100" : "opacity-0"
            )}
            loading="lazy"
          />
        )}
        <button
          onClick={handleAdd}
          className={cn(
            "absolute bottom-4 left-4 right-4 py-3 px-4 flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase transition-all duration-300",
            added
              ? "bg-velmora-gold text-velmora-charcoal"
              : "bg-velmora-cream/95 text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-cream",
            hovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" /> Added
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" /> Add to Cart
            </>
          )}
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-base uppercase tracking-widest text-velmora-espresso">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-velmora-mocha">
            {formatPrice(product.price)}
          </span>
          <StarRating rating={product.rating} count={product.reviews} size={12} />
        </div>
      </div>
    </Link>
  )
}
