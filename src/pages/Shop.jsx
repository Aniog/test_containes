import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

const categoryOptions = [
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
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

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

  const activeFilters = [
    category && categoryOptions.find(c => c.value === category)?.label,
    priceRange && priceRanges.find(p => p.value === priceRange)?.label,
  ].filter(Boolean);

  return (
    <div className="bg-velmora-linen min-h-screen pt-20 lg:pt-24">
      {/* Page header */}
      <div className="bg-velmora-charcoal py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-light text-velmora-pale">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="font-sans text-sm text-velmora-mist/60 mt-4">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Left: filter toggle + active filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-ink border border-velmora-mist/60 px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>

            {activeFilters.map(f => (
              <span key={f} className="flex items-center gap-1.5 font-sans text-xs text-velmora-warm-gray bg-velmora-cream border border-velmora-mist/40 px-3 py-1.5">
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find(c => c.label === f)) handleCategoryChange('');
                    if (priceRanges.find(p => p.label === f)) setPriceRange('');
                  }}
                  className="text-velmora-mist hover:text-velmora-ink transition-colors"
                >
                  <X size={10} strokeWidth={2} />
                </button>
              </span>
            ))}
          </div>

          {/* Right: sort */}
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-velmora-warm-gray tracking-wider">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none bg-transparent font-sans text-xs text-velmora-ink border border-velmora-mist/60 px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-gold transition-colors duration-300 cursor-pointer"
              >
                {sortOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-warm-gray pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="bg-velmora-cream border border-velmora-mist/40 p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-4">Category</p>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleCategoryChange(opt.value)}
                    className={`font-sans text-xs px-4 py-2 border transition-all duration-300 ${
                      category === opt.value
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-mist/60 text-velmora-warm-gray hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-4">Price Range</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={`font-sans text-xs px-4 py-2 border transition-all duration-300 ${
                      priceRange === opt.value
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-mist/60 text-velmora-warm-gray hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-velmora-warm-gray">No pieces found</p>
            <p className="font-sans text-sm text-velmora-warm-gray/60 mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
