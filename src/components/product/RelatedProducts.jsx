import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import products from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-velmora-sand">
      <div className="container-wide section-padding">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-ink text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="aspect-[3/4] bg-velmora-stone overflow-hidden mb-4">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xs tracking-widest uppercase text-velmora-ink mb-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone'}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}