import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import StarRating from "@/components/ui/StarRating"
import { formatPrice } from "@/lib/utils"

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <Link to={`/product/${product.id}`}>
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            alt={product.name}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>
        <button
          onClick={() => addItem(product)}
          className="absolute bottom-0 inset-x-0 bg-ink-800/95 text-cream text-xs uppercase tracking-widest2 py-3.5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-smooth hover:bg-gold"
        >
          Add to Cart
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest3 text-gold mb-1">
          {product.type}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-lg text-ink-800 uppercase tracking-wide hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-ink-400">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-ink-700 mt-1.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  )
}
