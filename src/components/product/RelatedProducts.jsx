import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function RelatedProducts({ products, currentId }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section ref={containerRef} className="py-20 bg-deep-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="section-subheading">COMPLETE THE LOOK</p>
          <h2 className="section-heading mt-2">You May Also Like</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[3/4] bg-cream-100 rounded-sm overflow-hidden mb-3">
                <img
                  data-strk-img-id={`related-${product.id}`}
                  data-strk-img={`[related-name-${product.id}] fine gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="product-name text-deep-900" id={`related-name-${product.id}`}>
                {product.name}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="price-text">${product.price}</span>
                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                  <span className="text-xs text-deep-500">{product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
