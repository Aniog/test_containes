import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0].name);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-cream-100 mb-4">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-charcoal-800 text-cream-50 text-overline uppercase tracking-[0.1em] px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}

        {/* Primary image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered && product.imageAlt ? "opacity-0 scale-105" : "opacity-100 scale-100"
          } ${imgLoaded ? "" : "opacity-0"}`}
        />

        {/* Hover image */}
        {product.imageAlt && (
          <img
            src={product.imageAlt}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        )}

        {/* Shimmer placeholder */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-200 to-cream-100 bg-[length:200%_100%] animate-shimmer" />
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-400 ${
            hovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3 bg-cream-50/95 text-charcoal-800 text-overline uppercase tracking-[0.1em] font-semibold rounded-lg shadow-elevated glass-effect hover:bg-white transition-colors"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-charcoal-800 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                fill={i < Math.round(product.rating) ? "#C8A55A" : "none"}
                stroke={i < Math.round(product.rating) ? "#C8A55A" : "#D1D1D1"}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-caption text-charcoal-400">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-body-md font-medium text-charcoal-800 tracking-wide">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
