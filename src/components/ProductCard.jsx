import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square bg-[#EDE8DF] overflow-hidden mb-4 rounded-sm">
        <img 
          src={isHovered && product.image2 ? product.image2 : product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
        />
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 text-xs tracking-[2px] transition-all duration-300 ${
            isAdding 
              ? 'bg-[#2C2522] text-white' 
              : 'bg-white text-[#2C2522] opacity-0 group-hover:opacity-100 hover:bg-[#8B7355] hover:text-white'
          }`}
        >
          {isAdding ? 'ADDED' : 'ADD TO CART'}
        </button>
      </div>
      <div className="space-y-1">
        <div className="font-serif text-sm tracking-[2px] text-[#2C2522] pr-2">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#8B7355]">${product.price}</span>
          <span className="text-xs text-[#6B655C] tracking-[1px]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;