import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    urlCategory ? [urlCategory] : []
  );
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlCategory]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrice) {
      list = list.filter(
        (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max
      );
    }

    if (selectedMaterial) {
      list = list.filter((p) => p.material === selectedMaterial);
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategories, selectedPrice, selectedMaterial, sortBy]);

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice(null);
    setSelectedMaterial('');
    setSearchParams({});
  };

  const activeFiltersCount =
    selectedCategories.length +
    (selectedPrice ? 1 : 0) +
    (selectedMaterial ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-xs font-semibold tracking-widest uppercase text-ink-900 mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-cream-300 text-gold-600 focus:ring-gold-500"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              <span className="text-sm text-ink-700">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold tracking-widest uppercase text-ink-900 mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                className="h-4 w-4 border-cream-300 text-gold-600 focus:ring-gold-500"
                checked={selectedPrice === range}
                onChange={() => setSelectedPrice(range)}
              />
              <span className="text-sm text-ink-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold tracking-widest uppercase text-ink-900 mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {['gold-plated', 'silver-plated'].map((mat) => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                className="h-4 w-4 border-cream-300 text-gold-600 focus:ring-gold-500"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
              />
              <span className="text-sm text-ink-700 capitalize">{mat.replace('-', ' ')}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              className="h-4 w-4 border-cream-300 text-gold-600 focus:ring-gold-500"
              checked={selectedMaterial === ''}
              onChange={() => setSelectedMaterial('')}
            />
            <span className="text-sm text-ink-700">All materials</span>
          </label>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs font-medium tracking-wider uppercase text-ink-500 hover:text-ink-900 underline underline-offset-4 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 sm:pt-24 pb-14 sm:pb-20 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-900">
            Shop All Jewelry
          </h1>
          <p className="mt-2 text-sm text-ink-500">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Sidebar filters desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-ink-800"
              >
                <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-600 text-[10px] text-white">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen((s) => !s)}
                  className="flex items-center gap-2 text-sm text-ink-700 border border-cream-300 rounded-sm px-3 py-2 bg-white"
                >
                  {sortOptions.find((o) => o.value === sortBy)?.label}
                  <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 mt-1 w-48 rounded-sm border border-cream-200 bg-white shadow-lg z-10">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setSortOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          sortBy === opt.value
                            ? 'bg-cream-100 text-ink-900 font-medium'
                            : 'text-ink-700 hover:bg-cream-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Active filter chips */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3 py-1 text-xs text-ink-700"
                  >
                    {categories.find((c) => c.id === cat)?.label}
                    <button onClick={() => toggleCategory(cat)} aria-label="Remove filter">
                      <X className="w-3 h-3" strokeWidth={2} />
                    </button>
                  </span>
                ))}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3 py-1 text-xs text-ink-700">
                    {selectedPrice.label}
                    <button onClick={() => setSelectedPrice(null)} aria-label="Remove filter">
                      <X className="w-3 h-3" strokeWidth={2} />
                    </button>
                  </span>
                )}
                {selectedMaterial && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cream-300 bg-white px-3 py-1 text-xs text-ink-700 capitalize">
                    {selectedMaterial.replace('-', ' ')}
                    <button onClick={() => setSelectedMaterial('')} aria-label="Remove filter">
                      <X className="w-3 h-3" strokeWidth={2} />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-ink-500 text-sm">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-sm text-gold-700 underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-cream-50 shadow-xl transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-cream-200">
            <span className="text-sm font-semibold tracking-widest uppercase text-ink-900">
              Filters
            </span>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 text-ink-800"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="p-5 overflow-y-auto h-[calc(100%-4rem)]">
            <FilterContent />
          </div>
        </div>
      </div>
    </div>
  );
}
