import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        {/* First Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover',
            'transition-opacity duration-500',
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Second Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover',
              'transition-opacity duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-charcoal text-white text-xs font-medium tracking-wider uppercase">
              Bestseller
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={cn(
              'absolute bottom-0 left-0 right-0 p-4',
              'bg-gradient-to-t from-charcoal/80 to-transparent',
              'transform transition-all duration-300 ease-silk',
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            )}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full py-3 bg-gold text-charcoal text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-200"
            >
              <Plus className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        )}
      </div>

      <div className="pt-4 space-y-1">
        <h3 className="product-name text-charcoal group-hover:text-gold transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-stone text-sm">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
