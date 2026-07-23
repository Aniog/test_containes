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
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image-secondary"
          />
        )}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-sm bg-white text-[#2C2522] border-[#2C2522] hover:bg-[#2C2522] hover:text-white"
          >
            Quick Add
          </button>
        )}
      </div>
      <div className="p-4 space-y-1">
        <p className="product-name text-sm tracking-wider pr-2">{product.name}</p>
        <div className="flex items-center justify-between pt-1">
          <p className="text-sm text-[#6B635E]">${product.price}</p>
          <div className="flex gap-1">
            {product.variants.map((v) => (
              <button
                key={v}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedVariant(v);
                }}
                className={`w-3 h-3 rounded-full border ${
                  selectedVariant === v ? 'border-[#8B7355]' : 'border-[#E5DFD6]'
                }`}
                style={{ backgroundColor: v === 'Gold' ? '#C5A46E' : '#A8A8A8' }}
                aria-label={v}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;