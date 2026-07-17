import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.variants[0]?.id || 'gold', 1);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-ivory-200 overflow-hidden mb-4">
        {/* Primary image */}
        <div
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`absolute inset-0 bg-ink-700 transition-opacity duration-700 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gold-300/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gold-400/40" />
            </div>
          </div>
        </div>

        {/* Hover image (second image) */}
        <div
          className={`absolute inset-0 bg-ink-600 transition-opacity duration-700 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gold-200/20 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gold-300/30" />
            </div>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-ink-800 text-ivory-50 text-[10px] tracking-widest uppercase font-sans px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase font-sans transition-all duration-300 ${
              addedFeedback
                ? 'bg-green-700 text-white'
                : 'bg-ink-800/90 backdrop-blur-sm text-ivory-50 hover:bg-ink-700'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {addedFeedback ? 'Added!' : 'Add to Bag'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="product-name" id={product.titleId}>
          {product.name}
        </h3>
        <p className="font-sans text-sm text-gold-600 font-medium">
          ${product.price}
        </p>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold-400 text-gold-400'
                    : 'text-ink-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-ink-400">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
