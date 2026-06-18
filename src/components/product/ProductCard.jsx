import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { variant: product.variants?.[0] || "Gold", quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-bone aspect-[3/4]">
        {/* main image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgIds.main}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
            hovered ? "opacity-0" : "opacity-100"
          )}
          loading={eager ? "eager" : "lazy"}
        />
        {/* hover image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={product.imgIds.hover}
          data-strk-img={`[${product.titleId}] worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
            hovered ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
        />

        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-500 ease-editorial",
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-cream/95 backdrop-blur text-ink uppercase tracking-widest2 text-[11px] py-3 hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>

        {product.bestseller ? (
          <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-2.5 py-1">
            Bestseller
          </span>
        ) : null}
      </div>

      <div className="pt-5 pb-2">
        <h3
          id={product.titleId}
          className="font-serif uppercase tracking-wider2 text-sm md:text-[15px] text-ink"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="mt-1.5 font-sans text-xs text-taupe line-clamp-1"
        >
          {product.tagline}
        </p>
        <p className="mt-2 font-sans text-sm text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
