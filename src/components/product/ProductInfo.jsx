import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Heart, Share2, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, isLoading } = useCart();

  const handleAddToCart = async () => {
    await addToCart(product, quantity, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <div>
        <p className="text-xs text-warm-gray tracking-wide uppercase mb-2">
          {product.category}
        </p>
        <h1 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide">
          {product.name}
        </h1>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-semibold text-charcoal">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-lg text-warm-gray line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'text-gold fill-gold'
                  : 'text-sand'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-warm-gray">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Short Description */}
      <p className="text-warm-gray leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selector */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-charcoal tracking-[0.1em] uppercase mb-3">
            Finish: <span className="font-normal text-warm-gray">{selectedVariant}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 ${
                  selectedVariant === variant
                    ? 'bg-charcoal text-ivory'
                    : 'bg-transparent border border-sand text-charcoal hover:border-charcoal'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <p className="text-xs font-semibold text-charcoal tracking-[0.1em] uppercase mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-sand">
          <button
            onClick={decrementQuantity}
            className="p-3 text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-sm font-medium text-charcoal">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="p-3 text-warm-gray hover:text-charcoal transition-colors"
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
        className={`w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
          isAdded
            ? 'bg-green-600 text-white'
            : 'bg-gold text-charcoal hover:bg-gold-light'
        }`}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : isAdded ? (
          <>
            <Check className="w-4 h-4" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </>
        )}
      </button>

      {/* Secondary Actions */}
      <div className="flex items-center gap-4 pt-2">
        <button className="flex items-center gap-2 text-xs text-warm-gray hover:text-charcoal transition-colors">
          <Heart className="w-4 h-4" />
          Add to Wishlist
        </button>
        <button className="flex items-center gap-2 text-xs text-warm-gray hover:text-charcoal transition-colors">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>

      {/* Trust Badges */}
      <div className="pt-6 border-t border-sand">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span className="text-[10px] text-warm-gray tracking-wide">Free Shipping</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-[10px] text-warm-gray tracking-wide">30-Day Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
