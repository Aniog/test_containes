import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.material || 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5] mb-4">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.name}
            className="product-image product-image-secondary"
          />
        )}
        <button 
          onClick={handleQuickAdd}
          className="quick-add"
        >
          QUICK ADD
        </button>
      </div>
      <div className="px-1">
        <p className="product-name text-sm tracking-widest mb-1">{product.name}</p>
        <p className="text-sm text-velmora-text-light">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;