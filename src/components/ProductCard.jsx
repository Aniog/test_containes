import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { StarRating } from '@/components/ui/StarRating';
import StrkImage from '@/components/ui/StrkImage';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export function ProductCard({ product, className }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, 'gold');
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <StrkImage
          id={product.imageId}
          query={`[${product.imageId}-title]`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className="transition-transform duration-700 ease-premium group-hover:scale-105"
        />
        <StrkImage
          id={product.hoverImageId}
          query={`[${product.hoverImageId}-title]`}
          ratio="4x5"
          width={600}
          alt={product.name}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-premium group-hover:scale-105',
            hovered ? 'opacity-100' : 'opacity-0'
          )}
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-charcoal">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center pb-4 transition-transform duration-300 ease-premium group-hover:translate-y-0">
          <Button size="sm" onClick={handleQuickAdd} className="shadow-soft">
            <ShoppingBag className="mr-2 h-3.5 w-3.5" />
            Quick Add
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3
          id={`${product.imageId}-title`}
          className="font-serif text-sm font-medium uppercase tracking-[0.15em] text-charcoal"
        >
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} count={product.reviews} />
        </div>
        <p className="mt-1.5 text-sm font-medium text-warm-gray">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
