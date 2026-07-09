import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const currentImages = product.images[selectedVariant] || product.images.Gold;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3.5] overflow-hidden bg-[#F5F2ED]">
        <img
          src={currentImages.primary}
          alt={product.name}
          className="primary absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={currentImages.secondary}
          alt={product.name}
          className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="quick-add btn btn-gold btn-sm text-xs tracking-wider z-20"
          style={{ pointerEvents: 'auto' }}
        >
          ADD TO CART
        </button>
      </div>

      <div className="pt-4 pb-2 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="product-name text-sm tracking-[0.08em] text-[#1C1917] group-hover:text-[#B8976A] transition-colors">
            {product.name}
          </h3>
          <span className="text-sm text-[#2C2824] font-medium whitespace-nowrap">
            ${product.price}
          </span>
        </div>
        <p className="text-xs text-[#6B645E] mt-1">{product.category}</p>
        
        {/* Variant dots */}
        <div className="flex gap-2 mt-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVariant(variant);
              }}
              className={`w-3 h-3 rounded-full border transition-all ${
                selectedVariant === variant
                  ? 'border-[#1C1917] scale-110'
                  : 'border-[#E5DFD6] hover:border-[#B8976A]'
              }`}
              style={{
                backgroundColor: variant === 'Gold' ? '#B8976A' : '#A8A29E'
              }}
              aria-label={variant}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;