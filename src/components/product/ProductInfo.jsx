import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isLoading } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const variants = product.variants || ['gold'];

  return (
    <div className="space-y-6">
      {/* Product name */}
      <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-xl md:text-2xl font-medium">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                  : 'fill-transparent text-[var(--color-border-dark)]'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-[var(--color-text-muted)]">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Description */}
      <p className="text-[var(--color-text-secondary)] leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      {variants.length > 1 && (
        <div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">
            Finish: <span className="capitalize">{selectedVariant}</span>
          </p>
          <div className="flex gap-3">
            {variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-5 py-2 text-sm uppercase tracking-wider border transition-all ${
                  selectedVariant === variant
                    ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                    : 'border-[var(--color-border)] hover:border-[var(--color-charcoal)]'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity selector */}
      <div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-3">Quantity</p>
        <div className="flex items-center border border-[var(--color-border)] w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-[var(--color-cream)] transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 text-sm min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-[var(--color-cream)] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="w-full bg-[var(--color-charcoal)] text-white py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-[var(--color-charcoal-light)] transition-all duration-300 disabled:opacity-50"
      >
        <ShoppingBag className="w-5 h-5" />
        {isLoading ? 'Adding...' : 'Add to Bag'}
      </button>

      {/* Materials note */}
      <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
        <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
        {product.materials}
      </div>
    </div>
  );
}
