import { Link } from 'react-router-dom';
import { getRelatedProducts } from '@/data/products';

export default function RelatedProducts({ currentId }) {
  const related = getRelatedProducts(currentId);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl lg:text-3xl text-ink-900 font-light">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-gold-400/50 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-cream-200 mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xs uppercase tracking-wider text-ink-800 truncate">
                {product.name}
              </h3>
              <p className="font-sans text-sm font-medium text-ink-900 mt-0.5">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}