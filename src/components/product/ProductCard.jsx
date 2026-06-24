import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const primary = product.images[0];
  const secondary = product.images[1] || product.images[0];

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      imageId: primary.id,
      imageQuery: primary.desc,
      qty: 1,
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block"
    >
      <div className="relative aspect-[4/5] bg-cream overflow-hidden">
        {/* Primary */}
        <img
          alt={product.name}
          data-strk-img-id={primary.id}
          data-strk-img={`[${primary.titleId}] [card-${product.id}-name]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? "opacity-0 scale-[1.03]" : "opacity-100 scale-100"
          }`}
        />
        {/* Secondary */}
        <img
          alt={`${product.name} alternate`}
          data-strk-img-id={secondary.id + "-alt"}
          data-strk-img={`[${secondary.titleId}] [card-${product.id}-name]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100"
          }`}
        />

        {/* Hidden context for image queries */}
        <span id={primary.titleId} className="sr-only">
          {primary.desc}
        </span>
        <span id={secondary.titleId} className="sr-only">
          {secondary.desc}
        </span>

        {/* Quick add */}
        <div
          className={`absolute inset-x-3 bottom-3 transition-all duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button
            onClick={handleAdd}
            className="w-full bg-bone/95 backdrop-blur text-ink hover:bg-ink hover:text-bone transition-colors py-3 text-[11px] tracking-[0.25em] uppercase font-medium"
          >
            + Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-3">
        <h3
          id={`card-${product.id}-name`}
          className="text-[11px] tracking-[0.25em] uppercase font-medium text-ink"
        >
          {product.name}
        </h3>
        <p className="text-sm text-ink shrink-0">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-1 text-xs text-mute">{product.category}</p>
    </Link>
  );
}
