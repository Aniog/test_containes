import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const ProductCard = ({ product, showQuickAdd = true }) => {
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
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-light mb-4">
        {/* First Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            imageLoaded ? 'opacity-100' : 'opacity-0',
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Second Image on Hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            )}
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={cn(
              'absolute bottom-4 left-4 right-4 bg-background/90 text-white py-3 px-4 text-sm uppercase tracking-widest transition-all duration-300',
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              'hover:bg-gold hover:text-background'
            )}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </span>
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="font-serif text-sm uppercase tracking-widest-plus text-white group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-gold font-medium">${product.price}</span>
          <div className="flex items-center gap-1 text-white/50 text-xs">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;