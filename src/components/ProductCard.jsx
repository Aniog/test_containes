import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-image-container">
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="product-image-secondary w-full h-full object-cover"
          />
        )}
        
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="quick-add btn btn-sm bg-white text-velmora-text hover:bg-velmora-accent hover:text-white shadow-md"
          >
            Add to Cart
          </button>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="product-name text-sm tracking-[0.12em] pr-2">
            {product.name}
          </h3>
          <span className="text-sm font-medium whitespace-nowrap">
            ${product.price}
          </span>
        </div>
        <p className="text-xs text-velmora-text-muted">
          {product.category}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
