import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const Bestsellers = () => {
  const bestsellers = products.filter((product) => product.bestseller);

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Curated for you</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-1 font-ui text-xs font-semibold uppercase tracking-display text-ink-secondary transition-colors hover:text-ink md:flex"
          >
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link to="/shop">
            <Button variant="outline" className="w-full">
              View all
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
