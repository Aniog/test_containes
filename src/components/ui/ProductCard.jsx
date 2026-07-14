import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isLoading } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const getBadgeLabel = (badge) => {
    switch (badge) {
      case 'bestseller': return 'Bestseller';
      case 'gift': return 'Perfect Gift';
      case 'new': return 'New';
      default: return null;
    }
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
        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span 
              className="text-xs tracking-widest uppercase px-3 py-1"
              style={{ 
                backgroundColor: 'var(--color-charcoal)',
                color: 'var(--color-cream)'
              }}
            >
              {getBadgeLabel(product.badge)}
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        <div 
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isLoading}
            className="w-full py-3 text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50"
            style={{ 
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-charcoal)'
            }}
          >
            <ShoppingBag size={16} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name mb-2 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              size={12}
              fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
              stroke={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'var(--color-muted)'}
            />
          ))}
          <span className="text-xs text-muted ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <p className="font-medium" style={{ color: 'var(--color-warm-black)' }}>
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
