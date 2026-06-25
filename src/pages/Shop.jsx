import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { cn } from '@/lib/cn';

const MATERIALS = ['Gold', 'Silver', 'Pearl', 'Crystal'];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'new', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

const PRICE_BUCKETS = [
  { id: 'under-40', label: 'Under $40', test: (p) => p < 40 },
  { id: '40-70', label: '$40 – $70', test: (p) => p >= 40 && p <= 70 },
  { id: 'over-70', label: 'Over $70', test: (p) => p > 70 },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get('cat') || '';

  const [cat, setCat] = useState(initialCat);
  const [price, setPrice] = useState('');
  const [mat, setMat] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    setCat(params.get('cat') || '');
  }, [params]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (cat) list = list.filter((p) => p.categorySlug === cat);
    if (price) {
      const bucket = PRICE_BUCKETS.find((b) => b.id === price);
      if (bucket) list = list.filter((p) => bucket.test(p.price));
    }
    if (mat) {
      list = list.filter((p) =>
        p.materials.some((m) => m.toLowerCase().includes(mat.toLowerCase()))
      );
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'new') list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    return list;
  }, [cat, price, mat, sort]);

  useEffect(() => {
    if (!containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [filtered]);

  const setCatAndUrl = (slug) => {
    setCat(slug);
    if (slug) params.set('cat', slug);
    else params.delete('cat');
    setParams(params, { replace: true });
  };

  const clearAll = () => {
    setCat('');
    setPrice('');
    setMat('');
    params.delete('cat');
    setParams(params, { replace: true });
  };

  const activeCount = [cat, price, mat].filter(Boolean).length;

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-hairline py-6">
      <h4 className="text-[11px] uppercase tracking-[0.3em] text-mocha">{title}</h4>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );

  const RadioRow = ({ checked, onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 text-left text-sm transition-colors',
        checked ? 'text-ink' : 'text-mocha hover:text-ink'
      )}
    >
      <span
        className={cn(
          'inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all',
          checked ? 'border-ink' : 'border-mocha/40'
        )}
      >
        {checked && <span className="h-1.5 w-1.5 rounded-full bg-ink" />}
      </span>
      {children}
    </button>
  );

  const FiltersInner = () => (
    <>
      <FilterGroup title="Category">
        <RadioRow checked={!cat} onClick={() => setCatAndUrl('')}>
          All Jewelry
        </RadioRow>
        {CATEGORIES.map((c) => (
          <RadioRow
            key={c.slug}
            checked={cat === c.slug}
            onClick={() => setCatAndUrl(c.slug)}
          >
            {c.name}
          </RadioRow>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        <RadioRow checked={!price} onClick={() => setPrice('')}>
          All Prices
        </RadioRow>
        {PRICE_BUCKETS.map((b) => (
          <RadioRow
            key={b.id}
            checked={price === b.id}
            onClick={() => setPrice(b.id)}
          >
            {b.label}
          </RadioRow>
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        <RadioRow checked={!mat} onClick={() => setMat('')}>
          All Materials
        </RadioRow>
        {MATERIALS.map((m) => (
          <RadioRow key={m} checked={mat === m} onClick={() => setMat(m)}>
            {m}
          </RadioRow>
        ))}
      </FilterGroup>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-6 text-[11px] uppercase tracking-[0.3em] text-ink underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </>
  );

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Title block */}
      <div className="border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">
            The Collection
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            {cat
              ? CATEGORIES.find((c) => c.slug === cat)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-mocha md:text-base">
            {cat
              ? CATEGORIES.find((c) => c.slug === cat)?.blurb
              : 'Featherweight chains, sculpted cuffs, dome huggies — every piece designed to be worn together, every day.'}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <FiltersInner />
          </aside>

          {/* Main content */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-hairline pb-5">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink lg:hidden"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters {activeCount > 0 && `(${activeCount})`}
              </button>
              <p className="hidden text-[11px] uppercase tracking-[0.3em] text-mocha lg:block">
                {filtered.length} piece{filtered.length === 1 ? '' : 's'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none border-b border-ink/30 bg-transparent py-2 pr-8 text-[11px] uppercase tracking-[0.28em] text-ink focus:border-ink focus:outline-none"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      Sort: {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink"
                />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center py-24 text-center">
                <p className="font-serif text-3xl italic text-ink">
                  Nothing to show — yet.
                </p>
                <p className="mt-3 text-sm text-mocha">
                  Adjust your filters to see more pieces.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-8 border border-ink px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ink hover:bg-ink hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-8">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-cream p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl tracking-[0.25em]">FILTERS</h3>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="text-mocha"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-2">
              <FiltersInner />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-ink py-4 text-[11px] uppercase tracking-[0.3em] text-cream"
            >
              Show {filtered.length} result{filtered.length === 1 ? '' : 's'}
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
