import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="product-card bg-white">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EDE6]">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {product.images[1] && (
            <img 
              src={product.images[1]} 
              alt={product.name}
              className="secondary absolute inset-0 w-full h-full object-cover"
            />
          )}
          
          {showQuickAdd && (
            <button 
              onClick={handleQuickAdd}
              className="quick-add btn btn-outline text-xs"
            >
              Quick Add
            </button>
          )}
        </div>
        
        <div className="p-4 space-y-1">
          <div className="product-name text-sm tracking-[0.1em] text-[#2C2823] group-hover:text-[#8B7355] transition-colors">
            {product.name}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#6B665E]">{product.category}</span>
            <span className="font-medium text-[#2C2823]">${product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;