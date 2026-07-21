import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { StrkImage } from "@/components/ui/StrkImage"
import { Stars } from "@/components/ui/Stars"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      quantity: 1,
      image: PLACEHOLDER,
    })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden bg-stone aspect-[4/5]">
        {/* Primary image */}
        <StrkImage
          imgId={product.imgId}
          query={`[${product.descId}] [${product.titleId}]`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <StrkImage
          imgId={product.imgIdHover}
          query={`[${product.descId}] [${product.titleId}] worn on model`}
          ratio="4x5"
          width={600}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-espresso text-[10px] uppercase tracking-wide2 px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-espresso/95 text-cream uppercase tracking-wide2 text-xs font-medium py-3.5 flex items-center justify-center gap-2 hover:bg-espresso"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest2 text-gold mb-1.5">
          {product.category}
        </p>
        <h3
          id={product.titleId}
          className="font-serif text-lg text-espresso uppercase tracking-wide2 leading-snug"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-xs text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-ink font-medium">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
