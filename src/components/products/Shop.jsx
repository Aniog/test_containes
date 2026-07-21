import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (currentCategory !== 'all') {
      result = result.filter(p => p.category === currentCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          result = result.filter(p => p.price < 50);
          break;
        case '50to75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case '75to100':
          result = result.filter(p => p.price > 75 && p.price <= 100);
          break;
        case 'over100':
          result = result.filter(p => p.price > 100);
          break;
      }
    }

    // Sort
    switch (currentSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [currentCategory, currentSort, priceRange]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = currentCategory !== 'all' || priceRange !== 'all';

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' }
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to75', label: '$50 - $75' },
    { value: '75to100', label: '$75 - $100' },
    { value: 'over100', label: 'Over $100' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#FAF7F2] py-12">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">Shop</h1>
          <p className="text-[#6B6560] text-center max-w-md mx-auto">
            Discover our complete collection of premium demi-fine jewelry.
          </p>
        </div>
      </div>

      <div className="container py-8">
        {/* Mobile Filter Toggle & Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#6B6560]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && <span className="w-2 h-2 bg-[#C9A962] rounded-full" />}
          </button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className={`block text-left text-sm ${
                    currentCategory === 'all' ? 'text-[#C9A962]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`block text-left text-sm capitalize ${
                      currentCategory === cat.id ? 'text-[#C9A962]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider mb-4">Price</h3>
              <div className="space-y-3">
                {priceOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFilter('price', option.value)}
                    className={`block text-left text-sm ${
                      priceRange === option.value ? 'text-[#C9A962]' : 'text-[#6B6560] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#6B6560] hover:text-[#C9A962] underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown (Desktop) */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={currentSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-[#E5E0D8] px-4 py-2 pr-10 text-sm focus:outline-none focus:border-[#C9A962]"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B6560] mb-4">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="text-[#C9A962] hover:underline"
                >
                  Clear all filters
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
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-[#FAF7F2] shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block text-sm ${
                      currentCategory === 'all' ? 'text-[#C9A962] font-medium' : 'text-[#6B6560]'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm capitalize ${
                        currentCategory === cat.id ? 'text-[#C9A962] font-medium' : 'text-[#6B6560]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider mb-3">Price</h3>
                <div className="space-y-2">
                  {priceOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('price', option.value)}
                      className={`block text-sm ${
                        priceRange === option.value ? 'text-[#C9A962] font-medium' : 'text-[#6B6560]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-[#E5E0D8]">
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex-1 py-3 border border-[#1A1A1A] text-sm uppercase tracking-wider hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 py-3 bg-[#C9A962] text-white text-sm uppercase tracking-wider hover:bg-[#B8984F] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}