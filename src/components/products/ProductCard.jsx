import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { formatPrice, cn } from '../../lib/utils';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square bg-cream-200 rounded overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={`${product.id}-card-1`}
          data-strk-img={`[${product.id}-title] [product-card-subtitle] elegant gold jewelry product`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[0].alt}
          className={cn(
            'w-full h-full object-cover transition-all duration-500 ease-luxury',
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={`${product.id}-card-2`}
          data-strk-img={`[${product.id}-title] jewelry worn close-up detail`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[1].alt}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-luxury',
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-charcoal text-cream-100 font-sans text-[10px] uppercase tracking-ultra-wide rounded">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 bg-cream-50/95 backdrop-blur-sm text-charcoal font-sans text-caption uppercase tracking-ultra-wide rounded transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
          Add to Bag
        </button>
      </div>

      {/* Text content — hidden title id for strk-img interpolation */}
      <span id={`${product.id}-title`} className="hidden">{product.name}</span>

      {/* Product info */}
      <div className="space-y-1">
        <h3 className="font-serif text-base md:text-lg tracking-ultra-wide uppercase text-charcoal group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-sans text-body text-taupe">{product.shortDescription}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-cream-300'
                )}
              />
            ))}
          </div>
          <span className="font-sans text-caption text-taupe">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-body font-medium text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Hidden subtitle for image context */}
      <span id="product-card-subtitle" className="hidden">fine jewelry</span>
    </Link>
  );
}
