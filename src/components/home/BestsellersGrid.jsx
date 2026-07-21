import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

const BestsellersGrid = ({ products }) => {
  const bestsellers = products.filter(p => p.data?.isBestseller || p.isBestseller).slice(0, 5);

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="flex-1">
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">Curated Selections</p>
            <h2 className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
          </div>
          <div className="hidden md:block">
            <Link to="/shop" className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all duration-300">
              View All Pieces
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
            <Link to="/shop" className="premium-button inline-block w-full">
                View All Pieces
            </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersGrid;
