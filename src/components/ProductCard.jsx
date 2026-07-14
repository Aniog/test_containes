import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  const formatPrice = (price) => `$${price}`;

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="absolute inset-0"
        />
        {product.images?.[1] && (
          <img
            src={product.images?.[1]}
            alt={`${product.name} alternate view`}
            className="absolute inset-0"
          />
        )}
        
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-sm btn-gold bg-white/95 hover:bg-[#C5A46E] hover:text-white border-[#C5A46E]"
        >
          Quick Add
        </button>
      </div>
      
      <div className="product-card-info">
        <div className="product-name text-sm mb-1 pr-2">{product.name}</div>
        <div className="flex items-center justify-between">
          <span className="product-card-price">{formatPrice(product.price)}</span>
          <span className="text-xs text-[#6B625B]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
