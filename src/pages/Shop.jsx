import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Filter } from 'lucide-react';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [sort, setSort] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const config = strkImgConfig || {};
      ImageHelper.loadImages(config, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, sort]);

  let filteredProducts = [...products];

  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
  }

  if (sort === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleCategorySelect = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-background" ref={containerRef}>
      <div className="py-12 bg-secondary/30 text-center">
        <h1 className="font-serif text-4xl mb-4">
          {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'Shop All Jewelry'}
        </h1>
        <p className="text-muted-foreground">Everyday staples designed to elevate tracking.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <button 
            className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          <div className="relative">
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent pr-8 text-sm uppercase tracking-wider font-semibold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar */}
        <aside className={`w-full md:w-64 shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block`}>
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="font-serif text-lg mb-4 uppercase tracking-wider">Category</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <button 
                    onClick={() => handleCategorySelect('all')}
                    className={`hover:text-foreground transition-colors ${!categoryFilter ? 'text-foreground font-semibold' : ''}`}
                  >
                    All Jewelry
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleCategorySelect('earrings')}
                    className={`hover:text-foreground transition-colors ${categoryFilter === 'earrings' ? 'text-foreground font-semibold' : ''}`}
                  >
                    Earrings
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleCategorySelect('necklaces')}
                    className={`hover:text-foreground transition-colors ${categoryFilter === 'necklaces' ? 'text-foreground font-semibold' : ''}`}
                  >
                    Necklaces
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleCategorySelect('huggies')}
                    className={`hover:text-foreground transition-colors ${categoryFilter === 'huggies' ? 'text-foreground font-semibold' : ''}`}
                  >
                    Huggies
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleCategorySelect('sets')}
                    className={`hover:text-foreground transition-colors ${categoryFilter === 'sets' ? 'text-foreground font-semibold' : ''}`}
                  >
                    Sets
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-secondary">
            <span className="text-sm text-muted-foreground">{filteredProducts.length} Products</span>
            <div className="flex items-center gap-2">
              <span className="text-sm uppercase tracking-wider font-semibold">Sort By</span>
              <div className="relative">
                <select 
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent pr-8 border border-input py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
