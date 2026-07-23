import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarRating } from "./StarRating"
import { useCart } from "@/context/CartContext"
import { toast } from "sonner"

export function ProductCard({ product, hoverImage = true }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const titleId = product.titleId || `product-title-${product.id}`
  const descId = product.descId || `product-desc-${product.id}`

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1, product.tone || "gold")
    setAdded(true)
    toast.success(`${product.name} added to cart`)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-ivory">
        <div
          data-strk-bg-id={product.imgId}
          data-strk-bg={`[${descId}] [${titleId}]`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          role="img"
          aria-label={product.name}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        />
        {hoverImage && product.hoverImgId && (
          <div
            data-strk-bg-id={product.hoverImgId}
            data-strk-bg={`[${descId}] [${titleId}]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            role="img"
            aria-label={product.name}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center px-4 pb-5 transition-transform duration-500 group-hover:translate-y-0">
          <Button
            onClick={handleAdd}
            className="w-full bg-velmora-cream/95 text-velmora-charcoal backdrop-blur-sm hover:bg-velmora-cream"
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-sm uppercase tracking-[0.2em] text-velmora-charcoal"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-velmora-warm-gray">
            ({product.reviewCount})
          </span>
        </div>
        <p className="mt-2 font-medium text-velmora-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}
