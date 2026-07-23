import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1 });
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div className="relative overflow-hidden bg-cream-100 aspect-[4/5]">
        {/* Default image */}
        <div className="absolute inset-0 transition-opacity duration-500 ease-luxury opacity-100 group-hover:opacity-0">
          <ProductImage artwork={product.artwork} tone={product.tone} variant={0} />
        </div>
        {/* Hover / second image */}
        <div className="absolute inset-0 transition-opacity duration-500 ease-luxury opacity-0 group-hover:opacity-100">
          <ProductImage artwork={product.artwork} tone={product.tone} variant={1} />
        </div>

        {/* Quick add pill (visible on hover) */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute left-1/2 -translate-x-1/2 bottom-4 inline-flex items-center gap-2 bg-cream-50/95 backdrop-blur-sm text-ink-900 px-5 py-2.5 text-[11px] font-medium uppercase tracking-btn rounded-sm shadow-soft opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-luxury hover:bg-gold-500"
          aria-label={`Quick add ${product.name} to bag`}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
          Quick add
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="product-name truncate">{product.name}</p>
          <p className="mt-1 text-xs text-ink-700 truncate">{product.subtitle}</p>
        </div>
        <p className="text-sm text-ink-900 font-medium whitespace-nowrap">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
