import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product, 'Gold');
  };

  return (
    <div 
      className="product-card cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {product.imageSecondary && (
          <img 
            src={product.imageSecondary} 
            alt={product.name} 
            className="secondary w-full h-full object-cover absolute inset-0"
          />
        )}
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <p className="product-name text-sm tracking-wider mb-1">{product.name}</p>
        <p className="text-sm text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
