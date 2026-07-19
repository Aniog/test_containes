import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

/**
 * ProductCard — editorial product card.
 * On hover (desktop) the second image fades in. The "Add to Cart" affordance
 * appears on hover and is always visible on touch devices.
 */
export default function ProductCard({ product, eager = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
        {/* Primary image */}
        <img
          alt={product.name}
          loading={eager ? "eager" : "lazy"}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Hover image */}
        <img
          alt=""
          aria-hidden
          loading="lazy"
          data-strk-img-id={product.imgIdHover}
          data-strk-img={`[${product.titleId}] [${product.descId}] editorial second angle detail`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Subtle bottom gradient so quick-add pill always reads on light bg */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-300/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Quick add — appears on hover (desktop) or always (touch) */}
        <button
          type="button"
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2 bg-cream-100/95 backdrop-blur-sm px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-ink-300 shadow-card transition-all duration-500 hover:bg-ink-300 hover:text-cream-100 ${
            hovered
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0 lg:opacity-0"
          } lg:group-hover:translate-y-0 lg:group-hover:opacity-100 max-lg:opacity-100 max-lg:translate-y-0`}
          aria-label={`Add ${product.name} to bag`}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.4} />
          Quick Add
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            id={product.titleId}
            className="product-name truncate text-[15px] text-ink-300"
          >
            {product.name}
          </p>
          <p
            id={product.descId}
            className="mt-1 truncate text-xs text-ink-50"
          >
            {product.category}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-ink-50">
            <Star
              className="h-3 w-3 fill-gold-300 text-gold-300"
              strokeWidth={0}
            />
            <span className="text-xs tabular-nums">
              {product.rating.toFixed(1)}
            </span>
            <span aria-hidden className="text-ink-50/60">
              ·
            </span>
            <span className="text-xs">{product.reviewCount} reviews</span>
          </div>
        </div>
        <p className="shrink-0 font-serif text-base text-ink-300">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
