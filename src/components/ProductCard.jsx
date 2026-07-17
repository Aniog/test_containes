import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import StarRating from './ui/StarRating';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
          />
        )}
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold btn-sm text-xs tracking-widest"
        >
          ADD TO CART
        </button>
      </div>

      <div className="px-1">
        <p className="product-name text-sm tracking-widest mb-1 pr-2">{product.name}</p>
        <p className="text-sm text-velmora-text-muted mb-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">${product.price}</span>
          <StarRating rating={product.rating} size={12} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
