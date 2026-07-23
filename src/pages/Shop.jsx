import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem, openCart } = useCart();

  const filtered = useMemo(() => {
    let result = [...products];
    if (category !== 'All') result = result.filter((p) => p.category === category);
    if (priceRange === 'under50') result = result.filter((p) => p.price < 50);
    if (priceRange === '50to80') result = result.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === 'over80') result = result.filter((p) => p.price > 80);
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
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
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl text-brand-text sm:text-4xl">Shop</h1>
          <p className="mt-1 text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
        </div>
        <button
          className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-brand-textSoft"
          onClick={() => setMobileFiltersOpen((prev) => !prev)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
          <div className="space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-textSoft">Category</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                {['All', ...categories].map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => handleCategoryChange(c)}
                      className={`hover:text-brand-accent ${category === c ? 'text-brand-accent' : ''}`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-textSoft">Price</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                {[
                  { value: 'all', label: 'All prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map((option) => (
                  <li key={option.value}>
                    <button
                      onClick={() => setPriceRange(option.value)}
                      className={`hover:text-brand-accent ${priceRange === option.value ? 'text-brand-accent' : ''}`}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div>
          <div className="flex items-center justify-between border-b border-brand-border pb-4">
            <p className="text-xs uppercase tracking-widest text-brand-muted">
              {category === 'All' ? 'All pieces' : category}
            </p>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent pr-6 text-xs uppercase tracking-widest text-brand-textSoft focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-brand-muted" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {filtered.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative h-64 overflow-hidden rounded-sm bg-brand-surfaceAlt sm:h-72">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-sm uppercase tracking-widest text-brand-text">{product.name}</h3>
                  <p className="text-sm text-brand-muted">${product.price}</p>
                </Link>
                <button
                  onClick={() => {
                    addItem(product, 'gold', 1);
                    openCart();
                  }}
                  className="mt-3 w-full rounded-full border border-brand-border py-2 text-xs uppercase tracking-widest text-brand-text transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center text-sm text-brand-muted">No pieces match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
