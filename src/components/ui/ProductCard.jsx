import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { StarRating } from "./StarRating";

export function ProductCard({ product, className, showQuickAdd = true }) {
  const { addToCart } = useCart();
  return (
    <article className={cn("product-card group", className)}>
      <Link
        to={`/product/${product.id}`}
        className="block img-wrap relative overflow-hidden bg-cream-200"
        aria-label={product.name}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="primary-img absolute inset-0 w-full h-full object-cover zoom-img"
            loading="lazy"
          />
          <img
            src={product.image}
            alt=""
            aria-hidden="true"
            className="secondary-img absolute inset-0 w-full h-full object-cover zoom-img"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-cream/95 text-ink text-[0.6rem] tracking-widest2 uppercase font-medium px-2.5 py-1.5">
              {product.badge}
            </span>
          )}
          {showQuickAdd && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, { tone: "Gold", qty: 1 });
              }}
              className="quick-add absolute left-0 right-0 bottom-0 z-10 bg-ink text-cream py-3 text-[0.66rem] tracking-widest2 uppercase font-medium flex items-center justify-center gap-2 hover:bg-gold hover:text-ink transition-colors"
              aria-label={`Quick add ${product.name} to cart`}
            >
              <ShoppingBag size={14} strokeWidth={1.6} />
              Add to Cart
            </button>
          )}
        </div>
      </Link>
      <div className="pt-4 flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/product/${product.id}`}
            className="product-name text-ink hover:text-gold transition-colors line-clamp-1"
          >
            {product.name}
          </Link>
          <span className="font-serif text-[1.05rem] text-ink">{formatPrice(product.price)}</span>
        </div>
        <div className="flex items-center justify-between">
          <StarRating value={product.rating} count={product.reviews} size={12} />
          <span className="text-[0.65rem] tracking-widest2 uppercase text-muted">
            {product.tone}
          </span>
        </div>
      </div>
    </article>
  );
}
