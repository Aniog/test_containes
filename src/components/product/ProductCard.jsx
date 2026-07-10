import { Link } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../../context/CartContext.jsx"
import { formatPrice, cn } from "../../lib/utils.js"
import { PlusIcon, StarIcon } from "../ui/Icons.jsx"

export default function ProductCard({ product, eager = false }) {
  const { addToCart } = useCart()
  const [adding, setAdding] = useState(false)
  if (!product) return null

  const handleQuickAdd = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setAdding(true)
    addToCart(product.id, { variant: product.tone || "gold", quantity: 1 })
    setTimeout(() => setAdding(false), 700)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card group block"
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div className="relative overflow-hidden bg-ivory-soft aspect-[4/5]">
        <img
          src={product.images.primary}
          alt={product.name}
          loading={eager ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        />
        <img
          src={product.images.secondary}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="product-img-secondary absolute inset-0 h-full w-full object-cover"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-ivory/90 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-eyebrow uppercase text-ink">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="quick-add absolute inset-x-3 bottom-3 z-10 inline-flex items-center justify-center gap-2 bg-ivory text-ink py-3 text-[10px] tracking-eyebrow uppercase border border-ink/10 hover:bg-espresso hover:text-ivory transition-colors duration-300"
        >
          {adding ? (
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
              Added
            </span>
          ) : (
            <>
              <PlusIcon className="h-3.5 w-3.5" />
              Quick Add
            </>
          )}
        </button>
      </div>
      <div className="pt-5 flex flex-col items-start gap-1.5">
        <h3 className="product-name">{product.name}</h3>
        <div className="flex items-center gap-2 text-[12px] text-muted">
          <span className="inline-flex items-center gap-0.5 star">
            <StarIcon className="h-3 w-3" />
          </span>
          <span className="text-ink/70">{product.rating}</span>
          <span className="text-muted/60">({product.reviewCount})</span>
        </div>
        <p className="mt-1 text-[14px] text-ink font-medium tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
