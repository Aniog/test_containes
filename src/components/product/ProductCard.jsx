import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

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
            onClick={handleQuickAdd}
            className="product-card-quick-add btn btn-primary btn-sm"
          >
            QUICK ADD
          </button>
        )}
      </div>
      
      <div className="pt-4 pb-2 px-1">
        <div className="product-name text-sm tracking-[0.12em] leading-tight mb-1.5 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#5C5752]">{product.category}</span>
          <span className="font-medium tabular-nums">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
