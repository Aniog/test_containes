import { useState } from 'react';
import { ShoppingBag, Heart, Check } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';

export function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, selectedVariant, quantity);
    setTimeout(() => setIsAdding(false), 1500);
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-warmblack">
          {product.name}
        </h1>
        <p className="text-stone mt-2">{product.shortDescription}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
      </div>

      {/* Price */}
      <div className="py-4 border-y border-hairline">
        <p className="font-serif text-2xl text-warmblack">${product.price}</p>
      </div>

      {/* Description */}
      <p className="text-stone leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selector */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <label className="block text-xs uppercase tracking-wider text-stone mb-3">
            Finish: <span className="text-warmblack">{selectedVariant}</span>
          </label>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-6 py-2.5 text-xs uppercase tracking-wider border transition-all duration-200 ${
                  selectedVariant === variant
                    ? 'border-gold bg-gold/10 text-warmblack'
                    : 'border-hairline text-stone hover:border-gold'
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
        <label className="block text-xs uppercase tracking-wider text-stone mb-3">
          Quantity
        </label>
        <div className="inline-flex items-center border border-hairline">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="w-12 h-12 flex items-center justify-center text-stone hover:text-warmblack transition-colors"
            aria-label="Decrease quantity"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
            </svg>
          </button>
          <span className="w-12 h-12 flex items-center justify-center text-warmblack font-medium border-x border-hairline">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="w-12 h-12 flex items-center justify-center text-stone hover:text-warmblack transition-colors"
            aria-label="Increase quantity"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-sm"
      >
        {isAdding ? (
          <>
            <Check className="w-5 h-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            Add to Cart — ${product.price * quantity}
          </>
        )}
      </button>

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="w-full btn-secondary py-4 flex items-center justify-center gap-2 text-sm"
      >
        <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-gold text-gold' : ''}`} />
        {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
      </button>

      {/* Additional Info */}
      <div className="pt-6 space-y-3 text-sm text-stone">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          <span>Free worldwide shipping on orders over $50</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          <span>30-day hassle-free returns</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          <span>Gift-ready packaging included</span>
        </div>
      </div>
    </div>
  );
}
