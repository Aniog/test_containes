import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Rating from '@/components/ui/Rating';
import Badge from '@/components/ui/Badge';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    await addItem(product, 1, product.variants?.[0] || null);
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
      <div className="relative aspect-[3/4] bg-bg-warm overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image (Hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={product.badge === 'Bestseller' ? 'accent' : 'gold'}>
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          disabled={isAdding}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-primary/90 text-white text-xs font-medium tracking-wider uppercase
            transition-all duration-300 flex items-center justify-center gap-2
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
        >
          {isAdding ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Adding...
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </>
          )}
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-serif text-sm tracking-wider mb-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium">
            {formatPrice(product.price)}
          </span>
          {product.comparePrice && (
            <span className="text-xs text-muted line-through">
              {formatPrice(product.comparePrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
