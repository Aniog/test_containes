import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block no-underline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-bronze-100 mb-4">
        {/* Primary image */}
        <div
          className="absolute inset-0 bg-bronze-200 flex items-center justify-center transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-500">
            {product.name}
          </span>
        </div>
        {/* Hover image (alt view) */}
        <div
          className="absolute inset-0 bg-bronze-300 flex items-center justify-center transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-600">
            {product.variants[0]} Tone
          </span>
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 p-2.5 bg-cream/90 backdrop-blur-sm text-bronze-700 hover:bg-bronze-600 hover:text-cream transition-all duration-300 shadow-sm ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>

        {added && (
          <div className="absolute bottom-3 left-3 bg-bronze-600 text-cream text-[10px] tracking-wider uppercase px-3 py-1.5 animate-fade-in">
            Added to Bag
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-serif text-xs md:text-sm tracking-[0.2em] uppercase text-bronze-900 mb-1 group-hover:text-bronze-600 transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mb-1.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-2.5 h-2.5 ${
              i < Math.floor(product.rating)
                ? 'fill-bronze-500 text-bronze-500'
                : 'text-bronze-300'
            }`}
          />
        ))}
        <span className="text-[10px] text-taupe-400 ml-1">({product.reviewCount})</span>
      </div>
      <p className="text-sm text-bronze-700 font-medium">${product.price}</p>
    </Link>
  );
}
