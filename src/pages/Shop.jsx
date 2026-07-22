import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
  { id: '75to100', label: '$75 - $100', min: 75, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by price
    const priceRange = priceRanges.find((p) => p.id === activePrice);
    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
      );
    }

    // Sort
    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeSort]);

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

  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all';

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-serif text-sm tracking-widest uppercase mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`block w-full text-left py-2 text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-charcoal font-medium'
                  : 'text-warmGray hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-serif text-sm tracking-widest uppercase mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => updateFilter('price', range.id)}
              className={`block w-full text-left py-2 text-sm transition-colors ${
                activePrice === range.id
                  ? 'text-charcoal font-medium'
                  : 'text-warmGray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-gold hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-h2 mb-4">Shop All</h1>
          <p className="text-warmGray max-w-md mx-auto">
            Discover our complete collection of premium demi-fine jewelry
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-charcoal/50"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto animate-slideInRight">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-lg tracking-widest uppercase">
                    Filters
                  </h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2"
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterPanel />
                <div className="mt-8">
                  <Button
                    variant="primary"
                    size="full"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-warmGray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-2 text-sm border-b border-border focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-warmGray" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-warmGray mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}