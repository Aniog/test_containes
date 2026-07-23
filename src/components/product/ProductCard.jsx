import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useRef, useState } from "react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

/**
 * Editorial product card.
 * - Hover reveals the secondary image.
 * - Quick "Add to Cart" appears on hover/focus.
 */
export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const primaryRef = useRef(null);

  function onAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    const img = primaryRef.current;
    const src = img && img.currentSrc && !img.currentSrc.startsWith("data:image")
      ? img.currentSrc
      : img && img.src && !img.src.startsWith("data:image")
        ? img.src
        : null;
    addItem(product.id, 1, "gold", src);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block reveal"
      aria-label={`${product.name} — ${formatPrice(product.price)}`}
    >
      <div className="relative overflow-hidden bg-bone-50 image-placeholder aspect-[4/5]">
        {/* Primary image */}
        <img
          ref={primaryRef}
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.id}-name] [${product.id}-tagline] [${product.id}-category]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          loading={eager ? "eager" : "lazy"}
          className="relative z-10 w-full h-full object-cover transition-opacity duration-700 ease-out-soft
                     group-hover:opacity-0"
        />
        {/* Secondary image (hover) */}
        <img
          alt=""
          aria-hidden
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.id}-name] detail`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          loading="lazy"
          className="absolute inset-0 z-10 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out-soft
                     group-hover:opacity-100"
        />

        {/* Badges */}
        {product.badges?.[0] && (
          <span className="absolute top-3 left-3 z-20 text-[10px] uppercase tracking-widest2 bg-bone-50/90 text-espresso px-2.5 py-1">
            {product.badges[0]}
          </span>
        )}

        {/* Quick add */}
        <div className="absolute inset-x-3 bottom-3 z-20 flex justify-end">
          <button
            type="button"
            onClick={onAdd}
            className={cn(
              "h-10 px-4 inline-flex items-center justify-center gap-2",
              "bg-bone-50/95 backdrop-blur-sm text-espresso",
              "text-[11px] uppercase tracking-widest2 font-medium",
              "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
              "focus:opacity-100 focus:translate-y-0",
              "transition-all duration-300 ease-out-soft",
              "hover:bg-espresso hover:text-bone-50",
              added && "!bg-espresso !text-bone-50",
            )}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check size={14} strokeWidth={1.5} /> Added
              </>
            ) : (
              <>
                <Plus size={14} strokeWidth={1.5} /> Quick add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="pt-4 text-center">
        <p
          id={`${product.id}-name`}
          className="product-name"
        >
          {product.name}
        </p>
        <p
          id={`${product.id}-tagline`}
          className="mt-1.5 text-xs text-espresso/60"
        >
          {product.tagline}
        </p>
        <p
          id={`${product.id}-category`}
          className="mt-2 text-sm text-espresso/85"
        >
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
