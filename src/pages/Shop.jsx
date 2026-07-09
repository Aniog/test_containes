import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-200', label: '$80+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function applyFilters(items, category, priceRange, sort) {
  let result = [...items];

  if (category && category !== 'all') {
    result = result.filter((p) => p.category === category);
  }

  if (priceRange && priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    result = result.filter((p) => {
      if (max) return p.price >= min && p.price <= max;
      return p.price >= min;
    });
  }

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

  return result;
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = applyFilters(products, category, priceRange, sort);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const updateCategory = (val) => {
    setCategory(val);
    if (val !== 'all') setSearchParams({ category: val });
    else setSearchParams({});
  };

  const activeFilterCount = [
    category !== 'all',
    priceRange !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page header */}
      <div className="bg-cream border-b border-divider pt-24 lg:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-2">
            {category === 'all' ? 'All Jewelry' : categories.find((c) => c.value === category)?.label}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-ink">
            {category === 'all' ? 'The Collection' : categories.find((c) => c.value === category)?.label}
          </h1>
          <p className="font-sans text-sm text-mist mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-ink mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <li key={cat.value}>
                      <button
                        onClick={() => updateCategory(cat.value)}
                        className={`font-sans text-sm transition-colors text-left w-full ${
                          category === cat.value
                            ? 'text-gold font-medium'
                            : 'text-mist hover:text-ink'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-divider pt-6 mb-8">
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-ink mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPriceRange(range.value)}
                        className={`font-sans text-sm transition-colors text-left w-full ${
                          priceRange === range.value
                            ? 'text-gold font-medium'
                            : 'text-mist hover:text-ink'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {activeFilterCount > 0 && (
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); setSearchParams({}); }}
                  className="font-sans text-xs uppercase tracking-[0.15em] text-mist hover:text-gold transition-colors border-b border-mist/30 pb-0.5"
                >
                  Clear Filters ({activeFilterCount})
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-divider">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-mist hover:text-gold transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>

              <div className="hidden lg:block" />

              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-mist hidden sm:block">Sort:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-sans text-xs text-ink bg-transparent border border-divider px-3 py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-mist">No pieces found</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="font-sans text-xs uppercase tracking-[0.15em] text-gold mt-4 inline-block border-b border-gold/40 pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-obsidian/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-parchment rounded-t-2xl p-6 slide-in-right max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-light text-ink">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} strokeWidth={1.5} className="text-mist" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-ink mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => { updateCategory(cat.value); }}
                    className={`font-sans text-xs px-4 py-2 border transition-all ${
                      category === cat.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-divider text-mist'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-ink mb-3">Price</h4>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`font-sans text-xs px-4 py-2 border transition-all ${
                      priceRange === range.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-divider text-mist'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-gold text-white font-sans text-xs uppercase tracking-[0.2em] py-4 mt-2"
            >
              View {filtered.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
}
