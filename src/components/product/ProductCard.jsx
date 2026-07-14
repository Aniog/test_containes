import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        'group block animate-fade-in',
        index > 0 && `stagger-${Math.min(index + 1, 5)}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-velmora-cream rounded-lg overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          )}
        />
        {/* Secondary Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        {/* Quick Add Button */}
        <div
          className={cn(
            'absolute bottom-4 left-4 right-4 transition-all duration-300 ease-silk',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-velmora-charcoal py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <Plus size={16} />
            <span className="text-xs font-medium tracking-wider uppercase">Quick Add</span>
          </button>
        </div>

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded">
            Bestseller
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal">
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} size={12} />
        <p className="font-medium text-velmora-espresso">${product.price}</p>
      </div>
    </Link>
  );
}
