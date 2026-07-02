import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const defaultVariant = product.variants[0] || 'gold';

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1, true);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.6] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
          />
        )}
        
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold text-xs px-6 py-2.5 shadow-lg"
        >
          Quick Add
        </button>
      </div>

      <div className="px-1">
        <div className="product-name text-sm tracking-[0.12em] leading-tight mb-1.5 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B6058]">${product.price}</span>
          <span className="text-xs text-[#6B6058] tracking-widest">{product.category.toUpperCase()}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
