import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3] mb-4">
        <img
          data-strk-img-id={`product-${product.slug}-primary`}
          data-strk-img={`[product-${product.slug}-detail] ${product.name} gold jewelry elegant`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="product-image absolute inset-0 w-full h-full object-cover"
        />
        <img
          data-strk-img-id={`product-${product.slug}-secondary`}
          data-strk-img={`[product-${product.slug}-detail] ${product.name} gold jewelry on model`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} on model`}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Quick Add */}
        <button
          onClick={handleAddToCart}
          className="quick-add btn btn-primary text-xs py-2 px-6"
        >
          QUICK ADD
        </button>
      </div>

      <div className="px-1">
        <p className="product-name text-sm tracking-widest mb-1">{product.name}</p>
        <p className="text-sm text-[#8C7660] mb-2">${product.price}</p>
        
        {/* Variant dots */}
        <div className="flex gap-2">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant(variant);
              }}
              className={`w-3 h-3 rounded-full border transition-all ${
                selectedVariant === variant 
                  ? 'border-[#1C1917] scale-110' 
                  : 'border-[#E5DDD1]'
              }`}
              style={{ 
                backgroundColor: variant === 'Gold' ? '#B89778' : '#C9C5BE' 
              }}
              aria-label={variant}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
