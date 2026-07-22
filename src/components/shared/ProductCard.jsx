import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, className }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.tone?.[0] || "gold");
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn("group block", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream">
        <img
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`[product-${product.id}-name] [product-${product.id}-tagline] jewelry gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700",
            hovered ? "scale-105" : "scale-100"
          )}
        />
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[product-${product.id}-name] worn jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0"
          )}
        />
        <button
          onClick={handleQuickAdd}
          className={cn(
            "absolute bottom-4 left-4 right-4 flex h-11 items-center justify-center gap-2 bg-brand-ivory text-xs font-medium uppercase tracking-widest text-brand-charcoal shadow-sm transition-all duration-300 hover:bg-brand-charcoal hover:text-brand-ivory",
            hovered || added ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          <ShoppingBag className="h-4 w-4" />
          {added ? "Added" : "Quick Add"}
        </button>
      </div>
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 text-brand-gold">
          <Star className="h-3 w-3 fill-current" />
          <span className="text-[11px] text-brand-charcoal/70">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <h3
          id={`product-${product.id}-name`}
          className="mt-2 text-[12px] font-medium uppercase tracking-[0.2em] text-brand-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={`product-${product.id}-tagline`}
          className="mt-1 text-xs text-brand-taupe"
        >
          {product.tagline}
        </p>
        <p className="mt-2 text-sm font-medium text-brand-charcoal">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
