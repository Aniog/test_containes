import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isAdding, setIsAdding] = useState(false);

  const primaryImage = product.images.find((img) => img.tone === selectedVariant.tone) || product.images[0];
  const secondaryImage = product.images.find((img) => img.tone !== selectedVariant.tone) || product.images[1] || product.images[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, selectedVariant, 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-image-container">
        <img 
          src={primaryImage.url} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        {secondaryImage && (
          <img 
            src={secondaryImage.url} 
            alt={product.name}
            className="product-image product-image-secondary"
          />
        )}
        
        <div className="quick-add">
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Added' : 'Quick Add'}
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-1">
        <h3 className="product-name text-sm tracking-[0.08em] pr-2">{product.name}</h3>
        <p className="text-xs text-[var(--color-text-muted)]">{product.shortDescription}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-medium">{formatPrice(product.price)}</span>
          <span className="text-xs text-[var(--color-text-muted)]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
