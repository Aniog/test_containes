import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEED_PRODUCTS } from '../data/products';
import ProductCard from '../components/home/ProductCard'; // Reuse product card
import { ChevronDown, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this path exists or omit for now

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  
  const categoryFilter = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...new Set(SEED_PRODUCTS.map(p => p.category))];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...SEED_PRODUCTS];
    
    // Filter
    if (categoryFilter && categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    // Sort
    switch(sortParam) {
      case 'price-asc':
        result.sort((a,b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a,b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a,b) => b.reviews.rating - a.reviews.rating);
        break;
      default:
        // featured (original order)
        break;
    }
    
    return result;
  }, [categoryFilter, sortParam]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
  };

  // Image Helper attributes for the banner
  const pageTitle = categoryFilter && categoryFilter !== 'All' ? categoryFilter : "All Jewelry";

  useEffect(() => {
    // If the ImageHelper/config doesn't exist yet, wrap in try/catch to not break app
    try {
      if(strkImgConfig && containerRef.current) {
        // Use requestAnimationFrame for slightly better synchronization
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
      }
    } catch(e) {
      console.warn("ImageHelper setup skipped for now", e);
    }
  }, [categoryFilter, sortParam]);

  return (
    <div ref={containerRef} className="pt-24 bg-background min-h-screen">
      
      {/* Shop Header / Banner */}
      <div className="relative h-[30vh] min-h-[250px] bg-muted flex items-center justify-center mb-12">
         <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${pageTitle} Collection banner`}
            className="absolute inset-0 w-full h-full object-cover"
            data-strk-img-id="shop-banner"
            data-strk-img="[shop-banner-title] elegant gold jewelry collection banner"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 id="shop-banner-title" className="relative z-10 font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wider uppercase text-center">
            {pageTitle}
          </h1>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        
        {/* Utilities Bar (Filters Mobile Toggle + Sorting) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-y border-border mb-8 gap-4">
          
          <button 
            className="md:hidden flex items-center gap-2 text-sm tracking-widest uppercase py-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
          
          <div className="hidden md:flex gap-6 items-center">
             <span className="text-sm text-muted-foreground tracking-widest uppercase">Browse:</span>
             <div className="flex gap-4">
               {categories.map(cat => (
                 <button 
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-sm tracking-widest uppercase transition-colors ${
                    (categoryFilter === cat || (!categoryFilter && cat === 'All')) ? 'text-primary border-b border-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
             <span className="text-sm text-muted-foreground tracking-widest uppercase hidden md:inline">Sort:</span>
             <div className="relative w-full md:w-auto">
               <select 
                 className="w-full md:w-48 appearance-none bg-transparent border border-border py-2 px-4 text-sm tracking-wider uppercase pr-10 rounded-none cursor-pointer focus:outline-none focus:border-primary"
                 value={sortParam}
                 onChange={handleSortChange}
               >
                 <option value="featured">Featured</option>
                 <option value="price-asc">Price: Low to High</option>
                 <option value="price-desc">Price: High to Low</option>
                 <option value="rating">Highest Rated</option>
               </select>
               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
             </div>
          </div>
        </div>

        {/* Mobile Filters Dropdown */}
        {isFilterOpen && (
          <div className="md:hidden mb-8 border border-border p-4 bg-card animate-in slide-in-from-top-2">
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Categories</h3>
             <div className="flex flex-col gap-3">
               {categories.map(cat => (
                 <button 
                  key={cat}
                  onClick={() => {
                    handleCategoryChange(cat);
                    setIsFilterOpen(false);
                  }}
                  className={`text-left text-sm tracking-widest uppercase transition-colors ${
                    (categoryFilter === cat || (!categoryFilter && cat === 'All')) ? 'text-primary font-bold' : 'text-foreground'
                  }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="tracking-widest uppercase text-muted-foreground">No products found matching your criteria.</p>
            <button 
              onClick={() => handleCategoryChange('All')}
              className="mt-6 border-b border-foreground pb-1 text-sm tracking-widest uppercase hover:text-primary transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}