import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products.js';
import ProductCard from '@/components/ui/ProductCard.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver', 'Gold Vermeil'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  const toggle = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label);
          return range && p.price >= range.min && p.price < range.max;
        }),
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    switch (sort) {
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
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const activeFiltersCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterGroup = ({ title, options, selected, onToggle }) => (
    <div className="border-b border-hairline py-5">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-muted">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="h-4 w-4 accent-accent"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const Filters = ({ inDrawer = false }) => (
    <>
      {inDrawer && (
        <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
          <h3 className="font-serif text-xl">Filters</h3>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="p-2 text-muted hover:text-foreground"
            aria-label="Close filters"
          >
            <X size={20} />
          </button>
        </div>
      )}
      <div className={inDrawer ? 'px-6 pb-6' : ''}>
        <FilterGroup
          title="Category"
          options={categories}
          selected={selectedCategories}
          onToggle={(val) => toggle(val, selectedCategories, setSelectedCategories)}
        />
        <FilterGroup
          title="Price"
          options={priceRanges.map((r) => r.label)}
          selected={selectedPrices}
          onToggle={(val) => toggle(val, selectedPrices, setSelectedPrices)}
        />
        <FilterGroup
          title="Material"
          options={materials}
          selected={selectedMaterials}
          onToggle={(val) => toggle(val, selectedMaterials, setSelectedMaterials)}
        />
        {activeFiltersCount > 0 && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategories([]);
              setSelectedPrices([]);
              setSelectedMaterials([]);
            }}
            className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-accent hover:text-accent-hover"
          >
            Clear All
          </button>
        )}
      </div>
    </>
  );

  return (
    <main ref={pageRef} className="min-h-screen bg-background">
      <div className="border-b border-hairline bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end lg:px-8">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">Explore</p>
            <h1 className="font-serif text-4xl font-light md:text-5xl">Shop All</h1>
          </div>
          <p className="text-sm text-muted">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:px-8 lg:py-12">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 flex-shrink-0 lg:block">
          <Filters />
        </aside>

        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-hairline px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground"
          >
            <SlidersHorizontal size={14} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-hairline bg-transparent py-2 pl-4 pr-10 text-xs font-medium uppercase tracking-[0.12em] text-foreground focus:border-accent focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-[90] lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters overlay"
            />
            <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] animate-slideInRight bg-surface shadow-2xl overflow-y-auto">
              <Filters inDrawer />
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          <div className="mb-6 hidden items-center justify-end lg:flex">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border border-hairline bg-transparent py-2 pl-4 pr-10 text-xs font-medium uppercase tracking-[0.12em] text-foreground focus:border-accent focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-serif text-2xl text-foreground">No pieces match your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedPrices([]);
                  setSelectedMaterials([]);
                }}
                className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-accent hover:text-accent-hover"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
