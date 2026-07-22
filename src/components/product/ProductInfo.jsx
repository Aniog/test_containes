import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function ProductInfo({ product }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="px-4 md:px-8">
      {/* Product name */}
      <h1 className="velmora-product-name text-2xl md:text-3xl mb-2">{product.name}</h1>
      <p className="text-sm text-[var(--velmora-text-muted)] mb-4">{product.subtitle}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(product.rating) ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]' : 'text-[var(--velmora-border)]'}
            />
          ))}
        </div>
        <span className="text-sm text-[var(--velmora-text-muted)]">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="velmora-heading text-2xl mb-6">${product.price}</p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-xs tracking-[0.12em] uppercase text-[var(--velmora-text-muted)] mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all ${
                selectedVariant === variant
                  ? 'border-[var(--velmora-warm)] bg-[var(--velmora-warm)]/10 text-[var(--velmora-warm-dark)]'
                  : 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-warm)]'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="text-xs tracking-[0.12em] uppercase text-[var(--velmora-text-muted)] mb-3">
          Quantity
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-warm)] transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-warm)] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAddToCart} className="velmora-btn-accent w-full py-4 text-sm">
        <ShoppingBag size={16} className="mr-2" />
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Material badge */}
      <div className="mt-6 flex items-center gap-2 text-xs text-[var(--velmora-text-muted)]">
        <span className="w-2 h-2 rounded-full bg-[var(--velmora-warm)]" />
        {product.material}
      </div>
    </div>
  );
}
