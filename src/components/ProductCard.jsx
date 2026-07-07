import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import StarRating from "./StarRating"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const titleId = `product-title-${product.id}`
  const descId = `product-desc-${product.id}`
  const imgId = `product-img-${product.id}-${index}`
  const hoverImgId = `product-hover-${product.id}-${index}`

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/products/${product.id}`}
        className="relative block aspect-[3/4] overflow-hidden bg-parchment"
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-ink px-2.5 py-1 text-[10px] font-sans font-medium uppercase tracking-wider text-cream">
            {product.badge}
          </span>
        )}

        <img
          data-strk-img-id={imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={placeholder}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <img
          data-strk-img-id={hoverImgId}
          data-strk-img={`[${descId}] [${titleId}] worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={placeholder}
          alt={`${product.name} worn`}
          className={`
            absolute inset-0 h-full w-full object-cover transition-opacity duration-500
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        />

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            addItem(product, "gold", 1)
          }}
          className={`
            absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2
            bg-ink py-3.5 text-xs font-sans font-medium uppercase tracking-wider text-cream
            transition-transform duration-300 ease-out hover:bg-charcoal
            ${isHovered ? "translate-y-0" : ""}
          `}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </Link>

      <div className="pt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-sm font-medium uppercase tracking-widest text-ink"
        >
          <Link to={`/products/${product.id}`} className="hover:text-gold-dark transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={descId} className="mt-1 text-xs text-stone font-sans">
          {product.tagline}
        </p>
        <div className="mt-2 flex flex-col items-center gap-1.5">
          <StarRating rating={product.rating} count={product.reviewCount} size={12} />
          <span className="text-sm font-sans font-medium text-ink">${product.price}</span>
        </div>
      </div>
    </article>
  )
}
