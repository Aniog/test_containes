import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $70', min: 50, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const MATERIALS = ['18K Gold Plated', 'Freshwater Pearl', 'Rhodium Plated'];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const range = PRICE_RANGES.find((r) => r.label === label);
          return range && p.price >= range.min && p.price < range.max;
        }),
      );
    }

    if (selectedMaterials.length) {
      result = result.filter((p) =>
        selectedMaterials.some((m) => p.material.toLowerCase().includes(m.toLowerCase())),
      );
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSort('featured');
  };

  const activeCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs uppercase tracking-label text-espresso mb-4">Category</h4>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center gap-3 text-sm text-taupe cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggle(cat, selectedCategories, setSelectedCategories)}
                className="accent-accent"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-label text-espresso mb-4">Price</h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex items-center gap-3 text-sm text-taupe cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPrices.includes(range.label)}
                onChange={() => toggle(range.label, selectedPrices, setSelectedPrices)}
                className="accent-accent"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-label text-espresso mb-4">Material</h4>
        <div className="space-y-2">
          {MATERIALS.map((mat) => (
            <label key={mat} className="flex items-center gap-3 text-sm text-taupe cursor-pointer">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggle(mat, selectedMaterials, setSelectedMaterials)}
                className="accent-accent"
              />
              {mat}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-label text-accent mb-3">The Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-espresso font-light">Shop All Jewelry</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm uppercase tracking-label text-espresso">Filters</h3>
                {activeCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs text-taupe hover:text-accent transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-label text-espresso border border-stone px-4 py-2"
            >
              <SlidersHorizontal size={14} /> Filters {activeCount > 0 && `(${activeCount})`}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-sm bg-transparent border border-stone px-3 py-2 text-espresso focus:outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Main grid */}
          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-6 pb-4 border-b border-stone">
              <p className="text-sm text-taupe">
                Showing {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm bg-transparent border border-stone px-3 py-2 text-espresso focus:outline-none"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-espresso mb-3">No pieces found</p>
                <p className="text-taupe mb-6">Try adjusting your filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-6 py-3 bg-espresso text-white text-xs uppercase tracking-label hover:bg-accent transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-espresso/30"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-4/5 max-w-xs bg-cream shadow-xl p-6 flex flex-col animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm uppercase tracking-label text-espresso">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={22} className="text-espresso" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <FilterContent />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full py-3 bg-espresso text-white text-xs uppercase tracking-label hover:bg-accent transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
