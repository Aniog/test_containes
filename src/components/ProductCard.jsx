import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="relative aspect-square overflow-hidden bg-velmora-surface">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="product-image-secondary w-full h-full object-cover"
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-primary btn-sm shadow-lg"
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="pt-4 pb-2 px-1">
        <div className="product-name text-sm tracking-wider mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-velmora-text-muted">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
