import React from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/api/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:row items-end justify-between space-y-4 md:space-y-0">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-primary">The Bestsellers</h2>
            <p className="text-sm text-muted-foreground tracking-widest uppercase">Timeless pieces loved by our community</p>
          </div>
          <Link to="/shop">
            <Button variant="link" className="p-0 h-auto text-[10px] tracking-[0.3em] font-bold uppercase hover:text-accent transition-colors">
              View All Collection —
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
