import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Minus, Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

function StarRating({ value, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-3.5 h-3.5",
              i < Math.round(value) ? "fill-gold text-gold" : "text-hairline"
            )}
            strokeWidth={0}
          />
        ))}
      </div>
      <span className="text-[11px] uppercase tracking-wider-2 text-ink-muted">
        {value} · {count} reviews
      </span>
    </div>
  );
}

function VariantPill({ options, value, onChange }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider-2 text-ink-muted mb-3">
        Tone <span className="text-ink">— {value}</span>
      </p>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={opt === value}
            className={cn(
              "px-5 py-2.5 text-[12px] uppercase tracking-wider-2 font-medium border transition-colors",
              opt === value
                ? "bg-espresso text-ivory border-espresso"
                : "border-hairline text-ink hover:border-ink"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function QuantityStepper({ value, onChange }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wider-2 text-ink-muted mb-3">
        Quantity
      </p>
      <div className="inline-flex items-center border border-hairline">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => onChange(Math.max(1, value - 1))}
          className="w-10 h-10 flex items-center justify-center hover:bg-ivory-soft transition-colors"
        >
          <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
        </button>
        <span className="w-10 text-center text-sm tabular-nums">{value}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onChange(value + 1)}
          className="w-10 h-10 flex items-center justify-center hover:bg-ivory-soft transition-colors"
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }) {
  const [tone, setTone] = useState(product.tone);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const onAdd = () => {
    addToCart(product, tone, qty);
    toast.success(`${product.name} added to bag.`);
  };

  return (
    <div>
      <nav className="text-[11px] uppercase tracking-wider-2 text-ink-muted mb-6" aria-label="Breadcrumb">
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2 text-hairline">/</span>
        <Link
          to={`/shop?category=${product.category}`}
          className="hover:text-ink capitalize"
        >
          {product.category}
        </Link>
      </nav>

      <h1
        id={`product-name-${product.id}`}
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wider-2 leading-[1.1] text-ink text-balance"
      >
        {product.name}
      </h1>

      <div className="mt-5 flex items-center gap-4">
        <span className="font-serif text-2xl font-light tabular-nums">
          ${product.price}
        </span>
        <span className="h-4 w-px bg-hairline" />
        <StarRating value={product.rating} count={product.reviews} />
      </div>

      <p className="mt-6 text-ink-muted leading-relaxed text-pretty">
        {product.shortDescription}
      </p>

      <div className="mt-8 space-y-7">
        <VariantPill
          options={product.toneOptions}
          value={tone}
          onChange={setTone}
        />
        <QuantityStepper value={qty} onChange={setQty} />

        <div className="pt-2 space-y-3">
          <button
            type="button"
            onClick={onAdd}
            className="btn-primary w-full"
          >
            Add to Bag · ${(product.price * qty).toFixed(2)}
          </button>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] uppercase tracking-wider-2 text-ink-muted pt-3">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
              In stock
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
              Free shipping
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
              30-day returns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
