import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
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

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory.toLowerCase());
    }

    result = result.filter(p => p.price >= activePriceRange.min && p.price <= activePriceRange.max);

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="min-h-screen bg-parchment pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-ivory border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-inter text-xs text-stone-light mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-10">
          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-inter text-[10px] uppercase tracking-[0.14em] px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-ivory border-charcoal'
                    : 'bg-transparent text-stone-warm border-divider hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-inter text-[10px] uppercase tracking-[0.12em] text-stone-warm border border-divider px-3 py-2 hover:border-charcoal transition-colors"
            >
              <SlidersHorizontal className="w-3 h-3" />
              Filter
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-divider font-inter text-[10px] uppercase tracking-[0.12em] text-stone-warm px-4 py-2 pr-8 focus:outline-none focus:border-charcoal cursor-pointer hover:border-charcoal transition-colors"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-light pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.16em] text-stone-light mb-4">Price</h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map(range => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`font-inter text-xs transition-colors ${
                          activePriceRange.label === range.label
                            ? 'text-charcoal font-medium'
                            : 'text-stone-warm hover:text-charcoal'
                        }`}
                      >
                        {activePriceRange.label === range.label && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-2 mb-0.5" />
                        )}
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active filters */}
              {(activeCategory !== 'All' || activePriceRange.label !== 'All Prices') && (
                <div>
                  <h3 className="font-inter text-[10px] uppercase tracking-[0.16em] text-stone-light mb-3">Active Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory !== 'All' && (
                      <button
                        onClick={() => setActiveCategory('All')}
                        className="flex items-center gap-1 font-inter text-[10px] bg-charcoal text-ivory px-2.5 py-1 hover:bg-gold hover:text-obsidian transition-colors"
                      >
                        {activeCategory}
                        <X className="w-2.5 h-2.5" />
                      </button>
                    )}
                    {activePriceRange.label !== 'All Prices' && (
                      <button
                        onClick={() => setActivePriceRange(PRICE_RANGES[0])}
                        className="flex items-center gap-1 font-inter text-[10px] bg-charcoal text-ivory px-2.5 py-1 hover:bg-gold hover:text-obsidian transition-colors"
                      >
                        {activePriceRange.label}
                        <X className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 bg-ivory z-40 overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-inter text-xs uppercase tracking-[0.14em] text-charcoal">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-charcoal" />
                </button>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-inter text-[10px] uppercase tracking-[0.16em] text-stone-light mb-4">Price</h3>
                  <ul className="space-y-3">
                    {PRICE_RANGES.map(range => (
                      <li key={range.label}>
                        <button
                          onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                          className={`font-inter text-sm ${activePriceRange.label === range.label ? 'text-charcoal font-medium' : 'text-stone-warm'}`}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-charcoal mb-2">No pieces found</p>
                <p className="font-inter text-xs text-stone-warm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
