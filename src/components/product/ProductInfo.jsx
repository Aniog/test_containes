import { useState } from "react"
import { Minus, Plus, ShoppingBag, Heart, Truck, RefreshCw } from "lucide-react"
import AccordionItem from "@/components/product/AccordionItem"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"

function Stars({ rating, count }) {
  return (
    <div className="flex items-center gap-2 text-[12px] text-inkSoft">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={cn(
              "h-2 w-2 rounded-full",
              i <= Math.round(rating) ? "bg-gold" : "bg-hairline",
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <span>
        {rating.toFixed(1)} · {count} reviews
      </span>
    </div>
  )
}

const TONE_LABEL = {
  gold: "18K Gold",
  silver: "Sterling Silver",
}

export default function ProductInfo({ product }) {
  const [tone, setTone] = useState(product.tones?.[0] || "gold")
  const [quantity, setQuantity] = useState(1)
  const [favorited, setFavorited] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const { addItem } = useCart()

  function onAdd() {
    addItem(product, tone, quantity)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1800)
  }

  return (
    <div>
      <p className="eyebrow">{product.category}</p>
      <h1
        className="display-lg mt-4 text-ink text-balance"
        style={{ fontSize: "clamp(40px, 5vw, 60px)" }}
      >
        {product.name}
      </h1>
      <div className="mt-5 flex items-center gap-4">
        <p className="text-2xl font-medium text-ink">
          {formatPrice(product.price)}
        </p>
        {product.compareAt && (
          <p className="text-base font-light text-inkSoft line-through">
            {formatPrice(product.compareAt)}
          </p>
        )}
      </div>
      <div className="mt-3">
        <Stars rating={product.rating} count={product.reviewCount} />
      </div>

      <p className="mt-8 max-w-md text-base font-light leading-relaxed text-inkSoft">
        {product.short}
      </p>

      {/* Tone selector */}
      <div className="mt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
          Finish · <span className="text-inkSoft">{TONE_LABEL[tone]}</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {product.tones.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTone(t)}
              className={cn(
                "pill",
                tone === t && "pill-active",
              )}
            >
              {TONE_LABEL[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + add to bag */}
      <div className="mt-8 grid grid-cols-[auto,1fr] gap-3">
        <div className="inline-flex items-center border border-hairline">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-12 w-12 items-center justify-center text-inkSoft transition-colors hover:text-ink"
          >
            <Minus className="h-4 w-4" strokeWidth={1.4} />
          </button>
          <span className="flex h-12 w-10 items-center justify-center text-sm font-medium text-ink">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            aria-label="Increase quantity"
            className="flex h-12 w-12 items-center justify-center text-inkSoft transition-colors hover:text-ink"
          >
            <Plus className="h-4 w-4" strokeWidth={1.4} />
          </button>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className={cn(
            "btn-primary h-12 w-full transition-colors duration-300",
            justAdded && "bg-gold-deep hover:bg-gold-deep",
          )}
        >
          {justAdded ? (
            "Added to bag"
          ) : (
            <>
              <ShoppingBag className="h-4 w-4" strokeWidth={1.6} />
              Add to Bag · {formatPrice(product.price * quantity)}
            </>
          )}
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setFavorited((f) => !f)}
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-inkSoft transition-colors hover:text-ink"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              favorited ? "fill-gold text-gold" : "text-inkSoft",
            )}
            strokeWidth={1.4}
          />
          {favorited ? "Saved" : "Save for later"}
        </button>
      </div>

      {/* Mini trust */}
      <ul className="mt-10 grid grid-cols-1 gap-3 border-y border-hairline py-6 sm:grid-cols-2">
        <li className="flex items-center gap-3 text-[12px] text-inkSoft">
          <Truck className="h-4 w-4 text-gold" strokeWidth={1.4} />
          Free worldwide shipping over $75
        </li>
        <li className="flex items-center gap-3 text-[12px] text-inkSoft">
          <RefreshCw className="h-4 w-4 text-gold" strokeWidth={1.4} />
          30-day returns, no questions asked
        </li>
      </ul>

      {/* Accordions */}
      <div className="mt-2 border-t border-hairline">
        <AccordionItem title="Description" defaultOpen>
          <p className="max-w-prose text-pretty">{product.description}</p>
        </AccordionItem>
        <AccordionItem title="Materials & Care">{product.care}</AccordionItem>
        <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
      </div>
    </div>
  )
}
