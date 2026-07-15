import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';

export function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tone[0] || 'gold');
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            hovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          )}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 p-4 transition-all duration-300',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <Button
            className="w-full"
            onClick={handleQuickAdd}
            aria-label={`Quick add ${product.name}`}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Bag
          </Button>
        </div>
      </div>
      <div className="text-center">
        <StarRating rating={product.rating} count={product.reviews} />
        <h3 className="font-serif text-base md:text-lg text-velmora-ink mt-2">
          {product.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-velmora-taupe mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
