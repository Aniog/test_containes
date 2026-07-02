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
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      if (priceRange === 'all') return true;
      const [min, max] = priceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
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

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: val });
    }
  };

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-linen border-b border-sand pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            {category === 'all' ? 'All Jewelry' : categories.find(c => c.value === category)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              category={category}
              setCategory={handleCategoryChange}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-sand">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
              <div className="hidden md:block" />

              <div className="flex items-center gap-2">
                <span className="font-sans text-xs text-muted hidden md:block">Sort by:</span>
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="font-sans text-xs text-obsidian bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian mb-3">No pieces found</p>
                <p className="font-sans text-sm text-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(p => (
                  <ProductCard key={p.id} product={p} />
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
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 animate-fade-up max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-xl text-obsidian">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} className="text-stone" />
              </button>
            </div>
            <FilterSidebar
              category={category}
              setCategory={(val) => { handleCategoryChange(val); setMobileFiltersOpen(false); }}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        </>
      )}
    </div>
  );
}

function FilterSidebar({ category, setCategory, priceRange, setPriceRange }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-4">
          Category
        </p>
        <div className="flex flex-col gap-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`text-left font-sans text-sm transition-colors duration-200 ${
                category === cat.value
                  ? 'text-gold font-medium'
                  : 'text-stone hover:text-obsidian'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Price */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-4">
          Price
        </p>
        <div className="flex flex-col gap-2">
          {priceRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`text-left font-sans text-sm transition-colors duration-200 ${
                priceRange === range.value
                  ? 'text-gold font-medium'
                  : 'text-stone hover:text-obsidian'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Material */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-4">
          Material
        </p>
        <div className="flex flex-col gap-2">
          {['18K Gold Plated', 'Sterling Silver', 'Crystal Accents'].map(m => (
            <label key={m} className="flex items-center gap-2 cursor-pointer group">
              <span className="w-4 h-4 border border-sand group-hover:border-gold transition-colors flex-shrink-0" />
              <span className="font-sans text-sm text-stone group-hover:text-obsidian transition-colors">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
