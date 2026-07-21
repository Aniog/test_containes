import React, { useState } from "react"
import { Heart, Minus, Plus, ShoppingBag, Check } from "lucide-react"
import { useCart, useCartActions, useCartUi } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import Button from "@/components/ui/Button"
import Stars from "@/components/ui/Stars"

export default function ProductInfo({ product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCartActions()
  const { openCart } = useCartUi()

  const onAdd = () => {
    addItem(product, variantId, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  const onBuyNow = () => {
    addItem(product, variantId, quantity)
    openCart()
  }

  return (
    <div>
      <p className="text-[10px] tracking-widest3 uppercase text-champagne-deep mb-4">
        {product.isBestseller ? "Bestseller · " : ""}
        {product.category === "huggies"
          ? "Huggies"
          : product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </p>
      <h1
        id={`prod-${product.id}-title`}
        className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.05]"
      >
        {product.name}
      </h1>

      <div className="mt-5 flex items-center gap-4">
        <Stars rating={product.rating} size={14} />
        <span className="text-xs text-muted">
          {product.rating.toFixed(1)} · {product.reviewCount} reviews
        </span>
      </div>

      <p className="mt-6 font-serif text-2xl md:text-3xl text-ink">
        {formatPrice(product.price)}
      </p>

      <p
        id={`prod-${product.id}-desc`}
        className="mt-7 text-muted text-[15px] leading-relaxed"
      >
        {product.shortDescription}
      </p>

      <div className="mt-8">
        <p className="text-[11px] tracking-widest3 uppercase text-ink mb-3">
          Tone
        </p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v) => {
            const active = v.id === variantId
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariantId(v.id)}
                className={cn(
                  "px-5 py-2.5 text-[11px] tracking-widest2 uppercase border transition-colors duration-300",
                  active
                    ? "border-ink bg-ink text-bone"
                    : "border-line text-ink hover:border-ink"
                )}
                aria-pressed={active}
              >
                {v.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-[11px] tracking-widest3 uppercase text-ink mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-line">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="w-10 h-10 inline-flex items-center justify-center text-ink hover:text-champagne-deep"
          >
            <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center text-sm text-ink tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="w-10 h-10 inline-flex items-center justify-center text-ink hover:text-champagne-deep"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <Button
          onClick={onAdd}
          variant="primary"
          size="lg"
          fullWidth
        >
          {added ? (
            <>
              <Check className="w-4 h-4" strokeWidth={1.5} />
              Added to Bag
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              Add to Bag
            </>
          )}
        </Button>
        <Button
          onClick={onBuyNow}
          variant="outline"
          size="lg"
          fullWidth
        >
          Buy Now
        </Button>
      </div>

      <div className="mt-8 flex items-center gap-6 text-[11px] tracking-widest2 uppercase text-muted">
        <span className="inline-flex items-center gap-2">
          <Heart className="w-3.5 h-3.5" strokeWidth={1.5} />
          Add to Wishlist
        </span>
        <span>Free shipping over $80</span>
      </div>
    </div>
  )
}
