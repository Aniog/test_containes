import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' },
];

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all',
  });
  
  const [sortBy, setSortBy] = useState('featured');

  // Update URL when category filter changes
  useEffect(() => {
    if (filters.category !== 'all') {
      setSearchParams({ category: filters.category });
    } else {
      setSearchParams({});
    }
  }, [filters.category, setSearchParams]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }

    // Price filter
    if (filters.price !== 'all') {
      switch (filters.price) {
        case 'under-50':
          if (product.price >= 50) return false;
          break;
        case '50-75':
          if (product.price < 50 || product.price > 75) return false;
          break;
        case '75-100':
          if (product.price < 75 || product.price > 100) return false;
          break;
        case 'over-100':
          if (product.price <= 100) return false;
          break;
      }
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case 'featured':
      default:
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    }
  });

  const activeFilterCount = [
    filters.category !== 'all',
    filters.price !== 'all',
    filters.material !== 'all',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setFilters({
      category: 'all',
      price: 'all',
      material: 'all',
    });
  };

  return (
    <main className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            {filters.category === 'all' ? 'Shop All' : categories.find(c => c.id === filters.category)?.name}
          </h1>
          <p className="text-taupe">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal size={18} />
            Filter
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-charcoal text-cream text-xs flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Desktop Filter Pills */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-sm text-taupe">Category:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilters(f => ({ ...f, category: 'all' }))}
                className={`px-4 py-1.5 text-sm transition-colors ${
                  filters.category === 'all'
                    ? 'bg-charcoal text-cream'
                    : 'text-charcoal hover:bg-ivory'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilters(f => ({ ...f, category: cat.id }))}
                  className={`px-4 py-1.5 text-sm transition-colors ${
                    filters.category === cat.id
                      ? 'bg-charcoal text-cream'
                      : 'text-charcoal hover:bg-ivory'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm text-charcoal"
            >
              Sort: <span className="underline">{sortOptions.find(o => o.value === sortBy)?.label}</span>
              <ChevronDown size={16} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-cream border border-sand shadow-lg z-20 min-w-48">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-ivory transition-colors ${
                        sortBy === option.value ? 'text-charcoal font-medium' : 'text-charcoal/70'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-taupe mb-4">No products found matching your filters.</p>
            <button
              onClick={clearFilters}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-full max-w-sm bg-cream z-50 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-sand">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-charcoal/60 hover:text-charcoal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm font-medium text-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === 'all'}
                      onChange={() => setFilters(f => ({ ...f, category: 'all' }))}
                      className="w-4 h-4 border-sand text-charcoal focus:ring-charcoal"
                    />
                    <span className="text-sm text-charcoal/70">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.id}
                        onChange={() => setFilters(f => ({ ...f, category: cat.id }))}
                        className="w-4 h-4 border-sand text-charcoal focus:ring-charcoal"
                      />
                      <span className="text-sm text-charcoal/70">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm font-medium text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.price === range.value}
                        onChange={() => setFilters(f => ({ ...f, price: range.value }))}
                        className="w-4 h-4 border-sand text-charcoal focus:ring-charcoal"
                      />
                      <span className="text-sm text-charcoal/70">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 p-4 border-t border-sand bg-cream">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full btn-primary"
              >
                Show {sortedProducts.length} Results
              </button>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full mt-3 text-sm text-taupe hover:text-charcoal underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
