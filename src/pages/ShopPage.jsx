import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    minPrice: '',
    maxPrice: '',
    material: 'all',
  });

  const [sortBy, setSortBy] = useState('featured');

  // Update filters when URL params change
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setFilters(prev => ({ ...prev, category }));
  }, [searchParams]);

  // Filter products
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Price filter
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  const handleCategoryChange = (category) => {
    setFilters(prev => ({ ...prev, category }));
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      minPrice: '',
      maxPrice: '',
      material: 'all',
    });
    setSearchParams({});
  };

  const hasActiveFilters = 
    filters.category !== 'all' ||
    filters.minPrice ||
    filters.maxPrice;

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-cream py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-2">
            Shop
          </h1>
          <p className="text-charcoal/60 font-body">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <FilterSection
                filters={filters}
                setFilters={setFilters}
                categories={categories}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-charcoal"
            >
              <Filter className="w-5 h-5" />
              <span className="font-body font-medium">Filter</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-gold-500 rounded-full" />
              )}
            </button>

            {/* Mobile Sort */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 text-charcoal"
              >
                <span className="font-body text-sm">Sort by</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-ivory shadow-lg rounded border border-sand z-20">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm font-body transition-colors ${
                        sortBy === option.value
                          ? 'bg-cream text-espresso'
                          : 'text-charcoal hover:bg-cream'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div>
            {/* Desktop Sort Bar */}
            <div className="hidden lg:flex items-center justify-between mb-6 pb-4 border-b border-sand">
              <p className="text-sm text-charcoal/60">
                Showing {filteredProducts.length} results
              </p>
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-charcoal"
                >
                  <span className="text-sm font-body">Sort by:</span>
                  <span className="text-sm font-body font-medium">
                    {sortOptions.find(o => o.value === sortBy)?.label}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-ivory shadow-lg rounded border border-sand z-20">
                    {sortOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setIsSortOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm font-body transition-colors ${
                          sortBy === option.value
                            ? 'bg-cream text-espresso'
                            : 'text-charcoal hover:bg-cream'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-espresso mb-4">No products found</p>
                <p className="text-charcoal/60 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-espresso text-ivory text-sm font-body"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-ivory overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-sand">
              <h2 className="font-serif text-xl text-espresso">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <FilterSection
                filters={filters}
                setFilters={setFilters}
                categories={categories}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
                onApply={() => setIsFilterOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterSection({ filters, setFilters, categories, onClear, hasActiveFilters, onApply }) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-serif text-lg text-espresso mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setFilters(prev => ({ ...prev, category: category.id }));
                if (category.id !== 'all') {
                  setSearchParams({ category: category.id });
                } else {
                  setSearchParams({});
                }
              }}
              className={`block w-full text-left py-2 text-sm font-body transition-colors ${
                filters.category === category.id
                  ? 'text-espresso font-medium'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-serif text-lg text-espresso mb-4">Price</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
            className="w-full px-3 py-2 border border-sand rounded text-sm font-body focus:outline-none focus:border-espresso"
          />
          <span className="text-charcoal/40">—</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
            className="w-full px-3 py-2 border border-sand rounded text-sm font-body focus:outline-none focus:border-espresso"
          />
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClear}
          className="text-sm text-gold-600 hover:text-gold-700 font-body"
        >
          Clear all filters
        </button>
      )}

      {/* Apply Button (mobile only) */}
      {onApply && (
        <button
          onClick={onApply}
          className="w-full py-3 bg-espresso text-ivory text-sm font-body mt-4"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
}
