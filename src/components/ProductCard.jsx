import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  const primaryImage = product.images?.[0] || 'https://picsum.photos/id/1011/600/600';
  const secondaryImage = product.images?.[1] || primaryImage;

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-image">
        <img
          src={primaryImage}
          alt={product.name}
          loading="lazy"
        />
        <img
          src={secondaryImage}
          alt={`${product.name} alternate view`}
          className="product-card-image-secondary"
        />
        
        {showQuickAdd && (
          <div className="product-card-quick-add">
            <Button
              variant="primary"
              size="sm"
              onClick={handleQuickAdd}
            >
              Quick Add
            </Button>
          </div>
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