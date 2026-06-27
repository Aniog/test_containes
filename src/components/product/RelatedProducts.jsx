import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">Complete the Look</span>
        <h2 className="font-[var(--font-serif)] text-2xl md:text-3xl mt-2 font-semibold">You May Also Like</h2>
        <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-[3/4] bg-[var(--color-surface-alt)] rounded-sm overflow-hidden mb-3">
              <img
                data-strk-img-id={`related-${product.id}`}
                data-strk-img={`[related-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span id={`related-name-${product.id}`} className="sr-only">{product.name}</span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-2.5 h-2.5 ${i < Math.round(product.rating) ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--color-border)]'}`} />
              ))}
            </div>
            <h3 className="font-[var(--font-serif)] text-xs font-semibold tracking-wider uppercase text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
              {product.name}
            </h3>
            <p className="text-sm font-medium mt-0.5">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
