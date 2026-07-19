import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

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

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const setCategory = (val) => {
    const params = new URLSearchParams(searchParams);
    if (val === 'all') params.delete('category');
    else params.set('category', val);
    setSearchParams(params);
  };

  const setPriceRange = (val) => {
    const params = new URLSearchParams(searchParams);
    if (val === 'all') params.delete('price');
    else params.set('price', val);
    setSearchParams(params);
  };

  const filteredProducts = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="text-[10px] tracking-widest uppercase text-stone font-medium mb-4">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map(cat => (
            <li key={cat.value}>
              <button
                onClick={() => setCategory(cat.value)}
                className={`text-sm text-left w-full transition-colors bg-transparent border-none px-0 py-1 tracking-normal normal-case font-normal ${
                  activeCategory === cat.value
                    ? 'text-gold font-medium'
                    : 'text-stone hover:text-charcoal'
                }`}
              >
                {cat.label}
                {activeCategory === cat.value && (
                  <span className="ml-2 text-gold">·</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-gold/15" />

      {/* Price */}
      <div>
        <h3 className="text-[10px] tracking-widest uppercase text-stone font-medium mb-4">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {priceRanges.map(range => (
            <li key={range.value}>
              <button
                onClick={() => setPriceRange(range.value)}
                className={`text-sm text-left w-full transition-colors bg-transparent border-none px-0 py-1 tracking-normal normal-case font-normal ${
                  activePriceRange === range.value
                    ? 'text-gold font-medium'
                    : 'text-stone hover:text-charcoal'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-cream min-h-screen pt-20 lg:pt-24">
      {/* Page header */}
      <div className="border-b border-gold/15 bg-parchment/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
            {activeCategory === 'all'
              ? 'All Jewelry'
              : categories.find(c => c.value === activeCategory)?.label}
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">
            {activeCategory === 'all' ? 'The Collection' : categories.find(c => c.value === activeCategory)?.label}
          </h1>
          <p className="text-sm text-stone mt-2">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(v => !v)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal bg-transparent border border-charcoal/20 px-4 py-2 hover:border-gold hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-charcoal/20 text-xs tracking-widest uppercase text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
          </div>
        </div>

        {/* Mobile filters panel */}
        {mobileFiltersOpen && (
          <div className="lg:hidden mb-8 p-6 bg-parchment border border-gold/15">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs tracking-widest uppercase text-charcoal font-medium">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-stone hover:text-charcoal bg-transparent border-none p-0"
              >
                <X size={16} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        )}

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-end mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-widest uppercase text-stone">Sort by</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border-b border-charcoal/20 text-xs tracking-widest uppercase text-charcoal px-2 py-1 pr-6 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-charcoal mb-3">No pieces found</p>
                <p className="text-sm text-stone mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="text-xs tracking-widest uppercase text-gold border border-gold px-6 py-2 hover:bg-gold hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
