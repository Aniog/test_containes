import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/shop/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/config';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = PRODUCTS.filter(p =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === 'price-low') return a.price - b.price;
    if (activeSort === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activeSort]);

  const updateCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  const updateSort = (sort) => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-6 md:space-y-0">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All Jewelry</h1>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{sortedProducts.length} Products</p>
            </div>

            <div className="flex items-center space-x-6 w-full md:w-auto">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center space-x-2 text-xs uppercase tracking-widest border border-black/10 px-4 py-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>

              {/* Desktop Sort */}
              <div className="flex-grow md:flex-grow-0 relative">
                <select
                  value={activeSort}
                  onChange={(e) => updateSort(e.target.value)}
                  className="appearance-none bg-transparent border-b border-black/10 py-2 pr-8 pl-0 text-xs uppercase tracking-widest focus:outline-none w-full md:w-auto cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-50" />
              </div>
            </div>
          </div>

          <div className="flex gap-12">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden md:block w-64 space-y-10 flex-shrink-0">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6">Category</h4>
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => updateCategory('All')}
                      className={cn(
                        "text-sm uppercase tracking-widest transition-colors",
                        activeCategory === 'All' ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => updateCategory(cat)}
                        className={cn(
                          "text-sm uppercase tracking-widest transition-colors",
                          activeCategory === cat ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6">Material</h4>
                <div className="space-y-3">
                  {['18K Gold Plated', 'Silver Tone'].map(m => (
                    <label key={m} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-black/20 group-hover:border-black/40 transition-colors" />
                      <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-grow grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              {sortedProducts.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="font-serif italic text-muted-foreground text-lg">No products found in this category.</p>
                  <button
                    onClick={() => updateCategory('All')}
                    className="mt-4 text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 overflow-y-auto flex-grow space-y-10">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-6">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateCategory('All')}
                    className={cn(
                      "px-4 py-2 rounded-full text-[10px] uppercase tracking-widest border transition-colors",
                      activeCategory === 'All' ? "bg-primary text-white border-primary" : "border-black/10 text-muted-foreground"
                    )}
                  >
                    All Jewelry
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => updateCategory(cat)}
                      className={cn(
                        "px-4 py-2 rounded-full text-[10px] uppercase tracking-widest border transition-colors",
                        activeCategory === cat ? "bg-primary text-white border-primary" : "border-black/10 text-muted-foreground"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-black/5">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-primary text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Shop;
