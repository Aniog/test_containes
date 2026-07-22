import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shared/ProductCard';
import { products } from '@/data/products';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = products
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-parchment py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-charcoal tracking-wide">
            {activeCategory === 'all'
              ? 'All Jewelry'
              : categories.find((c) => c.value === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="font-inter text-xs text-mist mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10" ref={containerRef}>
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`font-inter text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'border-parchment text-stone hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(true)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-[0.1em] text-stone border border-parchment px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-200"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter
          </button>

          {/* Sort dropdown */}
          <div className="relative flex items-center gap-2 ml-auto">
            <span className="font-inter text-xs text-mist hidden md:inline">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-parchment font-inter text-xs text-stone px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors duration-200"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-mist pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setActivePriceRange(range.value)}
                      className={`block w-full text-left font-inter text-xs py-1.5 transition-colors duration-200 ${
                        activePriceRange === range.value
                          ? 'text-gold'
                          : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {activePriceRange === range.value && (
                        <span className="inline-block w-2 h-px bg-gold mr-2 align-middle" />
                      )}
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                      <span className="w-3.5 h-3.5 border border-parchment group-hover:border-gold transition-colors duration-200 flex-shrink-0" />
                      <span className="font-inter text-xs text-stone group-hover:text-charcoal transition-colors duration-200">
                        {mat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-charcoal font-light">
                  No pieces found
                </p>
                <p className="font-inter text-xs text-mist mt-2">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange('all'); }}
                  className="mt-6 font-inter text-xs uppercase tracking-[0.1em] text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/40 z-40"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-lg p-6 max-h-[80vh] overflow-y-auto animate-slideInLeft">
            <div className="flex items-center justify-between mb-6">
              <span className="font-inter text-xs uppercase tracking-[0.15em] text-charcoal">
                Filter & Sort
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-stone" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-charcoal mb-4">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => { handleCategoryChange(cat.value); setFilterOpen(false); }}
                      className={`font-inter text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-200 ${
                        activeCategory === cat.value
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'border-parchment text-stone'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-inter text-xs uppercase tracking-[0.15em] text-charcoal mb-4">
                  Price
                </h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setActivePriceRange(range.value)}
                      className={`font-inter text-xs px-4 py-2 border transition-colors duration-200 ${
                        activePriceRange === range.value
                          ? 'bg-gold text-ivory border-gold'
                          : 'border-parchment text-stone'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full mt-8 bg-charcoal text-ivory font-inter text-xs uppercase tracking-[0.1em] py-4"
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
