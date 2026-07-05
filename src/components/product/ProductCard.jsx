import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StrkImage from "@/components/ui/StrkImage"
import StarRating from "@/components/ui/StarRating"
import { cn } from "@/lib/utils"

export default function ProductCard({ product, className = "" }) {
  const { addItem } = useCart()

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          {/* Primary image */}
          <StrkImage
            imgId={product.imgId}
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="4x5"
            width={700}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover second image */}
          <StrkImage
            imgId={product.imgIdAlt}
            query={`[${product.descId}] [${product.titleId}] worn model`}
            ratio="4x5"
            width={700}
            alt={`${product.name} worn`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="w-full bg-cream/95 text-ink uppercase tracking-widest2 text-[11px] py-3 hover:bg-gold hover:text-cream transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-wider leading-tight"
        >
          <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="sr-only">
          {product.tagline}
        </p>
        <p className="text-xs text-muted mt-1">{product.tagline}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm font-medium">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
