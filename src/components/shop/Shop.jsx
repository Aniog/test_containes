import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '@/api/seedData';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/CartContext';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gifts'];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === categoryParam.toLowerCase()) || 'All'
  );
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    // Attempt loadImages
    try {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch (e) {
      console.log('Image helper not loaded yet', e);
    }
  }, [activeCategory, sortBy]); // Rerun when list changes

  useEffect(() => {
    const c = searchParams.get('category');
    if (c) setActiveCategory(CATEGORIES.find(cat => cat.toLowerCase() === c.toLowerCase()) || 'All');
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }
    
    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } // featured -> default order
    
    return result;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if(cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="container mx-auto px-6 py-12 md:py-24 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Collection</h1>
        <p className="text-muted-foreground uppercase tracking-widest text-sm">Quiet luxury for everyday</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-border pb-4">
          <button 
            className="flex items-center gap-2 uppercase tracking-wide text-sm"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent uppercase tracking-wide text-sm pr-6 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar */}
        <aside className={`w-full md:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
          <div className="sticky top-32">
            <div className="mb-8">
              <h3 className="font-serif text-lg tracking-widest uppercase mb-4 text-primary">Category</h3>
              <ul className="space-y-3">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-sm uppercase tracking-wide transition-colors ${activeCategory === cat ? 'text-primary font-medium border-b border-primary' : 'text-muted-foreground hover:text-primary'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden md:flex justify-end mb-8 border-b border-border pb-4">
            <div className="relative flex items-center gap-2">
              <span className="uppercase tracking-wide text-xs text-muted-foreground">Sort By</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent uppercase tracking-wide text-sm pr-6 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden block">
                  {/* Main Image */}
                  <img 
                    data-strk-img-id={`shop-main-${product.id}`}
                    data-strk-img={product.strkQueries[0]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  />
                  {/* Hover Image */}
                  <img 
                    data-strk-img-id={`shop-hover-${product.id}`}
                    data-strk-img={product.strkQueries[1]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  
                  {/* Quick Add Button */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                    <Button 
                      className="w-full bg-white/90 text-primary hover:bg-white hover:text-primary backdrop-blur-sm shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                
                <div className="flex flex-col flex-1 text-center items-center">
                  <Link to={`/product/${product.id}`} className="flex-1">
                    <h3 id={`shop-name-${product.id}`} className="font-serif text-base md:text-lg tracking-wider uppercase mb-1">{product.name}</h3>
                  </Link>
                  <p className="text-muted-foreground text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              No products found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
