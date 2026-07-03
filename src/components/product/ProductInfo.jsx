import { useState } from "react"
import { Star, Plus, Minus, Truck, RotateCcw, Shield } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"

const TONES = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
]

export default function ProductInfo({ product }) {
  const [tone, setTone] = useState(product.tone || "gold")
  const [qty, setQty] = useState(1)
  const { addItem, openCart } = useCart()

  function handleAdd() {
    addItem(product.id, tone, qty)
  }

  function handleBuyNow() {
    addItem(product.id, tone, qty)
  }

  return (
    <div className="md:pl-4 lg:pl-8 flex flex-col">
      {/* Category eyebrow */}
      <p className="eyebrow">
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </p>

      {/* Product name */}
      <h1
        id={`product-${product.id}-name`}
        className="font-serif text-3xl md:text-5xl mt-3 text-balance leading-[1.05]"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-3 text-sm">
        <span className="flex gap-0.5" aria-label={`Rated ${product.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.round(product.rating)
                  ? "fill-accent text-accent"
                  : "text-line-strong",
              )}
              strokeWidth={0}
            />
          ))}
        </span>
        <span className="text-ink-muted">
          {product.rating} · {product.reviews} reviews
        </span>
      </div>

      {/* Price */}
      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-serif text-2xl md:text-3xl text-ink-primary tabular-nums">
          {formatPrice(product.price)}
        </span>
        {product.compareAt && (
          <span className="text-ink-muted line-through tabular-nums">
            {formatPrice(product.compareAt)}
          </span>
        )}
      </div>

      {/* Short copy */}
      <p
        id={`product-${product.id}-copy`}
        className="mt-6 text-ink-secondary text-base leading-relaxed max-w-prose"
      >
        {product.short}
      </p>

      {/* Variant: tone */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <p className="font-sans text-[11px] uppercase tracking-eyebrow text-ink-secondary">
            Finish
          </p>
          <p className="font-sans text-[11px] uppercase tracking-eyebrow text-ink-muted">
            {tone === "gold" ? "18K Gold Plated" : "Sterling Silver"}
          </p>
        </div>
        <div className="flex gap-2">
          {TONES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTone(t.id)}
              className={cn(
                "px-5 py-3 border text-[12px] uppercase tracking-name font-medium transition-colors duration-300",
                tone === t.id
                  ? "border-accent bg-accent-soft text-ink-primary"
                  : "border-line text-ink-secondary hover:border-line-strong",
              )}
              aria-pressed={tone === t.id}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to cart */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <div className="inline-flex items-center border border-line self-start">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-11 h-11 flex items-center justify-center text-ink-primary hover:text-accent"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="w-11 h-11 flex items-center justify-center text-ink-primary hover:text-accent"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="btn-primary flex-1"
        >
          <span className="inline-flex items-center gap-2">
            Add to Bag — {formatPrice(product.price * qty)}
          </span>
        </button>
      </div>

      {/* Quick buy is a second tier action — keeps the main CTA clean */}
      <button
        type="button"
        onClick={handleBuyNow}
        className="btn-outline mt-3 w-full"
      >
        Buy It Now
      </button>

      {/* Reassurance row */}
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-line">
        <li className="flex items-start gap-3 text-ink-secondary text-sm">
          <Truck className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" strokeWidth={1.5} />
          <span>
            <span className="block text-ink-primary text-[11px] uppercase tracking-eyebrow">
              Free Shipping
            </span>
            On orders over $75
          </span>
        </li>
        <li className="flex items-start gap-3 text-ink-secondary text-sm">
          <RotateCcw className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" strokeWidth={1.5} />
          <span>
            <span className="block text-ink-primary text-[11px] uppercase tracking-eyebrow">
              30-Day Returns
            </span>
            On unworn pieces
          </span>
        </li>
        <li className="flex items-start gap-3 text-ink-secondary text-sm">
          <Shield className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" strokeWidth={1.5} />
          <span>
            <span className="block text-ink-primary text-[11px] uppercase tracking-eyebrow">
              Hypoallergenic
            </span>
            Safe for sensitive skin
          </span>
        </li>
      </ul>
    </div>
  )
}
