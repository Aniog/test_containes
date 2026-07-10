import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/store/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { StarRating } from "@/components/ui/Primitives";

// Renders a product card with editorial image crossfade on hover and a
// "Quick add" CTA. Image URLs are pulled from the strk-img system using
// product text IDs.
export default function ProductCard({ product, eager = false }) {
  const [hover, setHover] = useState(false);
  const { addItem } = useCart();
  const titleId = `card-${product.id}-title`;
  const descId = `card-${product.id}-desc`;
  const brandId = "velmora-brand";

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-ivory-dark overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-ivory-light text-cocoa text-[10px] uppercase tracking-[0.18em]">
            {product.badge}
          </span>
        )}
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`${product.id}-img-primary`}
          data-strk-img={`[${descId}] [${titleId}] [${brandId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading={eager ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover product-img-fade",
            hover ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Hover image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={`${product.id}-img-hover`}
          data-strk-img={`[${titleId}] gold jewelry on warm silk`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading="lazy"
          className={cn(
            "absolute inset-0 w-full h-full object-cover product-img-fade scale-105",
            hover ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 p-3 transition-all duration-500 ease-editorial",
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ivory-light/95 backdrop-blur-sm text-cocoa py-3 text-[11px] uppercase tracking-[0.18em] hover:bg-cocoa hover:text-ivory-light transition-colors duration-300"
          >
            Quick add
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-4 px-1">
        <p className="product-name text-cocoa">{product.name}</p>
        <p id={descId} className="sr-only">{product.shortDescription}</p>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-sm text-cocoa tabular-nums">{formatPrice(product.price)}</span>
          <span className="text-hairline">·</span>
          <span className="flex items-center gap-1.5">
            <StarRating rating={product.rating} size={11} />
            <span className="text-[11px] text-muted">({product.reviewCount})</span>
          </span>
        </div>
        {/* Brand text ref (invisible) */}
        <span id={brandId} className="sr-only">Velmora</span>
        {/* The visible id used by the strk-img system */}
        <span id={titleId} className="sr-only">{product.name}</span>
      </div>
    </Link>
  );
}
