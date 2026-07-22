import { useState } from "react"
import { Heart, Minus, Plus, Truck, RotateCcw, Shield } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0])
  const [qty, setQty] = useState(1)
  const [open, setOpen] = useState("description")
  const [fav, setFav] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => addItem(product, variant, qty)

  const ACC = [
    { id: "description", title: "Description", body: product.description },
    { id: "materials", title: "Materials & Care", body: product.materials + " " + product.care },
    { id: "shipping", title: "Shipping & Returns", body: product.shipping },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        {product.badge && (
          <span className="eyebrow-sm border border-gold text-gold px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <p className="eyebrow text-muted">{product.category}</p>
      </div>

      <h1
        id={`${product.id}-name`}
        className="mt-4 font-serif text-ink uppercase tracking-wider2 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05]"
      >
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-3">
        <StarRating value={product.rating} size={14} />
        <span className="text-xs text-muted">
          {product.rating.toFixed(1)} · {product.reviewCount} reviews
        </span>
      </div>

      <p className="mt-5 font-serif text-ink text-2xl tracking-wider">{formatPrice(product.price)}</p>

      <p className="mt-5 text-muted text-[15px] leading-relaxed">{product.short}</p>

      <div className="hairline my-7" />

      {/* Variant */}
      {product.variants.length > 0 && (
        <div>
          <div className="flex items-center justify-between">
            <p className="eyebrow text-ink">Finish · {variant.name}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {product.variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariant(v)}
                className={[
                  "px-5 py-2.5 border text-[12px] tracking-wider uppercase transition-colors rounded-full",
                  variant.id === v.id
                    ? "border-ink bg-ink text-cream"
                    : "border-hairline text-ink hover:border-ink",
                ].join(" ")}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Add */}
      <div className="mt-7 flex flex-col sm:flex-row items-stretch gap-3">
        <div className="inline-flex items-center border border-hairline">
          <button
            type="button"
            onClick={() => setQty(Math.max(1, qty - 1))}
            aria-label="Decrease quantity"
            className="w-11 h-12 flex items-center justify-center text-ink hover:text-gold"
          >
            <Minus size={14} strokeWidth={1.5} />
          </button>
          <span className="w-11 text-center text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => setQty(qty + 1)}
            aria-label="Increase quantity"
            className="w-11 h-12 flex items-center justify-center text-ink hover:text-gold"
          >
            <Plus size={14} strokeWidth={1.5} />
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="btn btn-primary flex-1"
        >
          Add to Bag · {formatPrice(product.price * qty)}
        </button>
        <button
          type="button"
          onClick={() => setFav((f) => !f)}
          aria-label="Add to wishlist"
          className="w-12 h-12 inline-flex items-center justify-center border border-hairline text-ink hover:border-ink"
        >
          <Heart size={16} strokeWidth={1.5} className={fav ? "fill-gold text-gold" : ""} />
        </button>
      </div>

      {/* Trust micro-row */}
      <ul className="mt-6 grid grid-cols-3 gap-2 text-[10px] text-muted tracking-wider uppercase">
        <li className="flex flex-col items-center text-center gap-1.5">
          <Truck size={16} strokeWidth={1.5} className="text-gold" />
          <span>Free Shipping<br />over $75</span>
        </li>
        <li className="flex flex-col items-center text-center gap-1.5">
          <RotateCcw size={16} strokeWidth={1.5} className="text-gold" />
          <span>30-Day<br />Returns</span>
        </li>
        <li className="flex flex-col items-center text-center gap-1.5">
          <Shield size={16} strokeWidth={1.5} className="text-gold" />
          <span>Hypo-<br />allergenic</span>
        </li>
      </ul>

      {/* Accordions */}
      <div className="mt-10 border-t border-hairline">
        {ACC.map((item) => {
          const isOpen = open === item.id
          return (
            <div key={item.id} className="border-b border-hairline">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="eyebrow text-ink">{item.title}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={["text-ink acc-chevron", isOpen ? "rotate-180" : ""].join(" ")}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={[
                  "overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
                  isOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <p className="text-[15px] text-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
