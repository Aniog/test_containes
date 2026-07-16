import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { filterProducts, categories, priceRanges } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import { cn } from '@/lib/utils';

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold plated', label: '18K Gold Plated' },
  { id: 'sterling silver', label: 'Sterling Silver' },
  { id: 'crystal', label: 'Crystal' },
];

const sortOptions = [
  { id: 'newest', label: 'Newest' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('newest');

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || null;
  const activeMaterial = searchParams.get('material') || 'all';

  const selectedPriceRange = priceRanges.find(r => r.id === activePriceRange) || null;

  const filteredProducts = useMemo(() => {
    return filterProducts({
      category: activeCategory,
      priceRange: selectedPriceRange,
      material: activeMaterial,
      sort,
    });
  }, [activeCategory, selectedPriceRange, activeMaterial, sort]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== 'all' && value !== 'newest') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSort('newest');
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange || activeMaterial !== 'all';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-cream min-h-screen">
      {/* Page header */}
      <div className="container-wide section-padding mb-8 lg:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8 lg:pt-12"
        >
          <p className="section-subtitle mb-3">Collection</p>
          <h1 className="section-title">
            {activeCategory !== 'all'
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </motion.div>
      </div>

      <div className="container-wide section-padding">
        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block w-60 flex-shrink-0"
          >
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-ultra-wide text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateParam('category', 'all')}
                    className={cn(
                      'block w-full text-left text-sm py-1.5 transition-colors',
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-slate hover:text-charcoal'
                    )}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateParam('category', cat.id)}
                      className={cn(
                        'block w-full text-left text-sm py-1.5 transition-colors',
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-slate hover:text-charcoal'
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-ultra-wide text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateParam('price', range.id === activePriceRange ? null : range.id)}
                      className={cn(
                        'block w-full text-left text-sm py-1.5 transition-colors',
                        activePriceRange === range.id ? 'text-gold font-medium' : 'text-slate hover:text-charcoal'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-ultra-wide text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => updateParam('material', mat.id)}
                      className={cn(
                        'block w-full text-left text-sm py-1.5 transition-colors',
                        activeMaterial === mat.id ? 'text-gold font-medium' : 'text-slate hover:text-charcoal'
                      )}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <>
                  <div className="hairline-divider" />
                  <button
                    onClick={clearFilters}
                    className="text-xs text-warm-gray uppercase tracking-wider hover:text-gold transition-colors"
                  >
                    Clear All Filters
                  </button>
                </>
              )}
            </div>
          </motion.aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <p className="text-sm text-warm-gray">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-charcoal font-sans pr-8 py-1
                           border-b border-champagne focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-warm-gray absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">
                  No pieces found
                </p>
                <p className="text-sm text-warm-gray mb-6">
                  Try adjusting your filters to discover more.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setShowFilters(false)} />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-cream shadow-medium overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-champagne">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-ultra-wide text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { updateParam('category', 'all'); }}
                    className={cn(
                      'block w-full text-left text-sm py-1.5 transition-colors',
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-slate'
                    )}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { updateParam('category', cat.id); }}
                      className={cn(
                        'block w-full text-left text-sm py-1.5 transition-colors',
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-slate'
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-ultra-wide text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateParam('price', range.id === activePriceRange ? null : range.id)}
                      className={cn(
                        'block w-full text-left text-sm py-1.5 transition-colors',
                        activePriceRange === range.id ? 'text-gold font-medium' : 'text-slate'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline-divider" />

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-ultra-wide text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => { updateParam('material', mat.id); }}
                      className={cn(
                        'block w-full text-left text-sm py-1.5 transition-colors',
                        activeMaterial === mat.id ? 'text-gold font-medium' : 'text-slate'
                      )}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <>
                  <div className="hairline-divider" />
                  <button
                    onClick={() => { clearFilters(); setShowFilters(false); }}
                    className="text-xs text-warm-gray uppercase tracking-wider hover:text-gold transition-colors"
                  >
                    Clear All Filters
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
