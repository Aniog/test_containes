import { useState } from "react";
import { Minus, Plus, Heart, Truck, RefreshCcw } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/Toast";
import { formatPrice } from "@/lib/utils";
import { Star } from "lucide-react";

const TONES = [
  { id: "gold", label: "18K Gold", sub: "Antique finish" },
  { id: "silver", label: "Sterling Silver", sub: "Bright finish" },
];

export default function ProductInfo({ product }) {
  const [tone, setTone] = useState(product.tone || "gold");
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const onAdd = () => {
    addItem({ ...product, tone }, { qty });
    toast(`Added ${qty} × ${product.name} to your bag.`);
  };

  return (
    <div className="md:sticky md:top-24">
      <p id={`pd-cat-${product.id}`} className="eyebrow">
        {product.category}
      </p>
      <h1
        id={`pd-name-${product.id}`}
        className="mt-2 font-display text-4xl md:text-5xl leading-tight"
      >
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex items-center gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="star"
              style={{
                fill: i < Math.round(product.rating) ? "currentColor" : "transparent",
                color: i < Math.round(product.rating) ? "var(--gold)" : "var(--line)",
              }}
            />
          ))}
        </span>
        <span className="text-sm text-ink-soft">
          {product.rating.toFixed(1)} · {product.reviews} reviews
        </span>
      </div>

      <p className="mt-5 font-display text-2xl">{formatPrice(product.price)}</p>

      <p className="mt-5 text-base leading-[1.8] text-ink-soft max-w-md">
        {product.short}
      </p>

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <p className="cta-caps text-ink">Tone</p>
          <p className="text-[11px] text-ink-soft">Hypoallergenic</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {TONES.map((t) => {
            const active = t.id === tone;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTone(t.id)}
                className={[
                  "px-4 py-2.5 border transition-all text-left",
                  active
                    ? "border-ink bg-ink text-ivory"
                    : "border-line text-ink hover:border-ink",
                ].join(" ")}
                aria-pressed={active}
              >
                <span className="block cta-caps text-[10.5px]">{t.label}</span>
                <span
                  className={[
                    "mt-0.5 block text-[10.5px]",
                    active ? "text-ivory/65" : "text-ink-soft",
                  ].join(" ")}
                >
                  {t.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <p className="cta-caps text-ink">Quantity</p>
        <div className="mt-3 inline-flex items-center border border-line">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="inline-flex h-11 w-11 items-center justify-center text-ink hover:text-gold"
          >
            <Minus className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="inline-flex h-11 w-11 items-center justify-center text-ink hover:text-gold"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3">
        <button type="button" onClick={onAdd} className="btn-primary btn-gold w-full">
          Add to Cart · {formatPrice(product.price * qty)}
        </button>
        <button
          type="button"
          className="btn-outline w-full"
          onClick={() => toast("Saved to your wishlist.")}
        >
          <Heart className="h-4 w-4" strokeWidth={1.5} />
          Add to Wishlist
        </button>
      </div>

      <ul className="mt-7 grid grid-cols-2 gap-3 text-[12px] text-ink-soft">
        <li className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-gold" strokeWidth={1.5} />
          Free shipping over $80
        </li>
        <li className="flex items-center gap-2">
          <RefreshCcw className="h-4 w-4 text-gold" strokeWidth={1.5} />
          30-day returns
        </li>
      </ul>
    </div>
  );
}
