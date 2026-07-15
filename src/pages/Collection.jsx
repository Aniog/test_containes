import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { cn } from '../lib/utils';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update URL when category filter changes
  useEffect(() => {
    if (filters.category) {
      setSearchParams({ category: filters.category });
    } else {
      setSearchParams({});
    }
  }, [filters.category, setSearchParams]);

  const filteredProducts = products
    .filter((product) => {
      if (filters.category && product.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) {
          if (product.price < min || product.price > max) return false;
        } else {
          if (product.price < min) return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return a.bestseller ? -1 : 1;
      }
    });

  const handleCategoryChange = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === categoryId ? '' : categoryId,
    }));
  };

  const handlePriceChange = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === range ? '' : range,
    }));
  };

  const clearFilters = () => {
    setFilters({ category: '', priceRange: '' });
  };

  const hasActiveFilters = filters.category || filters.priceRange;

  const priceRanges = [
    { id: '0-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
    { id: '100+', label: '$100+', min: 100 },
  ];

  return (
    <div className="min-h-screen bg-cream animate-fade-in">
      {/* Header */}
      <div className="bg-cream-200 py-12 md:py-16">
        <div className="container-luxury">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso text-center">
            Our Collection
          </h1>
          <p className="text-taupe text-center mt-3 max-w-lg mx-auto">
            Discover our curated selection of demi-fine jewelry, crafted to be treasured.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-luxury py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <span className="text-sm text-taupe">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium text-espresso"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-serif text-lg text-espresso mb-6">Filters</h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-xs tracking-[0.15em] uppercase text-taupe mb-4">
                  Category
                </h4>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={filters.category === category.id}
                          onChange={() => handleCategoryChange(category.id)}
                          className="sr-only"
                        />
                        <span
                          className={cn(
                            'w-5 h-5 border rounded flex items-center justify-center transition-colors',
                            filters.category === category.id
                              ? 'bg-gold border-gold'
                              : 'border-linen group-hover:border-gold'
                          )}
                        >
                          {filters.category === category.id && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm text-espresso group-hover:text-gold transition-colors">
                          {category.name}
                        </span>
                        <span className="text-xs text-taupe ml-auto">
                          ({category.count})
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="text-xs tracking-[0.15em] uppercase text-taupe mb-4">
                  Price
                </h4>
                <ul className="space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={filters.priceRange === range.id}
                          onChange={() => handlePriceChange(range.id)}
                          className="sr-only"
                        />
                        <span
                          className={cn(
                            'w-5 h-5 border rounded flex items-center justify-center transition-colors',
                            filters.priceRange === range.id
                              ? 'bg-gold border-gold'
                              : 'border-linen group-hover:border-gold'
                          )}
                        >
                          {filters.priceRange === range.id && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm text-espresso group-hover:text-gold transition-colors">
                          {range.label}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold hover:text-gold-dark underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filters Panel */}
          <div
            className={cn(
              'lg:hidden fixed inset-0 z-50 bg-charcoal/50 transition-opacity duration-300',
              showFilters ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            )}
            onClick={() => setShowFilters(false)}
          >
            <div
              className={cn(
                'absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 transition-transform duration-300',
                showFilters ? 'translate-y-0' : 'translate-y-full'
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg text-espresso">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 text-taupe"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-xs tracking-[0.15em] uppercase text-taupe mb-4">
                  Category
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={cn(
                        'px-4 py-2 text-sm border rounded-full transition-colors',
                        filters.category === category.id
                          ? 'bg-gold border-gold text-white'
                          : 'border-linen text-espresso hover:border-gold'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-xs tracking-[0.15em] uppercase text-taupe mb-4">
                  Price
                </h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => handlePriceChange(range.id)}
                      className={cn(
                        'px-4 py-2 text-sm border rounded-full transition-colors',
                        filters.priceRange === range.id
                          ? 'bg-gold border-gold text-white'
                          : 'border-linen text-espresso hover:border-gold'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex-1 py-3 border border-linen text-espresso text-sm font-medium rounded-sm"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="flex-1 py-3 bg-gold text-white text-sm font-medium rounded-sm"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Header */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <span className="text-sm text-taupe">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-espresso pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe pointer-events-none" />
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="hidden lg:flex items-center gap-2 mb-6">
                <span className="text-xs text-taupe">Active filters:</span>
                {filters.category && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 text-sm text-espresso rounded-full">
                    {categories.find((c) => c.id === filters.category)?.name}
                    <button
                      onClick={() => setFilters((prev) => ({ ...prev, category: '' }))}
                      className="ml-1 text-taupe hover:text-espresso"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.priceRange && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream-200 text-sm text-espresso rounded-full">
                    {priceRanges.find((r) => r.id === filters.priceRange)?.label}
                    <button
                      onClick={() => setFilters((prev) => ({ ...prev, priceRange: '' }))}
                      className="ml-1 text-taupe hover:text-espresso"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-espresso mb-4">
                  No products found
                </p>
                <p className="text-sm text-taupe mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
