import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');

  // Sync category with URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by price
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 200]);
    setSearchParams({});
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  const hasActiveFilters = selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 200;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl text-espresso-900 mb-4">
            Shop Our Collection
          </h1>
          <p className="text-taupe max-w-lg mx-auto">
            Discover timeless pieces crafted with intention
          </p>
        </div>

        {/* Mobile Filter Bar */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm text-espresso-900"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filter
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm text-espresso-900"
            >
              Sort
              <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
            </button>
            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-elevated rounded-md py-2 z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-cream-100 ${
                      sortBy === option.value ? 'text-gold' : 'text-espresso-900'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-serif text-lg text-espresso-900 mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-taupe mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => handleCategoryChange('all')}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedCategory === 'all'
                          ? 'border-gold'
                          : 'border-border group-hover:border-gold'
                      }`}
                    >
                      {selectedCategory === 'all' && (
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </span>
                    <span className="text-sm text-espresso-900">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedCategory === cat.id
                            ? 'border-gold'
                            : 'border-border group-hover:border-gold'
                        }`}
                      >
                        {selectedCategory === cat.id && (
                          <span className="w-2 h-2 rounded-full bg-gold" />
                        )}
                      </span>
                      <span className="text-sm text-espresso-900">{cat.name}</span>
                      <span className="text-xs text-taupe-light">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-taupe mb-4">
                  Price
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 200}
                      onChange={() => setPriceRange([0, 200])}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        priceRange[0] === 0 && priceRange[1] === 200
                          ? 'border-gold'
                          : 'border-border group-hover:border-gold'
                      }`}
                    >
                      {priceRange[0] === 0 && priceRange[1] === 200 && (
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </span>
                    <span className="text-sm text-espresso-900">All Prices</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 0 && priceRange[1] === 50}
                      onChange={() => setPriceRange([0, 50])}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        priceRange[0] === 0 && priceRange[1] === 50
                          ? 'border-gold'
                          : 'border-border group-hover:border-gold'
                      }`}
                    >
                      {priceRange[0] === 0 && priceRange[1] === 50 && (
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </span>
                    <span className="text-sm text-espresso-900">Under $50</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange[0] === 50 && priceRange[1] === 100}
                      onChange={() => setPriceRange([50, 100])}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        priceRange[0] === 50 && priceRange[1] === 100
                          ? 'border-gold'
                          : 'border-border group-hover:border-gold'
                      }`}
                    >
                      {priceRange[0] === 50 && priceRange[1] === 100 && (
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      )}
                    </span>
                    <span className="text-sm text-espresso-900">$50 - $100</span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-taupe hover:text-gold transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results Count & Sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-taupe">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-espresso-900 pr-6 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe pointer-events-none"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-taupe mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold hover:underline"
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
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream-50 z-50 rounded-t-2xl max-h-[80vh] overflow-y-auto lg:hidden animate-slide-up">
            <div className="sticky top-0 bg-cream-50 border-b border-border px-6 py-4 flex items-center justify-between">
              <h3 className="font-serif text-lg">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-taupe"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-6">
              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-taupe mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === 'all'}
                      onChange={() => handleCategoryChange('all')}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedCategory === 'all' ? 'border-gold' : 'border-border'
                      }`}
                    >
                      {selectedCategory === 'all' && (
                        <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                      )}
                    </span>
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selectedCategory === cat.id ? 'border-gold' : 'border-border'
                        }`}
                      >
                        {selectedCategory === cat.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                        )}
                      </span>
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs text-taupe-light">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-taupe mb-4">
                  Price
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'All Prices', range: [0, 200] },
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $100', range: [50, 100] },
                  ].map((option) => (
                    <label key={option.label} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={priceRange[0] === option.range[0] && priceRange[1] === option.range[1]}
                        onChange={() => setPriceRange(option.range)}
                        className="sr-only"
                      />
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                            ? 'border-gold'
                            : 'border-border'
                        }`}
                      >
                        {priceRange[0] === option.range[0] && priceRange[1] === option.range[1] && (
                          <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                        )}
                      </span>
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                  className="flex-1 py-3 border border-espresso-900 text-espresso-900 text-sm uppercase tracking-wider"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 py-3 bg-gold text-white text-sm uppercase tracking-wider"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
