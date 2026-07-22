import { useRef } from "react";
import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";

export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div
        ref={containerRef}
        className="relative aspect-square overflow-hidden bg-blush"
      >
        {/* Default image */}
        <div className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0">
          <StrkImage
            imgId={product.imgId}
            query={`[${product.descId}] [${product.titleId}] warm lit gold jewelry on dark warm neutral background editorial product photography`}
            ratio="1x1"
            width={800}
            alt={product.name}

            eager={eager}
          />
        </div>
        {/* Hover image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <StrkImage
            imgId={product.imgId2}
            query={`[${product.descId}] [${product.titleId}] close up gold jewelry on model soft natural light`}
            ratio="1x1"
            width={800}
            alt={`${product.name} alternate view`}

          />
        </div>

        {/* Quick add — visible on hover (desktop) */}
        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            "absolute left-4 right-4 bottom-4 py-3 bg-ink text-bone",
            "text-eyebrow uppercase tracking-[0.22em]",
            "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-300 ease-editorial",
            "hover:bg-champagne hover:text-ink"
          )}
          aria-label={`Add ${product.name} to bag`}
        >
          <span className="inline-flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Quick Add
          </span>
        </button>

        {/* Mobile floating add — always visible */}
        <button
          type="button"
          onClick={handleAdd}
          className="md:hidden absolute top-3 right-3 w-9 h-9 grid place-items-center bg-bone/95 text-ink shadow-chip"
          aria-label={`Add ${product.name} to bag`}
        >
          <Plus className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>

      <div className="pt-5 pb-2 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            id={product.titleId}
            className="product-name text-[12px] truncate"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="text-small text-muted mt-1 truncate">
            {product.eyebrow}
          </p>
        </div>
        <p className="text-small text-ink font-medium tabular-nums whitespace-nowrap">
          {formatPrice(product.price)}
        </p>
      </div>

      <div className="flex items-center gap-1 text-champagne">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-3 h-3",
                i < Math.floor(product.rating)
                  ? "fill-champagne text-champagne"
                  : "text-hairline"
              )}
              strokeWidth={1.2}
            />
          ))}
        </div>
        <span className="text-[11px] text-muted ml-1">({product.reviews})</span>
      </div>
    </Link>
  );
}
