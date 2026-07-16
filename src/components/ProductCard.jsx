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
      <div className="product-image-container bg-[#F0EBE3]">
        <img 
          src={product.image} 
          alt={product.imageAlt}
          className="product-image primary"
        />
        <img 
          src={product.hoverImage} 
          alt={product.imageAlt}
          className="product-image secondary"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-accent text-xs py-3 px-8"
        >
          Quick Add
        </button>
      </div>
      <div className="p-5 space-y-1">
        <div className="product-name text-sm tracking-[0.12em]">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#7A7368]">${product.price}</span>
          <span className="text-[#C5A46E]">★ {product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;