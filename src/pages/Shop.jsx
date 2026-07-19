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

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
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

  const activeCategory = categoryOptions.find(c => c.value === category);

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val) setSearchParams({ category: val });
    else setSearchParams({});
  };

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark py-10 md:py-14 border-b border-stone-light/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Velmora Collection</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso tracking-wide">
            {activeCategory?.label || 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-stone-light/20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-[0.1em] text-espresso border border-stone-light/40 px-3 py-2 hover:border-espresso transition-colors"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-inter text-xs text-stone">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none bg-transparent font-inter text-xs uppercase tracking-[0.1em] text-espresso border border-stone-light/40 px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-3">Category</h3>
                <ul className="space-y-2">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => handleCategoryChange(opt.value)}
                        className={`font-inter text-xs transition-colors duration-200 ${
                          category === opt.value
                            ? 'text-gold font-medium'
                            : 'text-stone hover:text-espresso'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-3">Price</h3>
                <ul className="space-y-2">
                  {priceRanges.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setPriceRange(opt.value)}
                        className={`font-inter text-xs transition-colors duration-200 ${
                          priceRange === opt.value
                            ? 'text-gold font-medium'
                            : 'text-stone hover:text-espresso'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active filters */}
              {(category || priceRange) && (
                <div>
                  <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-3">Active Filters</h3>
                  <div className="flex flex-col gap-1.5">
                    {category && (
                      <button
                        onClick={() => handleCategoryChange('')}
                        className="flex items-center gap-1.5 font-inter text-xs text-espresso border border-stone-light/40 px-2 py-1 hover:border-espresso transition-colors w-fit"
                      >
                        {activeCategory?.label}
                        <X size={10} strokeWidth={2} />
                      </button>
                    )}
                    {priceRange && (
                      <button
                        onClick={() => setPriceRange('')}
                        className="flex items-center gap-1.5 font-inter text-xs text-espresso border border-stone-light/40 px-2 py-1 hover:border-espresso transition-colors w-fit"
                      >
                        {priceRanges.find(p => p.value === priceRange)?.label}
                        <X size={10} strokeWidth={2} />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Mobile filters drawer */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-espresso/40" onClick={() => setMobileFiltersOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cormorant text-lg text-espresso">Filters</span>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-stone" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-3">Category</h3>
                    <ul className="space-y-3">
                      {categoryOptions.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { handleCategoryChange(opt.value); setMobileFiltersOpen(false); }}
                            className={`font-inter text-sm transition-colors ${category === opt.value ? 'text-gold font-medium' : 'text-stone'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-3">Price</h3>
                    <ul className="space-y-3">
                      {priceRanges.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { setPriceRange(opt.value); setMobileFiltersOpen(false); }}
                            className={`font-inter text-sm transition-colors ${priceRange === opt.value ? 'text-gold font-medium' : 'text-stone'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-espresso-light mb-3">No pieces found</p>
                <p className="font-inter text-sm text-stone mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { handleCategoryChange(''); setPriceRange(''); }}
                  className="font-inter text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
