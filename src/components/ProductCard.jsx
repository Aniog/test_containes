import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const defaultVariant = product.variants[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block">
      <div className="product-card-image">
        <img src={product.images[0]} alt={product.name} />
        <img src={product.images[1] || product.images[0]} alt={product.name} />
        
        <button 
          className="product-card-quick-add btn btn-primary btn-sm"
          onClick={handleQuickAdd}
        >
          QUICK ADD
        </button>
      </div>
      
      <div className="product-card-info">
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-price">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
