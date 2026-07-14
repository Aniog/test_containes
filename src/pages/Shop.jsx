import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categories = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true;
      const [min, max] = priceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val) setSearchParams({ category: val });
    else setSearchParams({});
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-[10px] tracking-widest uppercase font-sans font-semibold text-obsidian mb-4">
          Category
        </h3>
        <ul className="space-y-2.5">
          {categories.map(cat => (
            <li key={cat.value}>
              <button
                onClick={() => handleCategoryChange(cat.value)}
                className={`text-sm font-sans transition-colors ${
                  category === cat.value
                    ? 'text-gold font-medium'
                    : 'text-ink-muted hover:text-obsidian'
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-linen" />

      {/* Price */}
      <div>
        <h3 className="text-[10px] tracking-widest uppercase font-sans font-semibold text-obsidian mb-4">
          Price
        </h3>
        <ul className="space-y-2.5">
          {priceRanges.map(range => (
            <li key={range.value}>
              <button
                onClick={() => setPriceRange(range.value)}
                className={`text-sm font-sans transition-colors ${
                  priceRange === range.value
                    ? 'text-gold font-medium'
                    : 'text-ink-muted hover:text-obsidian'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-linen" />

      {/* Material */}
      <div>
        <h3 className="text-[10px] tracking-widest uppercase font-sans font-semibold text-obsidian mb-4">
          Material
        </h3>
        <ul className="space-y-2.5">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
            <li key={m}>
              <button className="text-sm font-sans text-ink-muted hover:text-obsidian transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-parchment min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="border-b border-linen bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <p className="text-[10px] tracking-ultra-wide uppercase font-sans text-gold mb-3">
            {category ? categories.find(c => c.value === category)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-obsidian" style={{ fontWeight: 300 }}>
            {category ? categories.find(c => c.value === category)?.label : 'The Collection'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-ink-muted hover:text-obsidian transition-colors border border-linen px-4 py-2.5"
            >
              <SlidersHorizontal size={13} />
              Filters
            </button>
            <p className="text-xs text-ink-faint font-sans">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-[10px] tracking-widest uppercase font-sans text-ink-muted hidden sm:block">
              Sort:
            </label>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-xs font-sans text-obsidian bg-transparent border border-linen px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian mb-3">No pieces found</p>
                <p className="text-sm text-ink-muted font-sans">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-obsidian/40 z-50 cart-overlay"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div
            className="fixed top-0 left-0 h-full w-72 bg-parchment z-50 flex flex-col shadow-2xl"
            style={{ animation: 'slide-in-right 0.35s ease-out' }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
              <h2 className="font-serif text-xl tracking-widest uppercase text-obsidian">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-ink-muted hover:text-obsidian transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
