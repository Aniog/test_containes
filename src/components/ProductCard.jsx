import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-secondary)] mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image on Hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            style={{
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={14} />
              Quick Add
            </span>
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-sm tracking-wider">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="price">${product.price}</span>
          {product.rating && (
            <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-accent)' }}>
              <Star size={12} fill="currentColor" />
              {product.rating}
            </span>
          )}
        </div>
        {product.variants && product.variants.length > 1 && (
          <p className="text-xs opacity-50">{product.variants.join(' / ')}</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;