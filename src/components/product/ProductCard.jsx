import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || null);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[var(--color-bg)] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[var(--color-sand)] animate-pulse" />
        )}

        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-[var(--color-surface)] text-[10px] tracking-[0.15em] uppercase">
              Bestseller
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-white text-[var(--color-text-primary)] text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-gold)] hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-[var(--color-gold)] fill-current'
                  : 'text-[var(--color-taupe)]'
              }`}
            />
          ))}
          <span className="text-xs text-[var(--color-text-muted)] ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3
          className="text-[var(--color-text-primary)] tracking-[0.1em] uppercase"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '14px' }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-[var(--color-text-secondary)] font-medium">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}