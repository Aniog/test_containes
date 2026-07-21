import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/data/products.js";
import { cn } from "@/lib/utils.js";
import StarRating from "@/components/ui/StarRating.jsx";

/**
 * ProductCard — used on home, shop, and related products.
 * Hover reveals the second image and a quick "Add to Cart".
 */
export default function ProductCard({ product, priority = false, onAdd }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { qty: 1, tone: product.tone?.[0] || null });
    if (onAdd) onAdd(product);
  };

  return (
    <article
      ref={containerRef}
      className="group relative flex flex-col"
    >
      <Link
        to={`/product/${product.slug}`}
        className="block"
        aria-label={`${product.name}, ${formatPrice(product.price)}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900">
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          {/* Hover image */}
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />

          {/* Bestseller ribbon */}
          {product.bestseller && (
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-cream-100/90 backdrop-blur-sm text-ink-800 text-[10px] tracking-[0.28em] uppercase">
              Bestseller
            </div>
          )}

          {/* Quick add — appears on hover (desktop) / always on touch */}
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              "absolute left-3 right-3 bottom-3 btn-primary py-2.5 text-[10px]",
              "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
              "transition-all duration-500",
              // Always visible on touch (no hover)
              "max-sm:opacity-100 max-sm:translate-y-0 max-sm:bg-ink-800/85 max-sm:backdrop-blur-sm max-sm:border-ink-800/0"
            )}
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Add to Bag
          </button>
        </div>

        <div className="pt-4 pb-2 text-center">
          <h3 id={product.titleId} className="product-name text-ink-800">
            {product.name}
          </h3>
          <p
            id={product.descId}
            className="mt-1.5 text-[11px] tracking-[0.18em] uppercase text-muted-500"
          >
            {product.material}
          </p>
          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="text-sm text-ink-800 font-medium">
              {formatPrice(product.price)}
            </span>
            <StarRating value={product.rating} size={11} />
          </div>
        </div>
      </Link>
    </article>
  );
}
