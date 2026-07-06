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
  { value: '75-120', label: '$75 – $120' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function FilterSidebar({ category, setCategory, priceRange, setPriceRange, onClose }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest text-charcoal mb-4">Category</h3>
        <div className="flex flex-col gap-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setCategory(opt.value); onClose?.(); }}
              className={`text-left font-inter text-sm transition-colors ${
                category === opt.value ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest text-charcoal mb-4">Price</h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setPriceRange(opt.value); onClose?.(); }}
              className={`text-left font-inter text-sm transition-colors ${
                priceRange === opt.value ? 'text-charcoal font-medium' : 'text-taupe hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest text-charcoal mb-4">Material</h3>
        <div className="flex flex-col gap-2">
          {['18K Gold Plated', 'Silver Tone'].map((m) => (
            <button key={m} className="text-left font-inter text-sm text-taupe hover:text-charcoal transition-colors">
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setCategory(searchParams.get('category') || '');
  }, [searchParams]);

  const filtered = products
    .filter((p) => !category || p.category === category)
    .filter((p) => {
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const activeFiltersCount = [category, priceRange].filter(Boolean).length;

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-xs uppercase tracking-ultra-wide text-gold mb-3">Collection</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            {category
              ? categoryOptions.find((c) => c.value === category)?.label || 'All Jewelry'
              : 'All Jewelry'}
          </h1>
          <p className="font-inter text-sm text-taupe mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-10 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 gap-4">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-charcoal border border-divider px-4 py-2.5 hover:border-charcoal transition-colors"
              >
                <SlidersHorizontal size={13} strokeWidth={1.5} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="bg-gold text-charcoal text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-inter text-xs text-taupe hidden md:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-divider font-inter text-xs text-charcoal px-4 py-2.5 pr-8 focus:outline-none focus:border-charcoal cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-taupe pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {category && (
                  <button
                    onClick={() => setCategory('')}
                    className="flex items-center gap-1.5 font-inter text-xs text-charcoal border border-charcoal px-3 py-1.5 hover:bg-charcoal hover:text-cream transition-colors"
                  >
                    {categoryOptions.find((c) => c.value === category)?.label}
                    <X size={10} strokeWidth={2} />
                  </button>
                )}
                {priceRange && (
                  <button
                    onClick={() => setPriceRange('')}
                    className="flex items-center gap-1.5 font-inter text-xs text-charcoal border border-charcoal px-3 py-1.5 hover:bg-charcoal hover:text-cream transition-colors"
                  >
                    {priceRanges.find((p) => p.value === priceRange)?.label}
                    <X size={10} strokeWidth={2} />
                  </button>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <p className="font-cormorant text-2xl font-light text-taupe">No pieces found</p>
                <button
                  onClick={() => { setCategory(''); setPriceRange(''); }}
                  className="font-inter text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
            className="fixed inset-0 bg-charcoal/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl font-light text-charcoal">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-taupe" />
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
