import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

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

  const filtered = products
    .filter((p) => category === 'all' || p.category === category)
    .filter((p) => {
      const range = PRICE_RANGES[priceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest2 text-warm-gray mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`block w-full text-left font-inter text-sm capitalize transition-colors ${
                category === cat
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              {category === cat && (
                <span className="ml-2 inline-block w-4 h-px bg-gold align-middle" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-mist" />

      {/* Price */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest2 text-warm-gray mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(i)}
              className={`block w-full text-left font-inter text-sm transition-colors ${
                priceRange === i
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
              {priceRange === i && (
                <span className="ml-2 inline-block w-4 h-px bg-gold align-middle" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-mist" />

      {/* Material */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest2 text-warm-gray mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <span className="w-4 h-4 border border-mist group-hover:border-gold transition-colors flex items-center justify-center">
                {mat === '18K Gold Plated' && (
                  <span className="w-2 h-2 bg-gold" />
                )}
              </span>
              <span className="font-inter text-sm text-warm-gray group-hover:text-charcoal transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-xs uppercase tracking-widest2 text-gold mb-3">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            {category === 'all' ? 'The Collection' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <p className="font-inter text-sm text-warm-gray mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest2 text-warm-gray border border-mist px-4 py-2.5 hover:border-charcoal transition-colors"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-mist font-inter text-xs text-warm-gray px-4 py-2.5 pr-8 focus:outline-none focus:border-charcoal cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0 pt-1">
            <FilterPanel />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <div className="flex items-center gap-3">
                <span className="font-inter text-xs text-warm-gray uppercase tracking-widest2">Sort:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-mist font-inter text-xs text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-charcoal cursor-pointer"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filtered.length > 0 ? (
                filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-cormorant text-2xl font-light text-warm-gray">
                    No pieces found
                  </p>
                  <button
                    onClick={() => { setCategory('all'); setPriceRange(0); }}
                    className="mt-4 font-inter text-xs uppercase tracking-widest2 text-gold hover:text-gold-dark transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-espresso/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-slideInLeft">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl font-light text-charcoal tracking-widest2">
                FILTERS
              </span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-warm-gray" />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-gold text-espresso font-inter text-xs uppercase tracking-widest2 py-4 hover:bg-gold-dark transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
