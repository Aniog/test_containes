import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";
import { formatPrice, cn } from "@/lib/utils";
import { toast } from "sonner";

const ProductCard = ({ product, priority = false }) => {
  const [hover, setHover] = useState(false);
  const [adding, setAdding] = useState(false);
  const { addItem } = useCart();

  const Primary = product.images[0];
  const Hover = product.images[1] || product.images[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants[0];
    setAdding(true);
    setTimeout(() => {
      addItem(product.id, variant.id, 1);
      setAdding(false);
    }, 200);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-muted">
        {/* Primary image */}
        <div
          className={cn(
            "aspect-[4/5] w-full transition-opacity duration-500",
            hover ? "opacity-0" : "opacity-100"
          )}
        >
          <Primary className="h-full w-full" />
        </div>
        {/* Hover image */}
        <div
          className={cn(
            "absolute inset-0 aspect-[4/5] w-full transition-opacity duration-500",
            hover ? "opacity-100" : "opacity-0"
          )}
        >
          <Hover className="h-full w-full" />
        </div>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add — visible on hover (desktop) / always on touch */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 transition-all duration-500 md:translate-y-3 md:opacity-0",
            hover ? "md:translate-y-0 md:opacity-100" : "",
            "pointer-events-auto"
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={adding}
            className="flex w-full items-center justify-center gap-2 bg-ink/95 backdrop-blur-sm px-4 py-3 text-[11px] font-medium uppercase tracking-widest2 text-cream transition-colors duration-300 hover:bg-accent disabled:opacity-60"
            aria-label={`Add ${product.name} to cart`}
          >
            {adding ? (
              <>
                <Check size={14} strokeWidth={2} /> Added
              </>
            ) : (
              <>
                <Plus size={14} strokeWidth={1.5} /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="product-name">{product.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
            {product.shortDescription}
          </p>
          <div className="mt-1.5">
            <StarRating value={product.rating} size={11} showCount count={product.reviews} />
          </div>
        </div>
        <p className="whitespace-nowrap text-sm text-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
