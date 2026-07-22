import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 – $60' },
  { value: '60-100', label: '$60 – $100' },
  { value: '100+', label: 'Over $100' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const toggleParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (next.get(key) === value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      result = result.filter((p) => {
        if (activePrice === '0-40') return p.price < 40;
        if (activePrice === '40-60') return p.price >= 40 && p.price <= 60;
        if (activePrice === '60-100') return p.price > 60 && p.price <= 100;
        if (activePrice === '100+') return p.price > 100;
        return true;
      });
    }

    if (activeSort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, activeSort]);

  const activeFiltersCount = (activeCategory ? 1 : 0) + (activePrice ? 1 : 0);

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="border-b border-sand">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Shop All</h1>
          <p className="text-stone text-sm mt-2">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 md:py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal border border-sand px-4 py-2"
          >
            <SlidersHorizontal size={14} />
            Filter{activeFiltersCount > 0 && ` (${activeFiltersCount})`}
          </button>

          <div className="hidden md:block" />

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 text-sm text-charcoal border border-sand px-4 py-2"
            >
              Sort by: {sortOptions.find((s) => s.value === activeSort)?.label}
              <ChevronDown size={14} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-sand shadow-lg z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      toggleParam('sort', opt.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-cream transition-colors ${
                      activeSort === opt.value ? 'text-charcoal font-medium' : 'text-stone'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wide text-charcoal font-medium mb-4">Category</h3>
                <div className="space-y-2.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => toggleParam('category', cat.value)}
                      className={`block text-sm transition-colors ${
                        activeCategory === cat.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wide text-charcoal font-medium mb-4">Price</h3>
                <div className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => toggleParam('price', range.value)}
                      className={`block text-sm transition-colors ${
                        activePrice === range.value ? 'text-charcoal font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs uppercase tracking-wide text-charcoal font-medium mb-4">Material</h3>
                <div className="space-y-2.5">
                  <span className="block text-sm text-stone">18K Gold Plated</span>
                  <span className="block text-sm text-stone">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-stone text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-charcoal/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={20} className="text-charcoal" />
              </button>
            </div>

            <div className="space-y-8 overflow-y-auto flex-1">
              <div>
                <h3 className="text-xs uppercase tracking-wide text-charcoal font-medium mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => toggleParam('category', cat.value)}
                      className={`block text-sm ${activeCategory === cat.value ? 'text-charcoal font-medium' : 'text-stone'}`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wide text-charcoal font-medium mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => toggleParam('price', range.value)}
                      className={`block text-sm ${activePrice === range.value ? 'text-charcoal font-medium' : 'text-stone'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-6 w-full bg-warm-gold text-white py-3.5 text-sm font-medium tracking-wide"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
