import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "../../strk-img-config.json";
import { formatPrice, getProductById, VARIANT_TONES } from "../../data/products.js";
import { useCart } from "../../context/CartContext.jsx";
import Rating from "../ui/Rating.jsx";
import { cn } from "../../lib/cn.js";

// A product card used in grids across the site. The card swaps its
// primary image for the secondary on hover (desktop only) and exposes
// a quick "Add" control. Both images are rendered in the DOM so the
// browser can preload them.
export default function ProductCard({ productId, eagerLoad = false }) {
  const product = getProductById(productId);
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId]);

  if (!product) return null;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, "gold", 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  const primaryQuery = `[${product.id}-name] [velmora-product-card]`;
  const secondaryQuery = `[${product.id}-name] [velmora-product-card]`;

  return (
    <Link
      to={`/product/${product.id}`}
      ref={containerRef}
      className="group block"
      aria-label={product.name}
    >
      <div className="relative overflow-hidden bg-ink-900">
        <div className="relative aspect-[4/5] w-full">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgIds.primary}
            data-strk-img={primaryQuery}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            loading={eagerLoad ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
          />
          {/* Secondary image revealed on hover (desktop). The seed
              catalog resolves to one image per product, so we reuse the
              primary slot id and apply a small scale on hover instead.
              Real catalogs can ship a distinct secondary key. */}
          <img
            data-strk-img-id={product.imgIds.primary}
            data-strk-img={secondaryQuery}
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full origin-center object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          />
          {/* Warm underlay so placeholders still feel luxe */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/0 via-ink-900/20 to-ink-950/70"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(212,168,87,0.10),transparent_60%)]"
          />

          {product.badge && (
            <span className="absolute left-3 top-3 z-10 inline-flex items-center bg-ink-950/80 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-widest2 text-gold-300 backdrop-blur">
              {product.badge}
            </span>
          )}

          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              "absolute bottom-3 left-3 right-3 z-10 hidden h-10 items-center justify-center gap-2 rounded-full font-sans text-[10px] font-medium uppercase tracking-wider2 transition-all duration-300 ease-out md:flex",
              added
                ? "bg-gold-300 text-ink-950"
                : "bg-ink-950/85 text-ink-100 opacity-0 backdrop-blur group-hover:opacity-100 hover:bg-gold-400 hover:text-ink-950"
            )}
            aria-label={`Add ${product.name} to bag`}
          >
            {added ? (
              <>
                <Check size={14} strokeWidth={2} /> Added
              </>
            ) : (
              <>
                <Plus size={14} strokeWidth={1.8} /> Quick add
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            id={`${product.id}-name`}
            className="font-serif text-[15px] font-medium uppercase tracking-wider2 text-ink-100"
          >
            <span className="sr-only">Velmora demi-fine jewelry </span>
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-center gap-2">
            <Rating value={product.rating} size={11} />
            <span className="font-sans text-[11px] text-ink-400">
              ({product.reviewCount})
            </span>
          </div>
        </div>
        <span className="font-sans text-[13px] font-medium tracking-wide text-gold-300">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
