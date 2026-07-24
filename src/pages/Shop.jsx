import { useState, useEffect, useRef } from 'react';
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
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
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
        <h3 className="font-inter text-xs uppercase tracking-widest text-stone mb-4">Category</h3>
        <ul className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => setActiveCategory(cat.value)}
                className={`font-inter text-sm transition-colors duration-300 ${
                  activeCategory === cat.value
                    ? 'text-espresso font-medium'
                    : 'text-stone hover:text-espresso'
                }`}
              >
                {cat.label}
                {activeCategory === cat.value && (
                  <span className="ml-2 inline-block w-1 h-1 bg-gold rounded-full align-middle" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-stone-light" />

      {/* Price */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest text-stone mb-4">Price</h3>
        <ul className="flex flex-col gap-2.5">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => setActivePriceRange(range.value)}
                className={`font-inter text-sm transition-colors duration-300 ${
                  activePriceRange === range.value
                    ? 'text-espresso font-medium'
                    : 'text-stone hover:text-espresso'
                }`}
              >
                {range.label}
                {activePriceRange === range.value && (
                  <span className="ml-2 inline-block w-1 h-1 bg-gold rounded-full align-middle" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-stone-light" />

      {/* Material */}
      <div>
        <h3 className="font-inter text-xs uppercase tracking-widest text-stone mb-4">Material</h3>
        <ul className="flex flex-col gap-2.5">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((m) => (
            <li key={m}>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="w-3.5 h-3.5 border border-stone-light group-hover:border-gold transition-colors duration-300" />
                <span className="font-inter text-sm text-stone group-hover:text-espresso transition-colors duration-300">
                  {m}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-stone-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-gold mb-3">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find((c) => c.value === activeCategory)?.label}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            {activeCategory === 'all' ? 'The Collection' : categories.find((c) => c.value === activeCategory)?.label}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-stone border border-stone-light px-4 py-2.5 hover:border-espresso hover:text-espresso transition-colors duration-300"
            >
              <SlidersHorizontal size={13} />
              Filters
            </button>
            <span className="font-inter text-xs text-stone">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-stone-light font-inter text-xs text-stone px-4 py-2.5 pr-8 focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <p className="font-cormorant text-2xl text-espresso-light">No pieces found</p>
                <p className="font-inter text-xs text-stone">Try adjusting your filters.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange('all'); }}
                  className="font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-colors duration-300 mt-2"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
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
            className="fixed inset-0 bg-espresso/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-inter text-xs uppercase tracking-widest text-espresso">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={18} className="text-stone" />
              </button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full mt-8 bg-espresso text-ivory font-inter text-xs uppercase tracking-widest py-4"
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
