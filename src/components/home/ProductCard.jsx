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
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5]">
        <img 
          src={product.images?.[0]} 
          alt={product.name}
          className="product-image"
        />
        {product.secondaryImage && (
          <img 
            src={product.secondaryImage} 
            alt={`${product.name} alternate view`}
            className="product-image-secondary"
          />
        )}
        <button 
          onClick={handleQuickAdd}
          className="quick-add-btn velmora-btn velmora-btn-primary velmora-btn-sm"
        >
          Quick Add
        </button>
      </div>
      <div className="p-4">
        <p className="product-name text-sm tracking-[0.08em] mb-1">{product.name}</p>
        <p className="text-sm text-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
