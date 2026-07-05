import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image primary"
        />
        <img 
          src={product.images[1] || product.images[0]} 
          alt={product.name}
          className="product-image secondary"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold text-xs px-8 py-3"
        >
          Add to Cart
        </button>
      </div>
      <div className="p-5">
        <div className="product-name text-sm tracking-[0.15em] mb-1">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="text-[#6B665F] text-sm">${product.price}</span>
          <span className="text-[#B8976D] text-xs tracking-[0.1em]">{product.category.toUpperCase()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;