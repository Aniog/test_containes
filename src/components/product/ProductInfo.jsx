import React, { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductInfo = ({ product }) => {
  const [selectedTone, setSelectedTone] = useState(product.tone[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col">
      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-border'
              }`}
            />
          ))}
        </div>
        <span className="font-sans text-xs text-velmora-warmgray">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Name */}
      <h1
        id={`product-title-${product.id}`}
        className="font-serif text-2xl md:text-3xl font-medium text-velmora-espresso tracking-[0.15em] uppercase"
      >
        {product.name}
      </h1>

      {/* Price */}
      <p className="font-sans text-xl md:text-2xl font-medium text-velmora-espresso mt-3">
        ${product.price}
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-velmora-border my-6" />

      {/* Description */}
      <p className="font-sans text-sm text-velmora-warmgray leading-relaxed">
        {product.description}
      </p>

      {/* Tone Selector */}
      {product.tone.length > 1 && (
        <div className="mt-6">
          <p className="font-sans text-xs font-medium tracking-wider uppercase text-velmora-warmgray mb-3">
            Metal Tone
          </p>
          <div className="flex gap-2">
            {product.tone.map((tone) => (
              <button
                key={tone}
                onClick={() => setSelectedTone(tone)}
                className={`px-5 py-2.5 border text-xs font-sans font-medium tracking-wider uppercase rounded-full transition-all duration-300 ${
                  selectedTone === tone
                    ? 'border-velmora-espresso bg-velmora-espresso text-white'
                    : 'border-velmora-border text-velmora-warmgray hover:border-velmora-espresso'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mt-6">
        <p className="font-sans text-xs font-medium tracking-wider uppercase text-velmora-warmgray mb-3">
          Quantity
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-velmora-border rounded-sm">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-3 hover:bg-velmora-muted transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center text-sm font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-3 hover:bg-velmora-muted transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product, quantity, selectedTone)}
        className="mt-8 w-full py-4 bg-velmora-espresso text-white font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:bg-velmora-gold transition-colors duration-300 rounded-sm"
      >
        Add to Bag — ${(product.price * quantity).toFixed(2)}
      </button>

      {/* Trust signals */}
      <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-velmora-warmgray tracking-wider">
        <span>Free Shipping</span>
        <span className="text-velmora-border">|</span>
        <span>30-Day Returns</span>
        <span className="text-velmora-border">|</span>
        <span>Secure Checkout</span>
      </div>
    </div>
  );
};

export default ProductInfo;
