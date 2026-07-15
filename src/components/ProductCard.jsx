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
    addItem(product, "gold", 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-stonebg overflow-hidden">
        <img
          src={`https://placehold.co/600x800/2C2420/C9A227?text=${encodeURIComponent(
            product.name
          )}`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading={index < 4 ? "eager" : "lazy"}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm text-charcoal text-[10px] font-sans font-medium uppercase tracking-widest px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 bg-charcoal text-cream text-xs font-sans font-medium uppercase tracking-widest py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gold"
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="pt-3 pb-1">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-sm uppercase tracking-widest text-charcoal">
            {product.name}
          </h3>
          <span className="font-sans text-sm font-medium text-charcoal">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-warmgray font-sans">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
