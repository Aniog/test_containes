import React, { useState } from 'react';
import { products } from '@/api/products';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = ({ addToCart }) => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'gift sets'];

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category.toLowerCase() === activeCategory;
  });

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif">All Pieces</h1>
        <p className="text-stone text-sm tracking-widest serif-uppercase">
          {filteredProducts.length} Items
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="hidden lg:block w-64 space-y-12">
          <div>
            <h3 className="serif-uppercase text-xs tracking-widest mb-6 font-semibold">Category</h3>
            <div className="space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "block text-sm tracking-wide transition-colors hover:text-gold",
                    activeCategory === cat ? "text-gold font-medium" : "text-stone"
                  )}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:hidden flex justify-between items-center border-y border-border py-4">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 serif-uppercase text-[10px] tracking-widest"
          >
            <Filter size={14} /> Filter & Sort
          </button>
          <span className="text-[10px] serif-uppercase tracking-widest text-stone">
             {filteredProducts.length} results
          </span>
        </div>

        <div className="flex-grow">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col items-center text-center">
                <Link to={`/product/${product.id}`} className="w-full">
                  <div className="relative aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-stone-200" />
                    <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="w-full bg-pearl text-onyx py-4 text-[10px] serif-uppercase tracking-widest shadow-xl hover:bg-onyx hover:text-pearl transition-all"
                      >
                         Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
                <Link to={`/product/${product.id}`} className="serif-uppercase text-xs tracking-widest mb-1 hover:text-gold transition-colors">
                  {product.name}
                </Link>
                <div className="text-stone text-sm font-light">${product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-pearl animate-in slide-in-from-bottom duration-300 overflow-y-auto">
           <div className="p-8">
              <div className="flex justify-between items-center mb-12">
                 <h2 className="serif-uppercase text-xl">Filter Pieces</h2>
                 <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>
              <div className="space-y-12">
                <section>
                  <h3 className="serif-uppercase text-xs tracking-widest mb-6">Category</h3>
                   <div className="grid grid-cols-2 gap-4">
                      {categories.map(cat => (
                        <button 
                          key={cat}
                          onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                          className={cn(
                            "py-3 border px-4 text-[10px] serif-uppercase tracking-widest",
                            activeCategory === cat ? "bg-onyx text-pearl border-onyx" : "border-border text-onyx"
                          )}
                        >
                          {cat}
                        </button>
                      ))}
                   </div>
                </section>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-onyx text-pearl py-5 serif-uppercase text-xs tracking-widest mt-12"
                >
                  View Results
                </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
