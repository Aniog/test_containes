import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/data/products"
import { StarRating } from "@/components/ui/StarRating"

export function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const defaultTone = product.tone[0] || "gold"

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden bg-velmora-sand">
        <div className="aspect-[4/5] w-full bg-gradient-to-br from-velmora-sand to-velmora-stone/40" />
        {product.bestseller && (
          <span className="absolute left-3 top-3 bg-velmora-cream/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-velmora-charcoal">
            Bestseller
          </span>
        )}
        {showQuickAdd && (
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, defaultTone)
            }}
            className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-velmora-charcoal py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 group-hover:translate-y-0"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        )}
      </Link>

      <div className="mt-4 text-center">
        <StarRating rating={product.rating} count={product.reviewCount} className="justify-center" />
        <h3 className="mt-2 font-serif text-sm uppercase tracking-widest text-velmora-charcoal">
          <Link to={`/products/${product.id}`} className="hover:text-velmora-accent">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-velmora-taupe">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}
