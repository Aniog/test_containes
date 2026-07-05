import React, { useState } from "react";
import { Minus, Plus, Heart, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/StarRating";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

const ProductInfo = ({ product }) => {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedVariant = product.variants.find((v) => v.id === variantId);

  const onAdd = () => {
    addItem(product, { variant: selectedVariant, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="lg:pl-6">
      <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-3">
        {product.eyebrow}
      </p>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl uppercase tracking-product text-ink leading-[1.05]">
        {product.name}
      </h1>
      <div className="mt-5 flex items-center gap-4">
        <p className="font-sans text-xl text-ink tabular-nums">
          {formatPrice(product.price)}
        </p>
        <span className="text-ink/20">·</span>
        <StarRating value={product.rating} count={product.reviewCount} />
      </div>
      <p className="mt-7 text-ink/75 leading-relaxed text-[15px] max-w-md">
        {product.shortDescription}
      </p>

      {/* Variant selector */}
      <div className="mt-9">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] uppercase tracking-eyebrow text-ink">
            Finish
          </p>
          <p className="text-[11px] text-taupe">{selectedVariant.label}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((v) => {
            const isActive = v.id === variantId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setVariantId(v.id)}
                className={cn(
                  "px-5 h-11 border text-[11px] uppercase tracking-button font-sans flex items-center gap-2.5 transition-all duration-300",
                  isActive
                    ? "border-ink bg-ink text-ivory"
                    : "border-ink/20 text-ink hover:border-ink"
                )}
              >
                <span
                  className={cn(
                    "h-4 w-4 rounded-full border",
                    v.tone === "gold" ? "bg-gold border-gold" : "bg-ink/30 border-ink/40"
                  )}
                  aria-hidden="true"
                />
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-9">
        <p className="text-[11px] uppercase tracking-eyebrow text-ink mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-ink/15">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="h-11 w-11 flex items-center justify-center text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
          >
            <Minus size={14} strokeWidth={1.5} />
          </button>
          <span className="w-12 text-center font-sans tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="h-11 w-11 flex items-center justify-center text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
          >
            <Plus size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart + wishlist */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          size="lg"
          onClick={onAdd}
          fullWidth
          className="sm:flex-1"
        >
          {added ? "Added to Bag" : "Add to Bag"}
        </Button>
        <button
          type="button"
          aria-label="Save to wishlist"
          className="h-14 w-14 sm:w-14 border border-ink/20 flex items-center justify-center text-ink hover:bg-ink hover:text-ivory transition-colors"
        >
          <Heart size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Trust strip */}
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] uppercase tracking-eyebrow text-taupe">
        <li className="flex items-center gap-2">
          <Truck size={14} strokeWidth={1.5} className="text-gold" />
          Free shipping
        </li>
        <li className="flex items-center gap-2">
          <RefreshCw size={14} strokeWidth={1.5} className="text-gold" />
          30-day returns
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck size={14} strokeWidth={1.5} className="text-gold" />
          Hypoallergenic
        </li>
      </ul>
    </div>
  );
};

export default ProductInfo;
