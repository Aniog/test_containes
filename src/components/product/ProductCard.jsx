import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import JewelryImage from "@/components/ui/JewelryImage";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, eager = false, className }) {
  const { addItem } = useCart();
  const primaryId = product.images[0];
  const altId = product.images[1] || product.images[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1, null);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("group block", className)}
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-warm">
        <div className="absolute inset-0 transition-opacity duration-700 ease-editorial group-hover:opacity-0">
          <JewelryImage id={primaryId} className="w-full h-full" />
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-editorial group-hover:opacity-100">
          <JewelryImage id={altId} className="w-full h-full" />
        </div>

        {/* Quick add — appears on hover (desktop) or always on tap (mobile) */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute left-3 right-3 bottom-3 md:left-4 md:right-4 md:bottom-4
                     inline-flex items-center justify-center gap-2
                     bg-ink/95 text-ivory font-sans text-[11px] uppercase tracking-widest2
                     py-3
                     opacity-0 translate-y-2
                     group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-500 ease-editorial
                     hover:bg-gold hover:text-ink
                     md:[&]:opacity-0
                     max-md:opacity-100 max-md:translate-y-0"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
          Quick add
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="product-name text-ink group-hover:text-gold-deep transition-colors duration-300">
            {product.name}
          </h3>
          <p className="mt-1 font-sans text-xs text-mushroom italic">
            {product.tagline}
          </p>
        </div>
        <span className="price text-ink">{formatPrice(product.price)}</span>
      </div>
    </Link>
  );
}
