import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product, selectedVariant, quantity);
    setIsAdding(false);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  return (
    <div className="space-y-6">
      {/* Badge */}
      {product.badge && (
        <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-medium tracking-wide">
          {product.badge}
        </span>
      )}

      {/* Product Name */}
      <h1 className="font-serif text-2xl md:text-3xl text-charcoal-900 uppercase tracking-wide">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                i < Math.floor(product.rating) 
                  ? 'fill-gold-400 text-gold-400' 
                  : 'fill-charcoal-200 text-charcoal-200'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-charcoal-500">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <div className="py-4 border-y border-charcoal-100">
        <span className="font-serif text-2xl text-charcoal-900">
          ${product.price}
        </span>
      </div>

      {/* Short Description */}
      <p className="text-charcoal-600 font-sans leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Variant Selector */}
      {product.variants && product.variants.length > 1 && (
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-3">
            Finish: <span className="font-normal text-charcoal-500">{selectedVariant}</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={cn(
                  'px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200',
                  selectedVariant === variant
                    ? 'bg-charcoal-900 text-cream-50'
                    : 'bg-white border border-charcoal-200 text-charcoal-700 hover:border-charcoal-400'
                )}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-medium text-charcoal-700 mb-3">
          Quantity
        </label>
        <div className="flex items-center border border-charcoal-200 w-fit">
          <button
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="p-3 text-charcoal-500 hover:text-charcoal-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-medium text-charcoal-900">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="p-3 text-charcoal-500 hover:text-charcoal-900 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={cn(
          'w-full btn-accent text-base py-4 flex items-center justify-center gap-2',
          isAdding && 'opacity-80'
        )}
      >
        {isAdding ? (
          <>
            <Check className="w-5 h-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </>
        )}
      </button>

      {/* Trust Badges */}
      <div className="flex flex-wrap gap-4 pt-4 text-xs text-charcoal-500">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Free Worldwide Shipping
        </span>
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          30-Day Returns
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
