import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
        <img 
          src={product.images.gold.primary} 
          alt={product.name}
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.images.gold.secondary} 
          alt={product.name}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Quick Add Overlay */}
        <div 
          className="absolute inset-x-0 bottom-0 bg-white/95 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          onMouseEnter={() => setShowQuickAdd(true)}
          onMouseLeave={() => setShowQuickAdd(false)}
        >
          <div className="flex gap-2 mb-3">
            <button 
              onClick={(e) => { e.preventDefault(); setSelectedVariant('gold'); }}
              className={`variant-pill flex-1 text-xs py-1.5 ${selectedVariant === 'gold' ? 'active' : ''}`}
            >
              Gold
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setSelectedVariant('silver'); }}
              className={`variant-pill flex-1 text-xs py-1.5 ${selectedVariant === 'silver' ? 'active' : ''}`}
            >
              Silver
            </button>
          </div>
          <button 
            onClick={handleQuickAdd}
            className="btn btn-primary w-full text-xs py-2.5"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="px-1">
        <p className="product-name text-sm tracking-[0.15em] mb-1">{product.name}</p>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;