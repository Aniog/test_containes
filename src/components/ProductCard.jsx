import React from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, index }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="card rounded-none overflow-hidden">
        {/* Image container */}
        <div className="relative aspect-[4/5] bg-velmora-cream overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          {/* Second image on hover */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700"
            />
          )}

          {/* Quick add button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-2" />
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <div className="p-4 md:p-5">
          <h3 className="font-serif text-xs tracking-widest uppercase text-velmora-ebony truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mt-1.5">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="text-xs text-velmora-pewter">
              {product.rating} ({product.reviews})
            </span>
          </div>
          <p className="text-sm font-medium text-velmora-ebony mt-1.5">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}