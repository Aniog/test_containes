import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

const priceRanges = [
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to70', label: '$40 – $70', min: 40, max: 70 },
  { id: '70plus', label: '$70 & Above', min: 70, max: Infinity },
];

const materials = [
  { id: 'gold', label: 'Gold Plated' },
  { id: 'silver', label: 'Silver Plated' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
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

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [filtered]);

  const clearFilters = () => {
    setSearchParams({}, { replace: true });
  };

  const activeFiltersCount = [activeCategory, activePrice, activeMaterial].filter(Boolean).length;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-serif text-lg text-ink mb-4">Category</h4>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => updateParam('category', '')}
              className={`text-sm font-sans transition-colors ${!activeCategory ? 'text-gold-dark font-medium' : 'text-ink/70 hover:text-ink'}`}
            >
              All
            </button>
          </li>
          {categories.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => updateParam('category', c.id)}
                className={`text-sm font-sans transition-colors capitalize ${activeCategory === c.id ? 'text-gold-dark font-medium' : 'text-ink/70 hover:text-ink'}`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-lg text-ink mb-4">Price</h4>
        <ul className="space-y-2">
          {priceRanges.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => updateParam('price', activePrice === r.id ? '' : r.id)}
                className={`text-sm font-sans transition-colors ${activePrice === r.id ? 'text-gold-dark font-medium' : 'text-ink/70 hover:text-ink'}`}
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-lg text-ink mb-4">Material</h4>
        <ul className="space-y-2">
          {materials.map((m) => (
            <li key={m.id}>
              <button
                onClick={() => updateParam('material', activeMaterial === m.id ? '' : m.id)}
                className={`text-sm font-sans transition-colors capitalize ${activeMaterial === m.id ? 'text-gold-dark font-medium' : 'text-ink/70 hover:text-ink'}`}
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeFiltersCount > 0 && (
        <button
          onClick={clearFilters}
          className="inline-flex items-center gap-2 text-sm font-sans text-taupe hover:text-ink transition-colors"
        >
          <X size={14} />
          Clear filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-3">Shop All</h1>
          <p className="font-sans text-ink/70 max-w-xl">
            Discover our curated collection of demi-fine gold jewelry, designed to be treasured.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle & sort */}
          <div className="lg:hidden flex items-center justify-between gap-4 mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-sand text-sm font-sans text-ink"
            >
              <SlidersHorizontal size={16} />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            <select
              value={sortBy}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="px-4 py-2 border border-sand bg-transparent text-sm font-sans text-ink focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream shadow-2xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-2xl text-ink">Filters</h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 -mr-2 text-ink"
                  >
                    <X size={22} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm font-sans text-taupe">
                {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => updateParam('sort', e.target.value)}
                className="px-4 py-2 border border-sand bg-transparent text-sm font-sans text-ink focus:outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>{o.label}</option>
                ))}
              </select>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-sand bg-cream-dark">
                <p className="font-serif text-2xl text-ink mb-2">No products match</p>
                <p className="text-sm text-taupe font-sans mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm uppercase tracking-brand font-sans text-gold-dark hover:text-ink transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
