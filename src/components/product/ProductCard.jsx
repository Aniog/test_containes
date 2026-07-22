import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
    toast.success(`${product.name} added to cart`, {
      description: `${selectedVariant.label} • $${product.price}`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-card-image-primary"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="product-card-image-secondary"
          />
        )}
        
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="product-card-quick-add btn btn-sm bg-white text-[#2C2825] hover:bg-[#2C2825] hover:text-white border border-[#2C2825] shadow-sm"
          >
            Quick Add
          </button>
        )}
      </div>

      <div className="p-4">
        <p className="product-name text-sm tracking-[0.15em] mb-1 group-hover:text-[#8C6F4E] transition-colors">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">${product.price}</span>
          <span className="text-xs text-[#6B6560]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
