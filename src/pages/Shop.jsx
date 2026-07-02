import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-70', label: '$50 – $70' },
  { value: 'over-70', label: 'Over $70' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice === 'under-50') {
      result = result.filter((p) => p.price < 50);
    } else if (activePrice === '50-70') {
      result = result.filter((p) => p.price >= 50 && p.price <= 70);
    } else if (activePrice === 'over-70') {
      result = result.filter((p) => p.price > 70);
    }

    if (activeSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, activeSort]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const activeFilterCount =
    (activeCategory !== 'all' ? 1 : 0) + (activePrice !== 'all' ? 1 : 0);

  return (
    <div className="bg-base min-h-screen pt-20">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
          <h1 className="font-serif text-cream text-[clamp(1.75rem,3vw,2.5rem)] mb-2">
            Shop All
          </h1>
          <p className="text-muted font-sans text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="border-b border-white/5 sticky top-[60px] bg-base/95 backdrop-blur-md z-30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-3 flex items-center justify-between">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-muted text-xs uppercase tracking-widest font-sans"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>

          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-6">
            {/* Category pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateParam('category', 'all')}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-widest font-sans border transition-all ${
                  activeCategory === 'all'
                    ? 'border-gold text-gold'
                    : 'border-white/10 text-muted hover:border-white/30'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => updateParam('category', cat.id)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-widest font-sans border transition-all ${
                    activeCategory === cat.id
                      ? 'border-gold text-gold'
                      : 'border-white/10 text-muted hover:border-white/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="w-[1px] h-4 bg-white/10" />

            {/* Price pills */}
            <div className="flex items-center gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => updateParam('price', range.value)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-widest font-sans border transition-all ${
                    activePrice === range.value
                      ? 'border-gold text-gold'
                      : 'border-white/10 text-muted hover:border-white/30'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>

            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-subtle text-[11px] uppercase tracking-widest font-sans hover:text-cream transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-muted text-xs uppercase tracking-widest font-sans hover:text-cream transition-colors"
            >
              Sort
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-surface border border-white/10 min-w-[180px] z-20 py-1">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        updateParam('sort', opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-sans transition-colors ${
                        activeSort === opt.value
                          ? 'text-gold'
                          : 'text-muted hover:text-cream'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-[300px] bg-surface border-r border-white/5 z-[70] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-cream text-lg">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-muted" />
              </button>
            </div>

            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-widest text-muted font-sans mb-4">Category</p>
              <div className="space-y-2">
                {[{ id: 'all', name: 'All' }, ...categories].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => updateParam('category', cat.id)}
                    className={`block w-full text-left text-sm font-sans py-2 transition-colors ${
                      activeCategory === cat.id ? 'text-gold' : 'text-muted hover:text-cream'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-widest text-muted font-sans mb-4">Price</p>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => updateParam('price', range.value)}
                    className={`block w-full text-left text-sm font-sans py-2 transition-colors ${
                      activePrice === range.value ? 'text-gold' : 'text-muted hover:text-cream'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                clearFilters();
                setMobileFiltersOpen(false);
              }}
              className="w-full border border-white/10 text-muted hover:text-cream font-sans text-xs uppercase tracking-widest py-3 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </>
      )}

      {/* Product grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted font-sans text-sm">No products match your filters.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-gold text-xs uppercase tracking-widest font-sans hover:underline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
