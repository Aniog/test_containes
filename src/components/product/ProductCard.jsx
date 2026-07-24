import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants?.options?.[0] || 'Gold';
    addItem(product, defaultVariant, 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-velmora-border/30 rounded-sm overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsImageLoaded(true)}
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
        {product.isBestseller && (
          <span className="absolute top-3 left-3 text-xs font-medium tracking-wider text-velmora-gold bg-white/90 px-2 py-1 rounded-sm">
            BESTSELLER
          </span>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="flex items-center gap-2 text-sm font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
            >
              <Plus className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="text-product-name">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-price">${product.price}</p>
          {product.rating && (
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-velmora-gold fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span className="text-xs text-velmora-warm-gray">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
