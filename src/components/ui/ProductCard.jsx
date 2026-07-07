import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.defaultVariant);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  const primaryImage = product.images[selectedVariant] || product.images[product.defaultVariant];
  const secondaryImage = Object.values(product.images).find(img => img !== primaryImage) || primaryImage;

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="product-card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3.6] overflow-hidden bg-velmora-surface-alt">
        <img 
          src={primaryImage} 
          alt={product.name}
          className="product-image absolute inset-0 w-full h-full object-cover"
        />
        {secondaryImage !== primaryImage && (
          <img 
            src={secondaryImage} 
            alt={`${product.name} alternate view`}
            className="product-image-secondary absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Quick Add */}
        {showQuickAdd && (
          <button
            onClick={handleAddToCart}
            className="quick-add btn btn-gold text-xs py-2.5 px-6 bg-white/95 hover:bg-white border-velmora-gold"
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="pt-4 pb-5 px-1">
        <div className="product-name text-sm tracking-[0.08em] text-velmora-text mb-1.5 pr-2">
          {product.name}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-velmora-text-muted">
            {formatPrice(product.price)}
          </div>
          <div className="text-xs text-velmora-text-light">
            {product.category}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
