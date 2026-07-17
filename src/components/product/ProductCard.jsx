import { Link } from "react-router-dom"
import { IMG_PLACEHOLDER } from "@/lib/strk-images"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/context/CartContext"
import StarRating from "@/components/ui/StarRating"

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const titleId = `pc-${product.id}-title`
  const descId = `pc-${product.id}-desc`

  return (
    <article className="group relative flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-sand">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={IMG_PLACEHOLDER}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            alt={product.name}
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${descId}] [${titleId}] worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={IMG_PLACEHOLDER}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </Link>

      <button
        type="button"
        onClick={() => addItem(product)}
        className="absolute inset-x-3 bottom-[5.5rem] translate-y-3 bg-cream/95 text-ink text-xs uppercase tracking-widest2 py-3 opacity-0 transition-all duration-300 hover:bg-ink hover:text-cream group-hover:translate-y-0 group-hover:opacity-100"
      >
        Add to Cart
      </button>

      <div className="mt-4 flex flex-col">
        <h3
          id={titleId}
          className="font-serif text-lg uppercase tracking-widest3 text-ink"
        >
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={descId} className="mt-1 text-sm text-stone">
          {product.subtitle}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium text-ink">
            {formatPrice(product.price)}
          </span>
          <StarRating value={product.rating} />
        </div>
      </div>
    </article>
  )
}
