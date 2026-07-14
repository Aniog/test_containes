import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container bg-white">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image product-image-primary"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image product-image-secondary"
          />
        )}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn-primary flex items-center gap-2 text-xs px-4 py-2.5"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          ADD TO CART
        </button>
      </div>
      <div className="p-4 space-y-1">
        <div className="product-name text-sm tracking-[0.15em] text-charcoal">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-taupe">${product.price}</span>
          <span className="text-xs text-taupe">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;