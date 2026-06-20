import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name}
            className="product-image-secondary"
          />
        )}
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary btn-sm"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</p>
        <p className="text-xs text-[#5C5C5C] mb-2">{product.category}</p>
        <p className="price text-sm">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;