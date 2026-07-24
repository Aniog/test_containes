import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Get initial filter values from URL
  const getInitialFilters = () => ({
    category: searchParams.get('category') || '',
    priceRange: searchParams.get('price') || '',
    sort: searchParams.get('sort') || 'featured',
  });

  const [filters, setFilters] = useState(getInitialFilters);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.priceRange) params.set('price', filters.priceRange);
    if (filters.sort !== 'featured') params.set('sort', filters.sort);
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Filter products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (filters.category && product.category !== filters.category) return false;
    
    // Price range filter
    if (filters.priceRange) {
      const range = priceRanges.find(r => r.label === filters.priceRange);
      if (range && (product.price < range.min || product.price >= range.max)) return false;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sort) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return product => (product.badge === 'New' ? -1 : 1);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: prev[key] === value ? '' : value }));
  };

  const clearAllFilters = () => {
    setFilters({ category: '', priceRange: '', sort: 'featured' });
  };

  const hasActiveFilters = filters.category || filters.priceRange;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  return (
    <main className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title text-3xl md:text-4xl mb-4">Shop All</h1>
          <p className="text-charcoal-500 font-sans">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-100">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-charcoal-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-charcoal-900 text-cream-50 text-xs rounded-full flex items-center justify-center">
                {(filters.category ? 1 : 0) + (filters.priceRange ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Spacer for desktop */}
          <div className="hidden lg:block" />

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm text-charcoal-700 hover:text-charcoal-900"
            >
              Sort by: <span className="font-medium">{sortOptions.find(o => o.value === filters.sort)?.label}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isSortOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsSortOpen(false)} 
                />
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-charcoal-100 shadow-lg z-20">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilters(prev => ({ ...prev, sort: option.value }));
                        setIsSortOpen(false);
                      }}
                      className={cn(
                        'w-full px-4 py-3 text-left text-sm hover:bg-cream-50 transition-colors',
                        filters.sort === option.value 
                          ? 'text-charcoal-900 font-medium' 
                          : 'text-charcoal-600'
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

        {/* Main Content */}
        <div className="flex gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-medium text-charcoal-900">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-charcoal-500 hover:text-charcoal-900 underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-ultra-wide text-charcoal-500 mb-4">CATEGORY</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filters.category === category.id}
                        onChange={() => handleFilterChange('category', category.id)}
                        className="sr-only"
                      />
                      <span className={cn(
                        'w-4 h-4 border flex items-center justify-center transition-colors',
                        filters.category === category.id
                          ? 'bg-charcoal-900 border-charcoal-900'
                          : 'border-charcoal-300 group-hover:border-charcoal-500'
                      )}>
                        {filters.category === category.id && (
                          <svg className="w-3 h-3 text-cream-50" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm text-charcoal-700 group-hover:text-charcoal-900">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs tracking-ultra-wide text-charcoal-500 mb-4">PRICE</h3>
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filters.priceRange === range.label}
                        onChange={() => handleFilterChange('priceRange', range.label)}
                        className="sr-only"
                      />
                      <span className={cn(
                        'w-4 h-4 border flex items-center justify-center transition-colors',
                        filters.priceRange === range.label
                          ? 'bg-charcoal-900 border-charcoal-900'
                          : 'border-charcoal-300 group-hover:border-charcoal-500'
                      )}>
                        {filters.priceRange === range.label && (
                          <svg className="w-3 h-3 text-cream-50" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm text-charcoal-700 group-hover:text-charcoal-900">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-700 mb-4">
                  No products found
                </p>
                <p className="text-charcoal-500 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button onClick={clearAllFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div 
            className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream-50 z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
              <h2 className="font-serif text-xl text-charcoal-900">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 -mr-2 text-charcoal-500 hover:text-charcoal-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-6">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-xs tracking-ultra-wide text-charcoal-500 mb-4">CATEGORY</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filters.category === category.id}
                        onChange={() => handleFilterChange('category', category.id)}
                        className="sr-only"
                      />
                      <span className={cn(
                        'w-4 h-4 border flex items-center justify-center transition-colors',
                        filters.category === category.id
                          ? 'bg-charcoal-900 border-charcoal-900'
                          : 'border-charcoal-300 group-hover:border-charcoal-500'
                      )}>
                        {filters.category === category.id && (
                          <svg className="w-3 h-3 text-cream-50" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm text-charcoal-700">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs tracking-ultra-wide text-charcoal-500 mb-4">PRICE</h3>
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={filters.priceRange === range.label}
                        onChange={() => handleFilterChange('priceRange', range.label)}
                        className="sr-only"
                      />
                      <span className={cn(
                        'w-4 h-4 border flex items-center justify-center transition-colors',
                        filters.priceRange === range.label
                          ? 'bg-charcoal-900 border-charcoal-900'
                          : 'border-charcoal-300 group-hover:border-charcoal-500'
                      )}>
                        {filters.priceRange === range.label && (
                          <svg className="w-3 h-3 text-cream-50" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm text-charcoal-700">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="sticky bottom-0 px-6 py-4 bg-cream-50 border-t border-charcoal-100 flex gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 btn-outline"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 btn-primary"
              >
                Show {sortedProducts.length} Results
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default ShopPage;
