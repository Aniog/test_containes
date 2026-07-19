import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5] relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`}
            className="product-image-secondary"
          />
        )}
        
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className="quick-add btn btn-gold btn-sm text-xs"
          >
            QUICK ADD
          </button>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="product-name text-sm tracking-widest leading-tight pr-2">
            {product.name}
          </h3>
          <span className="text-sm font-medium whitespace-nowrap">${product.price}</span>
        </div>
        <p className="text-xs text-velmora-text-light mt-1">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;