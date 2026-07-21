import { useState, useMemo, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];
const METALS     = ['gold', 'silver'];
const PRICE_RANGES = [
  { label: 'All',     min: 0,   max: Infinity },
  { label: 'Under $50', min: 0,   max: 50 },
  { label: '$50 – $80', min: 50,  max: 80 },
  { label: '$80+',    min: 80,  max: Infinity },
];

const SORT_OPTIONS = [
  { value: 'featured',  label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc',label: 'Price: High to Low' },
  { value: 'rating',    label: 'Top Rated' },
];

export default function ShopPage({ navigate, initialCat }) {
  const [cat, setCat]       = useState(initialCat || null);
  const [metal, setMetal]   = useState(null);
  const [priceIdx, setPriceIdx] = useState(0);
  const [sort, setSort]     = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, gridRef.current);
  }, [cat, metal, priceIdx, sort]);

  // Apply filters
  const filtered = useMemo(() => {
    let list = [...products];
    if (cat)   list = list.filter((p) => p.category === cat);
    if (metal) list = list.filter((p) => p.metal === metal);
    const pr = PRICE_RANGES[priceIdx];
    list = list.filter((p) => p.price >= pr.min && p.price < pr.max);

    switch (sort) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }, [cat, metal, priceIdx, sort]);

  const clearFilters = () => { setCat(null); setMetal(null); setPriceIdx(0); setSort('featured'); };
  const hasFilters = cat || metal || priceIdx !== 0;

  return (
    <main className="pt-20 md:pt-24 pb-16 page-enter">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase mb-2">Shop</p>
          <h1 className="font-serif text-3xl md:text-[2.75rem] text-velmora-charcoal">
            Our Collection
          </h1>
          <p className="text-velmora-muted text-sm mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} available
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-velmora-charcoal/15 rounded-lg bg-white text-xs tracking-wide uppercase text-velmora-charcoal hover:border-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          {/* Desktop filters inline */}
          <div className="hidden md:flex items-center gap-4 flex-wrap">
            {/* Category pills */}
            <div className="flex gap-2">
              {[null, ...CATEGORIES].map((c) => (
                <button
                  key={c || 'all'}
                  onClick={() => setCat(c)}
                  className={`px-4 py-1.5 rounded-full text-[11px] tracking-[0.08em] uppercase font-medium transition-all duration-200 border ${
                    cat === c
                      ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                      : 'bg-white text-velmora-charcoal border-velmora-charcoal/15 hover:border-velmora-gold'
                  }`}
                >
                  {c || 'All'}
                </button>
              ))}
            </div>
            {/* Price pills */}
            <div className="flex gap-2">
              {PRICE_RANGES.map((pr, i) => (
                <button
                  key={pr.label}
                  onClick={() => setPriceIdx(i)}
                  className={`px-3 py-1.5 rounded-full text-[11px] tracking-wide font-medium transition-all border ${
                    priceIdx === i
                      ? 'bg-velmora-gold text-white border-velmora-gold'
                      : 'bg-white text-velmora-charcoal border-velmora-charcoal/15 hover:border-velmora-gold'
                  }`}
                >
                  {pr.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-white border border-velmora-charcoal/15 rounded-lg pl-4 pr-10 py-2 text-xs tracking-wide text-velmora-charcoal focus:outline-none focus:border-velmora-gold transition-colors cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        {/* Mobile filter drawer */}
        {showFilters && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => setShowFilters(false)}>
            <div
              className="absolute bottom-0 left-0 right-0 bg-velmora-ivory rounded-t-2xl p-6 pt-8 max-h-[70vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-lg text-velmora-charcoal">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="bg-transparent border-none p-1 text-velmora-charcoal"><X size={18} /></button>
              </div>

              <p className="text-xs uppercase tracking-wider text-velmora-muted mb-2 font-medium">Category</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[null, ...CATEGORIES].map((c) => (
                  <button
                    key={c || 'all'}
                    onClick={() => setCat(c)}
                    className={`px-4 py-1.5 rounded-full text-[11px] tracking-wide uppercase font-medium border transition-all ${
                      cat === c ? 'bg-velmora-charcoal text-white border-velmora-charcoal' : 'bg-white text-velmora-charcoal border-velmora-charcoal/15'
                    }`}
                  >
                    {c || 'All'}
                  </button>
                ))}
              </div>

              <p className="text-xs uppercase tracking-wider text-velmora-muted mb-2 font-medium">Price</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {PRICE_RANGES.map((pr, i) => (
                  <button
                    key={pr.label}
                    onClick={() => setPriceIdx(i)}
                    className={`px-3 py-1.5 rounded-full text-[11px] tracking-wide font-medium border transition-all ${
                      priceIdx === i ? 'bg-velmora-gold text-white border-velmora-gold' : 'bg-white text-velmora-charcoal border-velmora-charcoal/15'
                    }`}
                  >
                    {pr.label}
                  </button>
                ))}
              </div>

              {hasFilters && (
                <button
                  onClick={() => { clearFilters(); setShowFilters(false); }}
                  className="w-full h-10 border border-velmora-charcoal/15 rounded-lg bg-white text-xs tracking-wide uppercase text-velmora-charcoal hover:border-velmora-gold transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* Active filter chips (desktop) */}
        {hasFilters && (
          <div className="hidden md:flex items-center gap-2 mb-6">
            <span className="text-xs text-velmora-muted">Active:</span>
            {cat && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-velmora-gold/10 text-velmora-gold text-[11px] font-medium uppercase tracking-wide">
                {cat}
                <button onClick={() => setCat(null)} className="bg-transparent border-none p-0 text-velmora-gold hover:text-velmora-charcoal transition-colors"><X size={12} /></button>
              </span>
            )}
            {metal && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-velmora-gold/10 text-velmora-gold text-[11px] font-medium uppercase tracking-wide">
                {metal}
                <button onClick={() => setMetal(null)} className="bg-transparent border-none p-0 text-velmora-gold hover:text-velmora-charcoal transition-colors"><X size={12} /></button>
              </span>
            )}
            {priceIdx !== 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-velmora-gold/10 text-velmora-gold text-[11px] font-medium uppercase tracking-wide">
                {PRICE_RANGES[priceIdx].label}
                <button onClick={() => setPriceIdx(0)} className="bg-transparent border-none p-0 text-velmora-gold hover:text-velmora-charcoal transition-colors"><X size={12} /></button>
              </span>
            )}
            <button onClick={clearFilters} className="text-xs text-velmora-muted underline ml-2 bg-transparent border-none p-0 hover:text-velmora-gold transition-colors">
              Clear all
            </button>
          </div>
        )}

        {/* Product grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} navigate={navigate} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-lg text-velmora-charcoal/50 mb-3">
              No pieces match your filters
            </p>
            <button onClick={clearFilters} className="text-velmora-gold underline text-sm bg-transparent border-none">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
