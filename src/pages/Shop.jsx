import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Sets' },
];

const priceRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', name: 'Under $50', min: 0, max: 50 },
  { id: '50-75', name: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', name: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', name: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by price
    const priceRange = priceRanges.find((p) => p.id === activePriceRange);
    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For demo, just reverse
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

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
    setSortBy('featured');
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all';

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-[#F5F3EF] py-12 md:py-16">
        <div className="container">
          <h1
            className="text-4xl md:text-5xl text-[#1A1815] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop
          </h1>
          <p className="text-[#6B6560]">
            Discover our collection of demi-fine gold jewelry
          </p>
        </div>
      </div>

      <div className="container py-8">
        {/* Mobile Filter Toggle & Sort */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[#C9A962] rounded-full" />
            )}
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 py-1 text-sm border-b border-[#E8E4DE] focus:border-[#C9A962] focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm tracking-[0.1em] uppercase mb-4">
                Category
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => updateFilter('category', category.id)}
                      className={`text-sm transition-colors duration-300 ${
                        activeCategory === category.id
                          ? 'text-[#C9A962]'
                          : 'text-[#6B6560] hover:text-[#1A1815]'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-sm tracking-[0.1em] uppercase mb-4">
                Price
              </h3>
              <ul className="space-y-3">
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <button
                      onClick={() => updateFilter('price', range.id)}
                      className={`text-sm transition-colors duration-300 ${
                        activePriceRange === range.id
                          ? 'text-[#C9A962]'
                          : 'text-[#6B6560] hover:text-[#1A1815]'
                      }`}
                    >
                      {range.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#6B6560] hover:text-[#C9A962] transition-colors duration-300"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <span className="text-sm text-[#6B6560] mr-4">
                {filteredProducts.length} products
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-1 text-sm border-b border-[#E8E4DE] focus:border-[#C9A962] focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#6B6560] mb-4">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#C9A962] hover:underline"
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

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-[#FAF9F7] shadow-xl transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-[#E8E4DE]">
              <h2 className="text-lg tracking-[0.1em] uppercase">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm tracking-[0.1em] uppercase mb-3">
                  Category
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          updateFilter('category', category.id);
                        }}
                        className={`text-sm transition-colors duration-300 ${
                          activeCategory === category.id
                            ? 'text-[#C9A962]'
                            : 'text-[#6B6560]'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm tracking-[0.1em] uppercase mb-3">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <button
                        onClick={() => {
                          updateFilter('price', range.id);
                        }}
                        className={`text-sm transition-colors duration-300 ${
                          activePriceRange === range.id
                            ? 'text-[#C9A962]'
                            : 'text-[#6B6560]'
                        }`}
                      >
                        {range.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-[#E8E4DE]">
              <div className="flex gap-3">
                <button
                  onClick={clearFilters}
                  className="flex-1 py-3 border border-[#E8E4DE] text-sm tracking-[0.05em] uppercase hover:border-[#C9A962] transition-colors duration-300"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 py-3 bg-[#C9A962] text-white text-sm tracking-[0.05em] uppercase hover:bg-[#B8954F] transition-colors duration-300"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}