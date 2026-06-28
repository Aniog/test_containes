import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus } from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const titleId = product.queries.heroTitleId;
  const blurbId = product.queries.heroDescId;
  const query = `[${blurbId}] [${titleId}]`;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { variantId: "gold", quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-bone">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.images[0].id}
          data-strk-img={query}
          data-strk-img-ratio="4x5"
          data-strk-img-width={product.images[0].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
            hovered ? "scale-105 opacity-0" : "scale-100 opacity-100",
          )}
          loading={eager ? "eager" : "lazy"}
        />
        {/* Hover (secondary) image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.images[1]?.id || `${product.images[0].id}-alt`}
          data-strk-img={query}
          data-strk-img-ratio="4x5"
          data-strk-img-width={product.images[1]?.width || 800}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
            hovered ? "scale-105 opacity-100" : "scale-100 opacity-0",
          )}
          loading="lazy"
        />

        {/* Badges */}
        {product.badges?.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <span
                key={b}
                className="bg-velmora-ivory/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-velmora-ink backdrop-blur-sm"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          className={cn(
            "absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 bg-velmora-ink py-3 text-[11px] uppercase tracking-[0.22em] text-velmora-cream transition-all duration-500",
            "hover:bg-velmora-gold hover:text-velmora-ink",
            hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          )}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
          Add to Cart
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            id={titleId}
            className="truncate text-[12px] font-medium uppercase tracking-[0.2em] text-velmora-ink"
          >
            {product.name}
          </h3>
          <p
            id={blurbId}
            className="mt-1.5 line-clamp-1 text-[12px] text-velmora-taupe"
          >
            {product.blurb}
          </p>
        </div>
        <span className="whitespace-nowrap text-[13px] tabular-nums text-velmora-ink">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
