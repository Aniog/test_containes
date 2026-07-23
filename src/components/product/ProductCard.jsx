import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCT_IMAGE_IDS } from "@/lib/products";

/**
 * Reusable product card.
 * - Hover: reveals second image (data-strk-img) and quick-add.
 * - Data-strk-img-id is stable across renders.
 * - ID attributes match the data-strk-img query exactly.
 */
export default function ProductCard({ product, eagerImage = false }) {
  const { addItem } = useCart();
  const imgIds = PRODUCT_IMAGE_IDS[product.id];
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const nameId = `product-${product.id}-name`;
  const shortId = `product-${product.id}-short`;
  const primaryImgId = imgIds?.primary;
  const hoverImgId = imgIds?.hover;

  const defaultTone = product.toneOptions?.[0];

  return (
    <article ref={containerRef} className="product-card group">
      <Link
        to={`/product/${product.id}`}
        className="block"
        aria-label={`View ${product.name}`}
      >
        <div className="product-card-media aspect-[4/5]">
          {/* Primary image */}
          <img
            alt={product.name}
            data-strk-img-id={primaryImgId}
            data-strk-img={imgIds?.primaryQuery}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            loading={eagerImage ? "eager" : "lazy"}
            decoding="async"
          />
          {/* Hover image */}
          {hoverImgId && (
            <img
              className="product-card-hover-img"
              alt={`${product.name} alternate view`}
              data-strk-img-id={hoverImgId}
              data-strk-img={imgIds?.hoverQuery}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              loading="lazy"
              decoding="async"
            />
          )}

          {/* Wishlist-style heart (decorative) */}
          <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ivory-50/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="text-cocoa-900"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
        </div>
      </Link>

      {/* Quick add — appears on hover */}
      <button
        type="button"
        onClick={() => addItem(product, defaultTone, 1)}
        className="absolute left-4 right-4 bottom-[112px] md:bottom-[124px] bg-ivory-50/95 backdrop-blur-sm text-cocoa-900 text-[11px] font-medium tracking-button uppercase py-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-sm hover:bg-espresso-900 hover:text-ivory-50"
      >
        <span className="inline-flex items-center gap-2">
          <Plus className="w-3.5 h-3.5" strokeWidth={1.6} />
          Quick Add
        </span>
      </button>

      {/* Meta */}
      <div className="pt-4 pb-1 flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 id={nameId} className="product-name text-cocoa-900 truncate">
            {product.name}
          </h3>
          <p className="text-sm text-cocoa-900 whitespace-nowrap">
            {formatPrice(product.price)}
          </p>
        </div>
        <p id={shortId} className="text-[13px] text-taupe-500 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Star className="w-3 h-3 fill-champagne-500 text-champagne-500" />
          <span className="text-xs text-cocoa-700">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-xs text-taupe-500">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </article>
  );
}
