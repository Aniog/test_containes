import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-warm-gray text-sm max-w-md mx-auto">
            Our most-loved pieces, chosen by women who refuse to compromise on quality.
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
            className="inline-block px-10 py-3.5 border-2 border-gold text-gold text-sm tracking-[0.15em] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}