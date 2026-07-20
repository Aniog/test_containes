import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="image-container aspect-[4/3] bg-[#F8F5F1]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="image-secondary w-full h-full object-cover"
          />
        )}
        
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add"
          >
            Quick Add
          </button>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="product-name text-sm tracking-widest pr-2">{product.name}</h3>
          <span className="text-sm font-medium whitespace-nowrap">${product.price}</span>
        </div>
        <p className="text-xs text-[#6B5F57] mt-1">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
