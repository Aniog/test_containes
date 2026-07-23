import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { PLACEHOLDER } from "@/lib/placeholder"
import { cn } from "@/lib/utils"

export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <article ref={ref} className={cn("group flex flex-col", className)}>
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <Link to={`/product/${product.slug}`}>
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={`${product.imgId}-a`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          {/* Secondary image (hover) */}
          <img
            alt={`${product.name} worn`}
            data-strk-img-id={`${product.imgId}-b`}
            data-strk-img={`[${product.descId}] ${product.name} worn on model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        </Link>

        {/* Quick add to cart */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-espresso/90 text-ivory text-xs uppercase tracking-[0.2em] py-4 hover:bg-gold transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone mb-1">
          {product.type}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-lg uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.round(product.rating)
                    ? "fill-gold text-gold"
                    : "text-line"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
        <p className="text-sm text-ink mt-2 tracking-wide">${product.price}</p>
      </div>
    </article>
  )
}
