import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedPrice) {
      result = result.filter(
        p => p.price >= selectedPrice.min && p.price < selectedPrice.max
      );
    }

    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPrice ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice(null);
    setSelectedMaterial('all');
    setSortBy('featured');
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-4">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm transition-colors ${
              selectedCategory === 'all'
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-muted hover:text-velmora-base'
            }`}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-4">
          Price
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice(null)}
            className={`block text-sm transition-colors ${
              !selectedPrice
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-muted hover:text-velmora-base'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`block text-sm transition-colors ${
                selectedPrice?.label === range.label
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {['all', 'gold-plated', 'silver-plated'].map(mat => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm transition-colors capitalize ${
                selectedMaterial === mat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-base'
              }`}
            >
              {mat === 'all' ? 'All Materials' : mat.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-velmora-white border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-base mb-3">
            The Collection
          </h1>
          <p className="text-sm text-velmora-muted max-w-md mx-auto">
            Discover our curated selection of demi-fine gold jewelry, designed to be worn, loved, and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm text-velmora-base border border-velmora-border px-3 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            <p className="hidden md:block text-sm text-velmora-muted">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm text-velmora-base border border-velmora-border px-4 py-2"
            >
              Sort by: {sortOptions.find(o => o.value === sortBy)?.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1 bg-velmora-white border border-velmora-border shadow-lg z-20 w-48">
                  {sortOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        sortBy === opt.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-base'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-velmora-cream border border-velmora-border px-3 py-1.5">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1 text-xs bg-velmora-cream border border-velmora-border px-3 py-1.5">
                    {selectedPrice.label}
                    <button onClick={() => setSelectedPrice(null)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedMaterial !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-velmora-cream border border-velmora-border px-3 py-1.5 capitalize">
                    {selectedMaterial.replace('-', ' ')}
                    <button onClick={() => setSelectedMaterial('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-velmora-gold hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-base mb-2">No products found</p>
                <p className="text-sm text-velmora-muted mb-4">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-velmora-white p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-velmora-base">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <div className="mt-8 pt-6 border-t border-velmora-border space-y-3">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-velmora-gold text-white py-3 text-xs font-medium tracking-widest uppercase"
              >
                Show {filtered.length} Results
              </button>
              <button
                onClick={clearFilters}
                className="w-full border border-velmora-border text-velmora-base py-3 text-xs font-medium tracking-widest uppercase"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
