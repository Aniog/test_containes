import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import Rating from './Rating';

const ProductCard = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]?.name || 'Default', 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        'group block relative',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface)] mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          />
        )}

        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-border)] to-[var(--color-background)] animate-pulse" />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--color-accent)] text-white text-xs font-sans font-medium px-3 py-1 tracking-wider uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-[var(--color-dark)] text-white font-sans text-sm py-3 tracking-wide uppercase transition-all duration-300',
            'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag size={16} />
            Add to Cart
          </span>
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="product-name text-[var(--color-dark)]">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-[var(--color-secondary)]">
            ${product.price}
          </span>
          <Rating 
            rating={product.rating} 
            reviewCount={product.reviewCount} 
            size="sm"
          />
        </div>

        {/* Variants preview */}
        {product.variants.length > 1 && (
          <div className="flex gap-1.5 pt-1">
            {product.variants.map((variant) => (
              <span
                key={variant.name}
                className="w-4 h-4 rounded-full border border-[var(--color-border)]"
                style={{ backgroundColor: variant.color }}
                title={variant.name}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
