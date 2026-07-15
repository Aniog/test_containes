import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="space-y-6">
      {/* Badge */}
      {product.badge && (
        <span className="inline-block bg-charcoal text-cream text-[10px] uppercase tracking-wider px-3 py-1.5">
          {product.badge}
        </span>
      )}

      {/* Title */}
      <h1 
        id={`product-${product.id}-title`}
        className="font-serif text-2xl sm:text-3xl uppercase tracking-widest text-charcoal"
        style={{ letterSpacing: '0.15em' }}
      >
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-2xl font-light text-gold-700">
        ${product.price.toFixed(2)}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-charcoal/20'} 
            />
          ))}
        </div>
        <span className="text-sm text-charcoal/60">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-charcoal/70 leading-relaxed">
        {product.description}
      </p>

      {/* Divider */}
      <div className="hairline" />

      {/* Variant selector */}
      <div>
        <p className="text-xs uppercase tracking-wider text-charcoal/50 mb-3" style={{ letterSpacing: '0.15em' }}>
          Tone: <span className="text-charcoal capitalize">{selectedVariant}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={`flex items-center gap-2 px-4 py-2 border transition-all ${
                selectedVariant === variant.id
                  ? 'border-charcoal bg-charcoal text-cream'
                  : 'border-charcoal/20 hover:border-charcoal/40'
              }`}
            >
              <span 
                className="w-4 h-4 rounded-full border border-charcoal/20"
                style={{ backgroundColor: variant.color }}
              />
              <span className="text-sm">{variant.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs uppercase tracking-wider text-charcoal/50 mb-3" style={{ letterSpacing: '0.15em' }}>
          Quantity
        </p>
        <div className="inline-flex items-center border border-charcoal/20">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-12 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button 
        onClick={handleAddToCart}
        className="w-full btn-gold flex items-center justify-center gap-2 py-4"
      >
        <ShoppingBag size={18} />
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Trust signals */}
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="border border-charcoal/10 p-3">
          <p className="text-[10px] uppercase tracking-wider text-charcoal/50">Free Shipping</p>
        </div>
        <div className="border border-charcoal/10 p-3">
          <p className="text-[10px] uppercase tracking-wider text-charcoal/50">30-Day Returns</p>
        </div>
      </div>
    </div>
  );
}
