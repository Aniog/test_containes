import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller');

  return (
    <section className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Most Loved</p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-1 text-xs uppercase tracking-widest text-brand-muted hover:text-brand-ink transition-colors">
            View All <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-brand-muted hover:text-brand-ink">
            View All <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
