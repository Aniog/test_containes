import { Link } from 'react-router-dom';
import { products } from '../../data/products';

export default function RelatedProducts({ currentId }) {
  const related = products
    .filter((p) => p.id !== currentId)
    .slice(0, 4);

  return (
    <section className="py-20 border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-warm-900 text-center mb-12">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-[4/5] bg-warm-100 overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price mt-1">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}