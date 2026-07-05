import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/home/product-card';
import { products, categories } from '@/data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);

  const filtered = useMemo(() => {
    let list = products.slice();
    if (category !== 'all') list = list.filter((p) => p.category === category);
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, sort, priceRange]);

  const handleCategoryChange = (value) => {
    setCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl text-brand-ink">Shop</h1>
            <p className="mt-2 text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 rounded-full border border-brand-line bg-white pl-4 pr-10 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-brand-muted pointer-events-none" />
            </div>
            <button className="h-10 w-10 rounded-full border border-brand-line flex items-center justify-center text-brand-ink hover:bg-brand-warm">
              <SlidersHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-ink mb-3">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleCategoryChange('all')} className={`text-sm ${category === 'all' ? 'text-brand-accent font-medium' : 'text-brand-muted hover:text-brand-ink'}`}>All</button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button onClick={() => handleCategoryChange(cat.id)} className={`text-sm ${category === cat.id ? 'text-brand-accent font-medium' : 'text-brand-muted hover:text-brand-ink'}`}>{cat.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-brand-ink mb-3">Price</h3>
              <div className="flex items-center gap-2">
                <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} className="h-9 w-full rounded-md border border-brand-line px-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40" />
                <span className="text-brand-muted">—</span>
                <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="h-9 w-full rounded-md border border-brand-line px-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40" />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-brand-muted">No pieces match your filters.</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
