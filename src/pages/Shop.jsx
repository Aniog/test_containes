import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories, priceRanges } from '@/data/products';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [showSort, setShowSort] = useState(false);

  // Read category from URL params on mount
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.some((c) => c.id === cat)) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
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

  const toggleCategory = (catId) => {
    setSelectedCategories((prev) =>
      prev.includes(catId) ? prev.filter((c) => c !== catId) : [...prev, catId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange;

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 pt-8">
          <h1 className="section-title mb-3">Shop All</h1>
          <p className="section-subtitle">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''} crafted to be treasured.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-espresso/10">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-espresso/70 hover:text-espresso transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            )}
          </button>

          <div className="relative ml-auto">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-espresso/70 hover:text-espresso transition-colors"
            >
              Sort by: {sortOptions.find((o) => o.value === sortBy)?.label}
              <ChevronDown className="w-3 h-3" />
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-2 bg-sand-50 border border-espresso/10 shadow-lg z-10 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setShowSort(false);
                    }}
                    className={cn(
                      'block w-full text-left px-4 py-2.5 text-xs tracking-wide transition-colors',
                      sortBy === opt.value
                        ? 'text-gold bg-sand-100'
                        : 'text-espresso/70 hover:text-espresso hover:bg-sand-100'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-[11px] tracking-widest uppercase text-espresso/40 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          'w-4 h-4 border flex items-center justify-center transition-all',
                          selectedCategories.includes(cat.id)
                            ? 'border-gold bg-gold'
                            : 'border-espresso/20 group-hover:border-espresso/40'
                        )}
                      >
                        {selectedCategories.includes(cat.id) && (
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm text-espresso/70 group-hover:text-espresso transition-colors">
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-[11px] tracking-widest uppercase text-espresso/40 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label
                      key={range.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === range.id}
                        onChange={() =>
                          setSelectedPriceRange(
                            selectedPriceRange === range.id ? null : range.id
                          )
                        }
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          'w-4 h-4 border rounded-full flex items-center justify-center transition-all',
                          selectedPriceRange === range.id
                            ? 'border-gold'
                            : 'border-espresso/20 group-hover:border-espresso/40'
                        )}
                      >
                        {selectedPriceRange === range.id && (
                          <span className="w-2 h-2 bg-gold rounded-full" />
                        )}
                      </span>
                      <span className="text-sm text-espresso/70 group-hover:text-espresso transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-wider uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso/40 mb-4">
                  No pieces match your filters.
                </p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index + 20} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {mobileFiltersOpen && (
          <>
            <div
              className="fixed inset-0 bg-espresso/50 z-50 lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-sand-50 z-50 lg:hidden overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl text-espresso">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 text-espresso/50 hover:text-espresso transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Category */}
                <div className="mb-8">
                  <h3 className="font-sans text-[11px] tracking-widest uppercase text-espresso/40 mb-4">
                    Category
                  </h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.id)}
                          onChange={() => toggleCategory(cat.id)}
                          className="sr-only"
                        />
                        <span
                          className={cn(
                            'w-4 h-4 border flex items-center justify-center transition-all',
                            selectedCategories.includes(cat.id)
                              ? 'border-gold bg-gold'
                              : 'border-espresso/20'
                          )}
                        >
                          {selectedCategories.includes(cat.id) && (
                            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm text-espresso/70">{cat.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <h3 className="font-sans text-[11px] tracking-widest uppercase text-espresso/40 mb-4">
                    Price
                  </h3>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-price"
                          checked={selectedPriceRange === range.id}
                          onChange={() =>
                            setSelectedPriceRange(
                              selectedPriceRange === range.id ? null : range.id
                            )
                          }
                          className="sr-only"
                        />
                        <span
                          className={cn(
                            'w-4 h-4 border rounded-full flex items-center justify-center transition-all',
                            selectedPriceRange === range.id
                              ? 'border-gold'
                              : 'border-espresso/20'
                          )}
                        >
                          {selectedPriceRange === range.id && (
                            <span className="w-2 h-2 bg-gold rounded-full" />
                          )}
                        </span>
                        <span className="text-sm text-espresso/70">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    clearFilters();
                    setMobileFiltersOpen(false);
                  }}
                  className="text-xs tracking-wider uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
