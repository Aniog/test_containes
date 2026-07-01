import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart, closeCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Close drawer first so the click isn't intercepted by the backdrop
    closeCart();
    // Add after a microtask to ensure drawer state updates don't block this interaction
    setTimeout(() => {
      addToCart(product, 'Gold', 1);
    }, 0);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="product-card aspect-[4/3.6] relative mb-4">
        <img
          src={product.images.primary}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {product.images.secondary && (
          <img
            src={product.images.secondary}
            alt={`${product.name} alternate view`}
            className="secondary absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-outline text-xs"
          >
            QUICK ADD
          </button>
        )}
      </div>

      <div className="space-y-1">
        <div className="product-name text-sm tracking-[0.08em] text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-velmora-muted">${product.price}</span>
          <span className="text-xs text-velmora-muted">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;