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
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        <img 
          src={product.images[1] || product.images[0]} 
          alt={product.name}
          className="product-image product-image-secondary"
        />
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-primary text-xs px-6 py-3"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-4">
        <div className="product-name text-sm tracking-wider mb-1 pr-2">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B665F]">${product.price}</span>
          <span className="text-xs text-[#6B665F]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;