import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="star w-4 h-4 fill-current" />
        ))}
        {hasHalf && <Star className="star w-4 h-4 fill-current opacity-50" />}
        <span className="ml-2 text-sm text-[#8C7660]">
          {rating} ({product.reviewCount} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="product-name text-3xl md:text-4xl tracking-widest mb-3">{product.name}</h1>
        <p className="text-2xl font-light mb-4">${product.price}</p>
        {renderStars(product.rating)}
      </div>

      <p className="text-[#5C4E42] leading-relaxed">{product.description}</p>

      {/* Variant Selector */}
      <div>
        <p className="text-xs tracking-[0.1em] text-[#8C7660] mb-3">TONE</p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs tracking-[0.1em] text-[#8C7660] mb-3">QUANTITY</p>
        <div className="flex items-center border border-[#E5DDD1] w-fit">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-[#F0EBE3] transition-colors"
          >
            −
          </button>
          <span className="px-6 py-2 border-x border-[#E5DDD1]">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 hover:bg-[#F0EBE3] transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button 
        onClick={handleAddToCart}
        className="btn btn-primary w-full text-base py-4"
      >
        ADD TO CART
      </button>

      <p className="text-xs text-[#8C7660] text-center tracking-wider">
        {product.inStock ? 'In stock and ready to ship' : 'Currently unavailable'}
      </p>
    </div>
  );
};

export default ProductInfo;
