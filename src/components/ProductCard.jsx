import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
        {/* Primary image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8E0D5] to-[#D4C9B8] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full border border-[#B89778]/30 flex items-center justify-center">
              <span className="text-[#B89778] text-[10px] tracking-[2px]">VELMORA</span>
            </div>
          </div>
        </div>
        {/* Secondary image placeholder (shown on hover) */}
        <div className="product-card-image-secondary bg-gradient-to-br from-[#D4C9B8] to-[#C5B5A0] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full border border-[#8C6F52]/30 flex items-center justify-center">
              <span className="text-[#8C6F52] text-[10px] tracking-[2px]">DETAIL</span>
            </div>
          </div>
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="product-card-quick-add btn btn-sm bg-white text-[#2C2522] hover:bg-[#2C2522] hover:text-white border border-[#2C2522]"
        >
          Add to Cart
        </button>
      </div>

      <div className="product-card-info">
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-price">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
