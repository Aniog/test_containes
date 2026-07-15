import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { StrkImage } from "@/components/ui/StrkImage"
import { formatPrice } from "@/lib/utils"

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white border border-line overflow-hidden transition-shadow duration-300 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <StrkImage
          imgId={product.imgId}
          query={`[${product.descId}] [${product.titleId}]`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <StrkImage
          imgId={product.imgIdAlt}
          query={`[${product.descId}] [${product.titleId}] styled on model`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleQuickAdd}
            className="w-full bg-ink/90 text-cream text-xs uppercase tracking-[0.2em] py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 md:p-5 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-[0.15em] text-ink"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="sr-only"
        >
          {product.subtitle}
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-stone">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-serif text-lg text-ink mt-2">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
