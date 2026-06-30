import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Get filter state from URL
  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (activeCategory !== 'all' && product.category !== activeCategory) return false;
      if (activePriceRange !== 'all') {
        const range = priceRanges.find(r => r.label === activePriceRange);
        if (range && (product.price < range.min || product.price > range.max)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const updateFilter = (key, value) => {
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

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all';

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-cream-100 border-b border-pearl">
        <div className="section-container py-12 md:py-16 text-center">
          <p className="text-gold-500 text-xs uppercase tracking-extra-wide mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-800 mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-warm-600 max-w-xl mx-auto">
            Discover our complete collection of demi-fine gold jewelry. 
            Each piece is crafted with care and designed to be treasured.
          </p>
        </div>
      </div>

      <div className="section-container py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-pearl">
          {/* Results count */}
          <p className="text-warm-600 text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown (Desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 text-sm text-warm-700 hover:text-warm-900 transition-colors"
              >
                Sort by: <span className="font-medium">{sortOptions.find(o => o.value === sortBy)?.label}</span>
                <ChevronDown size={16} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSortOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 bg-white border border-pearl shadow-soft z-20 min-w-[180px]">
                    {sortOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          updateFilter('sort', option.value);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                          sortBy === option.value
                            ? 'bg-gold-50 text-gold-600 font-medium'
                            : 'text-warm-700 hover:bg-cream-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm text-warm-700"
            >
              <SlidersHorizontal size={18} />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-gold-400 text-warm-900 text-xs rounded-full flex items-center justify-center">
                  {activeCategory !== 'all' ? '1' : ''}{activePriceRange !== 'all' ? (activeCategory !== 'all' ? '2' : '1') : ''}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs uppercase tracking-extra-wide text-warm-800 font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeCategory === 'all'
                        ? 'text-warm-900 font-medium'
                        : 'text-warm-600 hover:text-warm-800'
                    }`}
                  >
                    All Jewelry
                    <span className="text-warm-400 ml-2">
                      ({products.length})
                    </span>
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left py-2 text-sm capitalize transition-colors ${
                        activeCategory === cat.id
                          ? 'text-warm-900 font-medium'
                          : 'text-warm-600 hover:text-warm-800'
                      }`}
                    >
                      {cat.name}
                      <span className="text-warm-400 ml-2">
                        ({products.filter(p => p.category === cat.id).length})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs uppercase tracking-extra-wide text-warm-800 font-medium mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', 'all')}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activePriceRange === 'all'
                        ? 'text-warm-900 font-medium'
                        : 'text-warm-600 hover:text-warm-800'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        activePriceRange === range.label
                          ? 'text-warm-900 font-medium'
                          : 'text-warm-600 hover:text-warm-800'
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
                  className="text-xs text-warm-500 hover:text-dusty underline transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-800 mb-2">
                  No products found
                </p>
                <p className="text-warm-600 text-sm mb-4">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-gold-500 hover:text-gold-600 text-sm underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
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
            className="fixed inset-0 bg-warm-900/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-cream-50 z-50 shadow-medium md:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-warm-800">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 text-warm-600 hover:text-warm-900"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-extra-wide text-warm-800 font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activeCategory === 'all' ? 'text-warm-900 font-medium' : 'text-warm-600'
                    }`}
                  >
                    All Jewelry ({products.length})
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left py-2 text-sm capitalize transition-colors ${
                        activeCategory === cat.id ? 'text-warm-900 font-medium' : 'text-warm-600'
                      }`}
                    >
                      {cat.name} ({products.filter(p => p.category === cat.id).length})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-extra-wide text-warm-800 font-medium mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', 'all')}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      activePriceRange === 'all' ? 'text-warm-900 font-medium' : 'text-warm-600'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        activePriceRange === range.label ? 'text-warm-900 font-medium' : 'text-warm-600'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-pearl">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-3 bg-warm-900 text-white text-sm uppercase tracking-wide hover:bg-warm-800 transition-colors"
                >
                  View {filteredProducts.length} Results
                </button>
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      clearFilters();
                      setIsFilterOpen(false);
                    }}
                    className="w-full py-3 text-sm text-warm-600 hover:text-warm-900 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
