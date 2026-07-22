import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Rings', 'Gift Sets'];
const materials = ['All', '18K Gold Plated', 'Recycled Brass'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'featured';
  const activeMaterial = searchParams.get('material') || 'All';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activeMaterial !== 'All') {
      result = result.filter(p => p.material === activeMaterial);
    }

    if (activeSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, activeSort, activeMaterial]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-20 md:pb-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <SectionHeader 
          title="All Collections" 
          subtitle="Ready to be Treasured"
          className="md:mb-20"
        />

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-neutral-100 pb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold border border-black px-6 py-3 hover:bg-black hover:text-white transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
            
            <div className="hidden md:flex items-center space-x-2">
              {activeCategory !== 'All' && (
                <span className="bg-neutral-100 px-3 py-1 text-[10px] uppercase tracking-widest flex items-center gap-2">
                  {activeCategory}
                  <button onClick={() => updateFilter('category', 'All')}><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">{filteredProducts.length} Products</span>
            <div className="relative group">
              <select 
                value={activeSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-2 py-2 text-[10px] uppercase tracking-widest font-bold focus:outline-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className={cn(
            "w-64 flex-shrink-0 hidden md:block transition-all duration-500",
            isFilterOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 w-0 overflow-hidden"
          )}>
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Categories</h4>
                <div className="space-y-4">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={cn(
                        "block text-sm transition-colors hover:text-brand-gold",
                        activeCategory === cat ? "text-brand-gold font-medium" : "text-neutral-500"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Material</h4>
                <div className="space-y-4">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={cn(
                        "block text-sm transition-colors hover:text-brand-gold",
                        activeMaterial === mat ? "text-brand-gold font-medium" : "text-neutral-500"
                      )}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-neutral-400 italic">No products found in this selection.</p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="mt-6 text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white p-8">
           <div className="flex justify-between items-center mb-12">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Filters</h3>
            <button onClick={() => setIsFilterOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-12 overflow-y-auto max-h-[70vh]">
             <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-neutral-400">Categories</h4>
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={cn(
                        "px-4 py-2 border text-[10px] uppercase tracking-widest font-bold transition-all",
                        activeCategory === cat ? "bg-black text-white border-black" : "border-neutral-200 text-neutral-500"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

               <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-neutral-400">Material</h4>
                <div className="flex flex-wrap gap-3">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={cn(
                        "px-4 py-2 border text-[10px] uppercase tracking-widest font-bold transition-all",
                        activeMaterial === mat ? "bg-black text-white border-black" : "border-neutral-200 text-neutral-500"
                      )}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
          </div>

          <button 
            onClick={() => setIsFilterOpen(false)}
            className="absolute bottom-8 left-8 right-8 bg-black text-white py-4 text-[10px] uppercase tracking-widest font-bold"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
