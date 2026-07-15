import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div 
        className="product-card relative overflow-hidden bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#E5DFD3]">
          <img 
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Quick Add Overlay */}
          {showQuickAdd && (
            <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <button 
                onClick={handleAddToCart}
                className="w-full py-3 text-sm tracking-[0.08em] bg-white text-[#2C2825] hover:bg-[#F8F5F1] transition-colors"
              >
                QUICK ADD
              </button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-5">
          <div className="product-name text-sm tracking-wider mb-1 pr-8">{product.name}</div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B665F]">${product.price}</span>
            <span className="text-xs text-[#6B665F]">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;