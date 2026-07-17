import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * ProductCard — hover reveals a second image, plus a quick "Add to Cart".
 * Used on Home bestsellers, Collection grid, and Related Products.
 */
export function ProductCard({ product, eager = false, className }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const descId = `${product.id}-card-desc`;
  const nameId = `${product.id}-card-name`;

  return (
    <article
      className={cn("group relative flex flex-col", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-bone"
        aria-label={`View ${product.name}`}
      >
        {/* Primary image */}
        <img
          data-strk-img-id={`${product.id}-card-1`}
          data-strk-img={`[${descId}] [${nameId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          loading={eager ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out",
            hovered ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Secondary image (revealed on hover) */}
        {product.gallery?.[1] && (
          <img
            data-strk-img-id={`${product.id}-card-2`}
            data-strk-img={`[${descId}] [${nameId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            loading="lazy"
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Quick add button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product.id, 1);
          }}
          className={cn(
            "absolute bottom-3 right-3 z-10 grid h-10 w-10 place-items-center bg-ivory/95 text-ink shadow-md transition-all duration-200 ease-out hover:bg-gold hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
            // On mobile always visible, on desktop show only on hover
            "opacity-100 md:translate-y-0",
            hovered ? "md:opacity-100" : "md:opacity-0 md:translate-y-1"
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </Link>

      <Link to={`/product/${product.id}`} className="mt-4 block">
        <h3
          id={nameId}
          className="product-label text-ink transition-colors duration-200 group-hover:text-gold-deep"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.tagline}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
          {product.tagline}
        </p>
        <div className="mt-2.5 flex items-center justify-between gap-3">
          <p className="text-sm font-medium tabular-nums text-ink">
            {formatPrice(product.price)}
          </p>
          <p className="flex items-center gap-1 text-[0.6875rem] text-ink-soft">
            <Star className="h-3 w-3 fill-gold text-gold" strokeWidth={0} />
            <span className="tabular-nums">{product.rating.toFixed(1)}</span>
            <span aria-hidden="true">·</span>
            <span>{product.reviewCount}</span>
          </p>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
