import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'Gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden mb-4">
        {/* Placeholder image with stock image attributes */}
        <div
          data-strk-bg-id={`product-${product.id}-bg`}
          data-strk-bg={product.imageQuery}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          className={`absolute inset-0 bg-gradient-to-br from-sand/60 to-cream transition-transform duration-700 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-lg text-gold-muted/60 tracking-ultra-wide uppercase">
              Velmora
            </span>
          </div>
        </div>

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary text-[11px] py-3 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm md:text-base tracking-wider uppercase text-espresso group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-taupe">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <p className="text-sm font-medium text-espresso">${product.price}</p>
      </div>
    </Link>
  );
}
