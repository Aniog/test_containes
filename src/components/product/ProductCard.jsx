import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    await addToCart(product, 1, product.variants?.[0] || 'Gold');
    setIsAdding(false);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[var(--color-cream)] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Bestseller Badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-[var(--color-charcoal)] text-[var(--color-ivory)] text-[10px] font-medium tracking-[0.1em] uppercase">
            Bestseller
          </span>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className={`absolute bottom-0 left-0 right-0 py-3 bg-[var(--color-ivory)] text-[var(--color-espresso)] text-xs font-medium tracking-[0.1em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag size={14} />
            {isAdding ? 'Adding...' : 'Quick Add'}
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Category */}
        <p className="text-[10px] text-[var(--color-warm-gray)] uppercase tracking-[0.1em]">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="product-name text-[var(--color-espresso)] group-hover:text-[var(--color-gold)] transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'text-[var(--color-gold)]' : 'text-[var(--color-divider)]'}
                fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
              />
            ))}
          </div>
          <span className="text-[10px] text-[var(--color-warm-gray)]">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="text-sm font-medium text-[var(--color-espresso)]">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
