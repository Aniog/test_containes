import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/store/cart";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-4">
        {/* Primary image */}
        <div
          data-strk-img-id={`${product.id}-primary`}
          data-strk-img={product.imageQuery}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`absolute inset-0 bg-espresso/30 transition-opacity duration-700 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gold/15 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gold/25" />
            </div>
          </div>
        </div>

        {/* Hover image (second view) */}
        <div
          className={`absolute inset-0 bg-warm-200 transition-opacity duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gold/25 flex items-center justify-center rotate-12">
              <div className="w-10 h-10 rounded-full bg-gold/35" />
            </div>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-charcoal text-white text-[10px] tracking-[0.15em] uppercase font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-charcoal/90 backdrop-blur-sm text-white text-xs tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm sm:text-base tracking-[0.1em] uppercase text-charcoal group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-charcoal">${product.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.round(product.rating)
                    ? "fill-gold text-gold"
                    : "text-sand"
                }
              />
            ))}
          </div>
          <span className="text-xs text-warm-gray">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
