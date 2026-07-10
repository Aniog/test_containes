import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
  { id: 'name', name: 'Name: A-Z' }
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-100', name: '$50 - $100', min: 50, max: 100 },
  { id: 'over-100', name: 'Over $100', min: 100, max: Infinity }
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by price
    const priceRange = priceRanges.find(p => p.id === activePriceRange);
    if (priceRange) {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, activeSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const currentSort = sortOptions.find(s => s.id === activeSort) || sortOptions[0];
  const activeFiltersCount = [
    activeCategory !== 'all',
    activePriceRange !== 'all'
  ].filter(Boolean).length;

  return (
    <main className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-warm-black mb-4">
            {activeCategory !== 'all' 
              ? categories.find(c => c.id === activeCategory)?.name 
              : 'All Jewelry'
            }
          </h1>
          <p className="text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-hairline">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden flex items-center gap-2 text-charcoal"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="text-sm font-medium">Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Filters Summary */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-sm text-warm-gray">Category:</span>
            <button
              onClick={() => updateFilter('category', 'all')}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                activeCategory === 'all'
                  ? 'bg-warm-black text-white'
                  : 'hover:bg-warm-black/10'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => updateFilter('category', cat.id)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-warm-black text-white'
                    : 'hover:bg-warm-black/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="flex items-center gap-2 text-charcoal"
            >
              <span className="text-sm">Sort by: <strong>{currentSort.name}</strong></span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {sortDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-hairline py-2 min-w-[180px] z-20">
                  {sortOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => {
                        updateFilter('sort', option.id);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-cream transition-colors ${
                        activeSort === option.id ? 'text-gold font-medium' : 'text-charcoal'
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-warm-gray mb-4">No products found with current filters.</p>
            <button
              onClick={() => setSearchParams({})}
              className="text-gold hover:text-gold-dark font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-warm-black/40"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85%] bg-white animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-hairline sticky top-0 bg-white z-10">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-cream rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-charcoal uppercase tracking-wide mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                      activeCategory === 'all'
                        ? 'bg-gold text-warm-black font-medium'
                        : 'hover:bg-cream'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-gold text-warm-black font-medium'
                          : 'hover:bg-cream'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium text-charcoal uppercase tracking-wide mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => updateFilter('price', range.id)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                        activePriceRange === range.id
                          ? 'bg-gold text-warm-black font-medium'
                          : 'hover:bg-cream'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="p-6 border-t border-hairline sticky bottom-0 bg-white">
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-4 bg-gold text-warm-black font-medium rounded hover:bg-gold-dark transition-colors"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
