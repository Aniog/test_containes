import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'sets', label: 'Gift Sets' },
];

const materials = [
  { value: '18k-gold', label: '18K Gold Plated' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50', filter: (p) => p.price < 50 },
  { value: '50-100', label: '$50 – $100', filter: (p) => p.price >= 50 && p.price <= 100 },
  { value: 'over-100', label: 'Over $100', filter: (p) => p.price > 100 },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePrice, activeMaterial]);

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.value === activePrice);
      if (range) result = result.filter(range.filter);
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
  }, [activeCategory, activeMaterial, activePrice, sortBy]);

  const hasFilters = activeCategory || activePrice || activeMaterial;

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-20 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-velmora-stone mb-8">
          <Link to="/" className="hover:text-velmora-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-velmora-ink">Shop</span>
        </nav>

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl lg:text-4xl text-velmora-ink font-light tracking-wide">
              {activeCategory ? categories.find((c) => c.value === activeCategory)?.label : 'All Jewelry'}
            </h1>
            <p className="text-sm text-velmora-stone mt-1">{filtered.length} pieces</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center gap-2 text-xs font-sans tracking-[0.1em] uppercase text-velmora-ink"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {hasFilters && <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-sans bg-transparent border border-velmora-sand px-3 py-2 text-velmora-ink focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters */}
          {/* Desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterSection
              title="Category"
              options={categories}
              active={activeCategory}
              onChange={(v) => setFilter('category', v)}
            />
            <FilterSection
              title="Material"
              options={materials}
              active={activeMaterial}
              onChange={(v) => setFilter('material', v)}
            />
            <FilterSection
              title="Price"
              options={priceRanges}
              active={activePrice}
              onChange={(v) => setFilter('price', v)}
            />
            {hasFilters && (
              <button
                onClick={() => setSearchParams({})}
                className="text-xs font-sans text-velmora-stone underline hover:text-velmora-ink transition-colors mt-4"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Mobile filter overlay */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-velmora-ink/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-72 bg-velmora-cream shadow-2xl p-6 animate-slide-right">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-lg">Filters</span>
                  <button onClick={() => setFilterOpen(false)} className="text-velmora-stone">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSection
                  title="Category"
                  options={categories}
                  active={activeCategory}
                  onChange={(v) => { setFilter('category', v); }}
                />
                <FilterSection
                  title="Material"
                  options={materials}
                  active={activeMaterial}
                  onChange={(v) => { setFilter('material', v); }}
                />
                <FilterSection
                  title="Price"
                  options={priceRanges}
                  active={activePrice}
                  onChange={(v) => { setFilter('price', v); }}
                />
                {hasFilters && (
                  <button
                    onClick={() => { setSearchParams({}); setFilterOpen(false); }}
                    className="text-xs font-sans text-velmora-stone underline hover:text-velmora-ink transition-colors mt-4"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-stone">No products found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs font-sans text-velmora-gold underline mt-3"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
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

function FilterSection({ title, options, active, onChange }) {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-sans tracking-[0.1em] uppercase text-velmora-ink mb-3">
        {title}
      </h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name={title}
              checked={active === opt.value}
              onChange={() => onChange(active === opt.value ? '' : opt.value)}
              className="sr-only"
            />
            <span className={`w-3.5 h-3.5 border flex items-center justify-center transition-colors ${
              active === opt.value
                ? 'border-velmora-gold bg-velmora-gold'
                : 'border-velmora-sand group-hover:border-velmora-stone'
            }`}>
              {active === opt.value && (
                <svg className="w-2 h-2 text-white" viewBox="0 0 10 10" fill="currentColor">
                  <circle cx="5" cy="5" r="2" />
                </svg>
              )}
            </span>
            <span className="text-xs font-sans text-velmora-stone group-hover:text-velmora-ink transition-colors">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}