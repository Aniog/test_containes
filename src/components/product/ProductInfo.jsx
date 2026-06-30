import { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";

const TONES = [
  { id: "gold",   label: "Gold",   swatch: "linear-gradient(135deg,#D6B679 0%,#B8935A 50%,#8B6F3D 100%)" },
  { id: "silver", label: "Silver", swatch: "linear-gradient(135deg,#E8E5DF 0%,#B5B0A8 50%,#807C76 100%)" },
];

function AccordionItem({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] uppercase tracking-[0.22em] font-medium text-espresso-900">
          {title}
        </span>
        <Plus
          size={16}
          strokeWidth={1.4}
          className={cn(
            "text-espresso-700 transition-transform duration-300 ease-elegant",
            open && "rotate-45"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-elegant",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] text-espresso-700 leading-relaxed max-w-prose">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [tone, setTone] = useState(product.tone || "gold");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product.id, { tone, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div>
      <p className="eyebrow">{product.category}</p>
      <h1
        id={product.titleId}
        className="h-display mt-3 text-[28px] sm:text-3xl md:text-4xl text-espresso-900 leading-tight"
      >
        {product.name}
      </h1>
      <div className="mt-4 flex items-center gap-4">
        <p className="text-xl tabular-nums text-espresso-900">{formatPrice(product.price)}</p>
        <span className="text-[11px] uppercase tracking-[0.22em] text-espresso-500">·</span>
        <span className="text-[11px] uppercase tracking-[0.22em] text-espresso-500">or 4 payments of {formatPrice(product.price / 4)}</span>
      </div>
      <div className="mt-3">
        <StarRating value={product.rating} count={product.reviews} />
      </div>

      <p
        id={product.descId}
        className="mt-6 text-[15px] text-espresso-700 leading-relaxed max-w-prose"
      >
        {product.short}
      </p>

      {/* Variant: tone */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-900 font-medium">
            Finish: <span className="text-espresso-500">{TONES.find(t => t.id === tone)?.label}</span>
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-3">
          {TONES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTone(t.id)}
              className={cn(
                "inline-flex items-center gap-2.5 px-4 py-2.5 border rounded-full text-[12px] uppercase tracking-[0.18em] transition-colors",
                tone === t.id
                  ? "border-espresso-900 bg-espresso-900 text-ivory-50"
                  : "border-hairline text-espresso-700 hover:border-espresso-500"
              )}
              aria-pressed={tone === t.id}
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-espresso-900/20"
                style={{ background: t.swatch }}
                aria-hidden="true"
              />
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-7">
        <p className="text-[12px] uppercase tracking-[0.22em] text-espresso-900 font-medium">
          Quantity
        </p>
        <div className="mt-3 inline-flex items-center border border-hairline">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-11 h-11 inline-flex items-center justify-center text-espresso-700 hover:bg-ivory-200 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} strokeWidth={1.5} />
          </button>
          <span className="w-12 text-center tabular-nums">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="w-11 h-11 inline-flex items-center justify-center text-espresso-700 hover:bg-ivory-200 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={handleAdd}
        className="btn-primary w-full mt-7"
        aria-live="polite"
      >
        {added ? (
          <>
            <Check size={16} strokeWidth={1.6} /> Added to bag
          </>
        ) : (
          <>Add to bag — {formatPrice(product.price * qty)}</>
        )}
      </button>

      {/* Reassurance microcopy */}
      <ul className="mt-5 grid grid-cols-2 gap-2 text-[11px] uppercase tracking-[0.22em] text-espresso-500">
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold-400" /> Free shipping over $80
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold-400" /> 30-day returns
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold-400" /> Hypoallergenic
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold-400" /> Gift-ready packaging
        </li>
      </ul>

      {/* Accordions */}
      <div className="mt-10 border-t border-hairline">
        <AccordionItem title="Description" defaultOpen>
          {product.description}
        </AccordionItem>
        <AccordionItem title="Materials & Care">
          {product.materials}
          <br /><br />
          <em>{product.care}</em>
        </AccordionItem>
        <AccordionItem title="Shipping & Returns">
          {product.shipping}
        </AccordionItem>
      </div>
    </div>
  );
}
