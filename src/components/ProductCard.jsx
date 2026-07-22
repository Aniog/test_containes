import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3] bg-[#E5E0D8] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="primary absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={product.imageSecondary}
          alt={product.name}
          className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        
        {/* Quick Add Button */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            showQuickAdd ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          onMouseEnter={() => setShowQuickAdd(true)}
          onMouseLeave={() => setShowQuickAdd(false)}
        >
          <button
            onClick={handleQuickAdd}
            className="btn btn-accent w-full text-xs py-2.5"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="pt-4 pb-2 px-1">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B6560]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;