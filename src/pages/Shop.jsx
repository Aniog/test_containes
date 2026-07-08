import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

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

  const activeFilters = [
    category && categoryOptions.find(c => c.value === category)?.label,
    priceRange && priceRanges.find(p => p.value === priceRange)?.label,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-parchment pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {category
              ? categoryOptions.find(c => c.value === category)?.label || 'Shop'
              : 'All Jewelry'
            }
          </h1>
          <p className="font-manrope text-sm text-ink-muted mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4">
          {/* Filter toggle (mobile) + active filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFiltersOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-[0.12em] uppercase text-ink-muted border border-linen px-4 py-2 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <SlidersHorizontal size={13} />
              Filters
            </button>

            {activeFilters.map(f => (
              <span
                key={f}
                className="flex items-center gap-1.5 font-manrope text-xs text-obsidian bg-cream border border-linen px-3 py-1.5"
              >
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find(c => c.label === f)) setCategory('');
                    if (priceRanges.find(p => p.label === f)) setPriceRange('');
                  }}
                  className="text-ink-muted hover:text-gold transition-colors"
                >
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="font-manrope text-xs tracking-wide text-ink-muted bg-transparent border border-linen px-4 py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            {sortOptions.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop always visible, mobile toggle */}
          <aside className={`${filtersOpen ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            <div className="sticky top-24 flex flex-col gap-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categoryOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setCategory(opt.value)}
                      className={`text-left font-manrope text-sm transition-colors duration-200 ${
                        category === opt.value
                          ? 'text-gold font-medium'
                          : 'text-ink-muted hover:text-obsidian'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`text-left font-manrope text-sm transition-colors duration-200 ${
                        priceRange === opt.value
                          ? 'text-gold font-medium'
                          : 'text-ink-muted hover:text-obsidian'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">
                  Material
                </h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <button
                      key={m}
                      className="text-left font-manrope text-sm text-ink-muted hover:text-obsidian transition-colors duration-200"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-cormorant text-2xl text-ink-muted mb-3">No pieces found</p>
                <p className="font-manrope text-sm text-ink-muted mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setCategory(''); setPriceRange(''); }}
                  className="font-manrope text-xs tracking-[0.12em] uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
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
