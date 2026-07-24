import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { StockImage } from "@/components/ui/StockImage";
import { StarRating } from "@/components/ui/StarRating";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

export default function ProductCard({ product, eager = false }) {
  const { addItem, openCart } = useCart();
  const [hover, setHover] = useState(false);

  const primary = product.images[0];
  const secondary = product.images[1] || product.images[0];

  const onQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.variants[0].id, 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-hairline/30">
        <StockImage
          id={primary.id}
          query={primary.query}
          ratio="4x5"
          width={800}
          alt={primary.alt}
          className={cn(
            "transition-opacity duration-500",
            hover && secondary.id !== primary.id ? "opacity-0" : "opacity-100"
          )}
        />
        {secondary.id !== primary.id && (
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500 pointer-events-none",
              hover ? "opacity-100" : "opacity-0"
            )}
            aria-hidden
          >
            <StockImage
              id={secondary.id}
              query={secondary.query}
              ratio="4x5"
              width={800}
              alt={secondary.alt}
            />
          </div>
        )}

        {product.tag && (
          <span className="absolute top-3 left-3 pill !bg-paper/90">
            {product.tag}
          </span>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Quick add ${product.name} to bag`}
          className={cn(
            "absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center bg-ivory text-ink border border-hairline transition-all duration-300",
            hover
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none",
            "hover:bg-ink hover:text-paper hover:border-ink"
          )}
        >
          <Plus size={16} strokeWidth={1.4} />
        </button>
      </div>

      <div className="pt-4 pb-1">
        <div className="flex items-start justify-between gap-2">
          <h3 id={`${product.id}-title`} className="product-name flex-1">
            {product.name}
          </h3>
          <span className="text-[14px] text-ink font-medium pt-0.5">
            {formatPrice(product.price)}
          </span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <StarRating value={product.rating} count={product.reviewCount} size={12} />
        </div>
      </div>
    </Link>
  );
}
