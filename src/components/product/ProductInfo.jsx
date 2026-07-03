import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0] || null);
  const { addToCart, isLoading } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(q => q + 1);
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <div>
        <p className="label-uppercase text-xs tracking-[0.2em] mb-2" style={{ color: 'var(--color-gold)' }}>
          {product.category}
        </p>
        <h1 className="product-name text-base md:text-lg" style={{ color: 'var(--color-text)' }}>
          {product.name}
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4"
              fill={i < Math.floor(product.rating) ? '#C9A962' : 'none'}
              stroke={i < Math.floor(product.rating) ? '#C9A962' : '#D5D0C8'}
            />
          ))}
        </div>
        <span className="text-sm text-[#6B6560]">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-2xl font-medium" style={{ color: 'var(--color-text)' }}>
        ${product.price}
      </p>

      {/* Short Description */}
      <p className="text-[#6B6560] leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Variant Selector */}
      {product.variants.length > 1 && (
        <div>
          <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
            Finish: <span className="font-normal">{selectedVariant}</span>
          </p>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-6 py-2 text-sm uppercase tracking-wider border transition-all ${
                  selectedVariant === variant
                    ? 'border-[#C9A962] bg-[#C9A962] text-white'
                    : 'border-[#E8E4DC] hover:border-[#C9A962]'
                }`}
                style={selectedVariant !== variant ? { borderColor: 'var(--color-border)' } : {}}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
          Quantity
        </p>
        <div className="flex items-center border border-[#E8E4DC] w-fit">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="p-3 hover:bg-[#F5F2ED] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-medium">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="p-3 hover:bg-[#F5F2ED] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="w-full btn btn-primary flex items-center justify-center gap-3 py-4"
      >
        <ShoppingBag className="w-5 h-5" />
        {isLoading ? 'Adding...' : 'Add to Cart'}
      </button>

      {/* Benefits */}
      <div className="pt-4 border-t border-[#E8E4DC] space-y-2">
        <div className="flex items-center gap-2 text-sm text-[#6B6560]">
          <svg className="w-4 h-4 text-[#C9A962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          Free worldwide shipping on orders over $75
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B6560]">
          <svg className="w-4 h-4 text-[#C9A962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          30-day hassle-free returns
        </div>
        <div className="flex items-center gap-2 text-sm text-[#6B6560]">
          <svg className="w-4 h-4 text-[#C9A962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          Presented in our signature gift box
        </div>
      </div>
    </div>
  );
}
