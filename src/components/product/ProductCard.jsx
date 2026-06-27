import * as React from "react";
import { Link } from "react-router-dom";
import { useCartDispatch, formatPrice } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export function ProductCard({ product, priority = false, className }) {
  const { addItem } = useCartDispatch();
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      className={cn("group relative", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-cream aspect-[3/4]">
          {/* Primary image */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={`product-${product.id}-primary`}
            data-strk-img={product.imageQueries?.primary || `gold jewelry product ${product.name}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            loading={priority ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Secondary image (crossfade on hover) */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            aria-hidden="true"
            data-strk-img-id={`product-${product.id}-secondary`}
            data-strk-img={product.imageQueries?.secondary || product.imageQueries?.primary || `gold jewelry ${product.name}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            loading="lazy"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out pointer-events-none",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
          {/* Quick add overlay — anchored to the image, sibling of the link content */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, { variant: product.tone === "gold" ? "Gold" : "Silver" });
            }}
            aria-label={`Quick add ${product.name} to bag`}
            className={cn(
              "absolute right-4 bottom-4 z-20",
              "bg-ivory text-ink border border-ink/10",
              "h-10 px-5 text-[11px] uppercase tracking-button font-medium",
              "transition-all duration-300 ease-out",
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1 pointer-events-none",
              "hover:bg-cocoa hover:text-bone hover:border-cocoa"
            )}
          >
            Quick Add
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.id}`} className="block mt-5">
        <h3 className="font-serif uppercase tracking-product text-base text-ink text-center group-hover:text-gold-deep transition-colors duration-300">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-ink-muted text-center">
          {formatPrice(product.price)}
        </p>
      </Link>
    </article>
  );
}
