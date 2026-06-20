import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  const primaryImage = product.images?.[0] || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80';
  const secondaryImage = product.images?.[1] || primaryImage;

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] relative">
        <img
          src={primaryImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={secondaryImage}
          alt={`${product.name} alternate view`}
          className="product-image-secondary w-full h-full object-cover"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="quick-add btn btn-sm bg-white text-[#1A1816] hover:bg-[#1A1816] hover:text-white border border-[#1A1816] shadow-sm"
        >
          Add to Cart
        </button>
      </div>

      <div className="pt-4 pb-2 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="product-name text-sm tracking-[0.06em] leading-tight pr-2">
            {product.name}
          </h3>
          <span className="text-sm font-medium whitespace-nowrap text-[#B89778]">
            ${product.price}
          </span>
        </div>
        <p className="text-xs text-[#6B635C] mt-1 tracking-wide">
          {product.category}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
