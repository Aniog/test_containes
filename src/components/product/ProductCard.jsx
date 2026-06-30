import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

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
      <div className="relative aspect-[3/4] bg-divider rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-charcoal text-white px-3 py-1.5 text-xs font-sans uppercase tracking-wider">
            {product.badge}
          </div>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full bg-surface/95 backdrop-blur-sm text-charcoal font-sans text-xs uppercase tracking-wider py-3 px-4 flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-colors duration-300"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Quick Add
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
              size={12}
              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              className={i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}
            />
          ))}
          <span className="text-xs text-muted-gray ml-1">({product.reviewCount})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-serif text-sm uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        {/* Price */}
        <p className="font-sans text-sm text-warm-gray">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
