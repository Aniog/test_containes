import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

import ProductCard from '../common/ProductCard';

const Bestsellers = ({ products, loading }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif mb-4">Bestsellers</h2>
        <div className="w-12 h-[1px] bg-gold mx-auto" />
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="aspect-[3/4] bg-stone-100" />
              <div className="h-2 bg-stone-100 w-2/3" />
              <div className="h-2 bg-stone-100 w-1/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4 sm:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="mt-20 text-center">
        <Link 
          to="/shop" 
          className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-all duration-300"
        >
          View all jewelry
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
