import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getBestsellers } from '../data/products';

export default function Bestsellers() {
  const products = getBestsellers();

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-ultra uppercase text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Bestsellers</h2>
          <p className="mt-3 text-sm text-stone max-w-md mx-auto">
            The pieces our customers reach for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collection"
            className="inline-block text-xs tracking-widest uppercase font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
