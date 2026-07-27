import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "Gold Tone", 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-espresso/90 backdrop-blur-sm text-cream font-inter text-[10px] uppercase tracking-[0.15em] py-3.5 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="font-inter text-[9px] uppercase tracking-[0.12em] bg-cream/90 text-taupe px-2 py-1">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <p
          id={product.titleId}
          className="font-cormorant text-base uppercase tracking-[0.12em] text-espresso leading-tight mb-1 group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-inter text-xs text-taupe mb-2 line-clamp-1"
        >
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-inter text-sm font-medium text-espresso">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#B8965A" stroke="none" />
            <span className="font-inter text-[10px] text-taupe">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
