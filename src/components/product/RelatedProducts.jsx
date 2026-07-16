import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import products from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const related = products
    .filter((p) => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="section-padding bg-cream border-t border-warm-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="serif-heading text-2xl text-espresso mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => {
            const nameId = `related-${product.id}-name`;
            return (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <div className="aspect-[3/4] bg-clay overflow-hidden mb-3">
                  <img
                    alt={product.name}
                    data-strk-img-id={`related-${product.id}`}
                    data-strk-img={`[${nameId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <h3
                  id={nameId}
                  className="font-serif text-xs tracking-[0.12em] uppercase text-espresso leading-snug"
                >
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className={i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-warm-sand'}
                    />
                  ))}
                </div>
                <p className="text-sm text-espresso mt-1">${product.price}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
