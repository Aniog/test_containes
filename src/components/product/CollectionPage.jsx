import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '../home/ProductCard';
import { products } from '../../data/products';

const categories = [
  { id: 'all', name: 'All Jewelry' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
];

const materials = [
  { id: 'gold-plated', name: 'Gold Plated' },
  { id: 'silver-plated', name: 'Silver Plated' },
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

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory !== 'all') {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      const priceRange = priceRanges.find((p) => p.id === selectedPrice);
      if (priceRange && (product.price < priceRange.min || product.price > priceRange.max)) {
        return false;
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
          return b.id.localeCompare(a.id);
        default:
          return 0;
      }
    });

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPrice !== 'all',
    selectedMaterial !== 'all',
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="bg-ivory-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title text-center mb-3">Our Collection</h1>
          <p className="text-charcoal-500 text-center">
            Discover timeless pieces crafted for everyday elegance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between py-6 border-b border-charcoal-100">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm tracking-wide"
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-warmblack text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Results Count */}
          <p className="text-sm text-charcoal-500 hidden lg:block">
            Showing {filteredProducts.length} products
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm tracking-wide hover:text-warmblack transition-colors"
            >
              Sort by: <span className="font-medium">{sortOptions.find(s => s.id === sortBy)?.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-charcoal-100 shadow-lg z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSortBy(option.id);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-charcoal-50 transition-colors ${
                      sortBy === option.id ? 'text-warmblack font-medium' : 'text-charcoal-600'
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10 py-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm tracking-extra-wide uppercase font-medium">Filters</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-extra-wide uppercase text-charcoal-500 mb-4">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedCategory === category.id
                            ? 'border-warmblack bg-warmblack'
                            : 'border-charcoal-300 group-hover:border-charcoal-400'
                        }`}
                      >
                        {selectedCategory === category.id && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </span>
                      <span className={`text-sm ${
                        selectedCategory === category.id ? 'text-warmblack font-medium' : 'text-charcoal-600'
                      }`}>
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-extra-wide uppercase text-charcoal-500 mb-4">
                  Price
                </h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === range.id}
                        onChange={() => setSelectedPrice(range.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedPrice === range.id
                            ? 'border-warmblack bg-warmblack'
                            : 'border-charcoal-300 group-hover:border-charcoal-400'
                        }`}
                      >
                        {selectedPrice === range.id && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </span>
                      <span className={`text-sm ${
                        selectedPrice === range.id ? 'text-warmblack font-medium' : 'text-charcoal-600'
                      }`}>
                        {range.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h4 className="text-xs tracking-extra-wide uppercase text-charcoal-500 mb-4">
                  Material
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        selectedMaterial === 'all'
                          ? 'border-warmblack bg-warmblack'
                          : 'border-charcoal-300 group-hover:border-charcoal-400'
                      }`}
                    >
                      {selectedMaterial === 'all' && (
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </span>
                    <span className={`text-sm ${
                      selectedMaterial === 'all' ? 'text-warmblack font-medium' : 'text-charcoal-600'
                    }`}>
                      All Materials
                    </span>
                  </label>
                  {materials.map((material) => (
                    <label key={material.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === material.id}
                        onChange={() => setSelectedMaterial(material.id)}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedMaterial === material.id
                            ? 'border-warmblack bg-warmblack'
                            : 'border-charcoal-300 group-hover:border-charcoal-400'
                        }`}
                      >
                        {selectedMaterial === material.id && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </span>
                      <span className={`text-sm ${
                        selectedMaterial === material.id ? 'text-warmblack font-medium' : 'text-charcoal-600'
                      }`}>
                        {material.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-charcoal-500 mb-4">No products match your filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-warmblack/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-ivory-100 overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-charcoal-100">
              <h3 className="text-sm tracking-extra-wide uppercase font-medium">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-charcoal-50 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-extra-wide uppercase text-charcoal-500 mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="sr-only"
                      />
                      <span className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedCategory === category.id
                          ? 'border-warmblack bg-warmblack'
                          : 'border-charcoal-300'
                      }`}>
                        {selectedCategory === category.id && (
                          <span className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </span>
                      <span className={`text-sm ${
                        selectedCategory === category.id ? 'text-warmblack font-medium' : 'text-charcoal-600'
                      }`}>
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-xs tracking-extra-wide uppercase text-charcoal-500 mb-4">
                  Price
                </h4>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={selectedPrice === range.id}
                        onChange={() => setSelectedPrice(range.id)}
                        className="sr-only"
                      />
                      <span className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedPrice === range.id
                          ? 'border-warmblack bg-warmblack'
                          : 'border-charcoal-300'
                      }`}>
                        {selectedPrice === range.id && (
                          <span className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </span>
                      <span className={`text-sm ${
                        selectedPrice === range.id ? 'text-warmblack font-medium' : 'text-charcoal-600'
                      }`}>
                        {range.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 p-6 bg-ivory-100 border-t border-charcoal-100">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full btn-primary"
              >
                View {filteredProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
