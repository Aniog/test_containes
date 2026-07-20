import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const currentCategory = searchParams.get('category') || 'All';
  const currentSort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts({
          category: currentCategory === 'All' ? null : currentCategory
        });
        
        let sortedData = [...data];
        if (currentSort === 'price-low') {
          sortedData.sort((a, b) => a.data.price - b.data.price);
        } else if (currentSort === 'price-high') {
          sortedData.sort((a, b) => b.data.price - a.data.price);
        }
        
        setProducts(sortedData);
      } catch (error) {
        console.error('Failed to load products', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentCategory, currentSort]);

  useEffect(() => {
    if (products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl uppercase tracking-widest">Shop All</h1>
        <p className="text-neutral-500 font-light tracking-widest uppercase text-xs">
          Discover our curated collection of fine jewelry.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-y py-6 gap-6">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat, sort: currentSort })}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-bold border-b-2 pb-1 transition-all whitespace-nowrap",
                currentCategory === cat ? "border-brand-gold text-brand-onyx" : "border-transparent text-neutral-400 hover:text-brand-onyx"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
           <div className="relative group">
              <select 
                value={currentSort}
                onChange={(e) => setSearchParams({ category: currentCategory, sort: e.target.value })}
                className="appearance-none bg-transparent pr-8 pl-2 py-1 text-xs uppercase tracking-widest font-bold outline-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
           </div>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="space-y-4 animate-pulse">
              <div className="bg-neutral-100 aspect-[3/4]" />
              <div className="h-4 bg-neutral-100 w-2/3 mx-auto" />
              <div className="h-4 bg-neutral-100 w-1/3 mx-auto" />
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 space-y-4">
          <p className="font-serif text-2xl italic text-neutral-400">No products found in this category.</p>
          <button 
            onClick={() => setSearchParams({ category: 'All' })}
            className="text-sm uppercase tracking-widest font-bold border-b border-brand-onyx pb-1"
          >
            Show All Jewelry
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
