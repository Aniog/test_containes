import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../product/ProductCard';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: '$80 - $100', min: 80, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Get filter values from URL
  const selectedCategory = searchParams.get('category') || '';
  const selectedPriceRange = searchParams.get('price') || '';
  const selectedMaterial = searchParams.get('material') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory && product.category !== selectedCategory) return false;
      if (selectedPriceRange) {
        const range = priceRanges.find((r) => r.label === selectedPriceRange);
        if (range && (product.price < range.min || product.price >= range.max)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.bestseller ? 1 : -1;
      }
    });

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedPriceRange || selectedMaterial;

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--color-taupe)' }}>
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => updateFilter('category', cat.id === selectedCategory ? '' : cat.id)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                  selectedCategory === cat.id ? 'border-transparent' : ''
                }`}
                style={{
                  borderColor: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'var(--color-champagne)',
                  backgroundColor: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'transparent',
                }}
              >
                {selectedCategory === cat.id && (
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-cream)' }} />
                )}
              </span>
              <span
                className="text-sm transition-colors group-hover:opacity-70"
                style={{ color: 'var(--color-espresso)' }}
              >
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--color-taupe)' }}>
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === range.label}
                onChange={() => updateFilter('price', range.label === selectedPriceRange ? '' : range.label)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors`}
                style={{
                  borderColor: selectedPriceRange === range.label ? 'var(--color-charcoal)' : 'var(--color-champagne)',
                  backgroundColor: selectedPriceRange === range.label ? 'var(--color-charcoal)' : 'transparent',
                }}
              >
                {selectedPriceRange === range.label && (
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-cream)' }} />
                )}
              </span>
              <span
                className="text-sm transition-colors group-hover:opacity-70"
                style={{ color: 'var(--color-espresso)' }}
              >
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
          className="text-xs underline transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-taupe)' }}
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div
        className="py-12 md:py-16 text-center"
        style={{ backgroundColor: 'var(--color-ivory)' }}
      >
        <h1
          className="font-serif text-3xl md:text-4xl mb-2"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
        >
          {selectedCategory
            ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
            : 'Shop All'}
        </h1>
        <p className="text-sm" style={{ color: 'var(--color-taupe)' }}>
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: 'var(--color-champagne)' }}>
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm md:hidden"
            style={{ color: 'var(--color-espresso)' }}
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop Filter */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Sort Dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--color-espresso)' }}
            >
              Sort: <span className="font-medium">{sortOptions.find((o) => o.value === sortBy)?.label}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isSortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsSortOpen(false)}
                />
                <div
                  className="absolute right-0 top-full mt-2 py-2 w-48 shadow-lg z-20"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateFilter('sort', option.value);
                        setIsSortOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left transition-colors hover:opacity-70 ${
                        sortBy === option.value ? 'font-medium' : ''
                      }`}
                      style={{ color: 'var(--color-espresso)' }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="mb-4" style={{ color: 'var(--color-taupe)' }}>
              No products match your filters.
            </p>
            <button onClick={clearFilters} className="btn-outline">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            onClick={() => setIsFilterOpen(false)}
          />
          <div
            className="fixed inset-y-0 left-0 z-50 w-80 max-w-full overflow-y-auto"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ borderColor: 'var(--color-champagne)' }}
            >
              <h2 className="font-serif text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                Filters
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" style={{ color: 'var(--color-espresso)' }} />
              </button>
            </div>
            <div className="p-6">
              <FilterSidebar />
            </div>
          </div>
        </>
      )}
    </div>
  );
}