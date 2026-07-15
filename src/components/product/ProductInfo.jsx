import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const { addToCart } = useCart();
  const [variant, setVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, variant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="lg:pl-8 lg:sticky lg:top-24">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-text-muted)] mb-2">
        {product.category}
      </p>
      <h1 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl tracking-[0.1em] uppercase mb-3">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(product.rating)
                ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                : 'text-[var(--velmora-border)]'
              }
            />
          ))}
        </div>
        <span className="text-sm text-[var(--velmora-text-muted)]">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-serif-display text-2xl mb-6">${product.price}</p>

      <div className="hairline mb-6" />

      {/* Description */}
      <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-xs tracking-[0.15em] uppercase mb-3">Color</p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-5 py-2 text-xs tracking-[0.1em] uppercase border transition-all ${
                variant === v
                  ? 'border-[var(--velmora-dark)] bg-[var(--velmora-dark)] text-white'
                  : 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-dark)]'
              }`}
            >
              {v} tone
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="text-xs tracking-[0.15em] uppercase mb-3">Quantity</p>
        <div className="flex items-center gap-0">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-dark)] transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-12 h-10 flex items-center justify-center border-y border-[var(--velmora-border)] text-sm">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-dark)] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleAddToCart}
          className={`flex-1 py-4 text-xs tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 transition-all ${
            addedToCart
              ? 'bg-green-700 text-white'
              : 'btn-accent'
          }`}
        >
          <ShoppingBag size={16} />
          {addedToCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
        <button
          className="w-14 h-14 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-accent)] hover:text-[var(--velmora-accent)] transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-2 gap-4 text-xs text-[var(--velmora-text-muted)]">
        <div className="flex items-center gap-2">
          <span className="text-[var(--velmora-gold)]">&#10003;</span>
          Free shipping over $50
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--velmora-gold)]">&#10003;</span>
          30-day returns
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--velmora-gold)]">&#10003;</span>
          18K gold plated
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--velmora-gold)]">&#10003;</span>
          Hypoallergenic
        </div>
      </div>
    </div>
  );
}
