import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]?.value || 'gold', 1);
  };

  return (
    <article
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-cream rounded-md overflow-hidden mb-4">
          {/* Main Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Hover Image */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-cream animate-pulse" />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-gold text-charcoal text-overline text-xs">
              {product.badge}
            </span>
          )}

          {/* Quick Add Button */}
          {showQuickAdd && (
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button
                onClick={handleQuickAdd}
                className="w-full py-3 bg-white text-charcoal text-overline font-medium uppercase tracking-widest rounded-sm hover:bg-gold hover:text-charcoal transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
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
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold fill-gold'
                    : 'text-sand'
                }`}
                strokeWidth={1.5}
              />
            ))}
            <span className="text-caption text-warm-gray ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Name */}
          <h3 className="product-name text-charcoal group-hover:text-gold-dark transition-colors duration-200">
            {product.name}
          </h3>

          {/* Price */}
          <p className="font-serif text-lg text-charcoal-light">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
