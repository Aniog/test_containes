import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Badge */}
      {product.badge && (
        <span className="inline-block px-3 py-1 bg-warm-200 text-xs tracking-wider uppercase text-charcoal-700">
          {product.badge}
        </span>
      )}

      {/* Product Name */}
      <h1 className="font-serif text-2xl sm:text-3xl text-charcoal-800 text-product-name">
        {product.name}
      </h1>

      {/* Price */}
      <p className="font-serif text-2xl text-charcoal-800">
        ${product.price}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold-400 text-gold-400'
                  : 'fill-charcoal-200 text-charcoal-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-charcoal-500">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Short Description */}
      <p className="text-charcoal-600 leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Divider */}
      <div className="h-px bg-charcoal-200" />

      {/* Variant Selector */}
      <div>
        <p className="text-sm text-charcoal-500 mb-3">
          Finish: <span className="text-charcoal-800">{selectedVariant}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-3 text-sm tracking-wider uppercase transition-all duration-200 ${
                selectedVariant === variant
                  ? 'bg-charcoal-800 text-cream-50'
                  : 'border border-charcoal-300 text-charcoal-700 hover:border-charcoal-800'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div>
        <p className="text-sm text-charcoal-500 mb-3">Quantity</p>
        <div className="flex items-center border border-charcoal-300 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-charcoal-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 text-center min-w-[3rem]">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-charcoal-100 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 flex items-center justify-center gap-3 text-sm tracking-wider uppercase transition-all duration-300 ${
          isAdded
            ? 'bg-green-600 text-cream-50'
            : 'bg-charcoal-800 text-cream-50 hover:bg-charcoal-900'
        }`}
      >
        {isAdded ? (
          <>
            <Check className="w-5 h-5" />
            Added to Bag
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            Add to Bag
          </>
        )}
      </button>

      {/* Additional Info */}
      <div className="pt-4 space-y-3 text-sm text-charcoal-500">
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
          Free worldwide shipping on orders over $75
        </p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
          30-day hassle-free returns
        </p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
          Hypoallergenic & safe for sensitive skin
        </p>
      </div>
    </div>
  );
}