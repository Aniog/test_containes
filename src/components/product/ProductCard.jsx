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
    addToCart(product, 'Gold', 1);
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
        className="relative aspect-[4/5] overflow-hidden mb-4"
        style={{ backgroundColor: 'var(--color-ivory)' }}
      >
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (on hover) */}
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 text-sm font-sans tracking-wider transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{
              backgroundColor: 'var(--color-charcoal)',
              color: 'var(--color-warm-white)'
            }}
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name mb-1">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-current" style={{ color: 'var(--color-gold)' }} />
          <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        <p className="font-sans text-sm font-medium" style={{ color: 'var(--color-charcoal)' }}>
          ${product.price}
        </p>
      </div>
    </Link>
  );
}