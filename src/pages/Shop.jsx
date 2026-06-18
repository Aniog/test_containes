import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { clsx } from 'clsx';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { useStrkImages } from '@/lib/useStrkImages';

const CATEGORY_OPTIONS = [
  { id: 'all', label: 'All Jewelry' },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
  { id: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { id: 'all', label: 'All prices', test: () => true },
  { id: '0-50', label: 'Under $50', test: (p) => p < 50 },
  { id: '50-80', label: '$50 – $80', test: (p) => p >= 50 && p < 80 },
  { id: '80+', label: '$80 and over', test: (p) => p >= 80 },
];

const MATERIAL_OPTIONS = [
  { id: 'all', label: 'All materials' },
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Silver' },
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'rating', label: 'Top rated' },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(params.get('category') || 'all');
  const [price, setPrice] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync URL with category
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category && category !== 'all') {
      next.set('category', category);
    } else {
      next.delete('category');
    }
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // If URL category changes externally
  useEffect(() => {
    const cat = params.get('category') || 'all';
    if (cat !== category) setCategory(cat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      const range = PRICE_RANGES.find((r) => r.id === price);
      if (range && !range.test(p.price)) return false;
      if (material !== 'all') {
        if (!p.variants.some((v) => v.id === material)) return false;
      }
      return true;
    });
    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        list = [...list].sort(
          (a, b) => Number(b.bestseller) - Number(a.bestseller),
        );
    }
    return list;
  }, [category, price, material, sort]);

  useStrkImages(containerRef, [filtered.length, category]);

  const heading =
    category === 'all'
      ? 'The Collection'
      : CATEGORY_OPTIONS.find((c) => c.id === category)?.label || 'Shop';

  function clearAll() {
    setCategory('all');
    setPrice('all');
    setMaterial('all');
    setSort('featured');
  }

  const activeFilterCount =
    (category !== 'all' ? 1 : 0) +
    (price !== 'all' ? 1 : 0) +
    (material !== 'all' ? 1 : 0);

  return (
    <Layout>
      <div ref={containerRef} className="bg-porcelain">
        {/* Header */}
        <section className="border-b border-hairline">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-20 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
              Shop
            </p>
            <h1 className="mt-3 font-serif font-light text-espresso text-4xl md:text-6xl lg:text-7xl">
              {heading}
            </h1>
            <p className="mt-5 text-base text-mute max-w-xl mx-auto font-sans leading-relaxed">
              Hand-finished demi-fine jewelry, in 18K gold-plated brass — made
              to be worn every day, kept for a lifetime.
            </p>
          </div>
        </section>

        {/* Toolbar */}
        <section className="border-b border-hairline bg-porcelain sticky top-16 md:top-20 z-20">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso font-sans"
              >
                <SlidersHorizontal size={14} strokeWidth={1.4} />
                Filter
                {activeFilterCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold text-cream text-[10px] font-sans">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <span className="hidden lg:inline-block text-[11px] uppercase tracking-[0.25em] text-mute font-sans">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </span>
            </div>

            <SortDropdown value={sort} onChange={setSort} />
          </div>
        </section>

        {/* Body */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <FilterGroup
                title="Category"
                options={CATEGORY_OPTIONS}
                value={category}
                onChange={setCategory}
              />
              <FilterGroup
                title="Price"
                options={PRICE_RANGES}
                value={price}
                onChange={setPrice}
              />
              <FilterGroup
                title="Material"
                options={MATERIAL_OPTIONS}
                value={material}
                onChange={setMaterial}
              />
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-4 text-[11px] uppercase tracking-[0.25em] text-mute hover:text-gold transition-colors font-sans border-b border-hairline pb-1"
                >
                  Clear all
                </button>
              )}
            </aside>

            {/* Grid */}
            <div className="lg:col-span-9">
              <p className="lg:hidden text-[11px] uppercase tracking-[0.25em] text-mute font-sans mb-6">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-3xl text-espresso">
                    No pieces match those filters.
                  </p>
                  <button
                    onClick={clearAll}
                    className="mt-6 text-[11px] uppercase tracking-[0.25em] text-gold hover:text-gold-deep transition-colors font-sans border-b border-gold pb-1"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12 md:gap-x-6 md:gap-y-14">
                  {filtered.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-espresso/60"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-[88%] max-w-sm bg-porcelain shadow-xl flex flex-col animate-fadeIn">
              <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
                <p className="text-[11px] uppercase tracking-[0.3em] text-espresso font-sans">
                  Filter
                </p>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Close filters"
                  className="text-espresso hover:text-gold"
                >
                  <X size={20} strokeWidth={1.4} />
                </button>
              </header>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <FilterGroup
                  title="Category"
                  options={CATEGORY_OPTIONS}
                  value={category}
                  onChange={setCategory}
                />
                <FilterGroup
                  title="Price"
                  options={PRICE_RANGES}
                  value={price}
                  onChange={setPrice}
                />
                <FilterGroup
                  title="Material"
                  options={MATERIAL_OPTIONS}
                  value={material}
                  onChange={setMaterial}
                />
              </div>
              <footer className="border-t border-hairline px-6 py-4 flex items-center gap-3">
                <button
                  onClick={clearAll}
                  className="flex-1 py-3 text-[11px] uppercase tracking-[0.25em] text-espresso border border-hairline hover:border-espresso transition-colors font-sans"
                >
                  Clear
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 py-3 text-[11px] uppercase tracking-[0.25em] text-cream bg-espresso hover:bg-gold transition-colors font-sans"
                >
                  Show {filtered.length}
                </button>
              </footer>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mb-8 pb-6 border-b border-hairline last:border-b-0">
      <h4 className="text-[11px] uppercase tracking-[0.3em] text-espresso font-sans mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {options.map((opt) => {
          const active = opt.id === value;
          return (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => onChange(opt.id)}
                className={clsx(
                  'flex items-center gap-3 text-sm font-sans transition-colors text-left w-full',
                  active
                    ? 'text-espresso'
                    : 'text-mute hover:text-espresso',
                )}
              >
                <span
                  className={clsx(
                    'inline-block w-3 h-3 rounded-full border transition-all',
                    active
                      ? 'bg-gold border-gold'
                      : 'bg-transparent border-hairline',
                  )}
                />
                {opt.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!ref.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const current = SORT_OPTIONS.find((o) => o.id === value) || SORT_OPTIONS[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-gold transition-colors font-sans"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        Sort: {current.label}
        <ChevronDown
          size={14}
          strokeWidth={1.4}
          className={clsx('transition-transform', open && 'rotate-180')}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-3 min-w-[220px] bg-porcelain border border-hairline shadow-[0_8px_24px_-12px_rgba(31,26,20,0.25)] z-30"
        >
          {SORT_OPTIONS.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(o.id);
                  setOpen(false);
                }}
                className={clsx(
                  'w-full text-left px-4 py-3 text-[11px] uppercase tracking-[0.25em] font-sans transition-colors',
                  o.id === value
                    ? 'text-gold bg-linen/50'
                    : 'text-espresso hover:bg-linen/40 hover:text-gold',
                )}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
