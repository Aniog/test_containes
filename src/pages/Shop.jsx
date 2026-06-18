import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const PRICE_RANGES = [
  { id: 'all', label: 'All prices', min: 0, max: Infinity },
  { id: 'under-40', label: 'Under $40', min: 0, max: 40 },
  { id: '40-70', label: '$40 — $70', min: 40, max: 70 },
  { id: '70-plus', label: '$70 & above', min: 70, max: Infinity },
];

const MATERIALS = [
  { id: 'all', label: 'All materials' },
  { id: '18K Gold Plated', label: '18K Gold Plated' },
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'rating', label: 'Top rated' },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-hairline py-6 first:pt-0 last:border-b-0">
      <h3 className="text-xs uppercase tracking-[0.3em] text-ink mb-4">
        {title}
      </h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function RadioRow({ checked, onChange, children }) {
  return (
    <label className="flex items-center gap-3 text-sm text-ink-soft hover:text-ink cursor-pointer">
      <span
        className={`w-3.5 h-3.5 rounded-full border transition-colors ${
          checked
            ? 'border-ink bg-ink'
            : 'border-hairline bg-transparent'
        }`}
      >
        {checked && (
          <span className="block w-1.5 h-1.5 rounded-full bg-cream m-[3px]" />
        )}
      </span>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className={checked ? 'text-ink' : ''}>{children}</span>
    </label>
  );
}

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [category, priceRange, material, sort]);

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === priceRange);
    let list = PRODUCTS.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (material !== 'all' && p.material !== material) return false;
      if (range && (p.price < range.min || p.price > range.max)) return false;
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
      default:
        break;
    }
    return list;
  }, [category, priceRange, material, sort]);

  const setCategoryParam = (id) => {
    setCategory(id);
    const next = new URLSearchParams(searchParams);
    if (id === 'all') next.delete('category');
    else next.set('category', id);
    setSearchParams(next, { replace: true });
  };

  const filterPanel = (
    <div>
      <FilterGroup title="Category">
        <RadioRow
          checked={category === 'all'}
          onChange={() => setCategoryParam('all')}
        >
          All jewelry
        </RadioRow>
        {CATEGORIES.map((c) => (
          <RadioRow
            key={c.id}
            checked={category === c.id}
            onChange={() => setCategoryParam(c.id)}
          >
            {c.label}
          </RadioRow>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow
            key={r.id}
            checked={priceRange === r.id}
            onChange={() => setPriceRange(r.id)}
          >
            {r.label}
          </RadioRow>
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m.id}
            checked={material === m.id}
            onChange={() => setMaterial(m.id)}
          >
            {m.label}
          </RadioRow>
        ))}
      </FilterGroup>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream">
      {/* Header band */}
      <div className="bg-cream-deep border-b border-hairline">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-3">
            The Collection
          </p>
          <h1 className="font-serif font-light text-4xl md:text-6xl text-ink">
            {category === 'all'
              ? 'All jewelry'
              : CATEGORIES.find((c) => c.id === category)?.label || 'Shop'}
          </h1>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto">
            Demi-fine pieces in 18K gold, made in small runs and finished by
            hand.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink border border-hairline px-4 py-2.5"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.4} />
              Filter
            </button>
            <p className="text-xs text-mute tracking-wide">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink border border-hairline px-4 py-2.5"
              aria-expanded={sortOpen}
            >
              Sort: {SORT_OPTIONS.find((s) => s.id === sort)?.label}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  sortOpen ? 'rotate-180' : ''
                }`}
                strokeWidth={1.4}
              />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-cream border border-hairline shadow-[0_4px_24px_rgba(26,23,20,0.08)] z-10 animate-fade">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSort(opt.id);
                      setSortOpen(false);
                    }}
                    className={`block w-full text-left text-xs uppercase tracking-[0.2em] px-4 py-3 hover:bg-cream-deep transition-colors ${
                      sort === opt.id ? 'text-ink font-medium' : 'text-ink-soft'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">{filterPanel}</aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="py-24 text-center text-ink-soft">
                <p className="font-serif text-2xl mb-2">No pieces match.</p>
                <p className="text-sm text-mute">
                  Try adjusting your filters or browse all jewelry.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12 md:gap-x-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute inset-0 bg-ink/40 animate-fade"
          />
          <aside className="absolute top-0 left-0 h-full w-[88%] max-w-sm bg-cream flex flex-col animate-drawer">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-serif text-xl tracking-[0.18em] uppercase">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close"
                className="p-1"
              >
                <X className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{filterPanel}</div>
            <div className="border-t border-hairline p-5">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink text-cream py-4 text-xs tracking-[0.3em] uppercase"
              >
                Show {filtered.length} results
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
