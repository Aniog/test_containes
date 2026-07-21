import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="product-card block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container aspect-[4/3] relative">
        <img 
          src={primaryImage} 
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <img 
          src={secondaryImage} 
          alt={`${product.name} - alternate view`}
          className="product-image-secondary"
          loading="lazy"
        />
        
        <div className="quick-add">
          <Button 
            variant="primary" 
            size="sm"
            onClick={handleAddToCart}
          >
            Quick Add
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="product-name text-sm tracking-[0.15em] text-text pr-2">
            {product.name}
          </h3>
          <span className="text-sm font-medium whitespace-nowrap">
            ${product.price}
          </span>
        </div>
        
        <p className="text-xs text-text-muted mb-3">
          {product.category} · {product.material}
        </p>
        
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gold">★★★★</span>
          <span className="text-text-muted">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
