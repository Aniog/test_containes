import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Reveal from '@/components/Reveal';

const PRICE_RANGES = [
  { id: 'all', label: 'All prices', test: () => true },
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
];

const MATERIALS = [
  { id: 'all', label: 'All finishes' },
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Silver Tone' },
];

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'name', label: 'Name A–Z' },
];

function FilterGroup({ title, children }) {
  return (
    <div className="border-b border-espresso/10 py-6">
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-espresso">
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function RadioRow({ name, checked, onChange, label, count }) {
  return (
    <label className="group flex cursor-pointer items-center justify-between gap-2">
      <span className="flex items-center gap-2.5">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          className="h-3.5 w-3.5 appearance-none rounded-full border border-espresso/30 checked:border-[4px] checked:border-gold"
        />
        <span
          className={`text-sm transition-colors ${
            checked ? 'text-espresso' : 'text-taupe group-hover:text-espresso'
          }`}
        >
          {label}
        </span>
      </span>
      {typeof count === 'number' && (
        <span className="text-xs text-taupe">{count}</span>
      )}
    </label>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const [price, setPrice] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const setCategory = (id) => {
    if (id === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: id }, { replace: true });
    }
  };

  const filtered = useMemo(() => {
    const priceRange = PRICE_RANGES.find((r) => r.id === price) || PRICE_RANGES[0];
    let list = ALL_PRODUCTS.filter((p) => {
      const categoryOk = category === 'all' || p.category === category;
      const priceOk = priceRange.test(p);
      // All seed pieces are 18k gold; silver tone is a finish option at PDP level.
      const materialOk = material === 'all' || p.material === material || material === 'silver';
      return categoryOk && priceOk && materialOk;
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
      case 'name':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [category, price, material, sort]);

  const activeCategory = CATEGORIES.find((c) => c.id === category);

  const filters = (
    <>
      <FilterGroup title="Category">
        <RadioRow
          name="category"
          checked={category === 'all'}
          onChange={() => setCategory('all')}
          label="All Jewelry"
          count={ALL_PRODUCTS.length}
        />
        {CATEGORIES.map((c) => (
          <RadioRow
            key={c.id}
            name="category"
            checked={category === c.id}
            onChange={() => setCategory(c.id)}
            label={c.label}
            count={ALL_PRODUCTS.filter((p) => p.category === c.id).length}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {PRICE_RANGES.map((r) => (
          <RadioRow
            key={r.id}
            name="price"
            checked={price === r.id}
            onChange={() => setPrice(r.id)}
            label={r.label}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {MATERIALS.map((m) => (
          <RadioRow
            key={m.id}
            name="material"
            checked={material === m.id}
            onChange={() => setMaterial(m.id)}
            label={m.label}
          />
        ))}
      </FilterGroup>
    </>
  );

  return (
    <div className="pt-16 md:pt-20">
      {/* Page header */}
      <div className="border-b border-espresso/10 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-espresso md:text-6xl">
            {activeCategory ? activeCategory.label : 'Shop All'}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-taupe">
            Demi-fine pieces in 18k gold — hypoallergenic, nickel-free, and made
            to be worn every day.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-espresso/10 py-4">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:text-gold-deep lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
            Filters
          </button>
          <p className="hidden text-xs text-taupe lg:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="appearance-none border border-espresso/20 bg-cream py-2.5 pl-4 pr-10 text-xs text-espresso focus:border-gold focus:outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe" strokeWidth={1.5} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filters}</div>
          </aside>

          {/* Grid */}
          <div className="py-8 md:py-12">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center py-20 text-center">
                <p className="font-serif text-3xl text-espresso">No pieces found</p>
                <p className="mt-2 text-sm text-taupe">
                  Try widening your filters to see more of the collection.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('all');
                    setPrice('all');
                    setMaterial('all');
                  }}
                  className="mt-6 border border-espresso/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-espresso hover:text-cream"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 xl:grid-cols-3">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={Math.min(i, 5) * 60}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${filtersOpen ? '' : 'pointer-events-none'}`}>
        <div
          onClick={() => setFiltersOpen(false)}
          className={`absolute inset-0 bg-espresso/40 transition-opacity duration-300 ${
            filtersOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-cream px-6 pb-10 pt-6 transition-transform duration-500 ease-out ${
            filtersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="font-serif text-2xl text-espresso">Filters</p>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="text-espresso"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          {filters}
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-8 w-full bg-gold py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold-deep"
          >
            Show {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
          </button>
        </aside>
      </div>
    </div>
  );
}
