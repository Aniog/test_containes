import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const FALLBACK_SRC =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function getImageUrl(imageId) {
  const entry = strkImgConfig[imageId];
  return entry?.results?.[0]?.url || FALLBACK_SRC;
}

export function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const primaryUrl = getImageUrl(product.imageIds.primary);
  const hoverUrl = getImageUrl(product.imageIds.hover);

  return (
    <article
      className={cn('group', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-sand/40"
      >
        <img
          alt={product.name}
          src={primaryUrl}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <img
          alt={`${product.name} alternate view`}
          src={hoverUrl}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="sm"
            className="h-10 rounded-full bg-white px-6 font-sans text-xs font-medium uppercase tracking-wider text-espresso shadow-md hover:bg-gold hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.tones[0], 1);
            }}
          >
            <ShoppingBag className="mr-2 h-3.5 w-3.5" />
            Add to Cart
          </Button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <StarRating rating={product.rating} count={product.reviews} size={12} />
        <h3
          id={product.titleId}
          className="mt-2 font-cormorant text-sm font-semibold uppercase tracking-[0.18em] text-espresso"
        >
          <Link to={`/products/${product.slug}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 font-sans text-sm font-medium text-taupe">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
