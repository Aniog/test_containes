import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { useImageLoader } from '@/hooks/useImageLoader';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const materials = [
  { value: 'gold-plated', label: '18K Gold Plated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50to80', label: '$50 — $80' },
  { value: 'over80', label: 'Over $80' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useImageLoader();

  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [activePrice, setActivePrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    if (categories.some((c) => c.value === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const updateCategory = (value) => {
    setActiveCategory(value);
    const next = new URLSearchParams(searchParams);
    if (value === 'all') {
      next.delete('category');
    } else {
      next.set('category', value);
    }
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    if (activePrice !== 'all') {
      result = result.filter((p) => {
        if (activePrice === 'under50') return p.price < 50;
        if (activePrice === '50to80') return p.price >= 50 && p.price <= 80;
        if (activePrice === 'over80') return p.price > 80;
        return true;
      });
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

  const activeFiltersCount =
    (activeCategory !== 'all' ? 1 : 0) +
    (activeMaterial !== 'all' ? 1 : 0) +
    (activePrice !== 'all' ? 1 : 0);

  const clearFilters = () => {
    setActiveCategory('all');
    setActiveMaterial('all');
    setActivePrice('all');
    setSearchParams({}, { replace: true });
  };

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-muted border-b border-border">
        <div className="mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-20 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Shop</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light">The Collection</h1>
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Mobile filter toggle */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium border border-border px-4 py-2.5"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border px-4 pr-10 py-2.5 text-xs uppercase tracking-[0.16em] font-medium focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-lg uppercase tracking-wide">Filter By</h2>
                  {activeFiltersCount > 0 && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="text-xs text-muted-foreground hover:text-foreground underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <FilterGroup title="Category">
                  {categories.map((cat) => (
                    <label key={cat.value} className="flex items-center gap-3 py-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={cat.value}
                        checked={activeCategory === cat.value}
                        onChange={() => updateCategory(cat.value)}
                        className="accent-foreground w-4 h-4"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </FilterGroup>

                <FilterGroup title="Material">
                  {materials.map((mat) => (
                    <label key={mat.value} className="flex items-center gap-3 py-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="material"
                        value={mat.value}
                        checked={activeMaterial === mat.value}
                        onChange={() => setActiveMaterial(mat.value)}
                        className="accent-foreground w-4 h-4"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {mat.label}
                      </span>
                    </label>
                  ))}
                </FilterGroup>

                <FilterGroup title="Price">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center gap-3 py-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={activePrice === range.value}
                        onChange={() => setActivePrice(range.value)}
                        className="accent-foreground w-4 h-4"
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </FilterGroup>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              <div className="hidden lg:flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-border px-4 pr-10 py-2.5 text-xs uppercase tracking-[0.16em] font-medium focus:outline-none"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-xl mb-3">No pieces match your filters.</p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs uppercase tracking-[0.16em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                  >
                    Clear Filters
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
      </section>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-foreground/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl max-h-[85vh] overflow-y-auto',
            'transition-transform duration-500 ease-out-expo',
            mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-background">
            <h2 className="font-serif text-lg uppercase tracking-wide">Filters</h2>
            <button type="button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-5 space-y-8">
            <MobileFilterGroup title="Category">
              {categories.map((cat) => (
                <label key={cat.value} className="flex items-center gap-3 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category-mobile"
                    value={cat.value}
                    checked={activeCategory === cat.value}
                    onChange={() => updateCategory(cat.value)}
                    className="accent-foreground w-4 h-4"
                  />
                  <span className="text-sm text-muted-foreground">{cat.label}</span>
                </label>
              ))}
            </MobileFilterGroup>
            <MobileFilterGroup title="Price">
              {priceRanges.map((range) => (
                <label key={range.value} className="flex items-center gap-3 py-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price-mobile"
                    value={range.value}
                    checked={activePrice === range.value}
                    onChange={() => setActivePrice(range.value)}
                    className="accent-foreground w-4 h-4"
                  />
                  <span className="text-sm text-muted-foreground">{range.label}</span>
                </label>
              ))}
            </MobileFilterGroup>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-4 bg-accent text-accent-foreground text-xs uppercase tracking-[0.16em] font-medium hover:bg-accent-hover transition-colors"
            >
              Show {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-8 pb-8 border-b border-border">
      <h3 className="text-xs uppercase tracking-[0.16em] font-medium mb-3">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function MobileFilterGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.16em] font-medium mb-3">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}
