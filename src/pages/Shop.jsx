import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory || (activeCategory === 'huggies' && p.tags.includes('huggies')));
    }
    
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">{activeCategory === 'all' ? 'All Jewelry' : activeCategory}</h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border/10 pb-6">
            <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSearchParams({ category: cat.id })}
                  className={cn(
                    "text-[10px] uppercase tracking-widest-xl whitespace-nowrap transition-colors hover:text-primary",
                    activeCategory === cat.id ? "text-primary border-b border-primary pb-1" : "text-muted-foreground"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-6">
               <div className="relative group">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 pl-0 py-2 border-none text-[10px] uppercase tracking-widest focus:ring-0 cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-muted-foreground uppercase tracking-widest text-sm">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Shop;
