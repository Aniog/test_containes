import { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, variant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const nameId = `pdp-${product.id}-name`;
  const descId = `pdp-${product.id}-desc`;

  return (
    <div>
      {/* Name */}
      <h1
        id={nameId}
        className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase text-espresso leading-snug"
      >
        {product.name}
      </h1>
      <p id={descId} className="sr-only">{product.description}</p>

      {/* Price */}
      <p className="text-lg text-espresso mt-2">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-warm-sand'}
          />
        ))}
        <span className="text-sm text-taupe ml-2">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-taupe leading-relaxed mt-5">{product.description}</p>

      {/* Variant selector */}
      <div className="mt-6">
        <p className="text-xs tracking-[0.12em] uppercase text-espresso mb-3">Finish</p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-5 py-2 text-sm capitalize border transition-all ${
                variant === v
                  ? 'border-accent bg-accent/5 text-accent'
                  : 'border-warm-sand text-taupe hover:border-accent'
              }`}
            >
              {v} Tone
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-[0.12em] uppercase text-espresso">Qty</span>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 border border-warm-sand flex items-center justify-center text-espresso hover:border-accent transition-colors"
          >
            <Minus size={13} />
          </button>
          <span className="w-6 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 border border-warm-sand flex items-center justify-center text-espresso hover:border-accent transition-colors"
          >
            <Plus size={13} />
          </button>
        </div>

        <button onClick={handleAdd} className="btn-primary w-full">
          {added ? 'Added to Bag' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
