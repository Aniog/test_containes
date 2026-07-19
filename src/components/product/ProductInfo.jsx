import { useState } from "react";
import { Heart, Minus, Plus, Truck } from "lucide-react";
import Accordion from "@/components/ui/Accordion";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

function Stars({ rating, count }) {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="inline-flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 12 12"
            className={`h-3 w-3 ${i < Math.round(rating) ? "text-gold-400" : "text-hairline"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 .8l1.6 3.4 3.7.4-2.8 2.5.8 3.6L6 8.9 2.7 10.7l.8-3.6L.7 4.6l3.7-.4L6 .8z" />
          </svg>
        ))}
      </div>
      <button
        type="button"
        className="font-sans text-[11px] uppercase tracking-widest2 text-muted hover:text-espresso-300 transition-colors underline-offset-4 hover:underline"
      >
        {count} Reviews
      </button>
    </div>
  );
}

const tones = ["Gold", "Silver"];

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.tone || "Gold");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const onAdd = () => {
    addItem(product, { variant, quantity });
  };

  return (
    <div className="md:pl-4 lg:pl-10">
      <p className="eyebrow">{product.badge || "Velmora Fine Jewelry"}</p>
      <h1
        id={product.titleId}
        className="mt-3 product-name !text-[16px] md:!text-[18px] tracking-widest2"
      >
        {product.name}
      </h1>
      <p
        id={product.descId}
        className="sr-only"
        aria-hidden="true"
      >
        {product.desc}
      </p>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="font-serif text-3xl text-espresso-300">
          ${product.price}
        </span>
        <span className="text-xs text-muted-soft">USD</span>
      </div>

      <div className="mt-4">
        <Stars rating={product.rating} count={product.reviewCount} />
      </div>

      <p className="mt-6 text-base text-muted leading-relaxed max-w-prose">
        {product.desc}
      </p>

      {/* Variant */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[11px] uppercase tracking-widest2 text-espresso-300">
            Finish
          </span>
          <span className="font-sans text-[11px] uppercase tracking-widest2 text-muted">
            {variant}
          </span>
        </div>
        <div className="mt-3 flex gap-2">
          {tones.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setVariant(t)}
              className={cn(
                "px-5 py-2.5 font-sans text-[12px] uppercase tracking-widest2 border transition-colors",
                variant === t
                  ? "border-espresso-300 text-espresso-300 bg-cream-50"
                  : "border-hairline text-muted hover:border-espresso-300 hover:text-espresso-300",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-8">
        <span className="font-sans text-[11px] uppercase tracking-widest2 text-espresso-300 block mb-3">
          Quantity
        </span>
        <div className="inline-flex items-center border border-hairline/80">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-espresso-300 hover:text-gold-500 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" strokeWidth={1.5} />
          </button>
          <span className="w-10 text-center font-sans text-sm text-espresso-300">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-espresso-300 hover:text-gold-500 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to bag */}
      <button
        type="button"
        onClick={onAdd}
        className="mt-6 w-full btn-primary !py-5"
      >
        Add to Bag — ${product.price * quantity}
      </button>
      <button
        type="button"
        className="mt-3 w-full inline-flex items-center justify-center gap-2 font-sans text-[12px] uppercase tracking-widest2 text-espresso-300 hover:text-gold-500 transition-colors py-3"
      >
        <Heart className="h-4 w-4" strokeWidth={1.5} />
        Save to Wishlist
      </button>

      {/* Reassurance */}
      <ul className="mt-6 grid grid-cols-2 gap-3 text-[11px] uppercase tracking-widest2 text-muted">
        <li className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-gold-500" strokeWidth={1.5} />
          Free shipping over $75
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          30-day returns
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          18K gold plated
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          Hypoallergenic
        </li>
      </ul>

      {/* Accordions */}
      <div className="mt-10">
        <Accordion
          defaultOpen={0}
          items={[
            { title: "Description", content: product.details },
            { title: "Materials & Care", content: (
              <div className="space-y-3">
                <p>{product.materials}</p>
                <p>{product.care}</p>
              </div>
            ) },
            { title: "Shipping & Returns", content: product.shipping },
          ]}
        />
      </div>
    </div>
  );
}
