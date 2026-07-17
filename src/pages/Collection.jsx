import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Get filter state from URL
  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  // Filter products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (activeCategory && product.category !== activeCategory) {
      return false;
    }
    
    // Price filter
    if (activePriceRange) {
      const range = PRICE_RANGES.find(r => r.label === activePriceRange);
      if (range && (product.price < range.min || product.price > range.max)) {
        return false;
      }
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (activeSort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const activeFiltersCount = [activeCategory, activePriceRange].filter(Boolean).length;

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container py-8 md:py-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[var(--color-accent)] mb-2 text-center">
            Discover
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-dark)] text-center mb-2">
            {activeCategory 
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop' 
              : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-[var(--color-secondary)] text-center">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-[var(--color-dark)] mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => updateFilter('category', '')}
                      className={cn(
                        'font-sans text-sm transition-colors',
                        !activeCategory 
                          ? 'text-[var(--color-accent)] font-medium' 
                          : 'text-[var(--color-secondary)] hover:text-[var(--color-dark)]'
                      )}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => updateFilter('category', category.id)}
                        className={cn(
                          'font-sans text-sm transition-colors capitalize',
                          activeCategory === category.id 
                            ? 'text-[var(--color-accent)] font-medium' 
                            : 'text-[var(--color-secondary)] hover:text-[var(--color-dark)]'
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-[var(--color-dark)] mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <li key={range.label}>
                      <button
                        onClick={() => updateFilter('price', activePriceRange === range.label ? '' : range.label)}
                        className={cn(
                          'font-sans text-sm transition-colors',
                          activePriceRange === range.label 
                            ? 'text-[var(--color-accent)] font-medium' 
                            : 'text-[var(--color-secondary)] hover:text-[var(--color-dark)]'
                        )}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] underline transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 font-sans text-sm text-[var(--color-dark)]"
            >
              <SlidersHorizontal size={18} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-[var(--color-accent)] text-white text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 font-sans text-sm text-[var(--color-dark)]"
              >
                Sort by
                <ChevronDown size={16} className={cn('transition-transform', sortOpen && 'rotate-180')} />
              </button>
              
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-[var(--color-border)] shadow-lg z-20 min-w-48">
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value);
                        setSortOpen(false);
                      }}
                      className={cn(
                        'w-full px-4 py-3 text-left font-sans text-sm transition-colors',
                        activeSort === option.value
                          ? 'bg-[var(--color-accent)] text-white'
                          : 'hover:bg-[var(--color-surface)] text-[var(--color-dark)]'
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters - Desktop */}
            {activeFiltersCount > 0 && (
              <div className="hidden lg:flex items-center gap-2 mb-6 flex-wrap">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-surface)] border border-[var(--color-border)] font-sans text-sm">
                    {categories.find(c => c.id === activeCategory)?.name}
                    <button
                      onClick={() => updateFilter('category', '')}
                      className="ml-1 text-[var(--color-secondary)] hover:text-[var(--color-dark)]"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                {activePriceRange && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-surface)] border border-[var(--color-border)] font-sans text-sm">
                    {activePriceRange}
                    <button
                      onClick={() => updateFilter('price', '')}
                      className="ml-1 text-[var(--color-secondary)] hover:text-[var(--color-dark)]"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-[var(--color-dark)] mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-[var(--color-secondary)] mb-6">
                  Try adjusting your filters
                </p>
                <Button onClick={clearFilters} variant="secondary">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed inset-x-0 bottom-0 bg-white z-50 rounded-t-2xl max-h-[80vh] overflow-y-auto lg:hidden">
            <div className="sticky top-0 bg-white border-b border-[var(--color-border)] p-4 flex items-center justify-between">
              <h2 className="font-sans font-medium">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-[var(--color-dark)] mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => { updateFilter('category', ''); setShowFilters(false); }}
                    className={cn(
                      'w-full text-left py-2 font-sans text-sm transition-colors border-b',
                      !activeCategory 
                        ? 'text-[var(--color-accent)] font-medium border-[var(--color-accent)]' 
                        : 'text-[var(--color-secondary)] border-transparent'
                    )}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => { updateFilter('category', category.id); setShowFilters(false); }}
                      className={cn(
                        'w-full text-left py-2 font-sans text-sm capitalize transition-colors border-b',
                        activeCategory === category.id 
                          ? 'text-[var(--color-accent)] font-medium border-[var(--color-accent)]' 
                          : 'text-[var(--color-secondary)] border-transparent'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-[var(--color-dark)] mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => { updateFilter('price', activePriceRange === range.label ? '' : range.label); setShowFilters(false); }}
                      className={cn(
                        'w-full text-left py-2 font-sans text-sm transition-colors border-b',
                        activePriceRange === range.label 
                          ? 'text-[var(--color-accent)] font-medium border-[var(--color-accent)]' 
                          : 'text-[var(--color-secondary)] border-transparent'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-[var(--color-border)] p-4 flex gap-4">
              <Button
                variant="secondary"
                fullWidth
                onClick={() => { clearFilters(); setShowFilters(false); }}
              >
                Clear All
              </Button>
              <Button
                variant="primary"
                fullWidth
                onClick={() => setShowFilters(false)}
              >
                View {sortedProducts.length} Results
              </Button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Collection;
