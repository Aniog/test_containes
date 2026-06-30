import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  // Get category from URL
  const urlCategory = searchParams.get('category');

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlCategory]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      // Price filter
      if (selectedPrice !== null) {
        const range = priceRanges[selectedPrice];
        if (product.price < range.min || product.price >= range.max) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        default:
          return b.bestseller ? 1 : -1;
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
    setSelectedPrice(null);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPrice !== null;

  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-cream py-12 lg:py-16">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Shop Our Collection
          </h1>
          <p className="text-warmGray max-w-xl mx-auto">
            Discover our curated selection of premium demi-fine jewelry, 
            crafted with 18K gold plating for timeless elegance.
          </p>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="container-narrow py-8 lg:py-12">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-lightGray">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                {selectedCategories.length + (selectedPrice !== null ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Desktop Filter Pills */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-sm text-warmGray mr-2">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  selectedCategories.includes(cat.id)
                    ? 'bg-warmBlack text-white border-warmBlack'
                    : 'border-lightGray hover:border-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-lightGray rounded-sm px-4 py-2 pr-10 text-sm cursor-pointer hover:border-gold transition-colors focus:outline-none focus:border-gold"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warmGray pointer-events-none" />
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-warmGray">Active filters:</span>
            {selectedCategories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-3 py-1 bg-cream rounded-full text-sm"
              >
                {categories.find((c) => c.id === cat)?.name}
                <button
                  onClick={() => toggleCategory(cat)}
                  className="ml-1 hover:text-gold"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedPrice !== null && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream rounded-full text-sm">
                {priceRanges[selectedPrice].label}
                <button
                  onClick={() => setSelectedPrice(null)}
                  className="ml-1 hover:text-gold"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-warmGray hover:text-gold underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Product Count */}
        <p className="text-sm text-warmGray mb-6">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-warmGray mb-4">No products match your filters.</p>
            <button onClick={clearFilters} className="btn-outline">
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-ivory shadow-elevated overflow-y-auto animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-cream rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs text-warmGray ml-auto">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-medium mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range, index) => (
                    <label
                      key={range.label}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === index}
                        onChange={() => setSelectedPrice(index)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="btn-primary w-full"
              >
                Apply Filters
              </button>

              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                  className="w-full mt-3 py-2 text-sm text-warmGray hover:text-gold"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
