import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <div className="product-card bg-white group">
      {/* Image Container */}
      <div className="relative aspect-[4/3.5] overflow-hidden bg-[#F1EDE6]">
        <Link to={`/product/${product.id}`} className="block h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image absolute inset-0 w-full h-full object-cover"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="product-image-secondary absolute inset-0 w-full h-full object-cover"
            />
          )}
        </Link>
        
        {/* Quick Add Button - outside the Link to avoid nested interactive elements */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-gold text-xs px-6 py-2.5 shadow-lg"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="pt-4 pb-2 px-1">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="product-name text-sm tracking-[0.12em] text-[#2C2522] group-hover:text-[#8B7355] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-[#6B6058]">${product.price}</span>
          <span className="text-xs text-[#6B6058] tracking-widest">{product.category.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
