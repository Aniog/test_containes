import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ImageHelper } from '@/lib/sdk_mock';
import strkImgConfig from '@/strk-img-config.json';
import { products, collections } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const { category: urlCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedCategory(urlCategory || 'all');
  }, [urlCategory]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy]);

  const filteredProducts = products.filter(p => 
    selectedCategory === 'all' || p.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12" ref={containerRef}>
      {/* Header */}
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif capitalize">
          {selectedCategory === 'all' ? 'The Collection' : selectedCategory}
        </h1>
        <p className="text-xs uppercase tracking-ultra-wide text-muted-foreground">
          {filteredProducts.length} Pieces
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mb-12 border-y border-border py-4">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center space-x-2 text-xs uppercase tracking-ultra-wide font-medium hover:opacity-70 transition-opacity"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>

        <div className="relative group">
          <button className="flex items-center space-x-2 text-xs uppercase tracking-ultra-wide font-medium">
            <span>Sort By: {sortBy}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
            {['featured', 'price-low', 'price-high'].map(option => (
              <button 
                key={option}
                onClick={() => setSortBy(option)}
                className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-ultra-wide hover:bg-secondary transition-colors"
                style={{ color: sortBy === option ? 'var(--primary)' : 'inherit' }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-muted-foreground uppercase tracking-widest text-xs">No products found in this category.</p>
        </div>
      )}

      {/* Filter Sidebar Modal */}
      {isFilterOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setIsFilterOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-background z-[61] p-8 shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-serif">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] uppercase tracking-ultra-wide font-medium text-stone-400 mb-6">Category</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => { setSelectedCategory('all'); setIsFilterOpen(false); }}
                    className={cn(
                      "block text-sm uppercase tracking-widest hover:opacity-70 transition-opacity",
                      selectedCategory === 'all' ? "font-bold text-accent" : "font-light"
                    )}
                  >
                    All Jewelry
                  </button>
                  {collections.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setIsFilterOpen(false); }}
                    className={cn(
                        "block text-sm uppercase tracking-widest hover:opacity-70 transition-opacity",
                        selectedCategory === cat.id ? "font-bold text-accent" : "font-light"
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-ultra-wide font-medium text-stone-400 mb-6">Material</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-border group-hover:border-stone-900 transition-colors" />
                    <span className="text-xs uppercase tracking-widest font-light">18K Gold Plated</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-border group-hover:border-stone-900 transition-colors" />
                    <span className="text-xs uppercase tracking-widest font-light">Silver Tone</span>
                  </label>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsFilterOpen(false)}
              className="absolute bottom-12 left-8 right-8 bg-stone-900 text-white py-4 text-xs uppercase tracking-ultra-wide font-medium"
            >
              Apply Filter
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
