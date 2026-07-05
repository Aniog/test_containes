import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
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
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        )}

        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-linen animate-pulse" />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-espresso text-ivory text-xs tracking-wider uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 text-espresso text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gold hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Product Name */}
        <h3 className="product-name text-sm">{product.name}</h3>

        {/* Price */}
        <p className="text-charcoal font-medium">${product.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold fill-gold'
                    : 'text-linen'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-stone">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
