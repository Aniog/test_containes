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
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="product-image primary absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={product.imageSecondary}
          alt={product.name}
          className="product-image secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="quick-add"
        >
          ADD TO CART
        </button>
      </div>

      <div className="px-1">
        <h3 className="product-name text-sm tracking-[0.06em] mb-1 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-base-600">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
