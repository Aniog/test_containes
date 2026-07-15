import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] mb-4 relative">
        <img 
          src={product.image1} 
          alt={product.name} 
          className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.image2} 
          alt={product.name} 
          className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        {showQuickAdd && (
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-primary text-xs px-6 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="px-1">
        <div className="product-name text-sm tracking-[0.12em] mb-1.5 pr-4">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#8B8178]">${product.price}</span>
          <span className="text-[#BFA46F] text-xs tracking-[0.1em]">{product.category.toUpperCase()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;