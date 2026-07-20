import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <div className="product-card group block relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="product-image-container aspect-[4/3.5] mb-4 rounded-sm overflow-hidden relative">
          <img
            src={product.images.primary}
            alt={product.name}
            className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={product.images.secondary}
            alt={product.name}
            className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Link>

      <Link to={`/product/${product.slug}`} className="block">
        <div className="space-y-1 px-1">
          <div className="product-name text-sm tracking-[0.12em] text-[#2C2823] group-hover:text-[#B8976A] transition-colors">
            {product.name}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#6B6359]">{product.category}</span>
            <span className="font-medium text-[#2C2823]">${product.price}</span>
          </div>
        </div>
      </Link>

      <button
        onClick={handleQuickAdd}
        className="quick-add btn-premium btn-premium-solid px-8 py-2.5 text-xs tracking-[0.1em] rounded-full shadow-lg z-50"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
