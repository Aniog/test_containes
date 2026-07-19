import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[4/5] bg-brand-off-white overflow-hidden mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={`product-card-${product.id}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            )}
          />
          {/* Hover image (second image) */}
          {product.images[1] && (
            <img
              data-strk-img-id={`product-card-hover-${product.id}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] detail closeup`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} detail`}
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-all duration-700',
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              )}
            />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-brand-charcoal text-white text-[10px] font-medium uppercase tracking-widest-plus">
              {product.badge}
            </span>
          )}

          {/* Quick actions overlay */}
          <div
            className={cn(
              'absolute bottom-0 left-0 right-0 p-3 transition-all duration-300',
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full flex items-center justify-center gap-2 py-3 bg-brand-charcoal text-white text-xs font-medium uppercase tracking-widest-plus hover:bg-brand-gold transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-sm font-medium uppercase tracking-widest-plus text-brand-charcoal leading-tight">
              {product.name}
            </h3>
          </div>
          <StarRating rating={product.rating} count={product.reviewCount} size="sm" />
          <p className="text-base font-semibold text-brand-charcoal">
            {formatPrice(product.price)}
          </p>
          <p className="text-xs text-brand-warm-gray line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
