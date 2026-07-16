import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="border-t border-sand/30 mt-16 pt-16">
      <h2 className="font-serif text-2xl text-center mb-8 text-charcoal">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group block">
            <div className="aspect-[3/4] bg-sand/20 overflow-hidden mb-3">
              <img
                data-strk-img-id={`rel-${product.id}`}
                data-strk-img={`[rel-name-${product.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 id={`rel-name-${product.id}`} className="product-name text-xs tracking-widest text-charcoal truncate">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-xs text-stone">{product.rating}</span>
            </div>
            <p className="text-sm text-charcoal mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
