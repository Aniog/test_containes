import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const incrementQty = () => setQuantity(q => Math.min(q + 1, 10));
  const decrementQty = () => setQuantity(q => Math.max(q - 1, 1));

  return (
    <div className="pt-2 md:pt-8">
      <h1 className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-2">{product.name}</h1>
      
      <div className="flex items-center gap-3 mb-4">
        <span className="font-serif text-2xl">${product.price}</span>
        <div className="flex items-center gap-1 text-sm text-velmora-text-muted">
          <div className="flex text-velmora-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span>{product.rating} ({product.reviewCount})</span>
        </div>
      </div>

      <p className="text-[15px] leading-relaxed text-velmora-text-muted mb-8 pr-4">
        {product.description}
      </p>

      {/* Variant Selector */}
      {product.variants && product.variants.length > 0 && (
        <div className="mb-8">
          <div className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-3">Tone</div>
          <div className="flex gap-2">
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
      )}

      {/* Quantity */}
      <div className="mb-8">
        <div className="text-xs tracking-[0.1em] uppercase text-velmora-text-muted mb-3">Quantity</div>
        <div className="qty-selector">
          <button onClick={decrementQty} className="qty-btn" aria-label="Decrease quantity">−</button>
          <span className="qty-value">{quantity}</span>
          <button onClick={incrementQty} className="qty-btn" aria-label="Increase quantity">+</button>
        </div>
      </div>

      {/* Add to Cart */}
      <button 
        onClick={handleAddToCart}
        className="btn btn-accent w-full mb-4"
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Sold Out'}
      </button>

      <p className="text-center text-[10px] tracking-[0.1em] text-velmora-text-muted">
        FREE SHIPPING • 30-DAY RETURNS
      </p>
    </div>
  );
};

export default ProductInfo;
