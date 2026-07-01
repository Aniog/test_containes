import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants.find((v) => v.available) || product.variants[0]
  );
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedVariant) {
      addToCart(product, selectedVariant, 1);
    }
  };

  const availableVariants = product.variants.filter((v) => v.available);

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-image-container">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="product-image-secondary"
            loading="lazy"
          />
        )}
        
        {showQuickAdd && availableVariants.length > 0 && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-sm btn-primary"
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="product-name text-sm text-velmora-text leading-tight pr-2">
            {product.name}
          </h3>
          <span className="text-sm text-velmora-text whitespace-nowrap">
            ${product.price}
          </span>
        </div>
        
        <p className="text-xs text-velmora-muted mb-2">{product.shortDescription}</p>
        
        <div className="flex items-center gap-1 text-xs">
          <span className="stars">★★★★★</span>
          <span className="text-velmora-muted ml-1">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
