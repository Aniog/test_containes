import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];

  const filteredProducts = products.filter(p =>
    categoryFilter === 'all' || p.category.toLowerCase() === categoryFilter.toLowerCase()
  );

  return (
    <div className="pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-6 md:space-y-0">
          <div className="space-y-4">
             <h1 className="text-4xl md:text-5xl font-serif lowercase italic">
               {categoryFilter === 'all' ? 'shop all' : categoryFilter}
             </h1>
             <p className="text-xs uppercase tracking-widest-extra text-velmora-charcoal/60">
               {filteredProducts.length} pieces found
             </p>
          </div>
          <div className="flex items-center space-x-10 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0 border-b border-velmora-charcoal/5 md:border-none">
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setSearchParams({ category: cat })}
                 className={cn(
                   "text-[10px] uppercase tracking-widest-extra whitespace-nowrap pb-1 border-b transition-all",
                   categoryFilter === cat ? "border-velmora-charcoal text-velmora-charcoal" : "border-transparent text-velmora-charcoal/40 hover:text-velmora-charcoal"
                 )}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-10 py-4 border-y border-velmora-charcoal/5">
           <button
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="flex items-center space-x-2 text-[10px] uppercase tracking-widest-extra font-medium"
           >
             <SlidersHorizontal size={14} />
             <span>Filters</span>
           </button>
           <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest-extra font-medium">
             <span>Sort by: {sortBy}</span>
             <ChevronDown size={14} />
           </div>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className={cn(
            "w-full md:w-64 space-y-12",
            isSidebarOpen ? "block" : "hidden md:block"
          )}>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest-extra font-medium mb-6">Price Range</h4>
              <div className="space-y-4">
                 {[
                   { label: 'Under $40', range: [0, 40] },
                   { label: '$40 — $60', range: [40, 60] },
                   { label: 'Over $60', range: [60, 1000] }
                 ].map((p) => (
                   <label key={p.label} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-velmora-charcoal/20 rounded-full flex items-center justify-center group-hover:border-velmora-gold">
                        <div className="w-1.5 h-1.5 bg-velmora-gold rounded-full opacity-0" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/60 group-hover:text-velmora-charcoal">{p.label}</span>
                   </label>
                 ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest-extra font-medium mb-6">Material</h4>
              <div className="space-y-4">
                 {['18K Gold Plated', 'Gold Vermeil', 'Sterling Silver'].map((m) => (
                   <label key={m} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-velmora-charcoal/20 group-hover:border-velmora-gold" />
                      <span className="text-[10px] uppercase tracking-widest text-velmora-charcoal/60 group-hover:text-velmora-charcoal">{m}</span>
                   </label>
                 ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center space-y-4 border border-dashed border-velmora-charcoal/10">
                <p className="text-xs uppercase tracking-widest-extra text-velmora-charcoal/40">No pieces found in this category</p>
                <button onClick={() => setSearchParams({ category: 'all' })} className="text-[10px] uppercase tracking-widest-extra underline underline-offset-4">Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
