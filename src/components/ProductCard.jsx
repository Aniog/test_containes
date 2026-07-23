import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const primaryImage = product.images.find(img => img.id === selectedVariant.id) || product.images[0];
  const secondaryImage = product.images.find(img => img.id !== selectedVariant.id) || product.images[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="product-card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-image">
        <img 
          src={primaryImage.url} 
          alt={primaryImage.alt}
          className="absolute inset-0"
        />
        {showQuickAdd && secondaryImage && (
          <img 
            src={secondaryImage.url} 
            alt={secondaryImage.alt}
            className="product-card-image-secondary"
          />
        )}
        
        {showQuickAdd && (
          <div className="product-card-quick-add">
            <button 
              onClick={handleQuickAdd}
              className="btn btn-accent btn-sm w-full text-xs"
            >
              Quick Add
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6B6058]">{product.shortDescription}</span>
          <span className="font-medium text-sm">${product.price}</span>
        </div>
        
        {/* Variant dots */}
        <div className="flex gap-1.5 mt-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant(variant);
              }}
              className={`w-3 h-3 rounded-full border transition-all ${
                selectedVariant.id === variant.id 
                  ? 'border-[#8B7355] scale-110' 
                  : 'border-[#D4C9B9]'
              }`}
              style={{ 
                backgroundColor: variant.id === 'gold' ? '#C5A46E' : '#A8A8A8' 
              }}
              aria-label={variant.label}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
