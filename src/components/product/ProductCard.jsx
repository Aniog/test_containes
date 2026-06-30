import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { StrkImage } from "@/components/Image"
import { cn } from "@/lib/utils"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={cn("group flex flex-col", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative aspect-[3/4] bg-surface-highlight overflow-hidden"
      >
        <StrkImage
          id={`card-main-${product.id}`}
          query={`[product-name-${product.id}]`}
          ratio="3x4"
          width="600"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-0" : "opacity-100"
          )}
        />
        <StrkImage
          id={`card-hover-${product.id}`}
          query={`[product-name-${product.id}]`}
          ratio="3x4"
          width="600"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500",
            "md:translate-y-0 md:opacity-0 md:group-hover:opacity-100"
          )}
        >
          <Button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, "Gold", 1)
            }}
            className="w-full bg-cream text-ink hover:bg-champagne hover:text-ink uppercase tracking-widest text-[10px] h-10"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </Link>

      <div className="pt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`product-name-${product.id}`}
            className="font-serif text-sm uppercase tracking-[0.18em] text-cream hover:text-champagne transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-cream-muted">${product.price}</p>
      </div>
    </article>
  )
}
