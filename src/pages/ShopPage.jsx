import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { addItem, openCart } = useCart();

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product, 'Gold', 1);
    openCart();
  };

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Collection</p>
            <h1 className="mt-2 font-serif text-3xl font-medium md:text-4xl">Shop</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
                Sort
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full border border-border bg-white px-3 py-2 text-xs outline-none focus:border-ink"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[220px_1fr]">
          <aside
            className={`hidden md:block rounded-2xl border border-border bg-white p-6 ${
              filtersOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Category</h3>
                <div className="mt-3 flex flex-col gap-2">
                  {['All', ...categories].map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`text-left text-sm transition-colors ${
                        activeCategory === category ? 'font-medium text-ink' : 'text-ink-secondary hover:text-ink'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Price</h3>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={150}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full rounded-full border border-border px-3 py-2 text-xs outline-none focus:border-ink"
                  />
                  <span className="text-xs text-ink-muted">to</span>
                  <input
                    type="number"
                    min={0}
                    max={150}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full rounded-full border border-border px-3 py-2 text-xs outline-none focus:border-ink"
                  />
                </div>
              </div>
            </div>
          </aside>

          {filtersOpen && (
            <div className="md:hidden rounded-2xl border border-border bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Filters</h3>
                <button type="button" onClick={() => setFiltersOpen(false)} className="text-ink-secondary">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Category</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['All', ...categories].map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full border px-3 py-1.5 text-xs ${
                          activeCategory === category ? 'border-ink bg-ink text-white' : 'border-border text-ink'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Price</p>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={150}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full rounded-full border border-border px-3 py-2 text-xs outline-none focus:border-ink"
                    />
                    <span className="text-xs text-ink-muted">to</span>
                    <input
                      type="number"
                      min={0}
                      max={150}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full rounded-full border border-border px-3 py-2 text-xs outline-none focus:border-ink"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-white p-10 text-center">
                <p className="text-sm text-ink-secondary">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('All');
                    setPriceRange([0, 150]);
                  }}
                  className="mt-3 text-sm font-medium text-ink underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                  <article key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-[3/4] overflow-hidden bg-surface-warm">
                        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                        {product.badge && (
                          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-base font-medium uppercase tracking-wide text-ink">{product.name}</h3>
                      </Link>
                      <div className="mt-2 flex items-center gap-1 text-accent">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm font-medium">${product.price}</span>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink/90"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </article>
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
