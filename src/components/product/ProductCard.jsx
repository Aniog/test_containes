import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addToCart(product, product.variants?.[0]?.value || null, 1);
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && secondaryImage !== primaryImage ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image on Hover */}
        {secondaryImage !== primaryImage && (
          <img
            src={secondaryImage}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-charcoal text-cream text-[10px] uppercase tracking-wider">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-1 bg-gold-500 text-espresso text-[10px] uppercase tracking-wider">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          disabled={isAdding}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-charcoal/90 text-cream text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}
        >
          <ShoppingBag size={14} />
          {isAdding ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-stone'}
            />
          ))}
          <span className="text-xs text-taupe ml-1">({product.reviewCount})</span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-sm text-charcoal uppercase tracking-wider group-hover:text-taupe transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-charcoal">
            {formatPrice(product.price)}
          </span>
          {product.comparePrice && (
            <span className="text-sm text-taupe line-through">
              {formatPrice(product.comparePrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
