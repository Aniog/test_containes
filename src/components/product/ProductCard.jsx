import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div
        className="relative overflow-hidden bg-[#F5F0EB]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full aspect-[3/4] object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Hover Image */}
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute top-0 left-0 w-full aspect-[3/4] object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#1A1A1A] px-6 py-2 text-sm tracking-wider uppercase font-medium transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm tracking-wider uppercase">
          {product.name}
        </h3>
        <p className="text-sm text-[#6B6B6B]">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium">${product.price}</span>
          <div className="flex items-center text-sm text-[#6B6B6B]">
            <span className="text-[#C9A96E]">★</span>
            <span className="ml-1">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
