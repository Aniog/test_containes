import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { seedProducts } from '../data/products';
import { ChevronDown, Filter } from 'lucide-react';

const strkImgConfig = {};

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const containerRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (ImageHelper && typeof ImageHelper.loadImages === 'function') {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [categoryParam, sortBy]); // Re-run when products list might change significantly

  // Simple filtering
  let filteredProducts = seedProducts;
  if (categoryParam && categoryParam !== 'new' && categoryParam !== 'collections') {
    filteredProducts = seedProducts.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
  }

  // Simple sorting
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'featured') {
    // Reset to default seed order (assuming seed is featured order)
    // To properly reset, we'd need a stable ID map, but for now we'll just slice the original to keep order 
    // if it wasn't mutated above, but JS sort mutates. So let's create a fresh copy or rely on stable id map.
    // For simplicity, re-filter from seed
    filteredProducts = categoryParam && categoryParam !== 'new' && categoryParam !== 'collections'
      ? seedProducts.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase())
      : [...seedProducts];
  }

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    setIsFilterOpen(false);
  };

  const getPageTitle = () => {
    if (categoryParam === 'new') return 'New Arrivals';
    if (categoryParam === 'collections') return 'Curated Collections';
    if (categoryParam) return categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
    return 'All Jewelry';
  };

  return (
    <div ref={containerRef} className="pb-24">
      {/* Header */}
      <div className="bg-muted/30 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif mb-4 uppercase tracking-widest">{getPageTitle()}</h1>
          <p className="text-muted-foreground font-light max-w-lg mx-auto">
            Discover our complete collection of demi-fine jewelry. Designed to be collected and layered for a look that is uniquely yours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-border gap-4">
          <div className="w-full md:w-auto relative">
            <button 
              className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors w-full md:w-auto justify-between"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="flex items-center gap-2"><Filter size={16} /> Filter by Category</span>
              <ChevronDown size={14} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isFilterOpen && (
              <div className="absolute top-full left-0 mt-2 w-full md:w-48 bg-background border border-border shadow-lg z-30 p-2">
                {['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat.toLowerCase())}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                      (categoryParam === cat.toLowerCase() || (!categoryParam && cat === 'All')) ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-4 text-sm uppercase tracking-widest text-muted-foreground">
            <span>{filteredProducts.length} Results</span>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none outline-none cursor-pointer hover:text-foreground text-right"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 lg:gap-x-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group block relative">
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-4 relative">
                  {/* Default Image */}
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    data-strk-img-id={`shop-${product.images[0].id}`}
                    data-strk-img={product.images[0].query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 absolute inset-0"
                  />
                  {/* Hover Image */}
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} alternate view`}
                    data-strk-img-id={`shop-${product.images[1].id}`}
                    data-strk-img={product.images[1].query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                    <button className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm">
                      Quick View
                    </button>
                  </div>
                </div>
                <div>
                  <h3 id={`shop-item-${product.id}-title`} className="text-sm font-serif uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-serif mb-4">No products found</h3>
            <p className="text-muted-foreground mb-8">We couldn't find any pieces matching your current filters.</p>
            <button 
              onClick={() => handleCategoryChange('all')}
              className="bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-sm transition-colors hover:bg-primary/90"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}