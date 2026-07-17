import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

const CATEGORY_OPTIONS = [
  { value: '', label: 'All Categories' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const MATERIAL_OPTIONS = [
  { value: '', label: 'All Materials' },
  { value: 'gold', label: 'Gold' },
];

const PRICE_RANGES = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: '100+', label: 'Over $100' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || '';
  const [materialFilter, setMaterialFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [sort, setSort] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }
    if (materialFilter) {
      result = result.filter((p) => p.material === materialFilter);
    }
    if (priceFilter) {
      if (priceFilter === '0-50') result = result.filter((p) => p.price < 50);
      else if (priceFilter === '50-100') result = result.filter((p) => p.price >= 50 && p.price <= 100);
      else if (priceFilter === '100+') result = result.filter((p) => p.price > 100);
    }

    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }

    return result;
  }, [categoryFilter, materialFilter, priceFilter, sort]);

  const updateCategory = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set('category', value);
    else params.delete('category');
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setMaterialFilter('');
    setPriceFilter('');
  };

  const hasFilters = categoryFilter || materialFilter || priceFilter;

  const FilterSection = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-medium text-deep-900 mb-3">Category</h4>
        <div className="space-y-2">
          {CATEGORY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateCategory(opt.value)}
              className={`block text-sm transition-colors ${(categoryFilter || '') === opt.value ? 'text-accent font-medium' : 'text-deep-500 hover:text-deep-900'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-medium text-deep-900 mb-3">Material</h4>
        <div className="space-y-2">
          {MATERIAL_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setMaterialFilter(opt.value)}
              className={`block text-sm transition-colors ${materialFilter === opt.value ? 'text-accent font-medium' : 'text-deep-500 hover:text-deep-900'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-medium text-deep-900 mb-3">Price</h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setPriceFilter(opt.value)}
              className={`block text-sm transition-colors ${priceFilter === opt.value ? 'text-accent font-medium' : 'text-deep-500 hover:text-deep-900'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearAllFilters}
          className="text-xs text-deep-400 hover:text-deep-900 transition-colors flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest3 uppercase text-accent mb-3">Collection</p>
          <h1 className="font-serif text-3xl lg:text-4xl text-deep-900 font-light">
            {categoryFilter ? CATEGORY_OPTIONS.find((c) => c.value === categoryFilter)?.label : 'All Jewelry'}
          </h1>
        </div>

        <div className="flex gap-10 lg:gap-16">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSection />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="btn-primary text-[11px] py-2.5 px-5 tracking-widest shadow-lg flex items-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {hasFilters && (
                <span className="w-5 h-5 rounded-full bg-cream/20 text-[10px] flex items-center justify-center">
                  {[categoryFilter, materialFilter, priceFilter].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-deep-950/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-cream rounded-t-xl p-6 animate-slide-up max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSection />
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="btn-primary w-full mt-8 text-xs tracking-widest"
                >
                  Show Results ({filteredProducts.length})
                </button>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-sand">
              <p className="text-xs text-deep-400">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase font-medium text-deep-900 pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-deep-500 pointer-events-none" />
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
              <div className="text-center py-20">
                <p className="text-deep-400 text-sm">No pieces match your filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 text-xs text-accent hover:text-accent-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
