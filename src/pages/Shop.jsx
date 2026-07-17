import React, { useState, useMemo } from 'react';
import { products, categories, tones } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTone, setActiveTone] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { addItem, toggleCart } = useCart();

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeTone !== 'All') {
      result = result.filter((p) => p.tone === activeTone);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activeTone, priceRange, sort]);

  const handleAdd = (e, product) => {
    e.preventDefault();
    addItem(product, product.tone);
    toggleCart();
  };

  const clearFilters = () => {
    setActiveCategory('All');
    setActiveTone('All');
    setPriceRange([0, 150]);
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                activeCategory === cat
                  ? 'border-brand-ink bg-brand-ink text-white'
                  : 'border-brand-divider text-brand-ink hover:border-brand-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Tone</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {['All', ...tones].map((tone) => (
            <button
              key={tone}
              type="button"
              onClick={() => setActiveTone(tone)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                activeTone === tone
                  ? 'border-brand-ink bg-brand-ink text-white'
                  : 'border-brand-divider text-brand-ink hover:border-brand-ink'
              }`}
            >
              {tone}
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
            className="w-20 rounded-full border border-brand-divider px-3 py-1.5 text-xs text-brand-ink focus:border-brand-ink focus:outline-none"
          />
          <span className="text-xs text-brand-subtle">to</span>
          <input
            type="number"
            min={0}
            max={150}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-20 rounded-full border border-brand-divider px-3 py-1.5 text-xs text-brand-ink focus:border-brand-ink focus:outline-none"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={clearFilters}
        className="text-xs font-semibold uppercase tracking-widest text-brand-accent hover:text-brand-accentHover transition-colors"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Collection</p>
          <h1 className="section-title mt-2">Shop All</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-brand-divider px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:border-brand-ink transition-colors md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-brand-divider bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink focus:border-brand-ink focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr]">
        <aside className={`${filtersOpen ? 'block' : 'hidden'} md:block`}>
          <div className="md:sticky md:top-28">
            <div className="flex items-center justify-between md:hidden">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-ink">Filters</h2>
              <button type="button" onClick={() => setFiltersOpen(false)} className="p-2 text-brand-ink" aria-label="Close filters">
                <X className="h-5 w-5" />
              </button>
            </div>
            <FilterPanel />
          </div>
        </aside>

        <div>
          <p className="text-xs text-brand-subtle">{filtered.length} product{filtered.length === 1 ? '' : 's'}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group overflow-hidden rounded-2xl bg-brand-warm"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="product-name text-sm">{product.name}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-ink">${product.price}</p>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleAdd(e, product)}
                  className="mx-4 mb-4 rounded-full bg-brand-ink px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-brand-ink/90"
                >
                  Add to Cart
                </button>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-sm text-brand-muted">No products match your filters.</p>
              <button type="button" onClick={clearFilters} className="btn-primary mt-4">Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
