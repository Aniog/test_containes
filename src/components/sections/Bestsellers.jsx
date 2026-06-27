import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBestsellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const products = getBestsellers();
  
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3">
              Customer Favorites
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
