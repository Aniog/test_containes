import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const defaultVariant = product.variants[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1);
  };

  const formatPrice = (price) => `$${price}`;

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="secondary"
            loading="lazy"
          />
        )}
        
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary btn-sm"
        >
          Quick Add
        </button>
      </div>

      <div className="p-4 space-y-2">
        <div>
          <h3 className="product-name text-sm tracking-[0.15em] leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="font-medium text-sm">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-1.5">
            <StarRating rating={product.rating} size={11} />
            <span className="text-[10px] text-[var(--color-text-muted)]">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
