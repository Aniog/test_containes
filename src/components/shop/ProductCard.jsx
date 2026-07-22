import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus, Star } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";
import { useCart } from "@/context/CartContext";

/**
 * Editorial product card.
 * - On hover (desktop only): reveals a second "lifestyle" crop + quick add.
 * - Mobile: always shows the primary crop and an add-to-cart appears on
 *   tap-only via a small "+" button overlay.
 */
export default function ProductCard({ product, eager = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, { tone: product.tone?.[0] || "gold" });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream-deep aspect-[4/5]">
        {/* Primary image — uses the seed query */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-elegant",
            hovered ? "opacity-0" : "opacity-100",
          )}
        >
          <StockImage
            id={`card-primary-${product.id}`}
            query={product.imageQuery}
            alt={product.name}
            ratio="4x5"
            width={700}
            className="w-full h-full"
            loading={eager ? "eager" : "lazy"}
          />
        </div>

        {/* Secondary image — appears on hover (desktop). Same query so we don't
            blow the image budget. The swap is a CSS opacity transition. */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-elegant",
            hovered ? "opacity-100" : "opacity-0",
          )}
        >
          <StockImage
            id={`card-secondary-${product.id}`}
            query={product.imageQueryAlt || product.imageQuery}
            alt={`${product.name} alternate view`}
            ratio="4x5"
            width={700}
            className="w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm text-espresso text-[10px] uppercase tracking-eyebrow px-2.5 py-1 font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add — visible on hover (desktop) and on tap-target (mobile) */}
        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Add ${product.name} to bag`}
          className={cn(
            "absolute bottom-3 right-3 h-10 w-10 flex items-center justify-center bg-cream text-espresso",
            "shadow-soft transition-all duration-500 ease-elegant",
            "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
            "md:opacity-0",
            "max-md:opacity-100 max-md:translate-y-0",
            "hover:bg-champagne",
          )}
        >
          <Plus className="h-4 w-4" strokeWidth={1.6} />
        </button>
      </div>

      <div className="pt-4 pb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xs uppercase tracking-product font-medium text-espresso truncate">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-taupe truncate">{product.subtitle}</p>
        </div>
        <p className="text-sm text-espresso font-medium whitespace-nowrap mt-0.5">
          {formatPrice(product.price)}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-[11px] text-taupe">
        <Star className="h-3 w-3 fill-champagne text-champagne" />
        <span>{product.rating.toFixed(1)}</span>
        <span aria-hidden="true">·</span>
        <span>{product.reviews} reviews</span>
      </div>
    </Link>
  );
}
