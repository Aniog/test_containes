import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/shop/ProductCard';
import { products, categories, materials } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [material, setMaterial] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.slice();

    if (category !== 'all') list = list.filter((p) => p.category === category);
    if (material !== 'all') list = list.filter((p) => p.material === material);

    if (sort === 'price-asc') list = list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list = list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, material, sort]);

  const updateCategory = (value) => {
    setCategory(value);
    if (value === 'all') searchParams.delete('category');
    else searchParams.set('category', value);
    setSearchParams(searchParams);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-subtitle">Collection</p>
          <h1 className="section-title mt-2">Shop</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-full border border-border bg-white px-4 py-2 pr-8 text-xs font-semibold outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
        <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Category</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {['all', ...categories.map((c) => c.id)].map((value) => (
                <li key={value}>
                  <button
                    type="button"
                    onClick={() => updateCategory(value)}
                    className={`w-full text-left transition-colors ${
                      category === value ? 'text-ink font-medium' : 'hover:text-ink'
                    }`}
                  >
                    {value === 'all' ? 'All' : categories.find((c) => c.id === value)?.label}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink">Material</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {['all', ...materials.map((m) => m.id)].map((value) => (
                <li key={value}>
                  <button
                    type="button"
                    onClick={() => setMaterial(value)}
                    className={`w-full text-left transition-colors ${
                      material === value ? 'text-ink font-medium' : 'hover:text-ink'
                    }`}
                  >
                    {value === 'all' ? 'All Materials' : materials.find((m) => m.id === value)?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="mt-10 text-center text-sm text-muted">No pieces match your filters.</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
