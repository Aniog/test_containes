import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
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
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-charcoal-50 overflow-hidden mb-4">
        {/* Primary image */}
        <img
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered && product.images.length > 1 ? 0 : 1 }}
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry`}
          data-strk-img-ratio={product.images[0].ratio}
          data-strk-img-width={product.images[0].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />

        {/* Secondary image on hover */}
        {product.images.length > 1 && (
          <img
            alt={`${product.name} detail`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
            data-strk-img-id={product.images[1].id}
            data-strk-img={`[${product.id}-name] worn detail closeup gold jewelry`}
            data-strk-img-ratio={product.images[1].ratio}
            data-strk-img-width={product.images[1].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-charcoal text-white font-sans text-[10px] tracking-ultra-wide uppercase">
            {product.badge}
          </div>
        )}

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 py-2.5 bg-white/95 backdrop-blur-sm text-charcoal font-sans text-xs tracking-wider uppercase
            flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        {/* Hidden text for image search interpolation */}
        <span id={`${product.id}-name`} className="hidden">{product.name}</span>
        <span id={`${product.id}-desc`} className="hidden">{product.description}</span>

        <h3 className="product-name text-sm md:text-base group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-charcoal-200'}`}
            />
          ))}
          <span className="font-sans text-xs text-charcoal-400 ml-1">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-sans font-medium text-charcoal">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-charcoal-300 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
