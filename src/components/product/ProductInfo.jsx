import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function ProductInfo({ product }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addItem(product, selectedVariant, quantity);
    setIsAdding(false);
    setQuantity(1);
  };

  return (
    <div className="space-y-6">
      {/* Product name */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide uppercase mb-2">
          {product.name}
        </h1>
        <div className="flex items-center gap-3">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-4 h-4',
                  i < Math.floor(product.rating)
                    ? 'text-gold fill-gold'
                    : 'text-sand'
                )}
              />
            ))}
          </div>
          <span className="font-sans text-sm text-taupe">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <p className="font-serif text-2xl text-charcoal">
        ${product.price}
      </p>

      {/* Short description */}
      <p className="font-sans text-charcoal/70 leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Divider */}
      <div className="w-16 h-px bg-sand" />

      {/* Variant selector */}
      <div>
        <label className="block font-sans text-sm text-charcoal mb-3">
          Finish: <span className="text-taupe">{selectedVariant}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {product.variants.map(variant => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={cn(
                'px-4 py-2 rounded-full font-sans text-sm transition-all duration-200 border',
                selectedVariant === variant
                  ? 'bg-charcoal text-ivory border-charcoal'
                  : 'bg-transparent text-charcoal border-sand hover:border-charcoal'
              )}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity selector */}
      <div>
        <label className="block font-sans text-sm text-charcoal mb-3">
          Quantity
        </label>
        <div className="flex items-center border border-sand rounded w-fit">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-sans text-charcoal">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <Button
        onClick={handleAddToCart}
        variant="primary"
        className="w-full"
        size="lg"
        disabled={isAdding}
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        {isAdding ? 'Adding...' : 'Add to Bag'}
      </Button>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-4 pt-4">
        <div className="flex items-center gap-2 text-xs text-taupe">
          <span className="w-4 h-px bg-gold" />
          Free Shipping
        </div>
        <div className="flex items-center gap-2 text-xs text-taupe">
          <span className="w-4 h-px bg-gold" />
          30-Day Returns
        </div>
        <div className="flex items-center gap-2 text-xs text-taupe">
          <span className="w-4 h-px bg-gold" />
          Hypoallergenic
        </div>
      </div>
    </div>
  );
}
