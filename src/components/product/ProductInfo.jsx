import { useState } from "react"
import { Minus, Plus, Check } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { Pill } from "@/components/ui/Pill"
import { StarRating } from "@/components/ui/StarRating"
import { Accordion } from "@/components/ui/Accordion"

const tones = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
]

export function ProductInfo({ product }) {
  const [tone, setTone] = useState(product.tone || "gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem(product.id, { tone, quantity })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  const accordionItems = [
    {
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      title: "Materials & Care",
      content: (
        <div className="space-y-3">
          <p>
            18K gold-plated brass with a hand-polished finish. Hypoallergenic and
            nickel-free, made to be worn daily.
          </p>
          <p>
            To keep your piece at its best, remove before showering, swimming or
            applying lotion. Store in the soft pouch provided.
          </p>
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <div className="space-y-3">
          <p>
            Free worldwide shipping on orders over $80. Most orders ship within
            1–2 business days; standard delivery takes 4–7 business days.
          </p>
          <p>
            Not quite right? You have 30 days from delivery to return your
            piece, unworn, in its original packaging.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="md:sticky md:top-28">
      <p className="eyebrow">{product.category === "sets" ? "The Set" : "Velmora Edit"}</p>
      <h1
        id={product.titleId}
        className="mt-3 font-serif text-3xl leading-[1.1] text-ink-500 sm:text-4xl lg:text-[44px]"
      >
        {product.name}
      </h1>
      <div
        id={product.descId}
        className="sr-only"
      >
        {product.description}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="font-serif text-2xl text-ink-500">
          {formatPrice(product.price)}
        </span>
        <span className="text-[12px] uppercase tracking-wider2 text-ink-200">
          ·{" "}
          {product.reviews > 100 ? "Best Seller" : "New"}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <StarRating value={product.rating} size={14} />
        <span className="text-[12px] text-ink-200">
          {product.rating.toFixed(1)} · {product.reviews} reviews
        </span>
      </div>

      <p className="mt-6 font-serif text-[17px] leading-relaxed text-ink-300">
        {product.shortDescription}
      </p>

      <div className="mt-8">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider2 text-ink-500">
          Tone
        </p>
        <div className="flex flex-wrap gap-2">
          {tones.map((t) => (
            <Pill
              key={t.id}
              active={tone === t.id}
              onClick={() => setTone(t.id)}
              aria-label={`Select ${t.label} tone`}
            >
              {t.label}
            </Pill>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider2 text-ink-500">
          Quantity
        </p>
        <div className="inline-flex items-center border border-taupe-200">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-11 w-11 items-center justify-center text-ink-500 transition-colors hover:text-gold-500"
          >
            <Minus size={14} strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center font-sans text-[14px] font-medium text-ink-500">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="flex h-11 w-11 items-center justify-center text-ink-500 transition-colors hover:text-gold-500"
          >
            <Plus size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="btn-primary mt-8 w-full"
      >
        {added ? (
          <>
            <Check size={14} strokeWidth={2} />
            Added to Bag
          </>
        ) : (
          <>Add to Bag · {formatPrice(product.price * quantity)}</>
        )}
      </button>

      <ul className="mt-6 grid grid-cols-2 gap-2 text-[11px] uppercase tracking-wider2 text-ink-200">
        <li className="border border-taupe-200 px-3 py-3 text-center">Free shipping over $80</li>
        <li className="border border-taupe-200 px-3 py-3 text-center">30-day returns</li>
      </ul>

      <div className="mt-10">
        <Accordion items={accordionItems} defaultOpen={0} />
      </div>
    </div>
  )
}
