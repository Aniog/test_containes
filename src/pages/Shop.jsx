import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  const filtered = useMemo(() => {
    let result = products;
    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [category, sort, priceRange]);

  const handleCategoryChange = (value) => {
    setCategory(value);
    if (value === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="section-title">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
        </div>
        <button className="md:hidden flex items-center gap-2 text-sm font-medium text-brand-ink" onClick={() => setMobileFiltersOpen(true)}>
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <aside className={`${mobileFiltersOpen ? 'fixed inset-0 z-50 bg-white p-6' : 'hidden'} md:block md:static md:bg-transparent md:p-0`}>
          <div className="flex items-center justify-between md:hidden">
            <h2 className="font-serif text-xl">Filters</h2>
            <button onClick={() => setMobileFiltersOpen(false)}>Close</button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Category</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                {['All', ...categories.map((c) => c.name)].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleCategoryChange(item)}
                      className={`${category === item ? 'text-brand-ink font-medium' : 'hover:text-brand-accent'}`}
                    >
                      {item}
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
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full rounded-lg border border-brand-divider px-3 py-2 text-sm"
                />
                <span className="text-brand-muted">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full rounded-lg border border-brand-divider px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-end">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-brand-divider bg-white px-4 py-2 pr-8 text-sm text-brand-ink outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {filtered.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-brand-warm">
                    <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-3">
                    <p className="product-name">{product.name}</p>
                    <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
                  </div>
                </Link>
                <button onClick={() => addItem(product, 'gold')} className="btn-outline mt-3 w-full">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center text-brand-muted">
              <p className="font-serif text-xl">No pieces found</p>
              <p className="mt-2 text-sm">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
