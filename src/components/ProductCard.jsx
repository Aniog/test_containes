import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3] bg-[#F8F5F1] overflow-hidden mb-4 relative">
        <img 
          src={product.image} 
          alt={product.imageAlt}
          className="product-image w-full h-full object-cover"
        />
        {product.hoverImage && (
          <img 
            src={product.hoverImage} 
            alt={product.imageAlt}
            className="product-image-hover w-full h-full object-cover"
          />
        )}
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className="quick-add btn btn-primary text-xs px-6 py-2.5"
          >
            Quick Add
          </button>
        )}
      </div>
      <div className="px-1">
        <p className="product-name text-sm tracking-[0.12em] mb-1.5 pr-4">{product.name}</p>
        <p className="text-sm text-[#6B665F]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;