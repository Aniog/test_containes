import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: 999 },
];

const allCategories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const categoryParam = searchParams.get('category');
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam ? [categoryParam] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (idx) => {
    setSelectedPrices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((idx) => {
          const r = priceRanges[idx];
          return p.price >= r.min && p.price <= r.max;
        })
      );
    }

    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCategories, selectedPrices, sortBy]);

  const activeFilterCount = selectedCategories.length + selectedPrices.length;

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal mb-4">Category</h3>
        <div className="flex flex-col gap-2.5">
          {allCategories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat.id)
                    ? 'bg-charcoal border-charcoal'
                    : 'border-sand group-hover:border-charcoal'
                }`}
                onClick={() => toggleCategory(cat.id)}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg className="w-3 h-3 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal mb-4">Price</h3>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map((range, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                  selectedPrices.includes(idx)
                    ? 'bg-charcoal border-charcoal'
                    : 'border-sand group-hover:border-charcoal'
                }`}
                onClick={() => togglePrice(idx)}
              >
                {selectedPrices.includes(idx) && (
                  <svg className="w-3 h-3 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs font-medium tracking-widest uppercase text-charcoal mb-4">Material</h3>
        <div className="flex flex-col gap-2.5">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((m) => (
            <label key={m} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-4 h-4 border border-sand rounded-sm group-hover:border-charcoal transition-colors" />
              <span className="text-sm text-warmgray group-hover:text-charcoal transition-colors">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs font-medium tracking-widest uppercase text-rose hover:text-charcoal transition-colors text-left"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Shop All Jewelry</h1>
          <p className="mt-2 text-sm text-warmgray">Demi-fine pieces designed to be treasured.</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-sand">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          <p className="hidden md:block text-sm text-warmgray">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm text-charcoal"
            >
              Sort by: <span className="font-medium">{sortOptions.find((s) => s.value === sortBy)?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-sand shadow-lg z-50 py-1">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-parchment transition-colors ${
                        sortBy === opt.value ? 'text-charcoal font-medium' : 'text-warmgray'
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
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-sm text-warmgray mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-charcoal text-cream text-xs font-medium tracking-widest uppercase hover:bg-espresso transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-cream p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}
