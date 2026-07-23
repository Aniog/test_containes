import { Link } from 'react-router-dom';
import { products } from '@/data/products';

export default function RelatedProducts({ excludeId }) {
  const related = products.filter((p) => p.id !== excludeId).slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-cream border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="font-serif text-xl md:text-2xl text-velvet font-medium text-center mb-8 md:mb-10">
          You May Also Like
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="aspect-[3/4] bg-linen overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-taupe">Image</span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-serif text-sm tracking-[0.15em] uppercase font-medium text-velvet">
                  {product.name}
                </h4>
                <p className="mt-1 text-sm text-taupe font-light">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
