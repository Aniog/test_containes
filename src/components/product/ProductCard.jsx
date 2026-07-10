import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import StarRating from '../ui/StarRating';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, product.variants[0].value);
  };

  const hasSecondImage = product.images && product.images.length > 1;

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-4">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-ivory animate-pulse" />
          )}
          
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${hasSecondImage && isHovered ? 'opacity-0' : ''}`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Secondary Image (hover) */}
          {hasSecondImage && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Quick Add Button */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full bg-white/95 backdrop-blur-sm text-espresso py-3 font-sans text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-colors"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Bag
            </button>
          </div>

          {/* Badge */}
          {product.category === 'sets' && (
            <div className="absolute top-4 left-4">
              <span className="bg-gold text-white text-xs font-sans font-medium px-3 py-1.5 uppercase tracking-wide">
                Gift Set
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="product-name text-sm">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-sans text-stone">
              {formatPrice(product.price)}
            </p>
            <StarRating rating={product.rating} size="sm" />
          </div>
        </div>
      </Link>
    </div>
  );
}
