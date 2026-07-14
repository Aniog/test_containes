import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container bg-[#F8F5F1]">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className="product-image-hover"
          />
        )}
        <button
          onClick={handleQuickAdd}
          className="quick-add btn btn-accent text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <div className="product-name text-sm tracking-[0.12em] mb-1 pr-2">
          {product.name}
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-[#6B665F]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;