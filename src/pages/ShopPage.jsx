import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && !selectedCategories.includes(cat)) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.label === selectedPriceRange);
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
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const activeFilterCount = selectedCategories.length + (selectedPriceRange ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSearchParams({});
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-20">
      {/* Hero banner */}
      <div className="bg-velmora-cream py-14 md:py-20">
        <div className="max-w-[1440px] mx-auto section-pad text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-3">
            The Collection
          </p>
          <h1 className="heading-section text-3xl md:text-5xl">Shop All Jewelry</h1>
          <p className="text-sm text-velmora-stone mt-4 max-w-md mx-auto">
            Every piece in our collection is designed to be treasured. 18K gold-plated, hypoallergenic, and crafted for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto section-pad mt-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-velmora-charcoal hover:text-velmora-gold transition-colors font-medium lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-velmora-gold text-velmora-ivory text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden lg:block text-xs text-velmora-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-velmora-stone hidden sm:block">Sort by</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-mist/50 text-xs uppercase tracking-[0.1em] text-velmora-charcoal pl-4 pr-9 py-2.5 cursor-pointer hover:border-velmora-gold/50 transition-colors outline-none font-sans"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-velmora-charcoal font-medium mb-4">
                Category
              </h3>
              <div className="space-y-2.5">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        'w-4 h-4 border rounded-sm flex items-center justify-center transition-all',
                        selectedCategories.includes(cat.id)
                          ? 'bg-velmora-charcoal border-velmora-charcoal'
                          : 'border-velmora-mist group-hover:border-velmora-gold'
                      )}
                    >
                      {selectedCategories.includes(cat.id) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-[11px] text-velmora-stone ml-auto">({cat.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-velmora-charcoal font-medium mb-4">
                Price
              </h3>
              <div className="space-y-2.5">
                {priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === range.label}
                      onChange={() =>
                        setSelectedPriceRange(selectedPriceRange === range.label ? null : range.label)
                      }
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        'w-4 h-4 border rounded-full flex items-center justify-center transition-all',
                        selectedPriceRange === range.label
                          ? 'border-velmora-charcoal'
                          : 'border-velmora-mist group-hover:border-velmora-gold'
                      )}
                    >
                      {selectedPriceRange === range.label && (
                        <span className="w-2 h-2 bg-velmora-charcoal rounded-full" />
                      )}
                    </span>
                    <span className="text-sm text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-velmora-stone hover:text-velmora-gold underline transition-colors">
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No products found</p>
                <p className="text-sm text-velmora-stone mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 transition-opacity duration-300 lg:hidden',
          filtersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-velmora-ivory rounded-t-2xl max-h-[80vh] overflow-y-auto transition-transform duration-300',
            filtersOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-velmora-black">Filters</h2>
              <button onClick={() => setFiltersOpen(false)} className="p-1">
                <X className="w-5 h-5 text-velmora-stone" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-6">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-velmora-charcoal font-medium mb-4">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={cn(
                      'px-4 py-2 text-xs uppercase tracking-[0.1em] font-sans transition-all',
                      selectedCategories.includes(cat.id)
                        ? 'bg-velmora-charcoal text-velmora-ivory'
                        : 'border border-velmora-mist text-velmora-stone hover:border-velmora-gold'
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-velmora-charcoal font-medium mb-4">
                Price
              </h3>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() =>
                      setSelectedPriceRange(selectedPriceRange === range.label ? null : range.label)
                    }
                    className={cn(
                      'px-4 py-2 text-xs uppercase tracking-[0.1em] font-sans transition-all',
                      selectedPriceRange === range.label
                        ? 'bg-velmora-charcoal text-velmora-ivory'
                        : 'border border-velmora-mist text-velmora-stone hover:border-velmora-gold'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-velmora-mist/40">
              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="btn-ghost flex-1 text-center">
                  Clear All
                </button>
              )}
              <button
                onClick={() => setFiltersOpen(false)}
                className="btn-gold flex-1 text-center"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
