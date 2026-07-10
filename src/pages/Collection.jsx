import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

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
  { value: 'rating', label: 'Highest Rated' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  // Get filter values from URL
  const categoryParam = searchParams.get('category');
  const priceParam = searchParams.get('price');
  const sortParam = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || '');
  const [selectedPrice, setSelectedPrice] = useState(priceParam || '');
  const [selectedSort, setSelectedSort] = useState(sortParam);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedPrice) params.set('price', selectedPrice);
    if (selectedSort && selectedSort !== 'featured') params.set('sort', selectedSort);
    setSearchParams(params, { replace: true });
  }, [selectedCategory, selectedPrice, selectedSort, setSearchParams]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (selectedPrice) {
        const range = priceRanges.find((r) => r.label === selectedPrice);
        if (range && (product.price < range.min || product.price >= range.max)) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const activeFilterCount = [selectedCategory, selectedPrice].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice('');
  };

  const getSortLabel = () => {
    const option = sortOptions.find((o) => o.value === selectedSort);
    return option?.label || 'Sort';
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="container-main py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="font-serif text-section text-espresso mb-3">
            {selectedCategory 
              ? categories.find(c => c.id === selectedCategory)?.name || 'Collection'
              : 'All Jewelry'
            }
          </h1>
          <p className="text-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-sm font-medium text-espresso"
          >
            <SlidersHorizontal size={18} />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-sm font-medium text-espresso hover:text-gold transition-colors"
            >
              {getSortLabel()}
              <ChevronDown size={16} className={`transition-transform ${showSort ? 'rotate-180' : ''}`} />
            </button>
            
            {showSort && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowSort(false)} />
                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-sm py-2 min-w-[180px] z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedSort(option.value);
                        setShowSort(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        selectedSort === option.value
                          ? 'text-gold bg-gold/5'
                          : 'text-espresso hover:bg-ivory'
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
      </section>

      {/* Filters + Products */}
      <section className="container-main pb-section">
        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-sans text-sm font-medium text-espresso uppercase tracking-wide mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                      All
                    </span>
                  </label>
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-sans text-sm font-medium text-espresso uppercase tracking-wide mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === ''}
                      onChange={() => setSelectedPrice('')}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                      All Prices
                    </span>
                  </label>
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === range.label}
                        onChange={() => setSelectedPrice(range.label)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-stone hover:text-gold transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Panel */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setShowFilters(false)} />
          )}
          <div
            className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream z-50 transform transition-transform duration-300 ${
              showFilters ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-xl text-espresso">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 -mr-2 text-stone"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm font-medium text-espresso uppercase tracking-wide mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-stone">All</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm text-stone">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm font-medium text-espresso uppercase tracking-wide mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-price"
                      checked={selectedPrice === ''}
                      onChange={() => setSelectedPrice('')}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-stone">All Prices</span>
                  </label>
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={selectedPrice === range.label}
                        onChange={() => setSelectedPrice(range.label)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm text-stone">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    clearFilters();
                    setShowFilters(false);
                  }}
                  className="w-full py-3 border border-taupe text-espresso font-medium text-sm hover:border-gold transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full py-3 bg-gold text-white font-medium text-sm hover:bg-gold-hover transition-colors"
                >
                  View {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-espresso mb-3">No products found</p>
                <p className="text-stone mb-6">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
