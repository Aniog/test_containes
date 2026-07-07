import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { ProductImage } from "@/lib/imagery"
import { formatPrice, cn } from "@/lib/utils"
import { RatingStars } from "@/components/ui/RatingStars"

export function ProductCard({ product, eager = false }) {
  const { addToCart } = useCart()
  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product.id, 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative overflow-hidden bg-sand aspect-[3/4]">
        {/* Primary image */}
        <div className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0">
          <ProductImage id={product.image} name={product.name} className="w-full h-full" />
        </div>
        {/* Secondary image (variant=1) revealed on hover */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <ProductImage
            id={product.image}
            name={product.name}
            variant={1}
            className="w-full h-full"
          />
        </div>

        {/* Quick add chip */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute left-3 right-3 bottom-3 inline-flex items-center justify-center gap-2 bg-bone text-cocoa py-3
                     opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-500 ease-out hover:bg-cocoa hover:text-bone"
        >
          <Plus size={14} strokeWidth={1.5} />
          <span className="eyebrow">Add to Cart</span>
        </button>
      </div>

      <div className="pt-4 pb-2 flex flex-col gap-1.5">
        <RatingStars value={product.rating} count={product.reviews} />
        <h3 className={cn("product-name text-cocoa group-hover:text-gold-300 transition-colors duration-300")}>
          {product.name}
        </h3>
        <span className="font-serif text-lg text-cocoa">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  )
}
