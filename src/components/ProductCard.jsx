import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  const secondaryImage = product.images[1] || product.images[0];

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="relative aspect-[4/3.5] bg-[#F5F2ED] overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={secondaryImage} 
          alt={product.name}
          className="secondary-image absolute inset-0 w-full h-full object-cover"
        />
        
        {showQuickAdd && (
          <button 
            onClick={handleAddToCart}
            className="quick-add btn btn-primary text-xs py-2.5 px-6"
          >
            Add to Cart
          </button>
        )}
      </div>
      
      <div className="pt-4 pb-2 px-1">
        <p className="product-name text-sm tracking-[0.08em] mb-1">{product.name}</p>
        <p className="text-sm text-[#6B665F]">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
