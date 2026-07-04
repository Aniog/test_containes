import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product, eager = false }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  function onQuickAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, product.defaultVariant, 1);
    toast.success(`${product.name} added to your bag.`);
  }

  return (
    <Link
      to={`/product/${product.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block"
    >
      <div className="relative overflow-hidden bg-ivory aspect-[3/4]">
        <img
          alt={product.name}
          data-strk-img-id={product.imgId1}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className={[
            "pointer-events-none absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
            hovered ? "opacity-0" : "opacity-100",
          ].join(" ")}
          loading={eager ? "eager" : "lazy"}
        />
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          className={[
            "pointer-events-none absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
            hovered ? "opacity-100" : "opacity-0",
          ].join(" ")}
          loading="lazy"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/95 text-ink text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add — slides up on hover */}
        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className={[
            "absolute left-3 right-3 bottom-3 bg-ink text-cream py-3 text-[11px] uppercase tracking-[0.22em] font-medium",
            "flex items-center justify-center gap-2 transition-all duration-400 ease-editorial",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
          ].join(" ")}
        >
          <Plus className="w-3.5 h-3.5" />
          Quick Add
        </button>
      </div>

      <div className="pt-4 pb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="product-name text-[13px] truncate">{product.name}</h3>
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe mt-1">
            {product.variants.find((v) => v.id === product.defaultVariant)?.label}
          </p>
        </div>
        <span className="text-sm text-ink font-medium tabular-nums whitespace-nowrap">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
