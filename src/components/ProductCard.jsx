import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-[#E8DFD5] to-[#D4C8B8] rounded-lg overflow-hidden mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.slug}-name] elegant gold jewelry product photo dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
        <span id={`${product.slug}-name`} className="sr-only">{product.name}</span>

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-500 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-[#2C2622]/90 backdrop-blur-sm text-[#FAF7F2] py-2.5 text-[10px] tracking-[0.2em] uppercase font-semibold rounded-sm hover:bg-[#C9A84C] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>

        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-[#C9A84C] text-white text-[9px] tracking-[0.15em] uppercase font-bold px-2.5 py-1 rounded-sm">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3
          className="text-xs tracking-[0.15em] uppercase text-[#2C2622] font-semibold group-hover:text-[#C9A84C] transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.round(product.rating) ? 'fill-[#C9A84C] text-[#C9A84C]' : 'text-[#D4C8B8]'}
            />
          ))}
          <span className="text-[10px] text-[#8A7F74] ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-semibold text-[#2C2622]">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
