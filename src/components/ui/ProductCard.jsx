import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    await addToCart(product, product.variants?.[0] || null, 1);
    setIsAdding(false);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-100 mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        
        {/* Secondary Image (Hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-charcoal-900 text-cream-50 text-xs font-medium tracking-wide">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <div className={cn(
          'absolute bottom-4 left-4 right-4 transition-all duration-300',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        )}>
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className="w-full py-3 bg-white/95 backdrop-blur-sm text-charcoal-900 text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            {isAdding ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Adding...
              </span>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="product-name text-center">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-1">
          <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
          <span className="text-xs text-charcoal-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <p className="text-center font-sans text-charcoal-600 text-sm">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
