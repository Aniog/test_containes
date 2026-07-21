import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (categoryParam !== 'all') {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [categoryParam, sort]);

  const setCategory = (value) => {
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="pt-24 md:pt-28">
      <div className="container-editorial">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="section-title">Shop</h1>
            <p className="mt-2 text-sm text-brand-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-brand-line bg-brand-surface px-4 py-2 pr-8 text-xs font-semibold uppercase tracking-widest text-brand- outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-10">
          <aside className={`md:block ${filtersOpen ? 'block' : 'hidden'}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => setCategory('all')}
                      className={`text-sm ${categoryParam === 'all' ? 'font-semibold text-brand-ink' : 'text-brand-muted hover:text-brand-ink'}`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => setCategory(category.id)}
                        className={`text-sm ${categoryParam === category.id ? 'font-semibold text-brand-ink' : 'text-brand-muted hover:text-brand-ink'}`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Price</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                  <li>Under $50</li>
                  <li>$50 - $80</li>
                  <li>$80 - $120</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Material</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                  <li>18K Gold Plated</li>
                  <li>Silver Tone</li>
                </ul>
              </div>
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-sm text-brand-muted">No pieces match your filters.</p>
                <button type="button" onClick={() => setCategory('all')} className="btn-outline mt-4">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
