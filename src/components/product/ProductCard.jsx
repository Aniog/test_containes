import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';

export default function ProductCard({ product, showRating = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.variants?.[0]?.value || null);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          )}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}

        {/* Quick Add Button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300',
            isHovered ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-gold text-charcoal text-xs font-medium uppercase tracking-button flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2 py-1 bg-cream/90 text-[10px] font-medium uppercase tracking-wider text-charcoal">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <h3
          className="text-sm font-serif uppercase tracking-product text-charcoal group-hover:text-gold transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {product.name}
        </h3>
        
        {showRating && (
          <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
        )}
        
        <p className="text-sm font-medium text-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
