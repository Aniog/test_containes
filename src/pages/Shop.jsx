import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activeMinPrice = parseInt(searchParams.get('minPrice')) || 0;
  const activeMaxPrice = parseInt(searchParams.get('maxPrice')) || 200;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by price
    result = result.filter(p => p.price >= activeMinPrice && p.price <= activeMaxPrice);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [activeCategory, activeMinPrice, activeMaxPrice, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 0 || value === 200) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = activeCategory !== 'all' || activeMinPrice > 0 || activeMaxPrice < 200;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-cream-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal-900">
            Our Collection
          </h1>
          <p className="mt-4 font-sans text-base text-charcoal-800/80 max-w-2xl mx-auto">
            Discover our curated selection of demi-fine gold jewelry, designed to elevate every moment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-800/10">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal-900"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>

            {/* Results Count */}
            <span className="font-sans text-sm text-charcoal-800/70">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-sm text-charcoal-900 pr-6 py-1 cursor-pointer focus:outline-none border-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-800 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal-900 mb-6">
                Filter By
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  {[
                    { id: 'all', name: 'All Jewelry' },
                    ...categories,
                    { id: 'sets', name: 'Gift Sets' },
                  ].map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={activeCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          activeCategory === cat.id
                            ? 'border-charcoal-900 bg-charcoal-900'
                            : 'border-charcoal-800/30 group-hover:border-charcoal-800'
                        }`}
                      >
                        {activeCategory === cat.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cream-50" />
                        )}
                      </span>
                      <span className="font-sans text-sm text-charcoal-800 group-hover:text-charcoal-900 transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-4">
                  Price
                </h4>
                <div className="space-y-3">
                  {[
                    { min: 0, max: 200, label: 'All Prices' },
                    { min: 0, max: 50, label: 'Under $50' },
                    { min: 50, max: 75, label: '$50 - $75' },
                    { min: 75, max: 100, label: '$75 - $100' },
                    { min: 100, max: 200, label: '$100+' },
                  ].map((range) => (
                    <label
                      key={`${range.min}-${range.max}`}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={activeMinPrice === range.min && activeMaxPrice === range.max}
                        onChange={() => {
                          updateFilter('minPrice', range.min.toString());
                          updateFilter('maxPrice', range.max.toString());
                        }}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          activeMinPrice === range.min && activeMaxPrice === range.max
                            ? 'border-charcoal-900 bg-charcoal-900'
                            : 'border-charcoal-800/30 group-hover:border-charcoal-800'
                        }`}
                      >
                        {activeMinPrice === range.min && activeMaxPrice === range.max && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cream-50" />
                        )}
                      </span>
                      <span className="font-sans text-sm text-charcoal-800 group-hover:text-charcoal-900 transition-colors">
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
                  className="font-sans text-sm text-charcoal-800/70 hover:text-charcoal-900 transition-colors underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-900 mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-charcoal-800/70 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="border border-charcoal-900 px-6 py-3 font-sans text-sm text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-full max-w-sm bg-cream-50 shadow-xl transform transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-800/10">
              <h2 className="font-serif text-lg font-semibold text-charcoal-900">
                Filters
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 -mr-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  {[
                    { id: 'all', name: 'All Jewelry' },
                    ...categories,
                    { id: 'sets', name: 'Gift Sets' },
                  ].map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={activeCategory === cat.id}
                        onChange={() => {
                          updateFilter('category', cat.id);
                          setIsFilterOpen(false);
                        }}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          activeCategory === cat.id
                            ? 'border-charcoal-900 bg-charcoal-900'
                            : 'border-charcoal-800/30 group-hover:border-charcoal-800'
                        }`}
                      >
                        {activeCategory === cat.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cream-50" />
                        )}
                      </span>
                      <span className="font-sans text-sm text-charcoal-800 group-hover:text-charcoal-900 transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-sm font-medium text-charcoal-900 mb-4">
                  Price
                </h4>
                <div className="space-y-3">
                  {[
                    { min: 0, max: 200, label: 'All Prices' },
                    { min: 0, max: 50, label: 'Under $50' },
                    { min: 50, max: 75, label: '$50 - $75' },
                    { min: 75, max: 100, label: '$75 - $100' },
                    { min: 100, max: 200, label: '$100+' },
                  ].map((range) => (
                    <label
                      key={`${range.min}-${range.max}`}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={activeMinPrice === range.min && activeMaxPrice === range.max}
                        onChange={() => {
                          updateFilter('minPrice', range.min.toString());
                          updateFilter('maxPrice', range.max.toString());
                          setIsFilterOpen(false);
                        }}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          activeMinPrice === range.min && activeMaxPrice === range.max
                            ? 'border-charcoal-900 bg-charcoal-900'
                            : 'border-charcoal-800/30 group-hover:border-charcoal-800'
                        }`}
                      >
                        {activeMinPrice === range.min && activeMaxPrice === range.max && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cream-50" />
                        )}
                      </span>
                      <span className="font-sans text-sm text-charcoal-800 group-hover:text-charcoal-900 transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-6 border-t border-charcoal-800/10">
              <div className="flex gap-3">
                <button
                  onClick={clearFilters}
                  className="flex-1 border border-charcoal-900 py-3 font-sans text-sm text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 bg-charcoal-900 py-3 font-sans text-sm text-cream-50 hover:bg-charcoal-800 transition-colors"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
