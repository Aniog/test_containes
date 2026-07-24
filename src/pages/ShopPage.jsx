import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS, CATEGORIES, MATERIALS } from '@/data/products';
import { PRICE_BUCKETS } from '@/components/shop/FilterSidebar';
import ProductCard from '@/components/ui/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import SortDropdown, { SORT_OPTIONS } from '@/components/shop/SortDropdown';
import { cn } from '@/lib/utils';

const DEFAULT_FILTERS = {
  categories: [],
  materials: [],
  price: 'all',
};

function useFilters(searchParams, setSearchParams) {
  // hydrate initial filters from URL
  const initial = useMemo(() => {
    const cat = searchParams.get('category');
    return {
      ...DEFAULT_FILTERS,
      categories: cat ? [cat] : [],
    };
  }, []); // intentional: only on mount

  const [filters, setFilters] = useState(initial);

  // keep URL in sync with category changes
  useEffect(() => {
    const catParam = filters.categories.length === 1 ? filters.categories[0] : null;
    const next = new URLSearchParams(searchParams);
    if (catParam) next.set('category', catParam);
    else next.delete('category');
    if (next.toString() !== searchParams.toString()) {
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.categories.join(',')]);

  return [filters, setFilters];
}

function applyFilters(products, filters) {
  return products.filter((p) => {
    if (filters.categories.length > 0 && !filters.categories.includes(p.category)) {
      return false;
    }
    if (filters.materials.length > 0 && !filters.materials.includes(p.material)) {
      return false;
    }
    const bucket = PRICE_BUCKETS.find((b) => b.id === filters.price);
    if (bucket && bucket.id !== 'all') {
      if (p.price < bucket.min || p.price > bucket.max) return false;
    }
    return true;
  });
}

function applySort(products, sort) {
  const arr = [...products];
  switch (sort) {
    case 'price-asc':
      return arr.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return arr.sort((a, b) => b.price - a.price);
    case 'newest':
      return arr.sort((a, b) => (a.id > b.id ? -1 : 1));
    case 'featured':
    default:
      return arr;
  }
}

function countActive(filters) {
  return (
    filters.categories.length +
    filters.materials.length +
    (filters.price !== 'all' ? 1 : 0)
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useFilters(searchParams, setSearchParams);
  const [sort, setSort] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [searchParams, sort]);

  const filtered = useMemo(() => applyFilters(PRODUCTS, filters), [filters]);
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort]);

  const counts = useMemo(() => {
    const byCategory = {};
    for (const p of PRODUCTS) {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
    }
    return { byCategory };
  }, []);

  const activeCount = countActive(filters);
  const heroTitle =
    filters.categories.length === 1
      ? CATEGORIES.find((c) => c.id === filters.categories[0])?.label || 'Shop'
      : 'The Collection';

  return (
    <div ref={containerRef}>
      {/* editorial header */}
      <section className="bg-ivory">
        <div className="container-page pt-12 md:pt-20 pb-10 md:pb-14">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl text-ink-soft">
            {heroTitle}
          </h1>
          <p className="mt-4 text-base text-ink/70 max-w-xl">
            Demi-fine pieces, designed in small batches. Every order arrives in our signature gift-ready packaging.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-page pb-24 md:pb-32">
          <div className="flex items-start md:items-center gap-4 flex-wrap md:flex-nowrap border-t border-hairline pt-6">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden inline-flex items-center gap-2 border border-hairline px-4 py-2.5 text-[11px] uppercase tracking-widest-2 text-ink-soft"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.4} />
              Filter{activeCount > 0 ? ` (${activeCount})` : ''}
            </button>

            {/* active filter chips (desktop shows inline) */}
            <div className="hidden md:flex flex-wrap items-center gap-2 flex-1">
              {filters.categories.map((id) => {
                const c = CATEGORIES.find((x) => x.id === id);
                return (
                  <button
                    key={id}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        categories: filters.categories.filter((x) => x !== id),
                      })
                    }
                    className="inline-flex items-center gap-2 border border-hairline px-3 py-1.5 text-[11px] uppercase tracking-widest-2 text-ink-soft hover:border-ink transition-colors duration-300 ease-editorial"
                  >
                    {c?.label}
                    <X className="w-3 h-3" strokeWidth={1.4} />
                  </button>
                );
              })}
              {filters.materials.map((id) => {
                const m = MATERIALS.find((x) => x.id === id);
                return (
                  <button
                    key={id}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        materials: filters.materials.filter((x) => x !== id),
                      })
                    }
                    className="inline-flex items-center gap-2 border border-hairline px-3 py-1.5 text-[11px] uppercase tracking-widest-2 text-ink-soft hover:border-ink transition-colors duration-300 ease-editorial"
                  >
                    {m?.label}
                    <X className="w-3 h-3" strokeWidth={1.4} />
                  </button>
                );
              })}
              {filters.price !== 'all' && (
                <button
                  onClick={() => setFilters({ ...filters, price: 'all' })}
                  className="inline-flex items-center gap-2 border border-hairline px-3 py-1.5 text-[11px] uppercase tracking-widest-2 text-ink-soft hover:border-ink transition-colors duration-300 ease-editorial"
                >
                  {PRICE_BUCKETS.find((b) => b.id === filters.price)?.label}
                  <X className="w-3 h-3" strokeWidth={1.4} />
                </button>
              )}
            </div>

            <div className="ml-auto">
              <SortDropdown value={sort} onChange={setSort} />
            </div>
          </div>

          <div className="mt-10 flex gap-10 lg:gap-16">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              counts={counts}
              totalActive={activeCount}
              onClear={() => setFilters(DEFAULT_FILTERS)}
              openMobile={mobileFilterOpen}
              onCloseMobile={() => setMobileFilterOpen(false)}
            />

            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase tracking-widest-2 text-muted mb-6">
                {sorted.length} piece{sorted.length === 1 ? '' : 's'}
              </p>

              {sorted.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl text-ink-soft">Nothing matches yet.</p>
                  <p className="mt-2 text-sm text-muted">Try removing a filter.</p>
                  <button
                    type="button"
                    onClick={() => setFilters(DEFAULT_FILTERS)}
                    className="mt-6 btn-outline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {sorted.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
