import { useState } from 'react';
import { cn } from '@/lib/utils';
import { StrkImg } from '@/components/ui/StrkImg';

export function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid gap-4 md:grid-cols-[80px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:gap-3 md:overflow-visible">
        {product.images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelected(index)}
            className={cn(
              'relative h-20 w-16 flex-shrink-0 overflow-hidden border-2 bg-velmora-cream-dark transition-colors',
              selected === index
                ? 'border-velmora-gold'
                : 'border-transparent hover:border-velmora-base/20'
            )}
            aria-label={`View image ${index + 1}`}
          >
            <StrkImg
              id={`gallery-thumb-${image.id}`}
              query={`[product-${product.id}-name] gold jewelry`}
              ratio={image.ratio}
              width={160}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="order-1 aspect-[3/4] overflow-hidden bg-velmora-cream-dark md:order-2">
        <StrkImg
          id={`gallery-main-${product.images[selected].id}`}
          query={`[product-${product.id}-name] gold jewelry`}
          ratio={product.images[selected].ratio}
          width={900}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
