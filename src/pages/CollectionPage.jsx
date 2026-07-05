import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Get initial filters from URL
  const getInitialFilters = () => ({
    category: searchParams.get('category') || '',
    price: searchParams.get('price') || '',
    sort: searchParams.get('sort') || 'featured',
  });

  const [filters, setFilters] = useState(getInitialFilters);

  // Sync filters with URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.price) params.set('price', filters.price);
    if (filters.sort !== 'featured') params.set('sort', filters.sort);
    setSearchParams(params);
  }, [filters, setSearchParams]);

  // Update filters when URL changes
  useEffect(() => {
    setFilters(getInitialFilters());
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    // Filter by price
    if (filters.price) {
      const range = priceRanges.find(r => r.label === filters.price);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (filters.sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // Featured - bestseller first
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [filters]);

  const hasActiveFilters = filters.category || filters.price;

  const clearFilters = () => {
    setFilters(prev => ({ ...prev, category: '', price: '' }));
  };

  const getCategoryName = (slug) => {
    const cat = categories.find(c => c.id === slug);
    return cat ? cat.name : 'All';
  };

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-surface border-b border-surface-dark">
        <div className="max-w-content mx-auto px-4 md:px-6 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">
            {filters.category ? getCategoryName(filters.category) : 'All Jewelry'}
          </h1>
          <p className="text-text-secondary font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-background border-b border-surface-dark">
        <div className="max-w-content mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 md:hidden font-sans text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-6">
              <span className="font-sans text-sm text-text-secondary">Category:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilters(prev => ({ ...prev, category: '' }))}
                  className={cn(
                    'px-3 py-1.5 text-sm font-sans rounded transition-colors',
                    !filters.category
                      ? 'bg-primary text-white'
                      : 'bg-surface hover:bg-surface-dark'
                  )}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilters(prev => ({ ...prev, category: cat.id }))}
                    className={cn(
                      'px-3 py-1.5 text-sm font-sans rounded transition-colors',
                      filters.category === cat.id
                        ? 'bg-primary text-white'
                        : 'bg-surface hover:bg-surface-dark'
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <span className="font-sans text-sm text-text-secondary ml-4">Price:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilters(prev => ({ ...prev, price: '' }))}
                  className={cn(
                    'px-3 py-1.5 text-sm font-sans rounded transition-colors',
                    !filters.price
                      ? 'bg-primary text-white'
                      : 'bg-surface hover:bg-surface-dark'
                  )}
                >
                  All
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setFilters(prev => ({ ...prev, price: range.label }))}
                    className={cn(
                      'px-3 py-1.5 text-sm font-sans rounded transition-colors',
                      filters.price === range.label
                        ? 'bg-primary text-white'
                        : 'bg-surface hover:bg-surface-dark'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 font-sans text-sm"
              >
                Sort: {sortOptions.find(o => o.value === filters.sort)?.label}
                <ChevronDown className={cn('w-4 h-4 transition-transform', isSortOpen && 'rotate-180')} />
              </button>
              
              {isSortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsSortOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 bg-white shadow-elevated rounded-lg py-2 z-20 min-w-[180px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setFilters(prev => ({ ...prev, sort: option.value }));
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          'w-full px-4 py-2 text-left font-sans text-sm transition-colors',
                          filters.sort === option.value
                            ? 'bg-surface text-primary'
                            : 'hover:bg-surface'
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

          {/* Active Filters (Mobile) */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-3 md:hidden overflow-x-auto scrollbar-hide">
              {filters.category && (
                <button
                  onClick={() => setFilters(prev => ({ ...prev, category: '' }))}
                  className="flex items-center gap-1 px-3 py-1 bg-surface rounded-full text-sm font-sans whitespace-nowrap"
                >
                  {getCategoryName(filters.category)}
                  <X className="w-3 h-3" />
                </button>
              )}
              {filters.price && (
                <button
                  onClick={() => setFilters(prev => ({ ...prev, price: '' }))}
                  className="flex items-center gap-1 px-3 py-1 bg-surface rounded-full text-sm font-sans whitespace-nowrap"
                >
                  {filters.price}
                  <X className="w-3 h-3" />
                </button>
              )}
              <button
                onClick={clearFilters}
                className="text-sm font-sans text-accent hover:underline whitespace-nowrap"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-content mx-auto px-4 md:px-6 py-8 md:py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="font-serif text-xl mb-2">No products found</h3>
            <p className="text-text-secondary mb-6">Try adjusting your filters</p>
            <Button variant="secondary" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
