import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";

export default function ProductCard({ product }) {
  const { addItem, justAdded } = useCart();
  const [hovered, setHovered] = useState(false);
  const isJustAdded = justAdded === product.id;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1, openDrawer: true });
  };

  return (
    <Link
      to={`/product/${product.handle}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group block"
    >
      <div className="relative overflow-hidden bg-stone">
        {/* Primary image */}
        <div
          className="fade-stack relative"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          <StrkImage
            imgId={product.imgId}
            query={`[product-card-${product.id}-name] [section-bestsellers-title] [home-title]`}
            ratio="4x5"
            width="800"
            alt={product.name}
          />
        </div>
        {/* Hover image */}
        <div
          className="fade-stack absolute inset-0"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <StrkImage
            imgId={product.imgIdHover}
            query={`[product-card-${product.id}-name] [section-bestsellers-title] [home-title]`}
            ratio="4x5"
            width="800"
            alt={`${product.name} alternate view`}
          />
        </div>

        {/* Quick add button */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className={`absolute left-3 right-3 bottom-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-ivory text-ink text-[10px] uppercase tracking-eyebrow font-medium border border-ink transition-all duration-300 ease-out-soft ${
            hovered || isJustAdded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          } hover:bg-ink hover:text-ivory`}
          aria-label={`Quick add ${product.name} to bag`}
        >
          {isJustAdded ? (
            <>
              <Check className="w-3.5 h-3.5" strokeWidth={1.75} />
              Added
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" strokeWidth={1.75} />
              Quick add
            </>
          )}
        </button>
      </div>

      <div className="pt-4 text-center">
        <p
          id={`product-card-${product.id}-name`}
          className="product-name text-ink"
        >
          {product.name}
        </p>
        <p className="text-sm text-muted mt-2 tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
