import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-[#1a1a1a] text-white text-[10px] tracking-[0.15em] uppercase">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 py-3 bg-white/95 text-[#1a1a1a] text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>
      </div>
      <div className="text-center">
        <h3 className="font-serif text-sm tracking-[0.15em] uppercase mb-1 group-hover:text-[#b8860b] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#6b6560] mb-2">{product.subtitle}</p>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-[#b8860b] text-[#b8860b]" />
          <span className="text-xs">{product.rating}</span>
          <span className="text-xs text-[#6b6560]">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
