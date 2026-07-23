import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[4/5] mb-3">
        <img
          src={`https://placehold.co/600x750/F3EDE4/2C2416?text=${encodeURIComponent(
            product.name
          )}`}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* Hover overlay image */}
        <img
          src={`https://placehold.co/600x750/C5B9A8/2C2416?text=${encodeURIComponent(
            product.name + " Alt"
          )}`}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 bg-espresso text-ivory py-3 text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2 transition-transform duration-300 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Quick Add
        </button>

        {/* Tags */}
        {product.tags.includes("bestseller") && (
          <span className="absolute top-3 left-3 bg-gold text-espresso text-[10px] font-medium uppercase tracking-wider px-2 py-1">
            Bestseller
          </span>
        )}
      </div>

      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-widest text-espresso mb-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm font-medium text-espresso">${product.price}</p>
      </div>
    </Link>
  );
}
