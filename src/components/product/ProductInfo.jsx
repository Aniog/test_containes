import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="lg:pl-8 xl:pl-14">
      {/* Breadcrumb */}
      <nav className="text-body-sm text-charcoal-400 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span className="capitalize">{product.category}</span>
        <span className="mx-2">/</span>
        <span className="text-charcoal-700">{product.name}</span>
      </nav>

      {/* Product name */}
      <h1
        id={product.titleId}
        className="font-serif text-2xl lg:text-3xl tracking-[0.12em] uppercase font-medium text-charcoal-800 mb-3"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'text-gold-500 fill-gold-500'
                  : 'text-charcoal-200'
              }`}
            />
          ))}
        </div>
        <span className="text-body-sm text-charcoal-400">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-serif text-2xl text-charcoal-800 mb-6">
        {formatPrice(product.price)}
      </p>

      {/* Description */}
      <p id={product.descId} className="text-body text-charcoal-500 leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-caption uppercase tracking-[0.15em] text-charcoal-500 mb-3">
          Tone: {selectedVariant}
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2.5 text-body-sm font-medium border transition-all duration-300 ${
                selectedVariant === variant
                  ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                  : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-caption uppercase tracking-[0.15em] text-charcoal-500 mb-3">
          Quantity
        </p>
        <div className="inline-flex items-center border border-charcoal-200">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 py-3 text-body font-medium text-charcoal-800 min-w-[60px] text-center border-x border-charcoal-200">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleAddToCart}
          className="btn-gold flex-1 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          Add to Cart
        </button>
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`w-14 h-14 border flex items-center justify-center transition-all duration-300 ${
            wishlisted
              ? 'border-red-300 bg-red-50 text-red-500'
              : 'border-charcoal-200 text-charcoal-400 hover:border-charcoal-400'
          }`}
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-5 h-5 ${wishlisted ? 'fill-red-500' : ''}`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-4 text-body-sm text-charcoal-400 pt-4 border-t border-charcoal-100/50">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          Free Shipping
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          30-Day Returns
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          Hypoallergenic
        </span>
      </div>
    </div>
  );
}
