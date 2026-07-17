import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '../components/shop/ProductCard';
import { products } from '../data/products';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter((p) => category === 'all' || p.category === category)
    .filter((p) => p.price >= PRICE_RANGES[priceRange].min && p.price <= PRICE_RANGES[priceRange].max)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-stone-warm mb-4">Category</h3>
        <ul className="space-y-2">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <button
                onClick={() => setCategory(c)}
                className={`font-sans text-sm capitalize transition-colors ${
                  category === c ? 'text-obsidian font-semibold' : 'text-stone-warm hover:text-obsidian'
                }`}
              >
                {c === 'all' ? 'All Jewelry' : c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-obsidian/10" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-stone-warm mb-4">Price</h3>
        <ul className="space-y-2">
          {PRICE_RANGES.map((r, i) => (
            <li key={r.label}>
              <button
                onClick={() => setPriceRange(i)}
                className={`font-sans text-sm transition-colors ${
                  priceRange === i ? 'text-obsidian font-semibold' : 'text-stone-warm hover:text-obsidian'
                }`}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-obsidian/10" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-stone-warm mb-4">Material</h3>
        <ul className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver'].map((m) => (
            <li key={m}>
              <button className="font-sans text-sm text-stone-warm hover:text-obsidian transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-ivory pt-16">
      {/* Page header */}
      <div className="bg-parchment py-14 px-6 text-center border-b border-obsidian/8">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">Browse</p>
        <h1 className="font-serif text-5xl text-obsidian font-light">All Jewelry</h1>
        <p className="font-sans text-sm text-stone-warm mt-3">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0 pt-1">
            <FilterPanel />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian border border-obsidian/20 px-4 py-2 hover:border-obsidian transition-colors"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal size={13} /> Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="font-sans text-xs text-stone-warm hidden sm:block">Sort:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="font-sans text-xs text-obsidian bg-transparent border border-obsidian/20 px-3 py-2 pr-7 appearance-none focus:outline-none focus:border-champagne cursor-pointer"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-warm pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian font-light">No pieces found</p>
                <p className="font-sans text-sm text-stone-warm mt-2">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-obsidian/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-ivory p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-obsidian font-light tracking-widest">FILTERS</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} className="text-obsidian" strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel />
          </div>
        </>
      )}
    </div>
  );
}
