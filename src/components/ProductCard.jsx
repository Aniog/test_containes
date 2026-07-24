import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <img
          src={product.imageSecondary}
          alt={product.name}
          className="product-image-secondary"
        />
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-primary text-xs px-8 py-3"
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="p-4 space-y-1">
        <div className="product-name text-sm tracking-[0.12em]">{product.name}</div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#6B665F]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
