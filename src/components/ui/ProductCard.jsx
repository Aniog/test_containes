import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

/**
 * Editorial product card.
 * - Default image is the first product image (imgId-1)
 * - On hover, the card swaps to the second product image (imgId-2) and reveals
 *   a discreet "Add to Cart" affordance that adds the default variant.
 * - On touch devices the swap is driven by a tap on the image.
 */
export default function ProductCard({ product, eager = false }) {
  const [active, setActive] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const defaultVariant = product.variants?.[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, defaultVariant?.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const titleId = `pc-title-${product.id}`;
  const catId = `pc-cat-${product.id}`;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        <div className="relative overflow-hidden bg-ivory-200 aspect-[4/5]">
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={`${product.id}-img-1`}
            data-strk-img={`[${titleId}] [${catId}] [velmora-tagline]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading={eager ? "eager" : "lazy"}
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none",
              active ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          {/* Hover image */}
          <img
            alt=""
            aria-hidden="true"
            data-strk-img-id={`${product.id}-img-2`}
            data-strk-img={`[${titleId}] [${catId}] [velmora-tagline]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            loading="lazy"
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none",
              active ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          {product.badge && (
            <span className="absolute top-3 left-3 bg-ivory-50/90 backdrop-blur-sm text-espresso text-[10px] uppercase tracking-widest2 px-2.5 py-1 font-sans">
              {product.badge}
            </span>
          )}

          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Quick add ${product.name} to bag`}
            className={[
              "absolute z-10 bottom-3 left-3 right-3 bg-espresso text-ivory-50 font-sans text-[11px] uppercase tracking-widest2 py-3 flex items-center justify-center gap-2 transition-all duration-500",
              active || added
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none",
            ].join(" ")}
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
            {added ? "Added" : "Quick Add"}
          </button>
        </div>

        <div className="pt-4 pb-2 px-1">
          <p
            id={catId}
            className="eyebrow text-taupe-500 mb-1.5"
          >
            {product.category}
          </p>
          <h3
            id={titleId}
            className="product-name text-[13px] sm:text-sm leading-snug"
          >
            {product.name}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-sans text-sm tabular-nums text-espresso">
              {formatPrice(product.price)}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-widest2 text-taupe-400">
              ★ {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
