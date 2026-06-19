import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  // Get initial filter from URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    // Price filter
    if (selectedPriceRange) {
      if (product.price < selectedPriceRange.min || product.price > selectedPriceRange.max) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id.localeCompare(a.id);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange !== null;

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-sans text-xs font-medium tracking-extra-wide uppercase text-charcoal-800 mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="sr-only"
              />
              <span
                className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(category.id)
                    ? 'bg-charcoal-800 border-charcoal-800'
                    : 'border-charcoal-300 group-hover:border-charcoal-600'
                }`}
              >
                {selectedCategories.includes(category.id) && (
                  <svg className="w-3 h-3 text-cream-50" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
              <span className="font-sans text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
                {category.name}
              </span>
              <span className="font-sans text-xs text-charcoal-400 ml-auto">
                ({category.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-sans text-xs font-medium tracking-extra-wide uppercase text-charcoal-800 mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === range}
                onChange={() =>
                  setSelectedPriceRange(selectedPriceRange === range ? null : range)
                }
                className="sr-only"
              />
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  selectedPriceRange === range
                    ? 'border-charcoal-800'
                    : 'border-charcoal-300 group-hover:border-charcoal-600'
                }`}
              >
                {selectedPriceRange === range && (
                  <span className="w-2 h-2 rounded-full bg-charcoal-800" />
                )}
              </span>
              <span className="font-sans text-sm text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
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
          className="w-full py-3 border border-charcoal-300 font-sans text-xs tracking-wider uppercase text-charcoal-700 hover:bg-charcoal-100 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-cream-100 pt-20">
      {/* Header */}
      <div className="bg-cream-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 mb-3">
            Shop All
          </h1>
          <p className="font-sans text-sm text-charcoal-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <FilterSidebar />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-3 border border-charcoal-300 font-sans text-sm text-charcoal-700 hover:bg-charcoal-100 transition-colors"
            >
              <SlidersHorizontal size={18} />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-charcoal-800 text-cream-50 text-xs rounded-full flex items-center justify-center">
                  {selectedCategories.length + (selectedPriceRange ? 1 : 0)}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          {isMobileFilterOpen && (
            <>
              <div
                className="fixed inset-0 bg-charcoal-900/50 z-50 lg:hidden"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              <div className="fixed inset-y-0 left-0 w-80 bg-cream-100 z-50 lg:hidden overflow-y-auto animate-slide-in-left">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-xl text-charcoal-900">Filters</h2>
                    <button
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="p-2 text-charcoal-600 hover:text-charcoal-900"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <FilterSidebar />
                </div>
                <div className="p-6 border-t border-charcoal-200">
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="w-full py-4 bg-charcoal-800 text-cream-50 font-sans text-xs font-medium tracking-wider uppercase"
                  >
                    Show {filteredProducts.length} Results
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-200">
              <p className="font-sans text-sm text-charcoal-600">
                {hasActiveFilters && `${filteredProducts.length} results`}
              </p>
              <div className="flex items-center gap-4">
                <label className="font-sans text-sm text-charcoal-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-sans text-sm text-charcoal-800 bg-transparent border-none cursor-pointer focus:ring-0"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-700 mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-charcoal-500 mb-6">
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

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.3s ease-out;
        }
      `}</style>
    </main>
  );
};

export default ShopPage;
