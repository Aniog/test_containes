import { Link } from "react-router-dom"
import { Star, Plus } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgIdHover}
            data-strk-img={`[${product.descId}] worn ${product.subtitle} ${product.name}`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        {/* Quick add */}
        <button
          onClick={() => addItem(product)}
          className="absolute bottom-0 inset-x-0 bg-ink/90 text-cream py-3 text-xs uppercase tracking-widest2 translate-y-full group-hover:translate-y-0 transition-transform duration-400 flex items-center justify-center gap-2 hover:bg-champagne"
        >
          <Plus className="w-3.5 h-3.5" /> Quick Add
        </button>
      </div>

      {/* Info */}
      <div className="pt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          <Star className="w-3 h-3 fill-champagne text-champagne" />
          <span className="text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-widest3 text-ink"
        >
          <Link to={`/product/${product.id}`} className="hover:text-champagne transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="text-xs text-stone mt-1">
          {product.subtitle}
        </p>
        <p className="text-sm text-ink mt-2">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
