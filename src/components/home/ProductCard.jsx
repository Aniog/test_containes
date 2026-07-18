import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0]?.id);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-surface-alt rounded-sm mb-4">
        {/* Primary image */}
        <img
          alt={product.name}
          className={cn(
            "aspect-[3/4] w-full h-full object-cover transition-all duration-500",
            hovered ? "opacity-0" : "opacity-100"
          )}
          data-strk-img-id={`${product.imgId}-card-1`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photo`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Hover image */}
        <img
          alt={`${product.name} - alternate view`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-500",
            hovered ? "opacity-100" : "opacity-0"
          )}
          data-strk-img-id={`${product.imgId}-card-2`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn model close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            "absolute bottom-4 left-4 right-4 bg-text-primary text-white py-2.5",
            "flex items-center justify-center gap-2 text-xs uppercase tracking-widest-xl",
            "transition-all duration-300",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div>
        <h3 className="font-serif text-sm md:text-base uppercase tracking-widest-xl text-text-primary group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <StarRating rating={Math.round(product.rating)} size={12} />
          <span className="text-[11px] text-text-tertiary">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-text-primary mt-1.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
