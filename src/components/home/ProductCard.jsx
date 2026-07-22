import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Info */}
        <div className="mt-3">
          <h3
            id={product.titleId}
            className="text-[11px] tracking-widest uppercase font-medium text-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <p className="mt-1 text-sm text-muted-fg">${product.price}</p>
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product);
        }}
        className={`absolute bottom-[72px] left-0 right-0 bg-charcoal/90 text-white text-[10px] tracking-widest uppercase font-medium py-2.5 text-center transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
