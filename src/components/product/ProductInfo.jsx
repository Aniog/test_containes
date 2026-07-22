import { useState } from 'react';
import { Button, StarRating, QuantitySelector } from '@/components/ui';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    addItem(product.id, selectedVariant, quantity);
    setIsAdding(false);
    openCart();
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <div>
        <h1 className="text-product-name text-2xl text-brand-text-primary">
          {product.name}
        </h1>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-2xl font-medium text-brand-gold">
            {formatPrice(product.price)}
          </p>
          <StarRating
            rating={product.rating}
            size="md"
            showCount
            count={product.reviewCount}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-brand-text-secondary leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selector */}
      {product.variants.length > 1 && (
        <div>
          <label className="block text-sm font-medium text-brand-text-primary mb-3">
            Finish: <span className="text-brand-text-secondary">{selectedVariant}</span>
          </label>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-6 py-2.5 text-sm font-medium uppercase tracking-wider border transition-all duration-200 rounded-sm ${
                  selectedVariant === variant
                    ? 'border-brand-gold bg-brand-gold text-brand-bg-primary'
                    : 'border-brand-border-subtle text-brand-text-primary hover:border-brand-gold'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-brand-text-primary mb-3">
          Quantity
        </label>
        <QuantitySelector
          value={quantity}
          onChange={setQuantity}
          min={1}
          max={10}
        />
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        loading={isAdding}
        fullWidth
        size="lg"
        className="mt-4"
      >
        Add to Cart — {formatPrice(product.price * quantity)}
      </Button>

      {/* Benefits */}
      <div className="pt-6 border-t border-brand-border-subtle space-y-3">
        <div className="flex items-center gap-3 text-sm text-brand-text-secondary">
          <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          Free worldwide shipping on orders over $75
        </div>
        <div className="flex items-center gap-3 text-sm text-brand-text-secondary">
          <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          30-day hassle-free returns
        </div>
        <div className="flex items-center gap-3 text-sm text-brand-text-secondary">
          <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
          Hypoallergenic & tarnish-resistant
        </div>
      </div>
    </div>
  );
}
