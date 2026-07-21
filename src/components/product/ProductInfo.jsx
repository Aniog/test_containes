import { useState } from "react";
import { Star, Minus, Plus, Check } from "lucide-react";
import { formatPrice, cn } from "../../lib/utils";
import { useCart } from "../../context/CartContext";

function Stars({ value }) {
  return (
    <div
      className="flex items-center gap-0.5 text-gold"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          strokeWidth={0}
          fill={i < Math.round(value) ? "currentColor" : "transparent"}
          stroke="currentColor"
        />
      ))}
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const selectedVariant =
    product.variants.find((v) => v.id === variantId) || product.variants[0];

  const handleAdd = () => {
    addItem({ productId: product.id, variantId: selectedVariant.id, qty });
  };

  return (
    <div className="md:pl-4 lg:pl-8">
      {/* Category + name */}
      <p className="eyebrow">{product.category}</p>
      <h1
        id={product.nameId}
        className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wider2 text-espresso mt-3 leading-[1.1]"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-3">
        <Stars value={product.rating} />
        <span className="font-sans text-xs text-ink-soft">
          {product.rating.toFixed(1)} · {product.reviewCount} reviews
        </span>
      </div>

      {/* Price */}
      <p className="mt-6 font-serif text-3xl text-espresso">
        {formatPrice(product.price)}
      </p>

      <p
        id={product.descId}
        className="mt-6 font-sans text-base text-ink-soft leading-relaxed max-w-md"
      >
        {product.description}
      </p>

      <div className="hairline my-8" />

      {/* Variants */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-espresso">
            Finish
          </p>
          <p className="font-sans text-[11px] uppercase tracking-widest2 text-ink-soft">
            {selectedVariant.label}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v) => {
            const active = v.id === variantId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariantId(v.id)}
                className={cn(
                  "px-5 py-2.5 font-sans text-[11px] uppercase tracking-widest2 border transition-all duration-300",
                  active
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-sand text-espresso hover:border-espresso",
                )}
                aria-pressed={active}
              >
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-7">
        <p className="font-sans text-[11px] uppercase tracking-widest2 text-espresso mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-sand">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="w-10 h-10 grid place-items-center text-espresso hover:bg-sand/40 transition-colors duration-300"
          >
            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center font-sans text-sm">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            aria-label="Increase quantity"
            className="w-10 h-10 grid place-items-center text-espresso hover:bg-sand/40 transition-colors duration-300"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={handleAdd}
        className="btn-primary w-full mt-8"
      >
        <Check className="h-3.5 w-3.5" strokeWidth={1.6} />
        Add to Bag — {formatPrice(product.price * qty)}
      </button>

      {/* Reassurance row */}
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
        {[
          "Free shipping over $75",
          "30-day returns",
          "Hypoallergenic",
        ].map((line) => (
          <li
            key={line}
            className="font-sans text-[11px] uppercase tracking-widest2 text-ink-soft border border-sand py-3"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
