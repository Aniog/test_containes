import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { ProductImage } from "./ProductImage"
import { StarRating } from "./StarRating"
import { Button } from "./Button"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

export function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={cn("group flex flex-col", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`} className="block">
          <ProductImage
            product={product}
            ratio="3x4"
            width={600}
            className="aspect-[3/4] w-full"
            variant={hovered ? "alt" : "primary"}
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
          <Button
            onClick={() => addItem(product, { tone: product.tone[0], quantity: 1 })}
            className="w-full gap-2 text-xs uppercase tracking-widest"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <StarRating rating={product.rating} count={product.reviewCount} />
        <Link to={`/products/${product.id}`}>
          <h3 className="product-name text-foreground transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">${product.price}</p>
      </div>
    </div>
  )
}
