import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container bg-[#F0EBE3]">
        <img
          src={product.images.gold}
          alt={product.name}
          className="product-image primary"
        />
        <img
          src={product.images.silver}
          alt={product.name}
          className="product-image secondary"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-8 py-3"
        >
          Quick Add
        </button>
      </div>

      <div className="p-5 space-y-1">
        <div className="product-name text-sm tracking-[0.15em] pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm text-[#7A7368]">${product.price}</span>
          <div className="flex gap-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant('gold');
              }}
              className={`w-3 h-3 rounded-full border ${selectedVariant === 'gold' ? 'border-[#8B7355] ring-1 ring-[#8B7355]' : 'border-[#E5DFD3]'}`}
              style={{ backgroundColor: '#C5A46E' }}
              aria-label="Gold tone"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant('silver');
              }}
              className={`w-3 h-3 rounded-full border ${selectedVariant === 'silver' ? 'border-[#8B7355] ring-1 ring-[#8B7355]' : 'border-[#E5DFD3]'}`}
              style={{ backgroundColor: '#A8A8A8' }}
              aria-label="Silver tone"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
