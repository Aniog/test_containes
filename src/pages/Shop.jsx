import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS, CATEGORIES, MATERIALS } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { useReveal } from '@/hooks/useReveal';

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'newest', label: 'Newest' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

const PRICE_FILTERS = [
  { id: 'all', label: 'All prices', test: () => true },
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const [priceFilter, setPriceFilter] = useState('all');
  const [materialFilter, setMaterialFilter] = useState([]);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const imageRef = useRef(null);
  const revealRef = useReveal();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, imageRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceFilter, materialFilter, sort]);

  const setCategory = (id) => {
    if (id === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: id }, { replace: true });
    }
  };

  const toggleMaterial = (material) => {
    setMaterialFilter((current) =>
      current.includes(material)
        ? current.filter((m) => m !== material)
        : [...current, material],
    );
  };

  const results = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== 'all') list = list.filter((p) => p.category === category);
    const priceTest = PRICE_FILTERS.find((f) => f.id === priceFilter)?.test ?? (() => true);
    list = list.filter(priceTest);
    if (materialFilter.length > 0) {
      list = list.filter((p) => materialFilter.every((m) => p.materials.includes(m)));
    }
    switch (sort) {
      case 'newest':
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.rating - a.rating);
        break;
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;
      default:
        list.sort((a, b) => Number(b.bestseller) - Number(a.bestseller) || b.reviews - a.reviews);
    }
    return list;
  }, [category, priceFilter, materialFilter, sort]);

  const activeCategory = CATEGORIES.find((c) => c.id === category);
  const hasActiveFilters = category !== 'all' || priceFilter !== 'all' || materialFilter.length > 0;

  const clearFilters = () => {
    setCategory('all');
    setPriceFilter('all');
    setMaterialFilter([]);
  };

  const filterPanel = (
    <div className="space-y-9">
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink">Category</h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCategory(c.id)}
                className={`w-full text-left text-sm transition-colors duration-200 ${
                  category === c.id ? 'font-semibold text-bronze' : 'text-taupe hover:text-ink'
                }`}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-hairline pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink">Price</h3>
        <ul className="mt-4 space-y-2.5">
          {PRICE_FILTERS.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => setPriceFilter(f.id)}
                className={`flex w-full items-center gap-3 text-left text-sm transition-colors duration-200 ${
                  priceFilter === f.id ? 'font-semibold text-bronze' : 'text-taupe hover:text-ink'
                }`}
              >
                <span
                  className={`h-3 w-3 rounded-full border transition-colors ${
                    priceFilter === f.id ? 'border-bronze bg-bronze' : 'border-hairline'
                  }`}
                  aria-hidden="true"
                />
                {f.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-hairline pt-8">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink">Material</h3>
        <ul className="mt-4 space-y-2.5">
          {MATERIALS.map((m) => {
            const checked = materialFilter.includes(m);
            return (
              <li key={m}>
                <button
                  type="button"
                  onClick={() => toggleMaterial(m)}
                  className={`flex w-full items-center gap-3 text-left text-sm transition-colors duration-200 ${
                    checked ? 'font-semibold text-bronze' : 'text-taupe hover:text-ink'
                  }`}
                >
                  <span
                    className={`flex h-3.5 w-3.5 items-center justify-center border transition-colors ${
                      checked ? 'border-bronze bg-bronze' : 'border-hairline'
                    }`}
                    aria-hidden="true"
                  >
                    {checked && (
                      <svg viewBox="0 0 10 8" className="h-2 w-2 fill-none stroke-ivory" strokeWidth="1.5">
                        <path d="M1 4l2.5 2.5L9 1" />
                      </svg>
                    )}
                  </span>
                  {m}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="border-t border-hairline pt-6 text-[11px] uppercase tracking-[0.25em] text-bronze underline-offset-4 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={imageRef} className="pt-16 md:pt-20">
      {/* Page header */}
      <header className="border-b border-hairline bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl font-light text-ink md:text-6xl">
            {activeCategory?.label ?? 'All Pieces'}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-taupe">
            Demi-fine essentials in 18K gold — hypoallergenic, tarnish-resistant, and made for
            real life. {results.length} {results.length === 1 ? 'piece' : 'pieces'}.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-hairline pb-5">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink hover:text-bronze lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filters
            {hasActiveFilters && <span className="h-1.5 w-1.5 rounded-full bg-bronze" aria-hidden="true" />}
          </button>
          <p className="hidden text-xs tracking-wide text-taupe lg:block">
            Showing {results.length} of {PRODUCTS.length} pieces
          </p>
          <div className="relative">
            <label htmlFor="shop-sort" className="sr-only">
              Sort products
            </label>
            <select
              id="shop-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none border border-hairline bg-ivory py-2.5 pl-4 pr-10 text-xs tracking-wide text-ink outline-none transition-colors focus:border-bronze"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-taupe"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">{filterPanel}</aside>

          {/* Grid */}
          <div ref={revealRef}>
            {results.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {results.map((product, i) => (
                  <div key={product.id} className="reveal">
                    <ProductCard product={product} eager={i < 4} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-20 text-center">
                <p className="font-serif text-2xl font-light italic text-taupe">
                  No pieces match these filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="border border-ink/30 px-8 py-3 text-[11px] uppercase tracking-[0.25em] text-ink transition-all hover:border-ink hover:bg-ink hover:text-ivory"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          filtersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setFiltersOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-ivory px-6 pb-10 pt-6 transition-transform duration-500 ease-out-soft lg:hidden ${
          filtersOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-label="Filters"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">Filters</h2>
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="flex h-9 w-9 items-center justify-center text-ink"
            aria-label="Close filters"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-6">{filterPanel}</div>
        <button
          type="button"
          onClick={() => setFiltersOpen(false)}
          className="mt-8 w-full bg-bronze py-4 text-[11px] uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-bronze-deep"
        >
          View {results.length} {results.length === 1 ? 'piece' : 'pieces'}
        </button>
      </aside>
    </div>
  );
}
