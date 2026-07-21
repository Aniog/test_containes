import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus, Check } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.material);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      {/* Image Container */}
      <div
        className="relative overflow-hidden bg-[#F5F0EB] aspect-[3/4] mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
          onError={(e) => {
            e.target.src = `https://placehold.co/600x800/C9A96E/FAF8F5?text=${product.name.replace(/\s/g, '+')}`;
          }}
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
          onError={(e) => {
            e.target.src = `https://placehold.co/600x800/1A1A1A/FAF8F5?text=${product.name.replace(/\s/g, '+')}`;
          }}
        />

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
            isAdded
              ? 'bg-green-600 text-white'
              : 'bg-white/95 text-[#1A1A1A] hover:bg-[#C9A96E] hover:text-white'
          }`}
          style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(10px)' }}
        >
          {isAdded ? (
            <span className="flex items-center gap-1">
              <Check size={14} /> Added
            </span>
          ) : (
            'Add to Cart'
          )}
        </button>

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 bg-[#C9A96E] text-white text-[10px] uppercase tracking-[0.15em] px-2.5 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center px-2">
        <h3
          className="text-sm md:text-base font-light mb-1 product-name"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#8A8580] mb-2">
          ${product.price}
        </p>
        {/* Rating */}
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-[#C9A96E]' : 'text-[#E8E2D9]'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[10px] text-[#8A8580] ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
