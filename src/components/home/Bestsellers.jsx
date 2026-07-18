import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[3px] text-[#B89778] mb-2">CURATED FOR YOU</p>
          <h2 className="font-serif text-4xl tracking-[1px] text-[#2C2825]">Bestsellers</h2>
        </div>
        <Link 
          to="/shop" 
          className="hidden md:block text-sm tracking-[1.5px] text-[#B89778] hover:text-[#8B6F47] transition-colors"
        >
          VIEW ALL →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link 
          to="/shop" 
          className="text-sm tracking-[1.5px] text-[#B89778] hover:text-[#8B6F47] transition-colors"
        >
          VIEW ALL →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
