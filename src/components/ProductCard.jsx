import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { StarRating } from "@/components/ui/StarRating";
import { HoverRevealImage } from "@/components/HoverRevealImage";

export function ProductCard({ product, className }) {
  const { addToCart } = useCart();

  const handleQuickAdd = () => {
    addToCart(product, product.colors?.[0] || "Gold", 1);
  };

  return (
    <div className={cn("group", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
        <Link
          to={`/product/${product.id}`}
          className="block h-full w-full"
          aria-hidden="true"
          tabIndex={-1}
        >
          {product.badge && (
            <span className="absolute left-3 top-3 z-10 bg-ivory/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-espresso">
              {product.badge}
            </span>
          )}
          <HoverRevealImage
            id={`product-${product.id}`}
            alt={product.name}
            ratio="4x3"
            width="600"
            className="h-full w-full transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            data-testid="quick-add"
            className="flex items-center gap-2 bg-ivory px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-espresso shadow-soft transition-colors hover:bg-gold hover:text-ivory focus-visible:outline-none"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="block pt-4 text-center">
        <div className="mb-1.5 flex justify-center">
          <StarRating rating={product.rating} size={12} />
        </div>
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm uppercase tracking-widest text-espresso"
        >
          {product.name}
        </h3>
        <p data-testid="product-price" className="mt-1 text-sm text-warm-gray">{formatPrice(product.price)}</p>
      </Link>

      {/* Hidden query text for image search context */}
      <span id={`product-${product.id}-query`} className="sr-only" aria-hidden="true">
        {product.imageQuery}
      </span>
      <span id={`product-${product.id}-hover-query`} className="sr-only" aria-hidden="true">
        {product.hoverQuery}
      </span>
    </div>
  );
}
