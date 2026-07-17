import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { getProductById } from '@/data/products';

export function ProductCard({ product, className }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, { variant: 'gold', quantity: 1 });
  };

  return (
    <article
      className={cn('group relative flex flex-col', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-surface border border-velmora-hairline">
        <Link
          to={`/products/${product.id}`}
          className="absolute inset-0 z-0"
          aria-label={product.name}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={cn(
              'img-cover transition-transform duration-700 ease-out-editorial',
              imageLoaded ? 'opacity-100' : 'opacity-0',
              isHovered && 'scale-105'
            )}
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              loading="lazy"
              className={cn(
                'img-cover absolute inset-0 transition-opacity duration-500 ease-out',
                isHovered ? 'opacity-100' : 'opacity-0'
              )}
            />
          )}
        </Link>

        <button
          onClick={handleAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-2 bg-velmora-surface/95 text-velmora-text py-3 text-xs font-sans font-semibold uppercase tracking-widest transition-all duration-300 ease-out hover:bg-velmora-accent hover:text-white',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center text-center">
        <StarRating rating={product.rating} size={12} className="mb-2" />
        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-sm md:text-base uppercase tracking-widest-plus text-velmora-text transition-colors hover:text-velmora-accent">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 font-sans text-sm text-velmora-muted">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
