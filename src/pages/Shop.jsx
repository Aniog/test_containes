import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryFilter = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, sort]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [categoryFilter, sort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white" ref={containerRef}>
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">Shop All</h1>
        <p className="text-sm text-velmora-muted uppercase tracking-[0.2em]">Curated essentials for your jewelry box</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* sidebar for desktop */}
        <aside className="hidden md:block w-64 space-y-12 shrink-0">
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Category</h3>
            <div className="flex flex-col space-y-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => updateFilter('category', cat)}
                  className={cn(
                    "text-left text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors",
                    categoryFilter === cat ? "text-velmora-fg font-bold" : "text-velmora-muted"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Separator className="bg-velmora-border" />

          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-6">Filter by Tone</h3>
            <div className="flex flex-col space-y-4 text-xs uppercase tracking-widest text-velmora-muted">
              <label className="flex items-center space-x-3 cursor-pointer hover:text-velmora-fg">
                <input type="checkbox" className="w-3 h-3 accent-velmora-gold" />
                <span>18K Gold Plated</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer hover:text-velmora-fg">
                <input type="checkbox" className="w-3 h-3 accent-velmora-gold" />
                <span>Sterling Silver</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Mobile controls */}
        <div className="md:hidden flex justify-between items-center mb-8 border-y border-velmora-border py-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <select 
            value={sort}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="text-[10px] uppercase tracking-widest font-bold bg-transparent outline-none border-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-10">
            <div className="flex items-center space-x-3">
              <p className="text-[10px] uppercase tracking-widest text-velmora-muted">
                Showing {filteredProducts.length} results
              </p>
              {categoryFilter !== 'All' && (
                <Badge variant="outline" className="rounded-none font-normal text-[9px] uppercase tracking-[0.2em] border-velmora-border py-1 px-3">
                  {categoryFilter} <X className="w-2 h-2 ml-2 cursor-pointer" onClick={() => updateFilter('category', 'All')} />
                </Badge>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-[10px] uppercase tracking-widest text-velmora-muted">Sort By:</span>
              <select 
                value={sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-[10px] uppercase tracking-widest font-bold bg-transparent outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-32 text-center">
              <p className="font-serif text-xl mb-4">No pieces found in this category</p>
              <button 
                onClick={() => updateFilter('category', 'All')}
                className="text-xs uppercase tracking-widest underline underline-offset-4"
              >
                View All Jewelry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
