import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onCartClick }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
    if (onCartClick) onCartClick();
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container bg-[#F0EDE7]">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="product-image product-image-secondary"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-primary text-xs py-3 px-8"
        >
          Quick Add
        </button>
      </div>
      <div className="p-5">
        <div className="product-name text-sm tracking-[0.12em] mb-1.5 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B6763]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;