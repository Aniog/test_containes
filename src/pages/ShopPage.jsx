import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

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

function FilterSidebar({ category, setCategory, priceRange, setPriceRange, onClose }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-manrope text-[10px] uppercase tracking-widest text-stone mb-4">Category</h3>
        <ul className="space-y-2">
          {categoryOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => { setCategory(opt.value); onClose?.(); }}
                className={`font-manrope text-xs transition-colors ${
                  category === opt.value
                    ? 'text-gold font-medium'
                    : 'text-stone hover:text-obsidian'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="h-px bg-gold/20" />

      {/* Price */}
      <div>
        <h3 className="font-manrope text-[10px] uppercase tracking-widest text-stone mb-4">Price</h3>
        <ul className="space-y-2">
          {priceRanges.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => { setPriceRange(opt.value); onClose?.(); }}
                className={`font-manrope text-xs transition-colors ${
                  priceRange === opt.value
                    ? 'text-gold font-medium'
                    : 'text-stone hover:text-obsidian'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="h-px bg-gold/20" />

      {/* Material */}
      <div>
        <h3 className="font-manrope text-[10px] uppercase tracking-widest text-stone mb-4">Material</h3>
        <ul className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(mat => (
            <li key={mat}>
              <button className="font-manrope text-xs text-stone hover:text-obsidian transition-colors">
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setCategory(searchParams.get('category') || '');
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

  const activeCategory = categoryOptions.find(c => c.value === category)?.label || 'All Jewelry';

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-gold/20 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-2">Collection</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {activeCategory}
          </h1>
          <p className="font-manrope text-xs text-stone mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-stone border border-gold/30 px-4 py-2.5 hover:border-gold hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent font-manrope text-xs uppercase tracking-widest text-stone border border-gold/30 px-4 py-2.5 pr-8 focus:outline-none focus:border-gold"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-manrope text-xs text-stone">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="appearance-none bg-transparent font-manrope text-xs uppercase tracking-widest text-stone border border-gold/30 px-4 py-2.5 pr-8 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-obsidian font-light mb-2">No pieces found</p>
                <p className="font-manrope text-xs text-stone">Try adjusting your filters</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
            className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-ivory z-50 shadow-drawer p-6 overflow-y-auto animate-slideInRight">
            <div className="flex items-center justify-between mb-8">
              <span className="font-manrope text-xs uppercase tracking-widest text-obsidian">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-stone hover:text-obsidian">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              onClose={() => setMobileFiltersOpen(false)}
            />
          </div>
        </>
      )}
    </div>
  );
}
