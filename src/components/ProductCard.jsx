import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-image">
        <img
          src={primaryImage.url}
          alt={primaryImage.alt}
          loading="lazy"
        />
        <div className="product-card-image-secondary">
          <img
            src={secondaryImage.url}
            alt={secondaryImage.alt}
            loading="lazy"
          />
        </div>

        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="product-card-quick-add btn btn-primary btn-sm"
          >
            Quick Add
          </button>
        )}
      </div>

      <div className="p-4 space-y-1">
        <div className="product-name text-sm tracking-[0.12em] text-[#1C1917] group-hover:text-[#B8976A] transition-colors">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B635C]">{product.category}</span>
          <span className="font-medium text-[#1C1917]">${product.price}</span>
        </div>
        <div className="flex items-center gap-1 pt-1">
          <div className="stars text-xs">★★★★★</div>
          <span className="text-xs text-[#9A9085]">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;