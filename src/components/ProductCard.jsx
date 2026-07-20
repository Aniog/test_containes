import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container relative">
        <img 
          src={product.images.primary} 
          alt={product.name}
          className="product-image primary w-full h-full object-cover"
        />
        <img 
          src={product.images.secondary} 
          alt={product.name}
          className="product-image secondary w-full h-full object-cover absolute inset-0"
        />
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-primary text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-4 space-y-1">
        <div className="product-name text-sm tracking-[0.15em]">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B665F]">${product.price}</span>
          <span className="text-[#6B665F] text-xs">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;