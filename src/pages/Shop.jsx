import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import { ProductCard } from '@/components/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    if (products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, document.body);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]);

  const categories = ["Earrings", "Necklaces", "Huggies"];
  const materials = ["18K Gold Plated", "Silver", "Cubic Zirconia"];
  
  const currentCategory = searchParams.get('cat');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts({ category: currentCategory });
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [currentCategory]);

  const handleCategoryToggle = (cat) => {
    if (currentCategory === cat) {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <header className="max-w-7xl mx-auto mb-16 space-y-4">
        <h1 className="text-5xl md:text-7xl font-serif">
          {currentCategory ? currentCategory : "Shop All"}
        </h1>
        <p className="text-muted-foreground font-sans tracking-wide max-w-2xl text-lg font-light">
          Meticulously crafted jewelry for everyday elegance.
        </p>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className={cn(
          "w-full md:w-64 space-y-10 md:sticky md:top-32 h-fit",
          "hidden md:block" // Hidden on mobile unless toggled
        )}>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Category</h3>
            <ul className="space-y-3 font-sans text-sm tracking-wide">
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => handleCategoryToggle(cat)}
                    className={cn(
                      "hover:text-accent transition-colors",
                      currentCategory === cat ? "text-accent font-medium border-b border-accent" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Material</h3>
             <ul className="space-y-3 font-sans text-sm text-muted-foreground tracking-wide">
                {materials.map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-accent scale-75" />
                    <span>{m}</span>
                  </li>
                ))}
             </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Price</h3>
            <div className="flex items-center gap-4 font-sans text-sm">
              <input type="number" placeholder="$0" className="w-full border-b border-border py-1 outline-none focus:border-black transition-colors" />
              <span>—</span>
              <input type="number" placeholder="$200" className="w-full border-b border-border py-1 outline-none focus:border-black transition-colors" />
            </div>
          </div>

          {currentCategory && (
            <button 
              onClick={clearFilters}
              className="text-[10px] uppercase tracking-widest flex items-center gap-2 text-muted-foreground hover:text-black transition-colors"
            >
              <X className="w-3 h-3" /> Clear All
            </button>
          )}
        </aside>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex items-center justify-between border-y border-border py-4 mb-2">
            <button 
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
              Sort By <ChevronDown className="w-4 h-4" />
            </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-10 text-[10px] uppercase tracking-widest font-bold">
            <p className="text-muted-foreground">{products.length} Results</p>
            <div className="flex items-center gap-2 cursor-pointer group">
               Sort By: <span className="text-accent">{sortBy}</span>
               <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[3/4] bg-muted" />
                  <div className="h-4 bg-muted w-3/4 mx-auto" />
                  <div className="h-4 bg-muted w-1/4 mx-auto" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {products.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center py-32 space-y-6">
              <p className="text-muted-foreground font-serif italic text-2xl">No pieces found matching these criteria.</p>
              <button 
                onClick={clearFilters}
                className="bg-black text-white px-10 py-3 text-[10px] uppercase tracking-widest font-bold"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
