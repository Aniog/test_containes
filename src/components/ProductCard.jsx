import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image-primary"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="product-image-secondary"
          />
        )}
        
        <button
          onClick={handleQuickAdd}
          className="product-card-quick-add btn btn-sm btn-gold bg-velmora-white hover:bg-velmora-gold hover:text-velmora-white"
        >
          Quick Add
        </button>
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name text-velmora-text group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
