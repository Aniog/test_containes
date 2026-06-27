import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  // Get initial filters from URL
  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';
  
  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(
        p => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    // Price filter
    if (activePrice !== 'all') {
      result = result.filter(p => {
        switch (activePrice) {
          case 'under-50':
            return p.price < 50;
          case '50-75':
            return p.price >= 50 && p.price <= 75;
          case '75-100':
            return p.price > 75 && p.price <= 100;
          case 'over-100':
            return p.price > 100;
          default:
            return true;
        }
      });
    }
    
    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    return result;
  }, [activeCategory, activePrice, activeSort]);
  
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };
  
  const clearFilters = () => {
    setSearchParams({});
  };
  
  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all';
  
  const getCategoryName = () => {
    if (activeCategory === 'all') return 'All Jewelry';
    const cat = categories.find(c => c.id === activeCategory);
    return cat ? cat.name : 'All Jewelry';
  };
  
  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-4">
          {getCategoryName()}
        </h1>
        <p className="text-[var(--color-secondary)] text-center max-w-xl mx-auto">
          Discover our collection of demi-fine jewelry, crafted with intention and designed to be treasured.
        </p>
      </div>
      
      {/* Toolbar */}
      <div className="border-y border-[var(--color-border)] bg-white sticky top-16 md:top-20 z-30">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm font-medium"
            >
              <Filter className="w-4 h-4" />
              Filter
              {hasActiveFilters && (
                <span className="w-5 h-5 rounded-full bg-[var(--color-accent)] text-white text-xs flex items-center justify-center">
                  !
                </span>
              )}
            </button>
            
            {/* Results Count */}
            <p className="text-sm text-[var(--color-secondary)] hidden md:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
                className="flex items-center gap-2 text-sm font-medium"
              >
                Sort by: {sortOptions.find(o => o.value === activeSort)?.label}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'sort' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'sort' && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-[var(--radius-md)] border border-[var(--color-border)] py-2 z-40">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value);
                        setOpenDropdown(null);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-[var(--color-surface)] transition-colors ${
                        activeSort === option.value ? 'text-[var(--color-accent)] font-medium' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container py-8 md:py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-40 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={activeCategory === 'all'}
                      onChange={() => updateFilter('category', 'all')}
                      className="w-4 h-4 accent-[var(--color-accent)]"
                    />
                    <span className="text-sm text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                      All
                    </span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={activeCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="w-4 h-4 accent-[var(--color-accent)]"
                      />
                      <span className="text-sm text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={activePrice === range.value}
                        onChange={() => updateFilter('price', range.value)}
                        className="w-4 h-4 accent-[var(--color-accent)]"
                      />
                      <span className="text-sm text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[var(--color-accent)] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>
          
          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-4">No products found</p>
                <p className="text-[var(--color-secondary)] mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[var(--color-primary)] text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-primary)]/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-xl animate-slideInRight overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
              <h2 className="font-serif text-lg">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={activeCategory === 'all'}
                      onChange={() => updateFilter('category', 'all')}
                      className="w-4 h-4 accent-[var(--color-accent)]"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={activeCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="w-4 h-4 accent-[var(--color-accent)]"
                      />
                      <span className="text-sm">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={activePrice === range.value}
                        onChange={() => updateFilter('price', range.value)}
                        className="w-4 h-4 accent-[var(--color-accent)]"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-[var(--color-border)] space-y-3">
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                  className="w-full py-3 text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Clear all filters
                </button>
              )}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 bg-[var(--color-accent)] text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
