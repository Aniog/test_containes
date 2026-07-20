import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const materialOptions = ['gold', 'silver'];
const priceRanges = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100.01, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
    setSearchParams({});
  };

  const toggleMaterial = (m) => {
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedPrice(null);
    setSearchParams({});
  };

  const activeFilterCount =
    selectedCategories.length + selectedMaterials.length + (selectedPrice ? 1 : 0);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max
      );
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedMaterials, selectedPrice, sortBy]);

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-muted mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 text-sm font-sans text-base cursor-pointer"
            >
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat.id)
                    ? 'border-gold bg-gold'
                    : 'border-border'
                }`}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-muted mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 text-sm font-sans text-base cursor-pointer"
            >
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                  selectedPrice?.label === range.label
                    ? 'border-gold'
                    : 'border-border'
                }`}
              >
                {selectedPrice?.label === range.label && (
                  <div className="w-2 h-2 rounded-full bg-gold" />
                )}
              </div>
              <input
                type="radio"
                name="price"
                className="hidden"
                checked={selectedPrice?.label === range.label}
                onChange={() => setSelectedPrice(range)}
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-muted mb-4">
          Material
        </h4>
        <div className="flex flex-col gap-2.5">
          {materialOptions.map((m) => (
            <label
              key={m}
              className="flex items-center gap-3 text-sm font-sans text-base cursor-pointer capitalize"
            >
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedMaterials.includes(m)
                    ? 'border-gold bg-gold'
                    : 'border-border'
                }`}
              >
                {selectedMaterials.includes(m) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={selectedMaterials.includes(m)}
                onChange={() => toggleMaterial(m)}
              />
              {m}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-base mb-2">
            Shop All
          </h1>
          <p className="text-sm font-sans text-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-sans font-medium text-base"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Desktop: filter tags */}
          <div className="hidden md:flex items-center gap-3">
            {activeFilterCount > 0 && (
              <>
                {selectedCategories.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 bg-white border border-border px-3 py-1.5 text-xs font-sans text-base"
                  >
                    {categories.find((x) => x.id === c)?.name || c}
                    <button onClick={() => toggleCategory(c)} aria-label="Remove filter">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedMaterials.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-1.5 bg-white border border-border px-3 py-1.5 text-xs font-sans text-base capitalize"
                  >
                    {m}
                    <button onClick={() => toggleMaterial(m)} aria-label="Remove filter">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 bg-white border border-border px-3 py-1.5 text-xs font-sans text-base">
                    {selectedPrice.label}
                    <button onClick={() => setSelectedPrice(null)} aria-label="Remove filter">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs font-sans text-muted hover:text-base transition-colors underline"
                >
                  Clear all
                </button>
              </>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm font-sans font-medium text-base"
            >
              Sort by: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-border shadow-lg z-20 min-w-[200px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-sans hover:bg-cream transition-colors ${
                      sortBy === opt.value ? 'font-medium text-base' : 'text-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-muted mb-4">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-gold text-white px-6 py-3 text-sm font-sans font-medium tracking-wide uppercase hover:bg-gold-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} showQuickAdd />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-base/40 z-[60] md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-white z-[70] shadow-2xl md:hidden flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h2 className="font-serif text-lg tracking-wide">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-muted" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <FilterContent />
            </div>
            <div className="px-5 py-4 border-t border-border flex items-center gap-3">
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="flex-1 border border-base text-base py-3 text-sm font-sans font-medium tracking-wide uppercase"
              >
                Clear
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 bg-gold text-white py-3 text-sm font-sans font-medium tracking-wide uppercase hover:bg-gold-hover transition-colors"
              >
                Show {filtered.length}
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
