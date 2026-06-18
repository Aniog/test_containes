import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
];

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 — $80', min: 50, max: 80 },
  { id: '80-plus', label: '$80 & Above', min: 80, max: Infinity },
];

const MATERIALS = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'crystal', label: 'With Crystals' },
];

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sync category to URL
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (category && category !== 'all') next.set('category', category);
    else next.delete('category');
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // Update from URL when it changes externally (e.g. nav clicks)
  useEffect(() => {
    const c = searchParams.get('category') || 'all';
    setCategory(c);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== 'all') list = list.filter((p) => p.category === category);

    const range = PRICE_RANGES.find((r) => r.id === price);
    if (range) list = list.filter((p) => p.price >= range.min && p.price < range.max + 0.01);

    if (material === 'crystal')
      list = list.filter((p) => /crystal/i.test(p.material));
    else if (material === 'gold')
      list = list.filter((p) => /gold/i.test(p.material));

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [category, price, material, sort]);

  const FilterGroup = ({ title, options, value, onChange, name }) => (
    <fieldset>
      <legend className="text-xs uppercase tracking-eyebrow text-gold font-medium mb-4">
        {title}
      </legend>
      <ul className="space-y-2.5">
        {options.map((opt) => (
          <li key={opt.id}>
            <label className="flex items-center gap-3 text-sm text-charcoal cursor-pointer hover:text-espresso">
              <input
                type="radio"
                name={name}
                value={opt.id}
                checked={value === opt.id}
                onChange={() => onChange(opt.id)}
                className="accent-espresso"
              />
              {opt.label}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <section className="border-b border-stone-warm/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
          <p className="text-[11px] uppercase tracking-eyebrow text-gold font-medium">
            The Collection
          </p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl lg:text-7xl font-light text-espresso leading-[1.05]">
            Shop All Jewelry
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-charcoal leading-relaxed">
            Heirloom-quality demi-fine gold pieces, designed for every day and every gift.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <div className="border-b border-stone-warm/50 sticky top-16 md:top-20 bg-ivory/95 backdrop-blur z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-espresso"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filters
          </button>
          <p className="hidden md:block text-xs uppercase tracking-eyebrow text-mocha">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-eyebrow text-mocha hidden sm:inline">
              Sort by
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-xs uppercase tracking-eyebrow text-espresso border-b border-espresso pb-1 focus:outline-none cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block md:col-span-3 space-y-10 sticky top-36 self-start">
            <FilterGroup
              title="Category"
              options={CATEGORIES}
              value={category}
              onChange={setCategory}
              name="category"
            />
            <div className="border-t border-stone-warm/60" />
            <FilterGroup
              title="Price"
              options={PRICE_RANGES}
              value={price}
              onChange={setPrice}
              name="price"
            />
            <div className="border-t border-stone-warm/60" />
            <FilterGroup
              title="Material"
              options={MATERIALS}
              value={material}
              onChange={setMaterial}
              name="material"
            />
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-3xl text-espresso">No pieces match these filters.</p>
                <p className="mt-3 text-mocha">Try broadening your selection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-ivory p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl uppercase tracking-editorial">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="space-y-8">
              <FilterGroup
                title="Category"
                options={CATEGORIES}
                value={category}
                onChange={setCategory}
                name="category-m"
              />
              <FilterGroup
                title="Price"
                options={PRICE_RANGES}
                value={price}
                onChange={setPrice}
                name="price-m"
              />
              <FilterGroup
                title="Material"
                options={MATERIALS}
                value={material}
                onChange={setMaterial}
                name="material-m"
              />
            </div>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-10 w-full bg-espresso text-ivory py-4 text-xs uppercase tracking-eyebrow"
            >
              Show {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
