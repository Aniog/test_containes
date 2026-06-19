import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function ProductCard({ product, priority = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ productId: product.id, variantId: product.variants[0].id, quantity: 1 });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "product-img-layer",
            hovered && product.images[1] ? "opacity-0" : "opacity-100"
          )}
        />
        {/* Secondary image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className={cn(
              "product-img-layer",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-bone text-ink text-[10px] uppercase tracking-eyebrow">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={cn(
            "absolute inset-x-4 bottom-4 transition-all duration-500 ease-soft-out",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-bone text-ink border border-ink py-3 text-[11px] uppercase tracking-product font-medium hover:bg-ink hover:text-bone transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
            Add to Bag
          </button>
        </div>
      </div>

      <div className="pt-5 px-1">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={cn(
              "product-name text-xs transition-colors duration-300",
              hovered ? "text-ink" : "text-ink"
            )}
          >
            {product.name}
          </h3>
          <span className="text-sm text-ink whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[11px] text-ink-soft">
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.round(product.rating)
                    ? "fill-gold text-gold"
                    : "text-line"
                )}
                strokeWidth={1}
              />
            ))}
          </div>
          <span className="tabular-nums">{product.rating.toFixed(1)}</span>
          <span className="text-ink-soft/70">·</span>
          <span>{product.reviews} reviews</span>
        </div>
      </div>
    </Link>
  );
}