import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Default to first variant (gold tone)
    const defaultVariant = product.variants[0];
    addToCart(product, defaultVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5] relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name}
            className="product-image-secondary"
          />
        )}
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-6 py-2.5"
        >
          Add to Cart
        </button>
      </div>
      
      <div className="pt-4 pb-6 px-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="product-name text-sm tracking-[0.1em] leading-tight pr-2">
            {product.name}
          </h3>
          <span className="text-sm font-medium whitespace-nowrap">
            ${product.price}
          </span>
        </div>
        <p className="text-xs text-velmora-muted mt-1">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
