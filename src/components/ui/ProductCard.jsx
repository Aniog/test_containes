import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] mb-4">
        <img 
          src={product.images[0]} 
          alt={product.imageAlt}
          className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={product.imageAlt}
            className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
          />
        )}
        
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs tracking-widest px-6 py-2.5"
        >
          QUICK ADD
        </button>
      </div>

      <div className="px-1">
        <p className="product-name text-sm tracking-[0.06em] mb-1">{product.name}</p>
        <p className="text-sm text-text-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;