import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

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
  { value: 'rating', label: 'Best Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [priceFilter, setPriceFilter] = useState('');

  const containerRef = useRef(null);

  const categoryParam = searchParams.get('category') || '';
  const setCategory = (val) => {
    if (val) setSearchParams({ category: val });
    else setSearchParams({});
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, priceFilter, sort]);

  const filtered = products.filter(p => {
    if (categoryParam && p.category !== categoryParam) return false;
    if (priceFilter) {
      const [min, max] = priceFilter.split('-').map(Number);
      if (p.price < min || p.price > max) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  const activeCategory = categories.find(c => c.value === categoryParam);

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-obsidian py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-ivory">
            {activeCategory?.label || 'All Jewelry'}
          </h1>
          <p className="font-manrope text-sm text-ivory/50 mt-3">
            {sorted.length} piece{sorted.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-divider">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.1em] text-ash border border-divider px-4 py-2 hover:border-ash transition-colors"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>

            {/* Desktop category pills */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={`font-manrope text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors ${
                    categoryParam === cat.value
                      ? 'border-obsidian bg-obsidian text-ivory'
                      : 'border-divider text-ash hover:border-ash'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Price filter */}
            <div className="relative hidden md:block">
              <select
                value={priceFilter}
                onChange={e => setPriceFilter(e.target.value)}
                className="appearance-none font-manrope text-xs uppercase tracking-[0.1em] text-ash border border-divider px-4 py-2 pr-8 bg-transparent hover:border-ash transition-colors cursor-pointer focus:outline-none"
              >
                {priceRanges.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ash pointer-events-none" />
            </div>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none font-manrope text-xs uppercase tracking-[0.1em] text-ash border border-divider px-4 py-2 pr-8 bg-transparent hover:border-ash transition-colors cursor-pointer focus:outline-none"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ash pointer-events-none" />
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden bg-ivory border border-divider p-5 mb-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <span className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian font-medium">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={14} strokeWidth={1.5} className="text-ash" />
              </button>
            </div>
            <div className="mb-4">
              <p className="font-manrope text-[10px] uppercase tracking-[0.1em] text-dust mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => { setCategory(cat.value); setFilterOpen(false); }}
                    className={`font-manrope text-xs uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors ${
                      categoryParam === cat.value
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-divider text-ash'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-manrope text-[10px] uppercase tracking-[0.1em] text-dust mb-2">Price</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(r => (
                  <button
                    key={r.value}
                    onClick={() => setPriceFilter(r.value)}
                    className={`font-manrope text-xs uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors ${
                      priceFilter === r.value
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-divider text-ash'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef}>
          {sorted.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-cormorant text-2xl text-ash mb-3">No pieces found</p>
              <button
                onClick={() => { setCategory(''); setPriceFilter(''); }}
                className="font-manrope text-xs uppercase tracking-[0.12em] text-gold border-b border-gold pb-0.5"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {sorted.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
