import React, { useState } from "react";
import { ShoppingBag, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StarRating from "./StarRating";
import ProductAccordion from "./ProductAccordion";

const VARIANTS = [
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
];

export default function ProductInfo({ product }) {
  const { addItem } = useCart();
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold">
        {product.category}
      </p>
      <h1
        id="product-heading"
        className="product-name mt-2 text-3xl font-medium md:text-4xl"
      >
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-4">
        <p className="text-2xl font-medium">{formatPrice(product.price)}</p>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
      </div>

      <p className="mt-6 text-base leading-relaxed text-velmora-muted">
        {product.description}
      </p>

      <div className="mt-8">
        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
          Tone
        </span>
        <div className="mt-3 flex gap-3">
          {VARIANTS.map((v) => (
            <button
              key={v.value}
              onClick={() => setVariant(v.value)}
              className={cn(
                "rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all",
                variant === v.value
                  ? "border-velmora-dark bg-velmora-dark text-velmora-cream"
                  : "border-velmora-border bg-transparent text-velmora-dark hover:border-velmora-dark"
              )}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
          Quantity
        </span>
        <div className="mt-3 inline-flex items-center border border-velmora-border">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-4 py-2.5 text-sm transition-colors hover:bg-velmora-stone"
          >
            −
          </button>
          <span className="min-w-[2.5rem] text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-4 py-2.5 text-sm transition-colors hover:bg-velmora-stone"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-3">
        <button
          onClick={handleAdd}
          className={cn(
            "flex w-full items-center justify-center gap-2 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition-all",
            added
              ? "bg-green-800 text-velmora-cream"
              : "bg-velmora-gold text-velmora-dark hover:bg-velmora-gold-hover"
          )}
        >
          <ShoppingBag className="h-4 w-4" />
          {added ? "Added to Bag" : "Add to Cart"}
        </button>
        <div className="flex items-center justify-center gap-2 text-xs text-velmora-muted">
          <Truck className="h-3.5 w-3.5" />
          Free shipping on orders over $75
        </div>
      </div>

      <div className="mt-10">
        <ProductAccordion product={product} />
      </div>
    </div>
  );
}
