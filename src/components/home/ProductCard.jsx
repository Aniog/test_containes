import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  // Use placeholder images that look like jewelry
  const primaryImg = `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80`;
  const secondaryImg = `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80`;

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="relative aspect-[4/3] bg-[#F4F0E9] overflow-hidden">
        <img
          src={primaryImg}
          alt={product.name}
          className="primary absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={secondaryImg}
          alt={`${product.name} alternate view`}
          className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="quick-add btn btn-primary btn-sm"
        >
          Add to Cart
        </button>
      </div>

      <div className="pt-4 pb-2 px-1">
        <p className="product-name text-sm tracking-[0.06em]">{product.name}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-[#6B6359]">${product.price}</span>
          <span className="text-xs text-[#6B6359]">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
