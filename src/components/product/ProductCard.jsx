import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div
        className="relative aspect-[4/5] overflow-hidden bg-[var(--color-ivory)] mb-4"
      >
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Secondary Image on Hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 text-sm tracking-wider transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{
              backgroundColor: 'var(--color-charcoal)',
              color: 'white'
            }}
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3
          className="product-name text-xs mb-1 group-hover:text-[var(--color-accent)] transition-colors"
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill={i < product.rating ? 'var(--color-gold)' : 'none'}
              style={{
                color: 'var(--color-gold)',
                strokeWidth: i < product.rating ? 0 : 1.5
              }}
            />
          ))}
          <span
            className="text-xs ml-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            ({product.reviews})
          </span>
        </div>

        <p
          className="font-serif"
          style={{ color: 'var(--color-text-primary)' }}
        >
          ${product.price}
        </p>
      </div>
    </Link>
  );
}