import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <div>
        <h1
          id="product-detail-name"
          className="font-serif text-3xl md:text-4xl font-light uppercase tracking-wider"
        >
          {product.name}
        </h1>
        <p className="mt-2 text-2xl text-gold font-medium">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(product.rating)
                  ? 'fill-gold text-gold'
                  : 'text-stone-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-stone-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-stone-600 leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selector */}
      <div>
        <p className="text-xs uppercase tracking-wider text-stone-500 mb-3">
          Tone: <span className="text-stone-800">{selectedVariant.name}</span>
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-200 ${
                selectedVariant.id === variant.id
                  ? 'bg-stone-900 text-white'
                  : 'border border-stone-300 text-stone-600 hover:border-stone-500'
              }`}
            >
              {variant.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs uppercase tracking-wider text-stone-500 mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-stone-300">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-stone-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-3 min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-stone-100 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-gold text-white text-sm uppercase tracking-[0.15em] hover:bg-gold-dark transition-all duration-300 flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-5 h-5" />
        Add to Cart
      </button>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-200">
        <div className="text-center p-3 bg-stone-50">
          <p className="text-xs uppercase tracking-wider text-stone-500">Free Shipping</p>
        </div>
        <div className="text-center p-3 bg-stone-50">
          <p className="text-xs uppercase tracking-wider text-stone-500">30-Day Returns</p>
        </div>
      </div>
    </div>
  );
}
