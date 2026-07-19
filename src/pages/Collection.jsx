import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges, materials } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'name', label: 'Name' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('featured');

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategories, selectedPriceRanges, selectedMaterials, selectedSort]);

  const toggleFilter = (value, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId);
          return range && p.price > range.min && p.price <= range.max;
        })
      );
    }

    switch (selectedSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, selectedPriceRanges, selectedSort]);

  const activeFiltersCount =
    selectedCategories.length + selectedPriceRanges.length + selectedMaterials.length;

  const FilterGroup = ({ title, options, selected, setSelected }) => (
    <div className="mb-8">
      <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-ink mb-4">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span
              className={cn(
                'w-4 h-4 border flex items-center justify-center transition-colors',
                selected.includes(option.id)
                  ? 'bg-ink border-ink'
                  : 'border-hairline group-hover:border-ink'
              )}
            >
              {selected.includes(option.id) && (
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
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={selected.includes(option.id)}
              onChange={() => toggleFilter(option.id, selected, setSelected)}
            />
            <span className="text-sm text-warmgray-600 group-hover:text-ink transition-colors">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef}>
      <main className="pt-24 md:pt-28 pb-16 md:pb-24 bg-cream-100 min-h-screen">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
              The Collection
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-medium">
              Shop All Jewelry
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-ink">
                    Filters
                  </h3>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-gold hover:text-gold-dark transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterGroup
                  title="Category"
                  options={categories}
                  selected={selectedCategories}
                  setSelected={setSelectedCategories}
                />
                <FilterGroup
                  title="Price"
                  options={priceRanges}
                  selected={selectedPriceRanges}
                  setSelected={setSelectedPriceRanges}
                />
                <FilterGroup
                  title="Material"
                  options={materials}
                  selected={selectedMaterials}
                  setSelected={setSelectedMaterials}
                />
              </div>
            </aside>

            {/* Mobile filter toggle */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-hairline text-sm font-medium"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ml-1 w-5 h-5 bg-ink text-cream-50 text-[10px] rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-hairline text-sm font-medium"
                >
                  Sort by
                  <ChevronDown size={14} className={cn('transition-transform', sortOpen && 'rotate-180')} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-cream-50 border border-hairline shadow-lg z-20">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSelectedSort(option.id);
                          setSortOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-4 py-2.5 text-sm hover:bg-cream-200 transition-colors',
                          selectedSort === option.id && 'bg-cream-200 font-medium'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product grid */}
            <div className="flex-1">
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-sm text-warmgray-500">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="relative">
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-hairline text-sm font-medium"
                  >
                    {sortOptions.find((o) => o.id === selectedSort)?.label}
                    <ChevronDown size={14} className={cn('transition-transform', sortOpen && 'rotate-180')} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-cream-50 border border-hairline shadow-lg z-20">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSelectedSort(option.id);
                            setSortOpen(false);
                          }}
                          className={cn(
                            'w-full text-left px-4 py-2.5 text-sm hover:bg-cream-200 transition-colors',
                            selectedSort === option.id && 'bg-cream-200 font-medium'
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center border border-hairline bg-cream-50">
                  <p className="font-serif text-2xl">No pieces match your filters</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-6 py-2 bg-ink text-cream-50 text-sm tracking-widest uppercase hover:bg-ink-light transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-cream-50 z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} />
              </button>
            </div>
            <FilterGroup
              title="Category"
              options={categories}
              selected={selectedCategories}
              setSelected={setSelectedCategories}
            />
            <FilterGroup
              title="Price"
              options={priceRanges}
              selected={selectedPriceRanges}
              setSelected={setSelectedPriceRanges}
            />
            <FilterGroup
              title="Material"
              options={materials}
              selected={selectedMaterials}
              setSelected={setSelectedMaterials}
            />
            <button
              onClick={() => {
                clearFilters();
                setMobileFiltersOpen(false);
              }}
              className="w-full py-3 border border-ink text-ink text-sm tracking-widest uppercase hover:bg-ink hover:text-cream-50 transition-colors"
            >
              Clear all
            </button>
          </div>
        </>
      )}
    </div>
  );
}
