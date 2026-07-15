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

const priceOptions = [
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
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setCategory(searchParams.get('category') || '');
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
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

  const updateCategory = (val) => {
    setCategory(val);
    if (val) setSearchParams({ category: val });
    else setSearchParams({});
  };

  const FilterPanel = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">Category</h3>
        <ul className="flex flex-col gap-2">
          {categoryOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => { updateCategory(opt.value); setMobileFiltersOpen(false); }}
                className={`font-sans text-sm transition-colors ${
                  category === opt.value ? 'text-champagne' : 'text-stone hover:text-velvet'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">Price</h3>
        <ul className="flex flex-col gap-2">
          {priceOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => { setPriceRange(opt.value); setMobileFiltersOpen(false); }}
                className={`font-sans text-sm transition-colors ${
                  priceRange === opt.value ? 'text-champagne' : 'text-stone hover:text-velvet'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-velvet mb-4">Material</h3>
        <ul className="flex flex-col gap-2">
          {['All', '18K Gold Plated', 'Sterling Silver'].map(m => (
            <li key={m}>
              <button className="font-sans text-sm text-stone hover:text-velvet transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-parchment pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream border-b border-blush py-12 md:py-16 text-center">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl text-velvet font-light">
          {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'All Jewelry'}
        </h1>
        <p className="font-sans text-sm text-stone mt-3">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velvet border border-blush px-4 py-2.5"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none font-sans text-xs tracking-widest uppercase text-velvet bg-transparent border border-blush px-4 py-2.5 pr-8 focus:outline-none"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Products */}
          <div ref={containerRef} className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-sans text-xs text-stone">{filtered.length} results</p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="appearance-none font-sans text-xs tracking-widest uppercase text-velvet bg-transparent border border-blush px-4 py-2.5 pr-8 focus:outline-none cursor-pointer"
                >
                  {sortOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velvet mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
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
          <div className="cart-overlay" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-lg text-velvet">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-stone hover:text-velvet">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel />
          </div>
        </>
      )}
    </div>
  );
}
