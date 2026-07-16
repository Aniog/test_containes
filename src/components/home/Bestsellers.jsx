import React from 'react';
import { products } from '../../lib/data';
import ProductCard from '../ui/ProductCard';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellerList = products.slice(0, 5);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
        <div>
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-5xl mb-4 tracking-tight">The Bestsellers</h2>
          <p className="text-muted-foreground font-sans text-sm tracking-widest uppercase">Loved by many, crafted for you.</p>
        </div>
        <Link to="/shop" className="font-serif uppercase tracking-widest border-b border-primary py-1 text-sm hover:text-accent hover:border-accent transition-all">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {bestsellerList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
