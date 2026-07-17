import { useState } from "react";
import { Star, Minus, Plus, Check } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Accordion from "@/components/ui/Accordion";

export function ProductInfo({ product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const onAdd = () => addItem(product.id, quantity);

  const accordionItems = [
    {
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      title: "Materials & Care",
      content: (
        <div className="space-y-4">
          <p>
            <span className="text-ink">Material.</span> {product.material}
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            {product.details.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="pt-2 text-ink">Care.</p>
          <ul className="list-disc space-y-1.5 pl-5">
            {product.care.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <ul className="list-disc space-y-1.5 pl-5">
          {product.shipping.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="lg:pl-2">
      <p className="eyebrow">{product.category}</p>
      <h1
        id={`${product.id}-gallery-title`}
        className="mt-3 font-sans text-[0.95rem] font-medium uppercase tracking-[0.18em] text-ink md:text-[1.05rem]"
      >
        {product.name}
      </h1>
      <p className="mt-2 text-base leading-relaxed text-ink-soft md:text-[1.0625rem]">
        {product.tagline}
      </p>

      <div className="mt-5 flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1" aria-label={`${product.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < Math.round(product.rating)
                  ? "fill-gold text-gold"
                  : "text-hairline"
              )}
              strokeWidth={0}
            />
          ))}
        </div>
        <span className="text-ink-soft">
          {product.rating.toFixed(1)} · {product.reviewCount} reviews
        </span>
      </div>

      <p className="mt-6 font-serif text-3xl tabular-nums text-ink md:text-[2rem]">
        {formatPrice(product.price)}
      </p>
      <p className="mt-1 text-xs text-ink-soft">
        Or 4 interest-free payments of {formatPrice(product.price / 4)} with <span className="text-ink">Klarna</span>.
      </p>

      <p className="mt-8 text-sm leading-relaxed text-ink-soft">
        {product.description}
      </p>

      {/* Variant selector (tone) */}
      {product.colors.length > 0 && (
        <div className="mt-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink">
            Finish: <span className="text-ink-soft">{color}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.colors.map((c) => {
              const selected = c === color;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  aria-pressed={selected}
                  className={cn(
                    "rounded-full border px-5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-all duration-200",
                    selected
                      ? "border-ink bg-ink text-ivory"
                      : "border-hairline text-ink hover:border-ink"
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mt-8 flex items-center gap-4">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink">
          Quantity
        </p>
        <div className="inline-flex items-center border border-hairline">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="grid h-10 w-10 place-items-center text-ink transition-colors hover:text-gold-deep"
          >
            <Minus className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <span className="grid h-10 w-10 place-items-center text-sm tabular-nums text-ink">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + 1)}
            className="grid h-10 w-10 place-items-center text-ink transition-colors hover:text-gold-deep"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart — full width */}
      <button
        type="button"
        onClick={onAdd}
        className="mt-8 flex w-full items-center justify-center gap-3 bg-gold py-4 cta-label text-ivory transition-all duration-200 ease-out hover:-translate-y-px hover:bg-gold-deep active:scale-[0.99]"
      >
        Add to Cart — {formatPrice(product.price * quantity)}
      </button>
      <p className="mt-3 flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">
        <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
        In stock — ready to ship
      </p>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion items={accordionItems} defaultOpenIndex={0} />
      </div>
    </div>
  );
}

export default ProductInfo;
