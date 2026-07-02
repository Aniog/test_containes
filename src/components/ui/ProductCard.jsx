import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/data/products';
import { StarRating } from './StarRating';
import { useCart } from '@/context/CartContext';
import { StrkImg } from '@/components/ui/StrkImg';

export function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const firstVariant = product.variants.find((v) => v.inStock) || product.variants[0];
  const hasSecondImage = product.images.length > 1;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, firstVariant.id, 1);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-velmora-cream-dark">
        <StrkImg
          id={`product-${product.id}-primary`}
          query={`[product-${product.id}-name] gold jewelry`}
          ratio="3x4"
          width={600}
          alt={product.name}
          className={cn(
            'h-full w-full object-cover transition-transform duration-700 ease-luxury',
            hovered && 'scale-105'
          )}
        />
        {hasSecondImage && (
          <StrkImg
            id={`product-${product.id}-hover`}
            query={`[product-${product.id}-name] jewelry detail`}
            ratio="3x4"
            width={600}
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-luxury',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 flex h-11 items-center justify-center gap-2 bg-white/95 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base shadow-soft transition-all duration-300 hover:bg-velmora-gold hover:text-white',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
        >
          <ShoppingBag className="h-4 w-4" />
          Quick Add
        </button>
      </div>

      <div className="text-center">
        <StarRating rating={product.rating} count={product.reviewCount} className="mb-2 justify-center" />
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-base uppercase tracking-widest text-velmora-base"
        >
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm font-medium text-velmora-taupe">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
