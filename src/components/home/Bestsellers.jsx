import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBestsellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="text-gold text-sm uppercase tracking-ultra-wide mb-2">
              Customer Favorites
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/collection"
            className="flex items-center gap-2 text-sm text-cocoa hover:text-gold transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
