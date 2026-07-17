import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { tone: product.tone || "gold", quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
            hovered && product.img2Id ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Secondary hover image */}
        {product.img2Id && (
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.descId}] ${product.type} worn`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/95 text-ink text-[10px] uppercase tracking-[0.16em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-400",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 backdrop-blur-sm text-ink text-xs uppercase tracking-[0.16em] py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-cream transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-[0.14em] text-ink leading-tight"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="mt-1.5 text-sm text-ink-soft tracking-wide">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
