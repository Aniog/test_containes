import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories, priceRanges, materials } from '@/data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.id === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }

    switch (activeSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, activeSort]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const activeFilterCount = [
    activeCategory,
    activePrice,
    activeMaterial,
  ].filter(Boolean).length;

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'rating', label: 'Top Rated' },
  ];

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-ultra uppercase text-velmora-stone mb-4">Category</h4>
        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`text-left text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-base hover:text-velmora-gold'
              }`}
            >
              {cat.label}
              <span className="text-velmora-muted ml-1.5">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-ultra uppercase text-velmora-stone mb-4">Price</h4>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', activePrice === range.id ? '' : range.id)}
              className={`text-left text-sm transition-colors ${
                activePrice === range.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-base hover:text-velmora-gold'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-ultra uppercase text-velmora-stone mb-4">Material</h4>
        <div className="flex flex-col gap-2.5">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setFilter('material', activeMaterial === mat.id ? '' : mat.id)}
              className={`text-left text-sm transition-colors ${
                activeMaterial === mat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-base hover:text-velmora-gold'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-velmora-stone hover:text-velmora-base transition-colors flex items-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-white min-h-screen">
      <div className="container-velmora">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-base">Shop All</h1>
          <p className="text-velmora-stone text-sm mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-velmora-base"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="hidden md:block" />

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm text-velmora-base"
            >
              Sort by: {sortOptions.find((s) => s.id === activeSort)?.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-white border border-velmora-warm shadow-lg z-50 min-w-[200px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFilter('sort', opt.id === 'featured' ? '' : opt.id);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-velmora-surfaceAlt transition-colors ${
                        activeSort === opt.id ? 'text-velmora-gold font-medium' : 'text-velmora-base'
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

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-base">No pieces found</p>
                <p className="text-velmora-stone text-sm mt-2">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-6 px-6 py-3 bg-velmora-base text-white text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
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
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute left-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-warm">
            <h3 className="font-serif text-lg">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-5 overflow-y-auto h-[calc(100%-60px)]">
            <FilterContent />
          </div>
        </div>
      </div>
    </div>
  );
}
