import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

// Filter options
const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const addItem = useCartStore((state) => state.addItem);
  const containerRef = useRef(null);

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Read state from URL or set defaults
  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'featured';

  // Handle category change
  const setCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
    setIsMobileFiltersOpen(false);
  };

  // Handle sort change
  const setSort = (sortValue) => {
    if (sortValue === 'featured') {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', sortValue);
    }
    setSearchParams(searchParams, { replace: true });
    setIsSortOpen(false);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sort
    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // Keep original order or apply custom featured logic
        break;
    }

    return result;
  }, [activeCategory, activeSort]);

  // Load images when products change (due to filtering/sorting)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  return (
    <div className="bg-background pt-24 pb-24 min-h-screen" ref={containerRef}>
      
      {/* Header */}
      <div className="container mx-auto px-6 py-12 text-center border-b border-border/60">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-widest text-[#2b2624]">
          {activeCategory === 'All' ? 'The Collection' : activeCategory}
        </h1>
        <p className="text-muted-foreground font-light max-w-xl mx-auto">
          Discover our curated collection of demi-fine jewelry. Crafted in premium materials for your everyday layers.
        </p>
      </div>

      {/* Main Shop Area */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Mobile Filter & Sort Bar */}
        <div className="md:hidden flex justify-between items-center border-b border-border/60 pb-6 mb-2">
          <button 
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          
          <div className="relative">
            <button 
              className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              Sort <ChevronDown className="w-4 h-4" />
            </button>
            {isSortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border/60 shadow-xl z-20 py-2">
                  {SORTS.map((sort) => (
                    <button
                      key={sort.value}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-muted flex items-center justify-between"
                      onClick={() => setSort(sort.value)}
                    >
                      {sort.label}
                      {activeSort === sort.value && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sidebar Filters (Desktop) & Mobile Filter Drawer */}
        <div className={cn(
          "md:w-64 flex-shrink-0",
          isMobileFiltersOpen 
            ? "fixed inset-0 z-50 bg-background flex flex-col pt-20 px-6 transform transition-transform duration-300 translate-x-0" 
            : "hidden md:block" // Hidden on mobile unless open, block on desktop
        )}>
          {isMobileFiltersOpen && (
            <div className="absolute top-0 left-0 w-full p-6 border-b border-border/60 flex justify-between items-center bg-background z-10">
              <span className="font-serif text-xl uppercase tracking-widest">Filters</span>
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="text-sm uppercase tracking-widest underline"
              >
                Close
              </button>
            </div>
          )}

          <div className="sticky top-32">
            <div className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium border-b border-border/60 pb-3 mb-4">
                Categories
              </h3>
              <ul className="space-y-3">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setCategory(cat)}
                      className={cn(
                        "text-sm hover:text-foreground transition-colors font-light relative",
                        activeCategory === cat ? "text-foreground font-normal link-underline after:scale-x-100" : "text-muted-foreground link-underline"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulated Desktop Sort (Could also just keep it as a top right dropdown, but adding here for traditional layout) */}
            <div className="hidden md:block">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium border-b border-border/60 pb-3 mb-4">
                Sort By
              </h3>
              <ul className="space-y-3">
                {SORTS.map((sort) => (
                  <li key={sort.value}>
                    <button
                      onClick={() => setSort(sort.value)}
                      className={cn(
                        "text-sm flex items-center justify-between w-full text-left font-light transition-colors hover:text-foreground",
                        activeSort === sort.value ? "text-foreground font-normal" : "text-muted-foreground"
                      )}
                    >
                      {sort.label}
                      {activeSort === sort.value && <Check className="w-3 h-3" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop Top Right Sort Header (Optional, sometimes preferred over sidebar sort) */}
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-transparent">
             <span className="text-xs text-muted-foreground uppercase tracking-widest">{filteredProducts.length} Products</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p>No products found matching your currently selected filters.</p>
              <button 
                onClick={() => setCategory('All')} 
                className="mt-4 link-underline uppercase tracking-widest text-sm text-foreground"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative flex flex-col">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                    <img 
                      alt={product.name}
                      data-strk-img-id={product.mainImgId}
                      data-strk-img={`[${product.titleId}] jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img 
                      alt={`${product.name} worn`}
                      data-strk-img-id={product.hoverImgId}
                      data-strk-img={`[${product.titleId}] jewelry model worn`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur py-3 text-xs uppercase tracking-widest font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-border"
                    >
                      Quick Add
                    </button>
                  </Link>
                  <h3 id={product.titleId} className="font-serif text-lg tracking-wide uppercase leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-foreground/80 mt-1 font-light">${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;