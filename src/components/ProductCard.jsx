import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star } from "lucide-react"

export default function ProductCard({ product, showBadge = true }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-[#E8E0D8] overflow-hidden rounded-sm">
          {/* Placeholder image area - will be replaced with real images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-[#8A7E72] uppercase tracking-widest text-center px-4">
              {product.displayName}
            </span>
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-black/5 transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Badge */}
          {showBadge && product.badge && (
            <Badge className="absolute top-3 left-3 bg-[#C9A96E] text-white text-[10px] uppercase tracking-wider">
              {product.badge}
            </Badge>
          )}

          {/* Quick add */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <Button
              onClick={(e) => {
                e.preventDefault()
                addItem(product, 1, "gold")
              }}
              className="w-full bg-[#1C1C1C] hover:bg-[#2a2a2a] text-white text-[10px] uppercase tracking-widest h-10"
            >
              <ShoppingBag className="w-3.5 h-3.5 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
      </Link>

      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
          <span className="text-[11px] text-[#8A7E72]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <h3 className="font-serif text-sm uppercase tracking-[0.12em] text-[#1C1C1C]">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-[#1C1C1C]">${product.price}</p>
      </div>
    </div>
  )
}
