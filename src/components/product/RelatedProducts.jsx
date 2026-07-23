import { Link } from 'react-router-dom';
import { products } from '@/data/products';

export default function RelatedProducts({ currentId, category }) {
  const related = products
    .filter((p) => p.id !== currentId && p.category === category)
    .slice(0, 4);

  if (related.length === 0) {
    const fallback = products.filter((p) => p.id !== currentId).slice(0, 4);
    return (
      <Section related={related.length > 0 ? related : fallback} />
    );
  }

  return <Section related={related} />;
}

function Section({ related }) {
  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-8">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[3/4] bg-warm-muted overflow-hidden mb-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-espresso group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-espresso font-sans mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}