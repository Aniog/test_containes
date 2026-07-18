import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';

export default function RelatedProducts({ currentProductId }) {
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase text-velmora-muted mb-3">You May Also Like</p>
        <h3 className="font-serif text-xl md:text-2xl font-light text-velmora-black">Complete the Look</h3>
        <div className="w-10 h-px bg-velmora-gold/40 mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => {
          const imgId = `related-img-${product.id}`;
          const nameId = `related-name-${product.id}`;
          return (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="aspect-[3/4] bg-velmora-sand/30 overflow-hidden mb-3">
                <img
                  data-strk-img-id={imgId}
                  data-strk-img={`[${nameId}] gold demi-fine jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={nameId} className="font-serif text-[11px] tracking-[0.12em] uppercase font-medium text-velmora-black">
                {product.name}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2 h-2 ${
                      i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-medium text-velmora-black mt-0.5">${product.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
