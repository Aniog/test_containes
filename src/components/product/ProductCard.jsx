import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { formatPrice, generateStars, cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();
  
  const stars = generateStars(product.rating);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].value, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100',
            !imageLoaded && 'opacity-0',
            imageLoaded && 'opacity-100'
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          />
        )}

        {/* Quick Add Button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-4 transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-espresso/90 backdrop-blur-sm text-ivory py-3 text-sm font-medium tracking-wide hover:bg-espresso transition-colors duration-300"
          >
            Quick Add
          </button>
        </div>

        {/* Category Badge */}
        {product.category === 'sets' && (
          <span className="absolute top-3 left-3 bg-roseGold text-ivory text-xs px-3 py-1 tracking-wide">
            Gift Set
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Name */}
        <h3 className="text-product uppercase tracking-widest text-espresso group-hover:text-cocoa transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(stars.fullStars)].map((_, i) => (
            <Star key={`full-${i}`} className="w-3 h-3 fill-champagne text-champagne" />
          ))}
          {stars.hasHalfStar && (
            <Star className="w-3 h-3 fill-champagne text-champagne opacity-50" />
          )}
          {[...Array(stars.emptyStars)].map((_, i) => (
            <Star key={`empty-${i}`} className="w-3 h-3 text-goldLight" />
          ))}
          <span className="text-xs text-silk ml-1">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <p className="text-cocoa font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
