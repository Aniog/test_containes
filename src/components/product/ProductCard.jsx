import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    await addToCart(product);
    setIsAdding(false);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
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
          <span className="absolute top-4 left-4 bg-charcoal-900 text-cream-50 px-3 py-1 font-sans text-xs font-medium tracking-wider uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-900/80 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="w-full bg-cream-50 text-charcoal-900 py-3 font-sans text-xs font-medium tracking-wider uppercase hover:bg-cream-100 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              {isAdding ? 'Adding...' : 'Quick Add'}
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-sm sm:text-base font-medium text-charcoal-900 uppercase tracking-wide leading-tight">
            {product.name}
          </h3>
          <span className="font-serif text-sm sm:text-base text-charcoal-900 whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'text-gold-500 fill-gold-500'
                  : 'text-charcoal-800/20'
              }`}
            />
          ))}
          <span className="ml-1 font-sans text-xs text-charcoal-800/70">
            ({product.reviews})
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
