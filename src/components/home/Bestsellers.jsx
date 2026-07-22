import React from 'react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <SectionHeader 
          title="The Bestsellers" 
          subtitle="Customer Favorites"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/shop" 
            className="inline-block text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
