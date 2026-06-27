import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import SortDropdown from '@/components/shop/SortDropdown';

const PRICE_BUCKETS = {
  'under-50': { min: 0, max: 49.99 },
  '50-75': { min: 50, max: 75 },
  '75-100': { min: 75, max: 100 },
  'over-100': { min: 100, max: Infinity },
};

const DEFAULT_FILTERS = { categories: [], materials: [], price: null };

function parseFilters(sp) {
  const cats = sp.get('category');
  const catsArr = cats ? (Array.isArray(cats) ? cats : cats.split(',')) : [];
  return {
    categories: catsArr,
    materials: [],
    price: null,
    sort: sp.get('sort') || 'featured',
    q: sp.get('q') || '',
  };
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const initial = parseFilters(searchParams);

  const [filters, setFilters] = useState({
    categories: initial.categories,
    materials: initial.materials,
    price: initial.price,
  });
  const [sort, setSort] = useState(initial.sort);
  const [query, setQuery] = useState(initial.q);

  // Keep URL in sync
  useEffect(() => {
    const next = new URLSearchParams();
    if (filters.categories.length) next.set('category', filters.categories.join(','));
    if (filters.price) next.set('price', filters.price);
    if (sort && sort !== 'featured') next.set('sort', sort);
    if (query) next.set('q', query);
    setSearchParams(next, { replace: true });
  }, [filters, sort, query, setSearchParams]);

  // If URL changes externally (e.g. nav from homepage), re-derive filters
  useEffect(() => {
    const sp = parseFilters(searchParams);
    setFilters({ categories: sp.categories, materials: sp.materials, price: sp.price });
    setSort(sp.sort);
    setQuery(sp.q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();

    if (filters.categories.length > 0) {
      list = list.filter((p) => filters.categories.includes(p.category));
    }
    if (filters.materials.length > 0) {
      list = list.filter((p) => filters.materials.includes(p.material));
    }
    if (filters.price && PRICE_BUCKETS[filters.price]) {
      const { min, max } = PRICE_BUCKETS[filters.price];
      list = list.filter((p) => p.price >= min && p.price <= max);
    }
    if (query.trim().length > 0) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        list.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
        list.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
        break;
      default:
        // featured — keep original order
        break;
    }
    return list;
  }, [filters, sort, query]);

  const titleCopy = (() => {
    if (query) return `Search: "${query}"`;
    if (filters.categories.length === 1) {
      const cat = CATEGORIES.find((c) => c.id === filters.categories[0]);
      return cat ? cat.plural : 'Shop';
    }
    return 'Shop All';
  })();

  return (
    <section className="bg-cream pt-32 md:pt-36 pb-20 md:pb-28 min-h-[80vh]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="eyebrow mb-4">Shop</p>
          <h1
            id="shop-title"
            className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05]"
          >
            {titleCopy}
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-5 border-b border-hairline">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 border border-hairline px-4 py-2.5 text-sm text-ink"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.25} />
            Filters
            {(filters.categories.length > 0 || filters.materials.length > 0 || filters.price) && (
              <span className="ml-1 w-5 h-5 inline-flex items-center justify-center bg-ink text-cream text-[10px] rounded-full">
                {filters.categories.length + filters.materials.length + (filters.price ? 1 : 0)}
              </span>
            )}
          </button>

          <p className="hidden lg:block text-sm text-muted">
            Showing <span className="text-ink">{filtered.length}</span> of {PRODUCTS.length} pieces
          </p>

          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {/* Body — sidebar + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-3 xl:col-span-3">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              resultCount={filtered.length}
              isOpen={filtersOpen}
              onClose={() => setFiltersOpen(false)}
            />
          </div>

          <div className="lg:col-span-9 xl:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl md:text-3xl text-ink mb-3">
                  Nothing matches just yet
                </p>
                <p className="text-sm text-charcoal mb-8">
                  Try a broader filter, or browse the full collection.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilters(DEFAULT_FILTERS);
                    setQuery('');
                  }}
                  className="btn-outline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-14">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}