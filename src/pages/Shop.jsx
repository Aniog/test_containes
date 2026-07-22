import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { cn } from '../lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A to Z' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedPrice = searchParams.get('price') || 'all';
  const selectedSort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    switch (selectedPrice) {
      case 'under-50':
        result = result.filter((p) => p.price < 50);
        break;
      case '50-75':
        result = result.filter((p) => p.price >= 50 && p.price <= 75);
        break;
      case '75-100':
        result = result.filter((p) => p.price >= 75 && p.price <= 100);
        break;
      case 'over-100':
        result = result.filter((p) => p.price > 100);
        break;
    }

    // Sort
    switch (selectedSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedSort]);

  const updateSearchParams = (key, value) => {
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

  const hasActiveFilters =
    selectedCategory !== 'all' || selectedPrice !== 'all' || selectedSort !== 'featured';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-sans font-medium text-espresso mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => updateSearchParams('category', 'all')}
            className={cn(
              'block w-full text-left font-sans text-sm py-1 transition-colors',
              selectedCategory === 'all' ? 'text-accent font-medium' : 'text-charcoal-600 hover:text-espresso'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateSearchParams('category', cat.id)}
              className={cn(
                'block w-full text-left font-sans text-sm py-1 capitalize transition-colors',
                selectedCategory === cat.id ? 'text-accent font-medium' : 'text-charcoal-600 hover:text-espresso'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-sans font-medium text-espresso mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateSearchParams('price', range.value)}
              className={cn(
                'block w-full text-left font-sans text-sm py-1 transition-colors',
                selectedPrice === range.value ? 'text-accent font-medium' : 'text-charcoal-600 hover:text-espresso'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-ivory-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Shop Our Collection
          </h1>
          <p className="font-sans text-charcoal-600 max-w-md mx-auto">
            Discover timeless pieces designed to elevate your everyday
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-200">
          {/* Results count */}
          <p className="font-sans text-sm text-charcoal-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 font-sans text-sm text-charcoal-700 hover:text-espresso transition-colors"
              >
                <span>Sort: {sortOptions.find((o) => o.value === selectedSort)?.label}</span>
                <ChevronDown className={cn('w-4 h-4 transition-transform', isSortOpen && 'rotate-180')} />
              </button>
              {isSortOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-ivory-100 rounded-lg shadow-lg border border-charcoal-200 py-2 z-20">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateSearchParams('sort', option.value);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          'block w-full text-left px-4 py-2 font-sans text-sm transition-colors',
                          selectedSort === option.value
                            ? 'text-accent font-medium bg-accent/5'
                            : 'text-charcoal-700 hover:bg-ivory-200'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal-700 hover:text-espresso transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-accent rounded-full" />
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-accent transition-colors mb-6"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              )}
              <FilterContent />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-600 mb-4">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity',
          isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-300',
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-charcoal-200">
            <h2 className="font-serif text-lg" style={{ letterSpacing: '0.15em' }}>
              FILTERS
            </h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 -mr-2 text-charcoal-600 hover:text-espresso"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
            <FilterContent />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-charcoal-200 bg-cream">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full btn-primary"
            >
              View {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
