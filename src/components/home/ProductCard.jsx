import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";

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
        <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {product.badge && (
          <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-stone-700">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="mt-3">
        <h3 className="font-serif text-sm tracking-wide text-stone-900">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1">
          <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
          <span className="text-xs text-stone-500">{product.rating}</span>
          <span className="text-xs text-stone-400">({product.reviewCount})</span>
        </div>
        <p className="mt-1 text-sm font-medium text-stone-900">${product.price}</p>
      </div>
      <button
        onClick={() => addItem(product, "gold")}
        className="mt-3 w-full bg-stone-900 text-white py-2.5 text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-stone-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
