import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold');
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image primary"
        />
        <img
          src={product.imageSecondary}
          alt={product.name}
          className="product-image secondary"
        />
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-gold text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-8">
          {product.name}
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#6B655E]">${product.price}</span>
          <span className="text-[#B8976E] text-xs">★ {product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
