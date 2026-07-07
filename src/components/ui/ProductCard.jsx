import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#EDE7DC] aspect-[4/3.5] mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-white/95 text-[#2C2522] text-xs tracking-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#8B7355] hover:text-white"
          >
            QUICK ADD
          </button>
        )}
      </div>
      <div className="space-y-1">
        <div className="font-serif text-sm tracking-[2px] text-[#2C2522] group-hover:text-[#8B7355] transition-colors">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#8B7355]">${product.price}</span>
          <span className="text-[#A89B8C] text-xs tracking-widest">{product.category.toUpperCase()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
