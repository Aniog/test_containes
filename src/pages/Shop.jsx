import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../data';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  // Local active filters state
  const [filters, setFilters] = useState({
    categories: searchParams.get('category') ? [searchParams.get('category').toLowerCase()] : [],
    materials: ['18k gold plated'], // Just as mock options
    priceRange: [0, 200]
  });

  const ALL_CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];
  
  useEffect(() => {
    // Whenever search params change, update state
    const cat = searchParams.get('category');
    if (cat && !filters.categories.includes(cat.toLowerCase())) {
      setFilters(prev => ({
        ...prev,
        categories: [cat.toLowerCase()]
      }));
    }
  }, [searchParams]);

  const handleCategoryToggle = (cat) => {
    setFilters(prev => {
      const isSelected = prev.categories.includes(cat);
      if (isSelected) {
        // If we remove the query param's category, update url
        if (searchParams.get('category') === cat) {
          searchParams.delete('category');
          setSearchParams(searchParams);
        }
        return { ...prev, categories: prev.categories.filter(c => c !== cat) };
      }
      return { ...prev, categories: [...prev.categories, cat] };
    });
  };

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];
    
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category.toLowerCase()));
    }
    
    // Fake sorting
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [filters, sortOption]);

  useEffect(() => {
    // We need to re-trigger image loading when filteredProducts changes, 
    // or when the component mounts.
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  return (
    <div className="pt-24 min-h-screen" ref={containerRef}>
      {/* Banner */}
      <div className="bg-muted py-16 px-6 text-center mb-12">
        <h1 className="font-serif text-4xl lg:text-5xl uppercase tracking-wide">All Jewelry</h1>
        <p className="mt-4 text-muted-foreground uppercase tracking-widest text-xs max-w-lg mx-auto">
          Discover our complete collection of demi-fine pieces crafted to be treasured.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between border-b border-border pb-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 uppercase tracking-widest text-sm"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-widest text-xs text-muted-foreground">Sort By</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent border-none text-sm uppercase tracking-widest outline-none pr-8 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-32 space-y-10">
              
              <div>
                <h3 className="uppercase tracking-widest text-sm font-semibold mb-6">Category</h3>
                <div className="space-y-3">
                  {ALL_CATEGORIES.map(cat => {
                    const isSelected = filters.categories.includes(cat);
                    return (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isSelected}
                          onChange={() => handleCategoryToggle(cat)}
                        />
                        <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${isSelected ? 'bg-foreground border-foreground text-background' : 'border-border group-hover:border-foreground'}`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-sm capitalize">{cat}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="uppercase tracking-widest text-sm font-semibold mb-6">Material</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border bg-foreground border-foreground text-background flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">18K Gold Plated</span>
                  </label>
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{filteredProducts.length} Results</p>
              <div className="flex items-center gap-3 relative">
                <span className="uppercase tracking-widest text-xs text-muted-foreground">Sort By</span>
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent border-none text-sm uppercase tracking-widest outline-none pr-4 cursor-pointer focus:ring-0 appearance-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low - High</option>
                  <option value="price-high">Price: High - Low</option>
                </select>
                <ChevronDown className="w-4 h-4 pointer-events-none absolute right-0" />
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="font-serif text-xl mb-4">No products found</p>
                <button 
                  onClick={() => setFilters({ categories: [], materials: ['18k gold plated'], priceRange: [0, 200] })}
                  className="text-sm uppercase tracking-widest border-b border-foreground pb-1"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}