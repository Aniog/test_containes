import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Stars } from "./Stars"
import { ProductImage } from "./ProductImage"
import { useCart } from "@/context/CartContext"

export function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <article
      className={cn("group flex flex-col", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/products/${product.id}`}
        className="relative aspect-[4/5] overflow-hidden bg-velmora-sand"
      >
        <ProductImage
          product={product}
          aspect="4x5"
          width={600}
          className="h-full w-full"
          query={`[product-${product.id}-desc] [product-${product.id}-name] gold jewelry`}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex translate-y-full justify-center pb-4 transition-transform duration-300 group-hover:translate-y-0",
            isHovered && "translate-y-0"
          )}
        >
          <Button
            type="button"
            size="sm"
            variant="accent"
            className="uppercase tracking-label shadow-lg"
            onClick={(e) => {
              e.preventDefault()
              addToCart(product, product.variants[0], 1)
            }}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </Link>
      <div className="pt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-base uppercase tracking-label text-velmora-espresso transition-colors hover:text-velmora-gold">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center justify-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-velmora-taupe">({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-velmora-mocha">
          ${product.price}
        </p>
      </div>
    </article>
  )
}
