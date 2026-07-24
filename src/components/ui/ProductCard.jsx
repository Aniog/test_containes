import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  const primaryImage = product.images?.[0];
  const secondaryImage = product.images?.[1] || primaryImage;

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
        <img src={primaryImage} alt={product.name} />
        {secondaryImage && secondaryImage !== primaryImage && (
          <img src={secondaryImage} alt={product.name} className="secondary-image" />
        )}
        
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="product-card-quick-add btn btn-accent btn-sm"
          >
            Quick Add
          </button>
        )}
      </div>

      <div className="product-card-info">
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-price">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;