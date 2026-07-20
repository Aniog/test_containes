import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../lib/utils";
import { StarRating } from "../ui/StarRating";

export function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
        {/* Primary image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#EDE7DC] to-[#D4C9B8]">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-[var(--color-gold)]/60 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/40" />
            </div>
            <span className="text-[10px] text-[var(--color-text-muted)] tracking-widest">EDITORIAL</span>
          </div>
        </div>
        
        {/* Secondary image on hover */}
        <div className="product-card-image-secondary flex items-center justify-center bg-gradient-to-br from-[#D4C9B8] to-[#C5B8A3]">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 border border-[var(--color-accent)]/50" />
            <span className="text-[10px] text-[var(--color-text-muted)] tracking-widest">DETAIL</span>
          </div>
        </div>

        {/* Quick add overlay */}
        <div className="product-card-overlay">
          <button
            onClick={handleAddToCart}
            className="btn btn-sm bg-white text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-white w-full justify-center text-[10px]"
          >
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="product-name text-sm tracking-[0.1em] pr-2 leading-tight">{product.name}</h3>
          <span className="text-sm font-medium whitespace-nowrap">{formatPrice(product.price)}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[10px] text-[var(--color-text-muted)]">({product.reviewCount})</span>
        </div>

        <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Variant selector mini */}
        <div className="flex gap-1.5" onClick={(e) => e.preventDefault()}>
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant(variant);
              }}
              className={`variant-pill text-[10px] py-1 px-2.5 ${selectedVariant.id === variant.id ? "active" : ""}`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
}
