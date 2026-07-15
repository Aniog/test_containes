import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductGrid from '@/components/shop/ProductGrid';

const sortOptions = [
  { value: 'bestsellers', label: 'Bestsellers' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activeSort = searchParams.get('sort') || 'bestsellers';
  const activePriceMin = searchParams.get('priceMin');
  const activePriceMax = searchParams.get('priceMax');
  const activeMaterial = searchParams.get('material') || 'all';

  const filtered = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by material
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    // Filter by price range
    if (activePriceMin !== null || activePriceMax !== null) {
      const min = activePriceMin !== null ? Number(activePriceMin) : 0;
      const max = activePriceMax !== null ? Number(activePriceMax) : Infinity;
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
      default:
        result.sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount));
        break;
    }

    return result;
  }, [activeCategory, activeSort, activePriceMin, activePriceMax, activeMaterial]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all' || activePriceMin !== null;

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Category</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => updateFilter('category', 'all')}
              className={`text-sm transition-colors ${
                activeCategory === 'all'
                  ? 'text-ink font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => updateFilter('category', cat.id)}
                className={`text-sm transition-colors ${
                  activeCategory === cat.id
                    ? 'text-ink font-medium'
                    : 'text-ink-muted hover:text-ink'
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
        <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Price</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                params.delete('priceMin');
                params.delete('priceMax');
                setSearchParams(params);
              }}
              className={`text-sm transition-colors ${
                activePriceMin === null
                  ? 'text-ink font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              All Prices
            </button>
          </li>
          {priceRanges.map((range) => {
            const isActive = activePriceMin === String(range.min) && activePriceMax === String(range.max);
            return (
              <li key={range.label}>
                <button
                  className={`text-sm transition-colors ${
                    isActive ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
                  }`}
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.set('priceMin', String(range.min));
                    params.set('priceMax', String(range.max));
                    setSearchParams(params);
                  }}
                >
                  {range.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Material</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => updateFilter('material', 'all')}
              className={`text-sm transition-colors ${
                activeMaterial === 'all'
                  ? 'text-ink font-medium'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              All
            </button>
          </li>
          {[
            { label: '18K Gold Plated', value: 'gold' },
            { label: 'Silver Tone', value: 'silver' },
          ].map((mat) => (
            <li key={mat.value}>
              <button
                className={`text-sm transition-colors ${
                  activeMaterial === mat.value
                    ? 'text-ink font-medium'
                    : 'text-ink-muted hover:text-ink'
                }`}
                onClick={() => updateFilter('material', mat.value)}
              >
                {mat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearAllFilters}
          className="text-xs tracking-widest uppercase text-gold-500 hover:text-gold-600 transition-colors underline underline-offset-2"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="section-subtitle mb-3">Our Collection</p>
          <h1 className="section-title">All Jewelry</h1>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-ink-border">
              <p className="text-sm text-ink-muted">
                <span className="text-ink font-medium">{filtered.length}</span> products
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-ink hover:text-gold-500 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                {/* Sort dropdown */}
                <select
                  value={activeSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="text-xs tracking-wider uppercase text-ink bg-transparent border-none cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            <ProductGrid products={filtered} />
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream-50 p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-wider uppercase text-ink font-medium">Filters</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-2 hover:bg-ink-border/50 transition-colors rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  );
}