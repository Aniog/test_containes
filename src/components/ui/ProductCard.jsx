import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-gold-pale aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-dark text-white font-inter text-[9px] uppercase tracking-widest px-2 py-1">
            {product.badge}
          </div>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 font-inter text-xs uppercase tracking-widest transition-colors duration-200 ${
              added
                ? "bg-gold text-white"
                : "bg-dark text-white hover:bg-gold"
            }`}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-widest text-dark font-medium leading-tight"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-inter text-xs text-stone-warm"
        >
          {product.subtitle}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="font-inter text-sm font-medium text-dark">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="font-inter text-xs text-stone-warm">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
