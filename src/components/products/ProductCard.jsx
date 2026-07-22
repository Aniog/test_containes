import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductBySlug } from '@/data/products';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-white overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Secondary Image (Hover) */}
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
          <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal text-white text-xs font-medium uppercase tracking-wider">
            Bestseller
          </span>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isLoading}
              className="w-full py-3 bg-white text-charcoal text-sm font-medium uppercase tracking-wider hover:bg-gold hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              {isLoading ? 'Adding...' : 'Quick Add'}
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-taupe'}`}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-charcoal-light ml-1">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="product-name text-base">
          {product.name}
        </h3>

        {/* Price */}
        <p className="font-sans font-medium text-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
