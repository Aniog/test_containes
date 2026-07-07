import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-product bg-charcoal-100 rounded-lg overflow-hidden mb-4">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-cream-50 text-charcoal-800 text-[10px] font-sans tracking-wider uppercase">
            {product.badge}
          </span>
        )}

        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-charcoal-800/90 backdrop-blur-sm text-cream-50 text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="product-name text-charcoal-800 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-charcoal-400">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm text-charcoal-600">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
