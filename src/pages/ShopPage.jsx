import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const CATEGORIES = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

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

  const filtered = products
    .filter((p) => category === 'all' || p.category === category)
    .filter((p) => {
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

  const activeFiltersCount = (category !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0);

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-obsidian mb-4">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => handleCategoryChange(cat.value)}
                className={`text-sm font-sans transition-colors text-left w-full ${
                  category === cat.value
                    ? 'text-gold font-medium'
                    : 'text-text-secondary hover:text-obsidian'
                }`}
              >
                {cat.label}
                {category === cat.value && (
                  <span className="ml-2 text-[10px] text-gold">●</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-parchment" />

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-obsidian mb-4">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {PRICE_RANGES.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => setPriceRange(range.value)}
                className={`text-sm font-sans transition-colors text-left w-full ${
                  priceRange === range.value
                    ? 'text-gold font-medium'
                    : 'text-text-secondary hover:text-obsidian'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-parchment" />

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-medium text-obsidian mb-4">
          Material
        </h3>
        <ul className="flex flex-col gap-2">
          {['18K Gold Plated', 'Sterling Silver'].map((m) => (
            <li key={m}>
              <button className="text-sm font-sans text-text-secondary hover:text-obsidian transition-colors text-left w-full">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Clear filters */}
      {activeFiltersCount > 0 && (
        <button
          onClick={() => {
            setCategory('all');
            setPriceRange('all');
            setSearchParams({});
          }}
          className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans text-text-muted hover:text-gold transition-colors"
        >
          <X size={12} />
          Clear Filters ({activeFiltersCount})
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-parchment py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-ultra-wide uppercase font-sans text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            {CATEGORIES.find((c) => c.value === category)?.label || 'All Jewelry'}
          </h1>
          <p className="text-sm text-text-secondary font-sans mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-text-secondary border border-parchment px-4 py-2.5 hover:border-gold hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-parchment text-xs tracking-widest uppercase font-sans text-text-secondary px-4 py-2.5 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-widest uppercase font-sans text-text-muted">Sort:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-parchment text-xs tracking-widest uppercase font-sans text-text-secondary px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-text-secondary italic mb-3">No pieces found</p>
                <p className="text-sm text-text-muted font-sans">Try adjusting your filters.</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {filtered.map((product) => (
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
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-obsidian">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} className="text-text-secondary" />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-6 bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4"
            >
              View {filtered.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
}
