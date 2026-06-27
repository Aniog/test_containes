import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity }
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' }
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  
  // Get filter states from URL
  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || '';
  const sortBy = searchParams.get('sort') || 'featured';
  
  // Filter products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (categoryFilter !== 'all' && product.category !== categoryFilter) {
      return false;
    }
    
    // Price filter
    if (priceFilter) {
      const range = priceRanges.find(r => r.label === priceFilter);
      if (range && (product.price < range.min || product.price >= range.max)) {
        return false;
      }
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };
  
  const clearFilters = () => {
    setSearchParams({});
  };
  
  const activeFiltersCount = [
    categoryFilter !== 'all',
    priceFilter !== ''
  ].filter(Boolean).length;
  
  const getCategoryName = () => {
    if (categoryFilter === 'all') return 'All Jewelry';
    const cat = categories.find(c => c.id === categoryFilter);
    return cat ? cat.name : 'Shop';
  };
  
  return (
    <main className="pt-20 md:pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 
            className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {getCategoryName()}
          </h1>
          <p className="text-sm text-[var(--color-taupe)]">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
        
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-sand)]">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-[var(--color-charcoal)]"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-[var(--color-gold)] text-[var(--color-rich-black)] text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
          
          {/* Desktop Filter Pills */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-[var(--color-taupe)]">Category:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => updateFilter('category', 'all')}
                className={cn(
                  'px-4 py-1.5 text-sm rounded-full border transition-colors',
                  categoryFilter === 'all'
                    ? 'bg-[var(--color-charcoal)] text-[var(--color-cream)] border-[var(--color-charcoal)]'
                    : 'border-[var(--color-sand)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]'
                )}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => updateFilter('category', cat.id)}
                  className={cn(
                    'px-4 py-1.5 text-sm rounded-full border transition-colors',
                    categoryFilter === cat.id
                      ? 'bg-[var(--color-charcoal)] text-[var(--color-cream)] border-[var(--color-charcoal)]'
                      : 'border-[var(--color-sand)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)]'
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="flex items-center gap-2 text-sm text-[var(--color-charcoal)]"
            >
              <span>Sort by: </span>
              <span className="font-medium">
                {sortOptions.find(o => o.value === sortBy)?.label}
              </span>
              <ChevronDown className={cn('w-4 h-4 transition-transform', sortDropdownOpen && 'rotate-180')} />
            </button>
            
            {sortDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setSortDropdownOpen(false)} 
                />
                <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--color-cream)] border border-[var(--color-sand)] rounded shadow-lg z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value);
                        setSortDropdownOpen(false);
                      }}
                      className={cn(
                        'w-full px-4 py-2.5 text-left text-sm transition-colors',
                        sortBy === option.value
                          ? 'bg-[var(--color-ivory)] text-[var(--color-gold)]'
                          : 'text-[var(--color-charcoal)] hover:bg-[var(--color-ivory)]'
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[var(--color-warm-gray)] mb-4">No products found</p>
            <button
              onClick={clearFilters}
              className="text-[var(--color-gold)] hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[var(--z-modal)]',
          'transition-opacity duration-300',
          isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div 
          className="absolute inset-0 bg-[var(--color-rich-black)]/50"
          onClick={() => setIsFilterOpen(false)}
        />
        
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[var(--color-cream)]',
            'transform transition-transform duration-300',
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-sand)]">
            <h2 className="font-serif text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
              Filters
            </h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--color-taupe)] mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    updateFilter('category', 'all');
                  }}
                  className={cn(
                    'w-full text-left px-3 py-2 text-sm rounded transition-colors',
                    categoryFilter === 'all'
                      ? 'bg-[var(--color-ivory)] text-[var(--color-gold)]'
                      : 'text-[var(--color-charcoal)] hover:bg-[var(--color-ivory)]'
                  )}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={cn(
                      'w-full text-left px-3 py-2 text-sm rounded transition-colors',
                      categoryFilter === cat.id
                        ? 'bg-[var(--color-ivory)] text-[var(--color-gold)]'
                        : 'text-[var(--color-charcoal)] hover:bg-[var(--color-ivory)]'
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.15em] text-[var(--color-taupe)] mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => updateFilter('price', priceFilter === range.label ? '' : range.label)}
                    className={cn(
                      'w-full text-left px-3 py-2 text-sm rounded transition-colors',
                      priceFilter === range.label
                        ? 'bg-[var(--color-ivory)] text-[var(--color-gold)]'
                        : 'text-[var(--color-charcoal)] hover:bg-[var(--color-ivory)]'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="w-full py-3 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-gold)] transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
