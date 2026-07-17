import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-ivory overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0].url}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (on hover) */}
        {product.images[1] && (
          <img
            src={product.images[1].url}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-ivory animate-pulse" />
        )}

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-[10px] tracking-wide uppercase bg-gold text-white">
              Bestseller
            </span>
          </div>
        )}

        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <button
              onClick={handleQuickAdd}
              className="w-full py-3 bg-white text-charcoal text-xs tracking-wide uppercase font-medium transition-colors hover:bg-gold hover:text-white"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                Quick Add
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`w-3 h-3 ${i < product.rating ? 'text-gold fill-gold' : 'text-sand'}`}
              strokeWidth={0}
            />
          ))}
          <span className="text-[10px] text-warm-gray ml-1">({product.reviews})</span>
        </div>

        {/* Product Name */}
        <h3 className="product-name text-sm">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-sm font-medium text-charcoal">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
