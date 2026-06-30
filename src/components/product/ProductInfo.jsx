import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarRating from "@/components/StarRating"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

const variants = ["Gold", "Silver"]

export default function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="md:pl-8 lg:pl-16">
      <h1
        id={`product-name-${product.id}`}
        className="font-serif text-2xl md:text-4xl uppercase tracking-[0.15em] text-cream"
      >
        {product.name}
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <StarRating rating={product.rating} />
        <span className="text-xs text-cream-muted">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="mt-5 font-serif text-2xl text-champagne">
        ${product.price}
      </p>

      <p className="mt-6 text-cream-muted leading-relaxed">
        {product.description}
      </p>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.15em] text-cream mb-3">
          Metal Tone
        </p>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={cn(
                "px-6 py-2.5 text-xs uppercase tracking-[0.15em] border transition-colors",
                variant === v
                  ? "border-champagne text-champagne"
                  : "border-divider text-cream-muted hover:border-cream/40 hover:text-cream"
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.15em] text-cream mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-divider">
          <button
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="p-3 text-cream hover:bg-surface-highlight transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-cream">{quantity}</span>
          <button
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + 1)}
            className="p-3 text-cream hover:bg-surface-highlight transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Button
        onClick={() => addItem(product, variant, quantity)}
        className="mt-8 w-full h-12 bg-champagne text-ink hover:bg-champagne-dark uppercase tracking-[0.15em] text-xs"
      >
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </Button>

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-cream-muted">
        <span>Free worldwide shipping</span>
        <span className="hidden md:inline">·</span>
        <span>30-day returns</span>
        <span className="hidden md:inline">·</span>
        <span>Hypoallergenic</span>
      </div>
    </div>
  )
}
