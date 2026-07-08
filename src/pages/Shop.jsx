import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [material, setMaterial] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = products.slice();
    if (category !== 'all') list = list.filter((p) => p.category === category);
    if (material !== 'all') list = list.filter((p) => p.material === material);
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, sort, priceRange, material]);

  const updateCategory = (value) => {
    setCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <section className="pt-28 pb-20 bg-brand-bg">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">Collection</p>
            <h1 className="section-title">Shop</h1>
          </div>
          <button onClick={() => setMobileFiltersOpen((v) => !v)} className="md:hidden inline-flex items-center gap-2 text-sm font-medium text-brand-ink">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className={`md:col-span-1 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="rounded-2xl border border-brand-line bg-brand-surface p-6">
              <h3 className="text-sm font-semibold text-brand-ink mb-4">Category</h3>
              <ul className="space-y-3 text-sm text-brand-muted">
                <li><button onClick={() => updateCategory('all')} className={`${category === 'all' ? 'text-brand-ink font-semibold' : 'hover:text-brand-ink'} transition-colors`}>All</button></li>
                {categories.map((c) => (
                  <li key={c.id}><button onClick={() => updateCategory(c.id)} className={`${category === c.id ? 'text-brand-ink font-semibold' : 'hover:text-brand-ink'} transition-colors`}>{c.name}</button></li>
                ))}
              </ul>

              <h3 className="mt-8 text-sm font-semibold text-brand-ink mb-4">Material</h3>
              <ul className="space-y-3 text-sm text-brand-muted">
                <li><button onClick={() => setMaterial('all')} className={`${material === 'all' ? 'text-brand-ink font-semibold' : 'hover:text-brand-ink'} transition-colors`}>All</button></li>
                <li><button onClick={() => setMaterial('gold')} className={`${material === 'gold' ? 'text-brand-ink font-semibold' : 'hover:text-brand-ink'} transition-colors`}>Gold</button></li>
                <li><button onClick={() => setMaterial('silver')} className={`${material === 'silver' ? 'text-brand-ink font-semibold' : 'hover:text-brand-ink'} transition-colors`}>Silver</button></li>
              </ul>

              <h3 className="mt-8 text-sm font-semibold text-brand-ink mb-4">Price</h3>
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <span>${priceRange[0]}</span>
                <span className="h-px flex-1 bg-brand-line" />
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="mt-3 w-full accent-brand-accent"
              />
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p>
              <div className="relative">
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none rounded-full border border-brand-line bg-brand-surface px-4 py-2 pr-10 text-sm text-brand-ink outline-none focus:border-brand-accent">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-brand-line bg-brand-surface p-12 text-center">
                <p className="text-brand-muted">No products match your filters.</p>
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
    </section>
  );
};

export default Shop;
