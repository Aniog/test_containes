import React, { useState } from "react";
import { Minus, Plus, ShoppingBag, Heart } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function ProductInfo({ product }) {
  const [tone, setTone] = useState(product.tones?.[0] || "gold");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product, { tone, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <div className="lg:pl-2">
      <p className="eyebrow text-taupe mb-3">{product.category}</p>
      <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-4">
        <p className="text-xl text-ink font-medium">
          {formatPrice(product.price)}
        </p>
        <span className="text-hairline">|</span>
        <div className="flex items-center gap-2">
          <StarRating value={product.rating} size={13} />
          <span className="text-xs text-taupe">
            {product.rating} · {product.reviews} reviews
          </span>
        </div>
      </div>

      <p className="mt-6 text-ink/80 leading-relaxed max-w-prose">
        {product.description}
      </p>

      {/* Tone selector */}
      {product.tones?.length > 1 && (
        <div className="mt-8">
          <p className="eyebrow text-ink mb-3">
            Finish — <span className="text-taupe">{tone === "silver" ? "Sterling Silver" : "18K Gold Plated"}</span>
          </p>
          <div className="flex flex-wrap gap-2.5">
            {product.tones.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTone(t)}
                className={cn(
                  "px-5 py-2.5 text-[11px] tracking-eyebrow uppercase border transition-colors",
                  tone === t
                    ? "border-ink bg-ink text-ivory"
                    : "border-hairline text-ink hover:border-ink",
                )}
              >
                {t === "silver" ? "Silver" : "Gold"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mt-8">
        <p className="eyebrow text-ink mb-3">Quantity</p>
        <div className="inline-flex items-center border border-hairline">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-11 h-11 flex items-center justify-center text-ink hover:bg-wash transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <span className="w-12 text-center text-sm text-ink">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            className="w-11 h-11 flex items-center justify-center text-ink hover:bg-wash transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={handleAdd}
        className={cn(
          "mt-7 w-full inline-flex items-center justify-center gap-2.5 py-4 text-xs tracking-eyebrow uppercase transition-all",
          added
            ? "bg-gold text-ivory"
            : "bg-ink text-ivory hover:bg-ink-soft",
        )}
      >
        <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
        {added ? "Added to Bag" : "Add to Bag"}
      </button>

      <button
        type="button"
        className="mt-3 w-full inline-flex items-center justify-center gap-2 py-3.5 text-[11px] tracking-eyebrow uppercase text-ink border border-hairline hover:border-ink transition-colors"
      >
        <Heart className="w-4 h-4" strokeWidth={1.5} />
        Save to Wishlist
      </button>

      {/* Reassurance row */}
      <ul className="mt-8 grid grid-cols-2 gap-3 text-xs text-ink/75">
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          Free worldwide shipping
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          30-day returns
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          Hypoallergenic
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold" />
          1-year warranty
        </li>
      </ul>
    </div>
  );
}
