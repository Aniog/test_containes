import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const categoryFilters = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { value: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { value: '80-plus', label: '$80+', min: 80, max: Infinity },
];

const materialFilters = [
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activeSubcategory = searchParams.get('subcategory') || '';
  const activeSort = searchParams.get('sort') || 'featured';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activeSubcategory, activePrice, activeMaterial]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeSubcategory) {
      result = result.filter((p) => p.subcategory === activeSubcategory);
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.value === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeSubcategory, activeSort, activePrice, activeMaterial]);

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const hasFilters = activeCategory || activePrice || activeMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-semibold text-warm-800 tracking-widest uppercase mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => updateFilter('category', activeCategory === f.value ? '' : f.value)}
              className={`block text-sm transition-colors ${
                activeCategory === f.value
                  ? 'text-accent font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-semibold text-warm-800 tracking-widest uppercase mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((f) => (
            <button
              key={f.value}
              onClick={() => updateFilter('price', activePrice === f.value ? '' : f.value)}
              className={`block text-sm transition-colors ${
                activePrice === f.value
                  ? 'text-accent font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-semibold text-warm-800 tracking-widest uppercase mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materialFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => updateFilter('material', activeMaterial === f.value ? '' : f.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === f.value
                  ? 'text-accent font-medium'
                  : 'text-warm-600 hover:text-warm-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAllFilters}
          className="text-xs text-warm-500 hover:text-warm-700 underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-wide section-padding py-8 md:py-12">
        <p className="text-xs font-medium text-accent tracking-widest uppercase mb-2">
          Discover
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-900">
          {activeCategory
            ? categoryFilters.find((c) => c.value === activeCategory)?.label || 'Shop'
            : 'Shop All'}
        </h1>
        <p className="mt-3 text-sm text-warm-500">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="container-wide section-padding">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-200">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden flex items-center gap-2 text-sm text-warm-700 hover:text-warm-900 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasFilters && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 text-sm text-warm-700 hover:text-warm-900 transition-colors"
                >
                  Sort: {sortOptions.find((s) => s.value === activeSort)?.label || 'Featured'}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {sortOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 bg-white border border-warm-200 rounded-sm shadow-lg z-20 py-2 w-48">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            updateFilter('sort', opt.value);
                            setSortOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                            activeSort === opt.value
                              ? 'text-accent font-medium bg-warm-50'
                              : 'text-warm-700 hover:bg-warm-50'
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

            {/* Mobile filters panel */}
            {mobileFiltersOpen && (
              <div className="lg:hidden mb-8 p-6 bg-warm-50 border border-warm-200 rounded-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-warm-800 tracking-wider uppercase">
                    Filters
                  </span>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-1 text-warm-500 hover:text-warm-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <FilterContent />
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-500 font-serif text-lg">No products found</p>
                <button
                  onClick={clearAllFilters}
                  className="btn-outline mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}