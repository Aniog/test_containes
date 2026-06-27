import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

const CATEGORY_FILTERS = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
];

const PRICE_FILTERS = [
  { value: 'all', label: 'Any price' },
  { value: '0-40', label: 'Under $40', test: (p) => p < 40 },
  { value: '40-70', label: '$40 – $70', test: (p) => p >= 40 && p < 70 },
  { value: '70-100', label: '$70 – $100', test: (p) => p >= 70 && p < 100 },
  { value: '100+', label: '$100 & up', test: (p) => p >= 100 },
];

const MATERIAL_FILTERS = [
  { value: 'all', label: 'All materials' },
  { value: '18K Gold Plated', label: '18K Gold Plated' },
];

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const category = searchParams.get('category') || 'all';
  const price = searchParams.get('price') || 'all';
  const material = searchParams.get('material') || 'all';
  const sort = searchParams.get('sort') || 'featured';

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all' || value === 'featured') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== 'all') {
      list = list.filter((p) => p.category === category);
    }
    if (price !== 'all') {
      const f = PRICE_FILTERS.find((x) => x.value === price);
      if (f?.test) list = list.filter((p) => f.test(p.price));
    }
    if (material !== 'all') {
      list = list.filter((p) => p.material === material);
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, price, material, sort]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(id);
  }, [filtered.length, category, price, material, sort]);

  const activeCategoryLabel =
    CATEGORY_FILTERS.find((c) => c.value === category)?.label || 'All Jewelry';

  const FilterPanel = ({ inDrawer = false }) => (
    <div className={cn('space-y-10', inDrawer && 'pt-2')}>
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.3em] text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          {CATEGORY_FILTERS.map((c) => (
            <li key={c.value}>
              <button
                type="button"
                onClick={() => updateParam('category', c.value)}
                className={cn(
                  'text-sm transition-colors duration-300',
                  category === c.value
                    ? 'text-ink font-medium border-b border-ink pb-0.5'
                    : 'text-ink-soft hover:text-ink'
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.3em] text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {PRICE_FILTERS.map((p) => (
            <li key={p.value}>
              <button
                type="button"
                onClick={() => updateParam('price', p.value)}
                className={cn(
                  'text-sm transition-colors duration-300',
                  price === p.value
                    ? 'text-ink font-medium border-b border-ink pb-0.5'
                    : 'text-ink-soft hover:text-ink'
                )}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.3em] text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          {MATERIAL_FILTERS.map((m) => (
            <li key={m.value}>
              <button
                type="button"
                onClick={() => updateParam('material', m.value)}
                className={cn(
                  'text-sm transition-colors duration-300',
                  material === m.value
                    ? 'text-ink font-medium border-b border-ink pb-0.5'
                    : 'text-ink-soft hover:text-ink'
                )}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream border-b border-hairline">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-3">
            Shop
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight">
            {activeCategoryLabel}
          </h1>
          <p className="mt-4 text-ink-soft text-sm md:text-base max-w-xl mx-auto">
            Hand-finished demi-fine pieces in 18K gold plate — designed to be worn
            every day and kept forever.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-10 md:py-16">
        {/* Controls bar */}
        <div className="flex items-center justify-between gap-4 mb-8 border-b border-hairline pb-5">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.4} />
            Filters
          </button>

          <p className="hidden lg:block text-xs uppercase tracking-[0.25em] text-ink-soft">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-3 ml-auto">
            <label htmlFor="sort" className="hidden sm:inline text-[11px] uppercase tracking-[0.25em] text-ink-soft">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="bg-transparent border border-hairline text-xs uppercase tracking-[0.2em] py-2 pl-3 pr-8 text-ink focus:border-ink outline-none transition-colors"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink mb-3">No pieces match those filters.</p>
                <p className="text-sm text-ink-soft mb-6">Try adjusting your selection.</p>
                <button
                  type="button"
                  onClick={() => setSearchParams({}, { replace: true })}
                  className="inline-flex items-center bg-ink text-ivory px-7 py-3 text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-deep transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 md:gap-x-6 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[55] lg:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <button
          type="button"
          aria-label="Close filters"
          onClick={() => setMobileFiltersOpen(false)}
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        />
        <aside
          className={cn(
            'absolute top-0 left-0 h-full w-[85%] max-w-sm bg-ivory text-ink flex flex-col transition-transform duration-500',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
            <h2 className="font-serif text-2xl">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close"
              className="p-2"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FilterPanel inDrawer />
          </div>
          <div className="p-6 border-t border-hairline">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-ink text-ivory py-3.5 text-xs tracking-[0.3em] uppercase font-medium hover:bg-gold-deep transition-colors"
            >
              View {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
