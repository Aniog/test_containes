import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Get filters from URL
  const selectedCategory = searchParams.get('category') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (maxPrice) {
      result = result.filter(p => p.price <= parseInt(maxPrice));
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, maxPrice, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || maxPrice;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' }
  ];

  const priceRanges = [
    { value: '40', label: 'Under $40' },
    { value: '60', label: 'Under $60' },
    { value: '80', label: 'Under $80' },
    { value: '100', label: 'Under $100' }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--color-bg-secondary)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-2">
            {selectedCategory 
              ? categories.find(c => c.id === selectedCategory)?.name || 'Shop' 
              : 'Shop All'
            }
          </h1>
          <p className="text-[var(--color-text-muted)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-16 md:top-20 z-20 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm text-[var(--color-text-primary)] md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-[var(--color-gold-primary)] rounded-full" />
              )}
            </button>

            {/* Desktop Filter Pills */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-[var(--color-text-muted)]">Category:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateFilter('category', '')}
                  className={`px-4 py-2 text-sm border transition-colors ${
                    !selectedCategory 
                      ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white' 
                      : 'border-[var(--color-border)] hover:border-[var(--color-text-primary)]'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      selectedCategory === cat.id 
                        ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white' 
                        : 'border-[var(--color-border)] hover:border-[var(--color-text-primary)]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[var(--color-border)] px-4 py-2 pr-10 text-sm text-[var(--color-text-primary)] cursor-pointer hover:border-[var(--color-text-primary)] transition-colors"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Panel */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 bottom-0 w-full bg-white rounded-t-2xl max-h-[70vh] overflow-y-auto animate-fade-in">
            <div className="sticky top-0 bg-white border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Category */}
              <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { updateFilter('category', ''); }}
                    className={`px-4 py-2 text-sm border ${
                      !selectedCategory ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white' : 'border-[var(--color-border)]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`px-4 py-2 text-sm border ${
                        selectedCategory === cat.id ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white' : 'border-[var(--color-border)]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm font-medium mb-3">Max Price</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateFilter('maxPrice', '')}
                    className={`px-4 py-2 text-sm border ${
                      !maxPrice ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white' : 'border-[var(--color-border)]'
                    }`}
                  >
                    Any
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('maxPrice', range.value)}
                      className={`px-4 py-2 text-sm border ${
                        maxPrice === range.value ? 'border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-white' : 'border-[var(--color-border)]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[var(--color-text-muted)] mb-4">No products match your filters.</p>
            <button
              onClick={clearFilters}
              className="text-[var(--color-gold-primary)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
