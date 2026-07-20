import { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { useCartDispatch } from '@/lib/CartContext';

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState('Gold');
  const [qty, setQty] = useState(1);
  const dispatch = useCartDispatch();

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', product, variant, quantity: qty });
    dispatch({ type: 'OPEN_DRAWER' });
  };

  return (
    <div>
      {/* Product name */}
      <h1
        id={`product-title-${product.id}`}
        className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-espresso mb-2"
      >
        {product.name}
      </h1>

      {/* Price */}
      <p className="font-serif text-xl text-espresso mb-3">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold text-gold'
                  : 'fill-clay text-clay'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-umber">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-umber text-sm leading-relaxed mb-6">{product.description}</p>

      <hr className="hairline-divider mb-6" />

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-xs tracking-widest uppercase text-espresso font-medium mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {['Gold', 'Silver'].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-5 py-2 text-xs tracking-widest uppercase border transition-colors duration-300 ${
                variant === v
                  ? 'border-espresso bg-espresso text-cream'
                  : 'border-clay text-espresso hover:border-espresso'
              }`}
            >
              {v} Tone
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-xs tracking-widest uppercase text-espresso font-medium mb-3">
          Quantity
        </p>
        <div className="flex items-center gap-4">
          <button
            className="w-8 h-8 rounded-full border border-clay flex items-center justify-center text-espresso hover:bg-sand transition-colors disabled:opacity-30"
            disabled={qty <= 1}
            onClick={() => setQty(qty - 1)}
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-espresso w-6 text-center">{qty}</span>
          <button
            className="w-8 h-8 rounded-full border border-clay flex items-center justify-center text-espresso hover:bg-sand transition-colors"
            onClick={() => setQty(qty + 1)}
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd} className="btn-primary w-full mb-4">
        Add to Cart — ${(product.price * qty).toFixed(2)}
      </button>

      {/* Trust */}
      <p className="text-center text-xs text-umber">
        Free Worldwide Shipping · 30-Day Returns
      </p>
    </div>
  );
}
