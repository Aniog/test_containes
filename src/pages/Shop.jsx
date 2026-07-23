import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { addItem } = useCart();

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory);
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
    <div className="bg-brand-bg">
      <div className="container-editorial section-padding">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-serif text-4xl text-brand-ink">Shop</h1>
            <p className="mt-2 text-sm text-brand-muted">{filtered.length} pieces</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-xs font-semibold text-brand-ink"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-brand-border bg-white px-4 py-2 text-xs font-semibold text-brand-ink outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between lg:hidden">
                <p className="font-serif text-xl">Filters</p>
                <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 lg:mt-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                      activeCategory === 'all' ? 'bg-brand-ink text-white' : 'border border-brand-border text-brand-ink hover:border-brand-ink'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                        activeCategory === category.id ? 'bg-brand-ink text-white' : 'border border-brand-border text-brand-ink hover:border-brand-ink'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline mt-6" />

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Price</p>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full rounded-lg border border-brand-border px-3 py-2 text-xs outline-none focus:border-brand-accent"
                  />
                  <span className="text-xs text-brand-muted">to</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full rounded-lg border border-brand-border px-3 py-2 text-xs outline-none focus:border-brand-accent"
                  />
                </div>
              </div>
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl bg-white p-10 text-center shadow-soft">
                <p className="font-serif text-xl text-brand-ink">No pieces found</p>
                <p className="mt-2 text-sm text-brand-muted">Try adjusting your filters to discover more.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product) => (
                  <article key={product.id} className="group rounded-2xl bg-white p-3 shadow-soft transition hover:-translate-y-1">
                    <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-xl bg-brand-warm">
                      <img alt={product.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src={product.images[0]} />
                    </Link>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <Link to={`/product/${product.id}`}>
                          <p className="product-name text-sm">{product.name}</p>
                        </Link>
                        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
                      </div>
                      <button
                        onClick={() => addItem(product)}
                        className="rounded-full border border-brand-border px-3 py-1.5 text-xs font-semibold text-brand-ink transition hover:border-brand-accent hover:text-brand-accent"
                      >
                        Add
                      </button>
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

export default Shop;
