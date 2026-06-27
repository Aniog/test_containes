import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { variant: product.variants?.[0], quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-soft">
        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 bg-cream/95 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-espresso">
            {product.badge}
          </span>
        )}

        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgPrimaryId}
          data-strk-img={product.primaryQuery}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out"
          style={{ opacity: hover ? 0 : 1 }}
        />
        {/* Secondary (on hover) */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgSecondaryId}
          data-strk-img={product.secondaryQuery}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out"
          style={{
            opacity: hover ? 1 : 0,
            transform: hover ? "scale(1.04)" : "scale(1)",
          }}
        />

        {/* Quick add */}
        <div
          className="absolute inset-x-3 bottom-3 transition-all duration-500"
          style={{
            opacity: hover ? 1 : 0,
            transform: hover ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-cream/95 py-3 text-[10px] uppercase tracking-[0.28em] text-espresso backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-cream"
          >
            + Quick Add
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.24em] text-espresso transition-colors duration-300 group-hover:text-gold-deep">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-muted">{product.subcategory}</p>
        </div>
        <span className="font-serif text-lg text-espresso">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
