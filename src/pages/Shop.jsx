import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  let filtered = [...products];
  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">Category</h4>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setFilter('category', '')}
              className={`text-sm font-sans transition-colors ${
                !activeCategory ? 'text-ink font-medium' : 'text-taupe-500 hover:text-ink'
              }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setFilter('category', cat.id)}
                className={`text-sm font-sans transition-colors ${
                  activeCategory === cat.id ? 'text-ink font-medium' : 'text-taupe-500 hover:text-ink'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">Price</h4>
        <div className="flex items-center gap-2">
          <span className="text-xs text-taupe-500 font-sans">$30</span>
          <span className="text-xs text-taupe-500 font-sans">–</span>
          <span className="text-xs text-taupe-500 font-sans">$120</span>
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-sans font-medium text-ink uppercase tracking-wider mb-3">Material</h4>
        <ul className="space-y-2">
          {['Gold Tone', 'Silver Tone'].map((mat) => (
            <li key={mat}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-gold-500 w-3.5 h-3.5" />
                <span className="text-sm font-sans text-taupe-500">{mat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {(activeCategory || sortBy !== 'featured') && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans text-gold-500 hover:text-gold-600 uppercase tracking-wider transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream-200/50 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-3xl md:text-4xl font-serif text-ink">Shop</h1>
          <p className="text-taupe-500 font-sans text-sm mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12" ref={containerRef}>
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-sans text-ink"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter & Sort
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs text-taupe-500 font-sans">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="text-xs font-sans text-ink bg-transparent border-b border-ink pb-0.5 pr-4 focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-sans font-medium text-ink uppercase tracking-wider">Filters</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="text-xs font-sans text-ink bg-transparent border-b border-ink pb-0.5 pr-4 focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe-500 font-sans">No products match your filters.</p>
                <button onClick={clearFilters} className="text-gold-500 text-sm font-sans mt-2 hover:text-gold-600 transition-colors">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream-100 rounded-t-xl p-6 max-h-[80vh] overflow-y-auto transform transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-sans font-medium text-ink">Filters</h3>
            <button onClick={() => setMobileFilterOpen(false)} className="p-1">
              <X className="w-5 h-5 text-ink" />
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </div>
  );
}