import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="lg:py-4">
      {/* Category */}
      <p className="text-xs font-medium tracking-widest-xl uppercase text-charcoal-400 mb-3">
        {product.category}
      </p>

      {/* Product name */}
      <h1 className="text-product-name text-2xl md:text-3xl text-charcoal-800 mb-4">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-charcoal-400">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-xl font-medium text-charcoal-800 mb-6">
        {formatPrice(product.price)}
      </p>

      {/* Description */}
      <p className="text-sm text-charcoal-500 leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-xs font-medium tracking-wider uppercase text-charcoal-600 mb-3">
          Tone: {selectedVariant}
        </p>
        <div className="flex gap-2">
          {product.variants.map(variant => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-5 py-2 text-xs font-medium tracking-wider uppercase border transition-all ${
                selectedVariant === variant
                  ? 'border-charcoal-800 bg-charcoal-800 text-cream-100'
                  : 'border-cream-400 text-charcoal-600 hover:border-charcoal-400'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-xs font-medium tracking-wider uppercase text-charcoal-600 mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-cream-400">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center text-sm font-medium text-charcoal-800">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <button onClick={handleAddToCart} className="btn-primary w-full flex items-center justify-center gap-2">
        <ShoppingBag className="w-4 h-4" />
        Add to Cart — {formatPrice(product.price * quantity)}
      </button>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-cream-300">
        {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(badge => (
          <span key={badge} className="text-[10px] font-medium tracking-wider uppercase text-charcoal-400">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
