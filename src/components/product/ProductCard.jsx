import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart, formatPrice } from "@/context/CartContext";
import { PLACEHOLDER_SVG, cn } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);

  const primary = product.images[0];
  const secondary = product.images[1] || product.images[0];

  return (
    <article
      className="group flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative block bg-velmora-bone overflow-hidden aspect-[3/4]"
      >
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={primary.id}
          data-strk-img={primary.q}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src={PLACEHOLDER_SVG}
          loading={eager ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
            hover ? "opacity-0" : "opacity-100",
          )}
        />
        {/* Secondary image */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={secondary.id}
          data-strk-img={secondary.q}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src={PLACEHOLDER_SVG}
          loading="lazy"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            hover ? "opacity-100 scale-[1.03]" : "opacity-0 scale-100",
          )}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="px-3 py-1 bg-velmora-cream text-velmora-espresso text-[10px] uppercase tracking-[0.24em]">
              New
            </span>
          )}
          {product.bestseller && !product.isNew && (
            <span className="px-3 py-1 bg-velmora-espresso text-velmora-cream text-[10px] uppercase tracking-[0.24em]">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 px-4 pb-4 transition-all duration-500 ease-out z-10",
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
          )}
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addItem(product, { quantity: 1 });
            }}
            className="w-full bg-velmora-cream/95 backdrop-blur-sm text-velmora-espresso text-[11px] uppercase tracking-[0.24em] py-3 hover:bg-velmora-espresso hover:text-velmora-cream transition-colors duration-500"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Meta */}
      <div className="pt-5 flex flex-col items-center text-center gap-1.5">
        <h3
          id={product.titleId}
          className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-velmora-espresso"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="text-[12px] text-velmora-mocha italic">
          {product.tagline}
        </p>
        <p className="font-serif text-lg text-velmora-espresso mt-1">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
