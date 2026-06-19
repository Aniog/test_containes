import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../api/products';
import ProductCard from '../components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        
        let filtered = [...data];
        
        if (activeCategory !== 'All') {
          filtered = filtered.filter(p => p.data.category === activeCategory);
        }

        if (activeSort === 'price-low') {
          filtered.sort((a, b) => a.data.price - b.data.price);
        } else if (activeSort === 'price-high') {
          filtered.sort((a, b) => b.data.price - a.data.price);
        }

        setProducts(filtered);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [activeCategory, activeSort]);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleSort = (sort) => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-8 md:space-y-0 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-5xl font-serif">Shop The Collections</h1>
            <p className="text-brand-neutral text-sm uppercase tracking-[0.2em] font-light">Elevated essentials for every day</p>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold border border-brand-text/10 px-4 py-2"
            >
              <Filter size={14} />
              <span>Filters</span>
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold border border-brand-text/10 px-4 py-2 min-w-[150px] justify-between">
                <span>Sort: {activeSort.replace('-', ' ')}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute top-full right-0 mt-1 w-full bg-brand-base border border-brand-text/10 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
                {['newest', 'price-low', 'price-high'].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSort(s)}
                    className={cn(
                      "w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-brand-neutral/5 transition-colors",
                      activeSort === s ? "font-bold text-brand-accent" : "text-brand-neutral"
                    )}
                  >
                    {s.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-64 space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-brand-text">Categories</h4>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => toggleCategory(cat)}
                      className={cn(
                        "text-sm tracking-wide transition-colors",
                        activeCategory === cat ? "text-brand-accent font-medium" : "text-brand-neutral hover:text-brand-text"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 text-brand-text">Material</h4>
              <ul className="space-y-4">
                {['18K Gold Plated', '925 Sterling Silver'].map((m) => (
                  <li key={m} className="flex items-center space-x-4">
                    <div className="w-3 h-3 border border-brand-text/20 rounded-full" />
                    <span className="text-sm text-brand-neutral">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main ref={containerRef} className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4 animate-pulse">
                    <div className="aspect-[3/4] bg-brand-neutral/10" />
                    <div className="h-4 w-3/4 bg-brand-neutral/10 mx-auto" />
                    <div className="h-4 w-1/4 bg-brand-neutral/10 mx-auto" />
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 space-y-4">
                <p className="text-brand-neutral font-serif italic text-xl">No pieces found in this selection.</p>
                <button 
                  onClick={() => toggleCategory('All')} 
                  className="btn-outline text-[10px]"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-brand-text/40 z-[100] transition-opacity duration-500 md:hidden",
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-brand-base z-[110] transition-transform duration-500 ease-out md:hidden flex flex-col p-10",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xs uppercase tracking-widest font-bold">Filters</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 space-y-12 overflow-y-auto">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Categories</h4>
            <ul className="space-y-6">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      toggleCategory(cat);
                      setIsSidebarOpen(false);
                    }}
                    className={cn(
                      "text-xl font-serif tracking-wide",
                      activeCategory === cat ? "text-brand-accent italic" : "text-brand-neutral"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button 
          onClick={() => setIsSidebarOpen(false)}
          className="w-full btn-primary mt-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Shop;
