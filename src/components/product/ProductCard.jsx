import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Plus, Check } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function ProductCard({ product }) {
  const { addItem, openCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]?.id ?? null,
  )
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!selectedVariant) return
    addItem(product.id, selectedVariant, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article className="group relative flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-[4/5] overflow-hidden bg-ivory focus-ring"
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.primaryImgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          loading="lazy"
        />
        {/* Secondary image — revealed on hover */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.secondaryImgId}
          data-strk-img={`[${product.titleId}] ${product.name}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Quick add panel — slides up on hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full px-3 pb-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="pointer-events-auto flex w-full items-center justify-center gap-2 bg-ivory-50/95 py-3 font-sans text-[11px] font-medium uppercase tracking-widest2 text-espresso backdrop-blur-sm transition-colors duration-200 hover:bg-espresso hover:text-ivory focus-ring"
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" strokeWidth={1.5} /> Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} /> Quick Add
              </>
            )}
          </button>
        </div>
      </Link>

      <div className="pt-4">
        <h3 id={product.titleId} className="product-name">
          <Link
            to={`/product/${product.id}`}
            className="transition-colors duration-300 hover:text-champagne-400"
          >
            {product.name}
          </Link>
        </h3>
        <p
          id={product.descId}
          className="mt-1 text-[13px] text-stone-300"
        >
          {product.tagline}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="price">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-1 text-[12px] text-stone-300">
            <Star
              className="h-3 w-3 fill-champagne-300 text-champagne-300"
              strokeWidth={0}
            />
            <span className="tabular-nums">{product.rating.toFixed(1)}</span>
            <span className="text-stone-200">({product.reviewCount})</span>
          </div>
        </div>

        {/* Variant swatches */}
        <div className="mt-3 flex items-center gap-1.5">
          {product.variants.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setSelectedVariant(v.id)}
              aria-label={`Select ${v.label}`}
              aria-pressed={selectedVariant === v.id}
              className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-200 focus-ring ${
                selectedVariant === v.id
                  ? "border-espresso"
                  : "border-sand-200 hover:border-stone-300"
              }`}
            >
              <span
                className="block h-3.5 w-3.5 rounded-full border border-black/5"
                style={{ backgroundColor: v.swatch }}
              />
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}
