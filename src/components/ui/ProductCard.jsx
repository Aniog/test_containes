import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="relative aspect-[4/3.5] overflow-hidden bg-vel-bg-alt">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="product-image-secondary absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Quick Add Button - always visible on mobile, hover on desktop */}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold text-xs py-2 px-6 z-10"
        >
          Add to Cart
        </button>
      </div>

      <div className="pt-4 pb-2 px-1">
        <div className="product-name text-sm tracking-[0.06em] mb-1 group-hover:text-vel-gold-dark transition-colors">
          {product.name}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-vel-muted">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
