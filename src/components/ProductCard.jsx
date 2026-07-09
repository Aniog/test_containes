import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // If the click originated from the Quick Add button, let the button handler manage it
    if (e.target.closest('.quick-add')) return;
    navigate(`/product/${product.slug}`);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // If focus is on the quick-add button, don't navigate
      if (e.target.closest('.quick-add')) return;
      e.preventDefault();
      navigate(`/product/${product.slug}`);
    }
  };

  return (
    <div 
      className="product-card group cursor-pointer focus-within:ring-1 focus-within:ring-velmora-gold/40"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={product.name}
    >
      {/* Media area: relative container for hover button */}
      <div className="relative aspect-[4/3.5] bg-velmora-bg-alt overflow-hidden">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="primary absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {product.images?.[1] && (
          <img
            src={product.images?.[1]}
            alt={product.name}
            className="secondary absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          />
        )}
        
        {/* Quick Add button - absolutely positioned, fully clickable, outside any link */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-sm btn-gold bg-white/95 hover:bg-velmora-gold hover:text-white border-velmora-gold z-[90]"
            aria-label={`Add ${product.name} to cart`}
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Text area */}
      <div className="pt-4 pb-2 px-1">
        <div className="product-name text-sm tracking-[0.06em] mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted text-xs tracking-wider">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
