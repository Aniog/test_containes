import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.value || '');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate brief loading
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addItem(product, selectedVariant, quantity);
    setIsAdding(false);
    setJustAdded(true);
    
    setTimeout(() => setJustAdded(false), 2000);
  };

  const decreaseQuantity = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const increaseQuantity = () => {
    setQuantity((q) => Math.min(10, q + 1));
  };

  return (
    <div className="space-y-8">
      {/* Title & Price */}
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal uppercase tracking-[0.1em] mb-3">
          {product.name}
        </h1>
        <p className="font-serif text-2xl text-charcoal-light">
          {formatPrice(product.price)}
        </p>
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
              strokeWidth={1.5}
            />
          ))}
        </div>
        <span className="text-warm-gray text-body-sm">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Short Description */}
      <p className="text-charcoal-light leading-relaxed">
        {product.shortDescription}
      </p>

      <div className="divider" />

      {/* Variant Selector */}
      {product.variants.length > 1 && (
        <div>
          <label className="block text-overline text-charcoal-light mb-3">
            Finish: <span className="capitalize">{selectedVariant}</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.value}
                onClick={() => setSelectedVariant(variant.value)}
                disabled={!variant.inStock}
                className={`px-6 py-3 rounded-full border transition-all duration-200 ${
                  selectedVariant === variant.value
                    ? 'border-gold bg-gold/10 text-charcoal'
                    : 'border-sand text-charcoal-light hover:border-charcoal-light'
                } ${!variant.inStock ? 'opacity-50 cursor-not-allowed line-through' : ''}`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <label className="block text-overline text-charcoal-light mb-3">
          Quantity
        </label>
        <div className="flex items-center border border-sand rounded-sm w-fit">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="p-3 text-charcoal-light hover:text-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <span className="px-6 text-charcoal font-medium min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            disabled={quantity >= 10}
            className="p-3 text-charcoal-light hover:text-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`w-full py-5 flex items-center justify-center gap-3 rounded-sm text-overline font-medium uppercase tracking-widest transition-all duration-200 ${
          justAdded
            ? 'bg-success text-white'
            : 'bg-gold text-charcoal hover:bg-gold-dark'
        } disabled:opacity-70`}
      >
        {justAdded ? (
          <>
            <Check className="w-5 h-5" strokeWidth={2} />
            Added to Bag
          </>
        ) : isAdding ? (
          'Adding...'
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            Add to Bag
          </>
        )}
      </button>

      {/* Additional Info */}
      <div className="space-y-3 text-body-sm text-warm-gray">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" strokeWidth={2} />
          <span>Free worldwide shipping on orders over $75</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" strokeWidth={2} />
          <span>30-day hassle-free returns</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" strokeWidth={2} />
          <span>Hypoallergenic & nickel-free</span>
        </div>
      </div>
    </div>
  );
}
