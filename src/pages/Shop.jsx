import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/product';
import { ChevronDown, Filter, X } from 'lucide-react';
import ProductCard from '@/components/common/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const filters = {};
      if (activeCategory !== 'All') filters.category = activeCategory;
      
      const data = await fetchProducts(filters);
      
      // Basic sorting logic
      let sorted = [...data];
      if (activeSort === 'price-low') sorted.sort((a, b) => a.data.price - b.data.price);
      if (activeSort === 'price-high') sorted.sort((a, b) => b.data.price - a.data.price);

      setProducts(sorted);
      setLoading(false);
    };
    loadProducts();
  }, [activeCategory, activeSort]);

  useEffect(() => {
    if (!loading && products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto min-h-screen" ref={containerRef}>
      <header className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-serif">The Collection</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Shop All Pieces</p>
        </div>
        
        <div className="flex items-center gap-8 w-full md:w-auto border-b border-border md:border-none pb-4 md:pb-0">
          <div className="relative group">
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Sort By</label>
            <select
              value={activeSort}
              onChange={(e) => setSearchParams({ ...Object.fromEntries(searchParams), sort: e.target.value })}
              className="bg-transparent text-sm uppercase tracking-widest focus:outline-none cursor-pointer pr-8 py-1 appearance-none"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute bottom-2 right-0 pointer-events-none text-muted-foreground" />
          </div>
          
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </header>

      <div className="flex gap-16">
        {/* Sidebar Filter (Desktop) */}
        <aside className="hidden md:block w-48 space-y-12">
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Category</h3>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), category: cat })}
                    className={cn(
                      "text-xs uppercase tracking-widest transition-colors hover:text-primary",
                      activeCategory === cat ? "text-primary font-semibold" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Material</h3>
            <ul className="space-y-4">
              {['18K Gold Plated', 'Silver Plated'].map((mat) => (
                <li key={mat} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full border border-border" />
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse space-y-6">
                  <div className="aspect-[3/4] bg-muted w-full" />
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="h-4 bg-muted w-32" />
                    <div className="h-3 bg-muted w-20" />
                    <div className="h-4 bg-muted w-16" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <p className="text-muted-foreground italic">No pieces found in this category.</p>
              <button
                onClick={() => setSearchParams({})}
                className="text-sm uppercase tracking-widest underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] transition-opacity duration-500 md:hidden",
          isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsFilterOpen(false)}
      />
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-[300px] bg-background z-[90] shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col",
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-serif uppercase tracking-widest">Filters</h2>
          <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
        </div>
        <div className="p-6 space-y-12 overflow-y-auto">
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Category</h3>
            <ul className="space-y-6">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSearchParams({ ...Object.fromEntries(searchParams), category: cat });
                      setIsFilterOpen(false);
                    }}
                    className={cn(
                      "text-sm uppercase tracking-widest",
                      activeCategory === cat ? "text-primary font-semibold" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-6 border-t border-border mt-auto">
          <button
            onClick={() => setIsFilterOpen(false)}
            className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs font-semibold"
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
