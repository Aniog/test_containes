import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-image-container">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="product-image-secondary"
          />
        )}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-sm btn-gold"
        >
          Add to Cart
        </button>
      </div>
      <div className="p-4">
        <p className="product-name text-sm mb-1">{product.name}</p>
        <p className="text-sm text-[var(--color-text-muted)] mb-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-medium">${product.price}</span>
          <span className="text-xs text-[var(--color-text-muted)]">
            {product.variants.join(' / ')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
