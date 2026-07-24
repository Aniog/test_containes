import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' }
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity }
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  // Read initial filters from URL
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by price
    if (selectedPrices.length > 0) {
      result = result.filter(p => {
        return selectedPrices.some(rangeIndex => {
          const range = priceRanges[rangeIndex];
          return p.price >= range.min && p.price < range.max;
        });
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // Featured - keep original order with bestsellers first
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategories, selectedPrices, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const togglePrice = (index) => {
    setSelectedPrices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPrices.length > 0;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-medium uppercase tracking-ultra-wide mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="sr-only"
              />
              <span className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                selectedCategories.includes(cat.id)
                  ? 'bg-velmora-gold border-velmora-gold'
                  : 'border-velmora-border group-hover:border-velmora-warm-gray'
              }`}>
                {selectedCategories.includes(cat.id) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-medium uppercase tracking-ultra-wide mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedPrices.includes(index)}
                onChange={() => togglePrice(index)}
                className="sr-only"
              />
              <span className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                selectedPrices.includes(index)
                  ? 'bg-velmora-gold border-velmora-gold'
                  : 'border-velmora-border group-hover:border-velmora-warm-gray'
              }`}>
                {selectedPrices.includes(index) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
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
          className="text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-8 md:pt-12 pb-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-section">Shop All</h1>
          <p className="mt-4 text-velmora-warm-gray">
            Discover jewelry crafted for everyday elegance
          </p>
        </div>

        {/* Mobile Filter Bar */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                {selectedCategories.length + selectedPrices.length}
              </span>
            )}
          </button>

          {/* Mobile Sort */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm font-medium"
            >
              Sort by
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lifted rounded-md py-2 min-w-[180px] z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-velmora-cream transition-colors ${
                      sortBy === option.value ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Sort & Results */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-warm-gray">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="relative">
                <label className="text-sm text-velmora-warm-gray mr-2">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-medium bg-transparent border-none focus:outline-none cursor-pointer appearance-none pr-6"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-velmora-warm-gray" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-warm-gray mb-4">No products match your filters</p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-velmora-warm-gray mb-4">No products match your filters</p>
              <button onClick={clearFilters} className="btn-secondary">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-cream md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-border">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <FilterContent />
            </div>
            <div className="p-6 border-t border-velmora-border">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="btn-primary w-full"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
