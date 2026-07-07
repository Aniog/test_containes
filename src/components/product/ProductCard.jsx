import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-brand-cream-dark overflow-hidden mb-4">
        {/* Primary image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover image */}
        <img
          src={product.hoverImageUrl || product.imageUrl}
          alt={`${product.name} detail`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-charcoal text-brand-ivory text-[10px] tracking-[0.15em] uppercase font-sans px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-2.5 flex items-center justify-center gap-2 text-xs tracking-[0.15em] uppercase font-sans transition-all duration-300 ${
            hovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          } ${
            addedFeedback
              ? 'bg-brand-gold text-brand-ivory'
              : 'bg-brand-ivory text-brand-charcoal hover:bg-brand-gold hover:text-brand-ivory'
          }`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          {addedFeedback ? 'Added!' : 'Add to Bag'}
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="product-name-text text-sm text-brand-charcoal leading-tight">
          {product.name}
        </h3>
        <p className="text-[13px] text-brand-warm-gray font-sans">
          ${product.price.toFixed(2)}
        </p>
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.round(product.rating)
                    ? 'fill-brand-gold text-brand-gold'
                    : 'text-brand-cream-dark fill-brand-cream-dark'
                }
              />
            ))}
          </div>
          <span className="text-[11px] text-brand-warm-gray font-sans">
            ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}
