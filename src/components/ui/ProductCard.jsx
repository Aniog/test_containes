import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="product-card cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-image">
        <img 
          src={product.images[0]} 
          alt={product.name}
          loading="lazy"
        />
        {product.images[1] && (
          <div className="product-card-image-secondary">
            <img 
              src={product.images[1]} 
              alt={`${product.name} alternate view`}
              loading="lazy"
            />
          </div>
        )}
        
        {showQuickAdd && (
          <button 
            className="btn btn-accent btn-sm product-card-quick-add"
            onClick={handleQuickAdd}
          >
            Quick Add
          </button>
        )}
      </div>
      
      <div className="product-card-info">
        <div className="product-name">{product.name}</div>
        <div className="product-card-price">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
