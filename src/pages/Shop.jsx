import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

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
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function applyFilters(items, category, priceRange, sort) {
  let filtered = [...items];

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (priceRange && priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  switch (sort) {
    case 'price-asc': return filtered.sort((a, b) => a.price - b.price);
    case 'price-desc': return filtered.sort((a, b) => b.price - a.price);
    case 'rating': return filtered.sort((a, b) => b.rating - a.rating);
    default: return filtered;
  }
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';
  const sort = searchParams.get('sort') || 'featured';

  const filtered = applyFilters(products, category, priceRange, sort);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const categoryLabel = categories.find(c => c.value === category)?.label || 'All Jewelry';

  return (
    <div className="bg-velmora-cream min-h-screen pt-16 md:pt-20" ref={containerRef}>
      {/* Page header */}
      <div className="bg-velmora-obsidian py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-velmora-text-light">
            {categoryLabel}
          </h1>
          <p className="font-manrope text-xs text-velmora-text-light/40 mt-3">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-gold/15">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter('category', cat.value)}
                className={`font-manrope text-xs tracking-widest-sm uppercase px-4 py-2 border transition-all duration-200 ${
                  category === cat.value
                    ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-text-light'
                    : 'border-velmora-gold/20 text-velmora-text-mid hover:border-velmora-obsidian hover:text-velmora-obsidian'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="hidden md:block font-manrope text-xs text-velmora-text-muted">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setFilter('sort', e.target.value)}
                className="appearance-none bg-transparent border border-velmora-gold/20 font-manrope text-xs text-velmora-text-mid px-4 py-2 pr-8 cursor-pointer hover:border-velmora-obsidian transition-colors outline-none"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            {/* Category */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">
                Category
              </h3>
              <ul className="space-y-2.5">
                {categories.map(cat => (
                  <li key={cat.value}>
                    <button
                      onClick={() => setFilter('category', cat.value)}
                      className={`font-manrope text-xs transition-colors duration-200 ${
                        category === cat.value
                          ? 'text-velmora-gold'
                          : 'text-velmora-text-mid hover:text-velmora-obsidian'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline mb-8" />

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">
                Price
              </h3>
              <ul className="space-y-2.5">
                {priceRanges.map(range => (
                  <li key={range.value}>
                    <button
                      onClick={() => setFilter('price', range.value)}
                      className={`font-manrope text-xs transition-colors duration-200 ${
                        priceRange === range.value
                          ? 'text-velmora-gold'
                          : 'text-velmora-text-mid hover:text-velmora-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline mb-8" />

            {/* Material */}
            <div>
              <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">
                Material
              </h3>
              <ul className="space-y-2.5">
                {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                  <li key={m}>
                    <button className="font-manrope text-xs text-velmora-text-mid hover:text-velmora-obsidian transition-colors duration-200">
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-velmora-obsidian/60 md:hidden" onClick={() => setMobileFiltersOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-ivory p-6 overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cormorant text-xl text-velmora-obsidian">Filters</span>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-velmora-text-mid" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">Category</h3>
                  <ul className="space-y-3">
                    {categories.map(cat => (
                      <li key={cat.value}>
                        <button
                          onClick={() => { setFilter('category', cat.value); setMobileFiltersOpen(false); }}
                          className={`font-manrope text-sm ${category === cat.value ? 'text-velmora-gold' : 'text-velmora-text-mid'}`}
                        >
                          {cat.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hairline mb-6" />

                <div>
                  <h3 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-obsidian mb-4">Price</h3>
                  <ul className="space-y-3">
                    {priceRanges.map(range => (
                      <li key={range.value}>
                        <button
                          onClick={() => { setFilter('price', range.value); setMobileFiltersOpen(false); }}
                          className={`font-manrope text-sm ${priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-text-mid'}`}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-velmora-obsidian mb-3">No pieces found</p>
                <p className="font-manrope text-sm text-velmora-text-muted mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-xs tracking-widest-md uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
