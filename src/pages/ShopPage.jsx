import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = ['earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
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
  }, [activeCategory, activePrice, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== (key === 'category' ? activeCategory : activePrice)) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => setSearchParams({});

  const hasFilters = activeCategory || activePrice;

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase text-velvet-cream mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', activeCategory === cat ? '' : cat)}
              className={`block w-full text-left text-sm py-1.5 transition-colors capitalize ${
                activeCategory === cat
                  ? 'text-velvet-gold'
                  : 'text-velvet-taupe hover:text-velvet-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase text-velvet-cream mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', activePrice === range.label ? '' : range.label)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activePrice === range.label
                  ? 'text-velvet-gold'
                  : 'text-velvet-taupe hover:text-velvet-cream'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button onClick={clearFilters} className="text-xs text-velvet-muted hover:text-velvet-gold tracking-wider uppercase transition-colors">
          Clear all
        </button>
      )}
    </>
  );

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-velvet-cream">
              {activeCategory ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) : 'All Jewelry'}
            </h1>
            <p className="text-velvet-muted text-sm mt-1">{filtered.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-velvet-taupe text-xs tracking-wider uppercase"
              onClick={() => setMobileFilters(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="appearance-none bg-transparent text-velvet-taupe text-xs tracking-wider uppercase pr-6 py-1 focus:outline-none cursor-pointer hover:text-velvet-cream transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velvet-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-taupe text-sm">No pieces match your selection.</p>
                <button onClick={clearFilters} className="btn-outline mt-4 text-xs">
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

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-50 md:hidden"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-velvet-surface z-50 rounded-t-xl p-6 max-h-[70vh] overflow-y-auto md:hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm tracking-widest uppercase text-velvet-cream">Filters</h3>
              <button onClick={() => setMobileFilters(false)}>
                <X className="w-5 h-5 text-velvet-taupe" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </main>
  );
}