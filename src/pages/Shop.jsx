import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, priceRange, sort]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent">Collection</p>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-brand-ink">Shop</h1>
          </div>
          <button
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-divider px-4 py-2 text-sm font-medium text-brand-ink"
            onClick={() => setMobileFiltersOpen((v) => !v)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="hidden md:block md:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`hover:text-brand-ink transition-colors ${activeCategory === 'all' ? 'text-brand-ink font-medium' : ''}`}
                    >
                      All
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`hover:text-brand-ink transition-colors ${activeCategory === category.id ? 'text-brand-ink font-medium' : ''}`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Price</h3>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={150}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full rounded-md border border-brand-divider bg-brand-surface px-3 py-2 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
                  />
                  <span className="text-brand-muted">—</span>
                  <input
                    type="number"
                    min={0}
                    max={150}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full rounded-md border border-brand-divider bg-brand-surface px-3 py-2 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
                  />
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-brand-muted">{filtered.length} results</p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-full border border-brand-divider bg-brand-surface pl-4 pr-10 py-2 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted pointer-events-none" />
              </div>
            </div>

            {mobileFiltersOpen && (
              <div className="mt-4 rounded-2xl border border-brand-divider bg-brand-surface p-4 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${activeCategory === 'all' ? 'border-brand-ink text-brand-ink' : 'border-brand-divider text-brand-muted'}`}
                    >
                      All
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${activeCategory === category.id ? 'border-brand-ink text-brand-ink' : 'border-brand-divider text-brand-muted'}`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Price</h3>
                  <div className="mt-3 flex items-center gap-3">
                    <input
                      type="number"
                      min={0}
                      max={150}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full rounded-md border border-brand-divider bg-brand-bg px-3 py-2 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
                    />
                    <span className="text-brand-muted">—</span>
                    <input
                      type="number"
                      min={0}
                      max={150}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full rounded-md border border-brand-divider bg-brand-bg px-3 py-2 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 text-center text-sm text-brand-muted">No pieces match your filters.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
