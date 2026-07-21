import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import RatingStars from "@/components/product/RatingStars";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart();
  if (!product) return null;

  const [primary, secondary, thumb] = product.images;
  const mono = product.name?.[0] || "V";

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, { variant: "Gold", qty: 1, open: true });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      <div className="media-swap relative">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-[0.24em] font-medium bg-ivory text-espresso px-2.5 py-1 rounded-sm shadow-soft">
            {product.badge}
          </span>
        )}

        <div className="primary">
          <StrkImage
            id={primary.id}
            query={`[${primary.queryRef}]`}
            ratio={primary.ratio}
            width={primary.width}
            monogram={mono}
            alt={product.name}
            priority={priority}
          />
        </div>
        <div className="secondary">
          <StrkImage
            id={secondary.id}
            query={`[${secondary.queryRef}]`}
            ratio={secondary.ratio}
            width={secondary.width}
            monogram={mono}
            tone="dark"
            alt={`${product.name} alternate view`}
          />
        </div>

        {/* Quick add — slides up on hover */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute left-3 right-3 bottom-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-velmora bg-ivory text-espresso border border-espresso/15 hover:bg-espresso hover:text-ivory py-3 text-[11px] tracking-[0.24em] uppercase font-medium inline-flex items-center justify-center gap-2"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} /> Quick Add
        </button>
      </div>

      <div className="pt-4 sm:pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="product-title text-[13px] sm:text-sm text-espresso truncate">
              {product.name}
            </h3>
            <p className="mt-1 text-xs text-mocha truncate">
              {product.tagline}
            </p>
          </div>
          <p className="text-sm tabular-nums text-espresso flex-shrink-0">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <RatingStars value={product.rating} size={12} />
          <span className="text-[11px] text-mocha tabular-nums">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
      </div>
    </Link>
  );
}
