import React from "react";
import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import Artwork from "@/components/ui/Artwork";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

// Choose a complementary hover variant by cycling through art types.
const HOVER_VARIANT = {
  earCuff: "sphereHuggies",
  floraNecklace: "earCuff",
  sphereHuggies: "filigreeDrop",
  filigreeDrop: "earCuff",
  heirloomSet: "sphereHuggies",
};

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart();
  const hoverArt = HOVER_VARIANT[product.art] || product.art;

  return (
    <article className="group">
      <Link
        to={`/product/${product.id}`}
        className="block relative aspect-[4/5] bg-bone overflow-hidden img-zoom"
        aria-label={`View ${product.name}`}
      >
        {/* primary art */}
        <Artwork
          variant={product.art}
          tone="deep"
          className="absolute inset-0 w-full h-full"
        />
        {/* secondary art on hover (desktop) */}
        <Artwork
          variant={hoverArt}
          tone="deep"
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* quick add — desktop hover only */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute left-3 right-3 bottom-3 hidden md:flex items-center justify-center gap-2 bg-ivory/95 text-ink py-3 text-[11px] tracking-[0.32em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-ivory"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-3.5 h-3.5" />
          Quick Add
        </button>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link
            to={`/product/${product.id}`}
            className="product-name text-ink hover:text-gold-dark transition-colors block"
          >
            {product.name}
          </Link>
          <div className="mt-1 text-xs text-mute truncate">{product.tagline}</div>
        </div>
        <div className="text-sm font-medium tabular-nums whitespace-nowrap">
          {formatPrice(product.price)}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-mute">
        <span className="flex items-center gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-3 h-3",
                i < Math.round(product.rating) ? "fill-current" : "opacity-30"
              )}
            />
          ))}
        </span>
        <span className="tracking-wide">({product.reviewCount})</span>
      </div>
    </article>
  );
}
