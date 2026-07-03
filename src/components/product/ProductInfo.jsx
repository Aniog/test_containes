import React, { useState } from "react"
import { Star, Plus, Minus, Truck, RefreshCw, Sparkles } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import Accordion from "@/components/ui/Accordion"

function Stars({ rating, reviewCount }) {
  return (
    <div className="flex items-center gap-1.5 text-[13px]">
      <div
        className="flex items-center gap-0.5 text-champagne-300"
        aria-label={`${rating} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(rating)
          return (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                filled ? "fill-current" : "fill-transparent"
              }`}
              strokeWidth={1.2}
            />
          )
        })}
      </div>
      <span className="font-sans text-stone-300">
        {rating.toFixed(1)} · {reviewCount} reviews
      </span>
    </div>
  )
}

export default function ProductInfo({ product }) {
  const { addItem, openCart } = useCart()
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product.id, variant.id, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const handleBuyNow = () => {
    addItem(product.id, variant.id, quantity)
    openCart()
  }

  return (
    <div className="flex flex-col">
      <p className="eyebrow">{product.tagline}</p>
      <h1
        id={product.titleId}
        className="mt-4 font-serif text-[34px] font-medium uppercase tracking-wider2 leading-[1.1] text-espresso sm:text-[40px]"
      >
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-4">
        <span className="font-serif text-2xl text-espresso">
          {formatPrice(product.price)}
          <span className="ml-0.5 text-base text-stone-300">.00</span>
        </span>
        <span className="font-sans text-[12px] uppercase tracking-widest2 text-stone-300">
          ·  In stock
        </span>
      </div>

      <div className="mt-4">
        <Stars rating={product.rating} reviewCount={product.reviewCount} />
      </div>

      <p
        id={product.descId}
        className="mt-6 max-w-prose text-[15px] leading-relaxed text-stone-300"
      >
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-stone-300">
            {product.variantLabel}
          </h2>
          <span className="font-sans text-[12px] text-stone-300">
            {variant.label}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.variants.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVariant(v)}
              aria-pressed={variant.id === v.id}
              className={`pill ${
                variant.id === v.id ? "pill-active" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="mr-2 inline-block h-3 w-3 rounded-full border border-black/10"
                style={{ backgroundColor: v.swatch }}
              />
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-8">
        <h2 className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-stone-300">
          Quantity
        </h2>
        <div className="mt-3 inline-flex items-center border border-sand-200">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            className="flex h-12 w-12 items-center justify-center text-espresso transition-colors hover:text-champagne-400 disabled:opacity-40 focus-ring"
          >
            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
          <span className="w-12 text-center font-sans text-[14px] tabular-nums text-espresso">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => Math.min(99, q + 1))}
            className="flex h-12 w-12 items-center justify-center text-espresso transition-colors hover:text-champagne-400 focus-ring"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className="btn-primary w-full"
        >
          {added ? "Added to Bag" : "Add to Bag"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="btn-secondary w-full"
        >
          Buy It Now
        </button>
      </div>

      {/* Trust strip */}
      <ul className="mt-8 grid grid-cols-1 gap-3 border-t border-sand-200 pt-6 sm:grid-cols-3">
        {[
          { icon: Truck, label: "Free shipping over $80" },
          { icon: RefreshCw, label: "30-day easy returns" },
          { icon: Sparkles, label: "Hypoallergenic" },
        ].map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2 font-sans text-[12px] text-stone-300"
          >
            <Icon className="h-4 w-4 text-champagne-400" strokeWidth={1.5} />
            {label}
          </li>
        ))}
      </ul>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion
          title="Description"
          defaultOpen
        >
          <p className="text-[15px] leading-relaxed text-stone-300">
            {product.description}
          </p>
        </Accordion>
        <Accordion title="Materials & Care">
          <div className="space-y-3 text-[14px] leading-relaxed text-stone-300">
            <p>
              <strong className="font-medium text-espresso">
                The materials.
              </strong>{" "}
              18K gold plating over a hypoallergenic brass core, finished by
              hand in small batches.
            </p>
            <ul className="ml-4 list-disc space-y-1.5 pl-2 marker:text-champagne-300">
              {product.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p>
              <strong className="font-medium text-espresso">
                How to care for it.
              </strong>
            </p>
            <ul className="ml-4 list-disc space-y-1.5 pl-2 marker:text-champagne-300">
              {product.care.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <div className="space-y-3 text-[14px] leading-relaxed text-stone-300">
            <p>{product.shipping}</p>
            <p>
              Orders ship from our studio within 1–2 business days. You'll
              receive a tracking link by email as soon as your piece leaves the
              bench.
            </p>
            <p>
              Not quite right? Send it back within 30 days for a full refund or
              store credit — we'll cover the return label.
            </p>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
