import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const priceRanges = [
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
    { id: 'over-100', label: '$100+', min: 100, max: Infinity },
  ];

  const materialOptions = [
    { id: '18K Gold Plated', label: '18K Gold Plated' },
    { id: 'Silver', label: 'Silver' },
  ];

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.id === activePriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  const hasFilters = activeCategory || activePriceRange || activeMaterial;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl text-charcoal-800">Filters</h2>
          <button onClick={() => setMobileFilters(false)} className="p-2">
            <X className="w-5 h-5 text-charcoal-500" />
          </button>
        </div>
      )}

      {/* Category filter */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-charcoal-500 font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block text-sm transition-colors ${
              !activeCategory ? 'text-charcoal-800 font-medium' : 'text-charcoal-400 hover:text-charcoal-600'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id ? 'text-charcoal-800 font-medium' : 'text-charcoal-400 hover:text-charcoal-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <hr className="hairline-divider mb-8" />

      {/* Price filter */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-charcoal-500 font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('price', '')}
            className={`block text-sm transition-colors ${
              !activePriceRange ? 'text-charcoal-800 font-medium' : 'text-charcoal-400 hover:text-charcoal-600'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => updateFilter('price', range.id)}
              className={`block text-sm transition-colors ${
                activePriceRange === range.id ? 'text-charcoal-800 font-medium' : 'text-charcoal-400 hover:text-charcoal-600'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <hr className="hairline-divider mb-8" />

      {/* Material filter */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-charcoal-500 font-medium mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('material', '')}
            className={`block text-sm transition-colors ${
              !activeMaterial ? 'text-charcoal-800 font-medium' : 'text-charcoal-400 hover:text-charcoal-600'
            }`}
          >
            All Materials
          </button>
          {materialOptions.map((mat) => (
            <button
              key={mat.id}
              onClick={() => updateFilter('material', mat.id)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat.id ? 'text-charcoal-800 font-medium' : 'text-charcoal-400 hover:text-charcoal-600'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-wider uppercase text-charcoal-400 hover:text-charcoal-700 transition-colors underline underline-offset-2"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-cream-50 pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800 mb-2">
            {activeCategory
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-sm text-charcoal-400">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Products area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <button
                onClick={() => setMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="tracking-wider uppercase text-xs">Filters</span>
                {hasFilters && (
                  <span className="w-5 h-5 bg-gold-400 text-charcoal-900 text-[10px] font-semibold rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-charcoal-400 tracking-wider uppercase hidden sm:inline">
                  Sort by
                </label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-charcoal-200/50 rounded-sm px-4 py-2 pr-8 text-sm text-charcoal-700 focus:outline-none focus:border-charcoal-300 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Best Rating</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-charcoal-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-charcoal-800 text-cream-50 text-xs tracking-wider rounded-sm">
                    {categories.find((c) => c.id === activeCategory)?.name}
                    <button onClick={() => updateFilter('category', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activePriceRange && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-charcoal-800 text-cream-50 text-xs tracking-wider rounded-sm">
                    {priceRanges.find((r) => r.id === activePriceRange)?.label}
                    <button onClick={() => updateFilter('price', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeMaterial && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-charcoal-800 text-cream-50 text-xs tracking-wider rounded-sm">
                    {activeMaterial}
                    <button onClick={() => updateFilter('material', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index + 20} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal-600 mb-2">
                  No pieces found
                </p>
                <p className="text-sm text-charcoal-400 mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold-500 hover:text-gold-600 tracking-wider uppercase"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-charcoal-900/40 backdrop-blur-sm" onClick={() => setMobileFilters(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-[300px] bg-cream-50 shadow-xl overflow-y-auto animate-slide-in-right">
            <FilterSidebar mobile />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
