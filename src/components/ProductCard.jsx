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
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
        {product.hoverImage && (
          <img src={product.hoverImage} alt={product.name} />
        )}
        <button
          onClick={handleQuickAdd}
          className="product-card-quick-add btn btn-sm btn-gold"
        >
          Quick Add
        </button>
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name text-charcoal">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
