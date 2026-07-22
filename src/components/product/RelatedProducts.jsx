import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Star } from 'lucide-react';

export default function RelatedProducts({ currentProductId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentProductId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="velmora-heading text-3xl text-center mb-10">You May Also Like</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[3/4] bg-[var(--velmora-bg)] overflow-hidden mb-3">
                <img
                  data-strk-img-id={`related-${product.images[0].id}`}
                  data-strk-img={`[${product.id}-title] [${product.id}-subtitle]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="velmora-product-name text-xs mb-1 group-hover:text-[var(--velmora-warm)] transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm">${product.price}</span>
                <div className="flex items-center gap-1">
                  <Star size={10} className="fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
                  <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
