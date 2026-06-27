import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.value || 'gold'
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product, selectedVariant, quantity);
    
    setTimeout(() => {
      setJustAdded(true);
      setIsAdding(false);
      
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 500);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(q => q + 1);
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Product Name */}
      <h1 
        className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.05em' }}
      >
        {product.name}
      </h1>
      
      {/* Price */}
      <p className="text-xl md:text-2xl text-[var(--color-charcoal)] font-medium">
        {formatPrice(product.price)}
      </p>
      
      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-4 h-4',
                i < Math.floor(product.rating) 
                  ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' 
                  : 'text-[var(--color-sand)]'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-[var(--color-warm-gray)]">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>
      
      {/* Short Description */}
      <p className="text-[var(--color-warm-gray)] leading-relaxed">
        {product.shortDescription}
      </p>
      
      {/* Variant Selector */}
      {product.variants && product.variants.length > 1 && (
        <div className="space-y-3">
          <p className="text-sm text-[var(--color-charcoal)] font-medium">
            Finish: <span className="font-normal text-[var(--color-warm-gray)] capitalize">{selectedVariant}</span>
          </p>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.value}
                onClick={() => setSelectedVariant(variant.value)}
                className={cn(
                  'px-5 py-2 text-sm rounded-sm border transition-all duration-200',
                  selectedVariant === variant.value
                    ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]'
                    : 'border-[var(--color-sand)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]'
                )}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Quantity Selector */}
      <div className="space-y-3">
        <p className="text-sm text-[var(--color-charcoal)] font-medium">Quantity</p>
        <div className="inline-flex items-center border border-[var(--color-sand)] rounded-sm">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="p-3 text-[var(--color-charcoal)] hover:text-[var(--color-gold)] disabled:opacity-50 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-[var(--color-charcoal)]">{quantity}</span>
          <button
            onClick={increaseQuantity}
            disabled={quantity >= 10}
            className="p-3 text-[var(--color-charcoal)] hover:text-[var(--color-gold)] disabled:opacity-50 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={isAdding || justAdded}
        variant="gold"
        size="xl"
        fullWidth
        className="py-4"
      >
        {justAdded ? (
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
      </Button>
      
      {/* Additional info */}
      <div className="pt-4 border-t border-[var(--color-sand)]">
        <div className="flex items-center gap-6 text-sm text-[var(--color-taupe)]">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Free Shipping
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            30-Day Returns
          </span>
        </div>
      </div>
    </div>
  );
}
