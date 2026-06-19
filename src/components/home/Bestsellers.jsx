import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-accent text-xs tracking-widest uppercase mb-2">
              Customer Favorites
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wider">
              BESTSELLERS
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
