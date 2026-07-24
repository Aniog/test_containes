import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
          className="primary-image"
          loading="lazy"
        />
        <img
          src={product.imageSecondary || product.image}
          alt={`${product.name} - alternate view`}
          className="secondary-image"
          loading="lazy"
        />
        <div className="product-card-quick-add">
          <button
            className="btn-primary w-full"
            onClick={handleQuickAdd}
            style={{ padding: '12px 16px', fontSize: '0.75rem' }}
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="product-card-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-card-price">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;