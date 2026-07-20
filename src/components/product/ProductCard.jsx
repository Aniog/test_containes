import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductImage from '@/components/ui/ProductImage';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/Toast';
import { formatPrice, cn } from '@/lib/utils';

function StarRating({ value, count }) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] text-mink">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-3 w-3',
              i < Math.round(value) ? 'fill-gold text-gold' : 'text-sand'
            )}
            strokeWidth={0}
          />
        ))}
      </div>
      {typeof count === 'number' && <span>({count})</span>}
    </div>
  );
}

export default function ProductCard({ product, eager = false }) {
  const [activeVariant] = useState(product.defaultVariant || 'gold');
  const variantImg =
    product.images[activeVariant] || product.images[product.defaultVariant];
  const primary = variantImg?.primary;
  const secondary = variantImg?.secondary;
  const { addItem } = useCart();
  const { push } = useToast();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, activeVariant, 1);
    push({ title: `${product.name} added` });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`View ${product.name}`}
    >
      <div className="relative overflow-hidden bg-linen">
        {primary && (
          <ProductImage
            imgId={primary.id}
            query={primary.query}
            ratio={primary.ratio}
            width={700}
            alt={product.name}
            eager={eager}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            imgClassName="transition-opacity duration-500"
            ratioClass="aspect-[4/5]"
          />
        )}
        {secondary && (
          <div
            className={cn(
              'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100'
            )}
          >
            <ProductImage
              imgId={secondary.id}
              query={secondary.query}
              ratio={secondary.ratio}
              width={700}
              alt={`${product.name}, alternate view`}
              imgClassName="object-cover"
              ratioClass="aspect-[4/5]"
            />
          </div>
        )}
        {/* Quick add — visible on hover (desktop) or always on touch */}
        <button
          onClick={handleAdd}
          className={cn(
            'absolute bottom-3 left-3 right-3 translate-y-2 bg-bone/95 py-2.5 text-[10px] font-medium uppercase tracking-[0.24em] text-espresso opacity-0 shadow-[0_10px_24px_-12px_rgba(27,20,16,0.4)] transition-all duration-300 ease-out hover:bg-espresso hover:text-bone group-hover:translate-y-0 group-hover:opacity-100',
            // Always visible on touch / mobile so it remains reachable
            'max-md:translate-y-0 max-md:opacity-100'
          )}
          aria-label={`Add ${product.name} to bag`}
        >
          Quick add · {formatPrice(product.price)}
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-[11px] font-medium uppercase tracking-[0.2em] text-espresso">
            {product.name}
          </h3>
          <div className="mt-1.5">
            <StarRating value={product.rating} count={product.reviewCount} />
          </div>
        </div>
        <div className="text-sm font-medium tabular-nums text-espresso">
          {formatPrice(product.price)}
        </div>
      </div>
    </Link>
  );
}
