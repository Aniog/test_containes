import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { products } from '@/lib/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const categoryFilters = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const materialFilters = [
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
];

const priceRanges = [
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: 'over-75', label: 'Over $75' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const filters = useMemo(() => {
    const cat = searchParams.get('category') || '';
    const mat = searchParams.get('material') || '';
    const price = searchParams.get('price') || '';
    return { category: cat, material: mat, price };
  }, [searchParams]);

  const setFilter = (key, value) => {
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

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters.material) {
      result = result.filter(p => p.material === filters.material);
    }
    if (filters.price === 'under-50') {
      result = result.filter(p => p.price < 50);
    } else if (filters.price === '50-75') {
      result = result.filter(p => p.price >= 50 && p.price <= 75);
    } else if (filters.price === 'over-75') {
      result = result.filter(p => p.price > 75);
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
  }, [filters, sortBy]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="py-10 lg:py-16 text-center">
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-taupe mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-3xl lg:text-5xl text-velmora-espresso font-medium">
            Shop All
          </h1>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-espresso font-medium mb-6">
                Filters
              </p>

              {/* Category */}
              <div className="mb-8">
                <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">
                  Category
                </p>
                <div className="space-y-2">
                  {categoryFilters.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFilter('category', f.value)}
                      className={`block text-sm font-sans transition-colors ${
                        filters.category === f.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-stone hover:text-velmora-espresso'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">
                  Material
                </p>
                <div className="space-y-2">
                  {materialFilters.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFilter('material', f.value)}
                      className={`block text-sm font-sans transition-colors ${
                        filters.material === f.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-stone hover:text-velmora-espresso'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">
                  Price
                </p>
                <div className="space-y-2">
                  {priceRanges.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFilter('price', f.value)}
                      className={`block text-sm font-sans transition-colors ${
                        filters.price === f.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-stone hover:text-velmora-espresso'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear all */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => setSearchParams({})}
                  className="text-[11px] tracking-wider uppercase text-velmora-rose hover:text-velmora-burgundy font-sans font-medium transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-espresso font-sans font-medium"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-velmora-gold text-white text-[10px] flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <span className="text-xs text-velmora-taupe font-sans">
                  {filteredProducts.length} products
                </span>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase text-velmora-espresso font-sans font-medium pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-taupe pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-stone mb-4">No products found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs tracking-wider uppercase text-velmora-gold hover:text-velmora-gold-dark font-medium font-sans"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-velmora-ivory rounded-t-2xl p-6 animate-slide-up max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="font-serif text-lg text-velmora-espresso">Filters</p>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-velmora-stone" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categoryFilters.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFilter('category', f.value)}
                      className={`px-4 py-2 text-xs font-sans border transition-colors ${
                        filters.category === f.value
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-black/10 text-velmora-stone'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">Material</p>
                <div className="flex flex-wrap gap-2">
                  {materialFilters.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFilter('material', f.value)}
                      className={`px-4 py-2 text-xs font-sans border transition-colors ${
                        filters.material === f.value
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-black/10 text-velmora-stone'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-taupe mb-3">Price</p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFilter('price', f.value)}
                      className={`px-4 py-2 text-xs font-sans border transition-colors ${
                        filters.price === f.value
                          ? 'border-velmora-gold bg-velmora-gold text-white'
                          : 'border-black/10 text-velmora-stone'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeFilterCount > 0 && (
                <button
                  onClick={() => { setSearchParams({}); setMobileFiltersOpen(false); }}
                  className="text-[11px] tracking-wider uppercase text-velmora-rose font-sans font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Show {filteredProducts.length} Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
