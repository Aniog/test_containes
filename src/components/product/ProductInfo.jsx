import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  return (
    <div className="space-y-6">
      {/* Title & rating */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl text-charcoal tracking-[0.1em] uppercase font-light">
          {product.name}
        </h1>
        <div className="flex items-center gap-1 mt-2">
          {stars.map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= Math.floor(product.rating)
                  ? 'text-gold fill-gold'
                  : 'text-warm-gray/30'
              }`}
            />
          ))}
          <span className="text-sm text-warm-gray ml-2">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <p className="text-2xl text-charcoal font-serif">${product.price}</p>

      {/* Description */}
      <p className="text-sm text-warm-gray leading-relaxed">
        {product.description}
      </p>

      {/* Variant selector */}
      <div>
        <p className="text-xs tracking-[0.1em] uppercase text-charcoal/70 mb-3">
          Finish: <span className="text-charcoal">{variant}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-3 text-sm tracking-[0.05em] uppercase transition-all duration-200 ${
                variant === v
                  ? 'bg-charcoal text-white'
                  : 'bg-cream text-charcoal/70 border border-border-light hover:border-charcoal/30'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Add to cart */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-border-light">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3.5 hover:bg-cream transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-4 py-3.5 text-sm min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3.5 hover:bg-cream transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-gold text-white text-sm tracking-[0.15em] uppercase hover:bg-gold-hover transition-colors flex items-center justify-center gap-3"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Trust badges */}
      <div className="flex items-center gap-6 text-xs text-warm-gray pt-2">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-gold rounded-full" />
          Free Shipping
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-gold rounded-full" />
          30-Day Returns
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 bg-gold rounded-full" />
          Secure Checkout
        </span>
      </div>
    </div>
  );
}