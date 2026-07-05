import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  const images = product.images[selectedVariant.toLowerCase()] || product.images.gold;

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img 
          src={images.primary} 
          alt={product.name}
          className="product-image primary"
        />
        <img 
          src={images.secondary} 
          alt={product.name}
          className="product-image secondary"
        />
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold text-xs px-8 py-2.5"
        >
          Quick Add
        </button>
      </div>
      
      <div className="p-5">
        <div className="product-name text-sm tracking-[0.15em] mb-1 pr-8">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#C5A26F] font-medium">${product.price}</span>
          <span className="text-xs text-[#8A7F75]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;