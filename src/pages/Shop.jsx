import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

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
  { value: '75-120', label: '$75 – $120' },
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
  const [price, setPrice] = useState('');
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
  }, [category, price, sort]);

  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!price) return true;
      const [min, max] = price.split('-').map(Number);
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

  const activeFiltersCount = [category, price].filter(Boolean).length;

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-blush">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="text-xs font-manrope uppercase tracking-widest text-gold mb-2">Velmora</p>
          <h1 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal">
            {category ? categoryOptions.find(c => c.value === category)?.label || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="text-sm font-manrope text-stone mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-manrope uppercase tracking-widest text-charcoal mb-6">Filter</h3>

              {/* Category */}
              <div className="mb-8">
                <p className="text-[10px] font-manrope uppercase tracking-widest text-stone mb-3">Category</p>
                <ul className="space-y-2">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => handleCategoryChange(opt.value)}
                        className={`text-xs font-manrope transition-colors ${
                          category === opt.value
                            ? 'text-charcoal font-medium'
                            : 'text-stone hover:text-charcoal'
                        }`}
                      >
                        {opt.label}
                        {category === opt.value && opt.value && (
                          <span className="ml-1 text-gold">·</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="text-[10px] font-manrope uppercase tracking-widest text-stone mb-3">Price</p>
                <ul className="space-y-2">
                  {priceOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setPrice(opt.value)}
                        className={`text-xs font-manrope transition-colors ${
                          price === opt.value
                            ? 'text-charcoal font-medium'
                            : 'text-stone hover:text-charcoal'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => { setCategory(''); setPrice(''); setSearchParams({}); }}
                  className="text-[10px] font-manrope uppercase tracking-widest text-stone/60 hover:text-gold transition-colors flex items-center gap-1"
                >
                  <X size={10} /> Clear filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-blush">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(v => !v)}
                className="md:hidden flex items-center gap-2 text-xs font-manrope uppercase tracking-widest text-charcoal"
              >
                <SlidersHorizontal size={14} />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <span className="text-xs font-manrope text-stone hidden md:block">Sort:</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    className="appearance-none bg-transparent text-xs font-manrope text-charcoal pr-6 py-1 border-b border-blush focus:outline-none focus:border-charcoal cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filters panel */}
            {mobileFiltersOpen && (
              <div className="md:hidden bg-cream border border-blush p-5 mb-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-manrope uppercase tracking-widest text-stone mb-3">Category</p>
                    <ul className="space-y-2">
                      {categoryOptions.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { handleCategoryChange(opt.value); setMobileFiltersOpen(false); }}
                            className={`text-xs font-manrope ${category === opt.value ? 'text-charcoal font-medium' : 'text-stone'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-manrope uppercase tracking-widest text-stone mb-3">Price</p>
                    <ul className="space-y-2">
                      {priceOptions.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { setPrice(opt.value); setMobileFiltersOpen(false); }}
                            className={`text-xs font-manrope ${price === opt.value ? 'text-charcoal font-medium' : 'text-stone'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-stone font-light mb-2">No pieces found</p>
                <p className="text-xs font-manrope text-stone/60">Try adjusting your filters.</p>
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
    </div>
  );
}
