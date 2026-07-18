import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { StrkImage } from "@/components/ui/StrkImage"
import { StarRating } from "@/components/ui/StarRating"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function ProductCard({ product, className = "" }) {
  const { addItem } = useCart()
  const titleId = `pc-${product.id}-title`
  const tagId = `pc-${product.id}-tag`

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative overflow-hidden bg-cream-200">
        <Link to={`/product/${product.id}`} className="block aspect-[3x4] w-full">
          {/* Primary image */}
          <StrkImage
            imgId={`${product.imgId}-card`}
            query={`[${tagId}] [${titleId}]`}
            ratio="3x4"
            width={600}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-elegant group-hover:opacity-0"
          />
          {/* Hover image */}
          <StrkImage
            imgId={`${product.imgIdAlt}-card`}
            query={`[${tagId}] [${titleId}] worn on model`}
            ratio="3x4"
            width={600}
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-elegant group-hover:scale-100 group-hover:opacity-100"
          />
        </Link>

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 ease-elegant group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product, { variant: product.variants[0] })}
            className="w-full bg-cream-50/95 px-4 py-3 font-sans text-[10px] uppercase tracking-ultra text-ink backdrop-blur-sm transition-colors hover:bg-ink hover:text-cream-50"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <div className="flex items-center justify-between gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
            {product.category}
          </span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={titleId} className="product-name mt-2 text-[15px]">
            {product.name}
          </h3>
        </Link>
        <p id={tagId} className="mt-1 font-sans text-xs text-ink-muted">
          {product.tagline}
        </p>
        <p className="mt-2 font-serif text-lg text-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
