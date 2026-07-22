import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { PLACEHOLDER } from "@/lib/strk"
import StarRating from "@/components/ui/StarRating"

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [main, alt] = product.images
  const titleId = main.titleId
  const descId = main.descId

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand/40 aspect-[4/5]">
        <img
          alt={product.name}
          data-strk-img-id={main.imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {alt && (
          <img
            alt={product.name}
            data-strk-img-id={alt.imgId}
            data-strk-img={`[${descId}] [${titleId}] worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso/85 px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleAdd}
            className="flex w-full items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cream"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone">
          {product.category}
        </p>
        <h3
          id={titleId}
          className="mt-1 font-serif text-lg uppercase tracking-[0.12em] text-ink"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating value={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm tracking-wide text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
