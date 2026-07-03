import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import Button from './Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group">
      <div className="product-card-image product-image-container">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image-secondary"
            loading="lazy"
          />
        )}
        <div className="quick-add">
          <Button
            variant="primary"
            size="sm"
            onClick={handleQuickAdd}
            className="shadow-md"
          >
            Quick Add
          </Button>
        </div>
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name text-text group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="product-card-price">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
