import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const tones = ['All', 'Gold', 'Silver'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeTone, setActiveTone] = useState('All');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeTone !== 'All') {
      result = result.filter((p) => p.tone === activeTone);
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activeTone, sort]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">The collection</p>
          <h1 className="section-heading mt-2">Shop</h1>
        </div>
        <button
          type="button"
          onClick={() => setMobileFiltersOpen((v) => !v)}
          className="md:hidden btn-outline inline-flex items-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className={`md:col-span-1 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Category</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`h-9 rounded-full border px-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                      activeCategory === category ? 'border-ink bg-ink text-white' : 'border-border-strong text-ink hover:border-ink'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow">Tone</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setActiveTone(tone)}
                    className={`h-9 rounded-full border px-4 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                      activeTone === tone ? 'border-ink bg-ink text-white' : 'border-border-strong text-ink hover:border-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-ink-secondary">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-9 appearance-none rounded-sm border border-border bg-surface pl-3 pr-8 text-xs text-ink focus:outline-none focus:border-ink"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-secondary pointer-events-none" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-sm text-ink-secondary">No pieces match your filters.</p>
              <button
                type="button"
                onClick={() => {
                  handleCategoryChange('All');
                  setActiveTone('All');
                }}
                className="btn-outline mt-4 inline-flex"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
