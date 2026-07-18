import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StarRating from "./StarRating";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-surface aspect-[4/5]">
        <img
          alt={product.name}
          data-strk-img-id={`${product.id}-img-1`}
          data-strk-img={`[${product.id}-tagline] [${product.id}-name]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover img-fade",
            hover ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={`${product.id}-img-2`}
          data-strk-img={`[${product.id}-tagline] [${product.id}-name] detail`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading="lazy"
          className={cn(
            "absolute inset-0 w-full h-full object-cover img-fade",
            hover ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Quick add (reveal on hover, mobile always visible) */}
        <div
          className={cn(
            "absolute left-0 right-0 bottom-0 px-3 pb-3 transition-all duration-500 ease-out",
            hover ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 md:opacity-0 opacity-100"
          )}
        >
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              "w-full inline-flex items-center justify-center gap-2 h-11 text-[11px] uppercase tracking-widest2 font-medium transition-colors duration-300",
              added
                ? "bg-gold text-canvas"
                : "bg-espresso text-canvas hover:bg-espresso/90"
            )}
          >
            {added ? (
              <span>Added</span>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              id={`${product.id}-name`}
              className="font-serif text-sm md:text-[15px] uppercase tracking-[0.18em] text-espresso truncate"
            >
              {product.name}
            </h3>
            <p
              id={`${product.id}-tagline`}
              className="text-xs text-taupe mt-1 line-clamp-1"
            >
              {product.tagline}
            </p>
          </div>
          <span className="text-sm text-espresso tracking-wide whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[11px] text-taupe">
          <StarRating value={product.rating} size="sm" />
          <span>({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
