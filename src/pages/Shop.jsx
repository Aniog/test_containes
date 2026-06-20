import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activeMaterial = searchParams.get('material') || '';
  const priceRange = searchParams.get('price') || '';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activeMaterial, priceRange, sort]);

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams({});

  const FilterSection = ({ title, children }) => (
    <div className="border-b border-brand-border pb-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-black">{title}</p>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );

  const filterContent = (
    <div className="space-y-6">
      <FilterSection title="Category">
        <label className="flex items-center gap-2 text-sm text-brand-black/80">
          <input
            type="radio"
            name="category"
            checked={activeCategory === ''}
            onChange={() => updateFilter('category', '')}
            className="h-4 w-4 accent-brand-gold"
          />
          All
        </label>
        {categories.map((cat) => (
          <label key={cat.id} className="flex items-center gap-2 text-sm text-brand-black/80">
            <input
              type="radio"
              name="category"
              checked={activeCategory === cat.id}
              onChange={() => updateFilter('category', cat.id)}
              className="h-4 w-4 accent-brand-gold"
            />
            {cat.label}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Material">
        <label className="flex items-center gap-2 text-sm text-brand-black/80">
          <input
            type="radio"
            name="material"
            checked={activeMaterial === ''}
            onChange={() => updateFilter('material', '')}
            className="h-4 w-4 accent-brand-gold"
          />
          All
        </label>
        {materials.map((mat) => (
          <label key={mat.id} className="flex items-center gap-2 text-sm text-brand-black/80">
            <input
              type="radio"
              name="material"
              checked={activeMaterial === mat.id}
              onChange={() => updateFilter('material', mat.id)}
              className="h-4 w-4 accent-brand-gold"
            />
            {mat.label}
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Price">
        {[
          { label: 'All', value: '' },
          { label: 'Under $50', value: '0-50' },
          { label: '$50 – $80', value: '50-80' },
          { label: '$80 – $120', value: '80-120' },
        ].map((option) => (
          <label key={option.value} className="flex items-center gap-2 text-sm text-brand-black/80">
            <input
              type="radio"
              name="price"
              checked={priceRange === option.value}
              onChange={() => updateFilter('price', option.value)}
              className="h-4 w-4 accent-brand-gold"
            />
            {option.label}
          </label>
        ))}
      </FilterSection>

      <button type="button" onClick={clearFilters} className="text-xs uppercase tracking-widest text-brand-gold">
        Clear all
      </button>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="section-heading">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">{filtered.length} pieces</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
            className="md:hidden flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-xs uppercase tracking-widest text-brand-black"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 appearance-none rounded-full border border-brand-border bg-transparent pl-4 pr-10 text-xs uppercase tracking-widest text-brand-black outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-[240px_1fr]">
        <aside className="hidden md:block">{filterContent}</aside>

        {mobileFiltersOpen && (
          <div className="md:hidden rounded-sm border border-brand-border bg-brand-cream p-4">
            {filterContent}
          </div>
        )}

        <div>
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-sm text-brand-muted">No pieces match your filters.</p>
              <button type="button" onClick={clearFilters} className="btn-outline mt-4">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
