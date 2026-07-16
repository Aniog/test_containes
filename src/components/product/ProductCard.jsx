import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { StarRating } from "@/components/ui/star-rating"
import { cn } from "@/lib/utils"

export function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const [tone, setTone] = useState(product.variants[0])

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative overflow-hidden bg-cream">
        <Link to={`/product/${product.slug}`}>
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[card-desc-${product.id}] [card-name-${product.id}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="aspect-[4/5] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[card-desc-${product.id}] [card-name-${product.id}] worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            onClick={() => addItem(product, tone, 1)}
            className="w-full bg-espresso/95 py-3 text-[11px] uppercase tracking-[0.2em] text-canvas backdrop-blur-sm transition-colors hover:bg-gold hover:text-espresso"
          >
            Add to Cart
          </button>
        </div>

        {product.bestseller && (
          <span className="absolute left-3 top-3 bg-canvas/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone">
            {product.category}
          </p>
          <StarRating rating={product.rating} size={12} />
        </div>
        <h3
          id={`card-name-${product.id}`}
          className="mt-1.5 font-serif text-lg uppercase tracking-[0.12em] text-ink"
        >
          <Link to={`/product/${product.slug}`} className="transition-colors hover:text-gold">
            {product.name}
          </Link>
        </h3>
        <p
          id={`card-desc-${product.id}`}
          className="mt-1 text-sm leading-relaxed text-stone"
        >
          {product.shortDesc}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-serif text-lg text-ink">
            {formatPrice(product.price)}
          </span>
          {/* Tone swatches */}
          <div className="flex gap-1.5">
            {product.variants.map((v) => (
              <button
                key={v}
                onClick={() => setTone(v)}
                aria-label={`${v} tone`}
                className={cn(
                  "h-4 w-4 rounded-full border transition-all",
                  v === "Gold"
                    ? "bg-gold border-gold"
                    : "bg-[#C7C4BD] border-[#C7C4BD]",
                  tone === v
                    ? "ring-1 ring-offset-2 ring-offset-canvas ring-ink"
                    : "opacity-70"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
