import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, [hovered]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      ref={cardRef}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand-200 overflow-hidden mb-4">
        <img
          data-strk-img-id={`${product.id}-card-${index}`}
          data-strk-img={`[${product.id}-title] [${product.id}-desc] gold jewelry product photo elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        {/* Second image on hover */}
        {product.images[1] && (
          <img
            data-strk-img-id={`${product.id}-card-hover-${index}`}
            data-strk-img={`[${product.id}-title] worn jewelry model closeup elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
          />
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-sand-50/95 backdrop-blur-sm text-espresso text-xs tracking-wider uppercase px-5 py-2.5 shadow-lg transition-all duration-300',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
        >
          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
          Add to Bag
        </button>

        {/* Tags */}
        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Text references for image search */}
      <span id={`${product.id}-title`} className="hidden">{product.name}</span>
      <span id={`${product.id}-desc`} className="hidden">{product.shortDescription}</span>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-base md:text-lg tracking-wider uppercase text-espresso">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-espresso/20'
                )}
              />
            ))}
          </div>
          <span className="text-[11px] text-espresso/40">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-medium text-espresso">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
