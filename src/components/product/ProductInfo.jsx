import { useState } from 'react';
import { Star, Minus, Plus, Check } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice, cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    setAddedToCart(true);
    
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
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
      {/* Title & Price */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-charcoal-800 mb-2">
          {product.name}
        </h1>
        <p className="text-2xl text-charcoal-700">{formatPrice(product.price)}</p>
      </div>
      
      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                i < Math.floor(product.rating)
                  ? 'text-gold-500 fill-gold-500'
                  : 'text-charcoal-300'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-charcoal-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>
      
      {/* Short Description */}
      <p className="text-charcoal-600 leading-relaxed">
        {product.shortDescription}
      </p>
      
      {/* Variant Selector */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <p className="text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-3">
            Finish: <span className="text-charcoal-800">{selectedVariant}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={cn(
                  'px-4 py-2 border rounded-full text-sm transition-all',
                  selectedVariant === variant
                    ? 'border-gold-500 bg-gold-50 text-gold-700'
                    : 'border-charcoal-300 text-charcoal-600 hover:border-charcoal-500'
                )}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Quantity Selector */}
      <div>
        <p className="text-xs tracking-ultra-wide uppercase text-charcoal-600 mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-charcoal-300 rounded w-fit">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="p-3 text-charcoal-500 hover:text-charcoal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-charcoal-800 font-medium">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        className={cn(
          'w-full transition-all',
          addedToCart ? 'bg-green-600 hover:bg-green-700' : ''
        )}
        disabled={addedToCart}
      >
        {addedToCart ? (
          <span className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4" />
            Added to Bag
          </span>
        ) : (
          'Add to Bag'
        )}
      </Button>
      
      {/* Additional Info */}
      <div className="pt-4 border-t border-charcoal-200">
        <div className="flex items-center gap-4 text-sm text-charcoal-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            In Stock
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Free Shipping
          </span>
        </div>
      </div>
    </div>
  );
}
