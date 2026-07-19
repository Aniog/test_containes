import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialCollection = searchParams.get('collection') || '';

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (initialCollection === 'bestsellers') {
      result = result.filter((p) => p.bestseller);
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (sort) {
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
  }, [selectedCategory, priceRange, sort, initialCollection]);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '30-50', label: '$30 — $50' },
    { value: '50-70', label: '$50 — $70' },
    { value: '70-120', label: '$70 — $120' },
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  const activeFilters =
    (selectedCategory ? 1 : 0) + (priceRange !== 'all' ? 1 : 0);

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-velmora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink mb-2">
            {initialCollection === 'bestsellers' ? 'Bestsellers' : 'All Jewelry'}
          </h1>
          <p className="text-sm text-velmora-stone">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-sand">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-ink hover:text-velmora-golddark transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilters > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFilters}
              </span>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-ink"
            >
              Sort: {sortOptions.find((s) => s.value === sort)?.label}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-white border border-velmora-sand shadow-lg z-50 min-w-[180px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSort(opt.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs tracking-wider uppercase transition-colors ${
                        sort === opt.value
                          ? 'bg-velmora-cream text-velmora-ink font-medium'
                          : 'text-velmora-stone hover:bg-velmora-cream'
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

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-2 mb-8">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`text-left text-sm transition-colors ${
                    !selectedCategory
                      ? 'text-velmora-ink font-medium'
                      : 'text-velmora-stone hover:text-velmora-ink'
                  }`}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`text-left text-sm transition-colors ${
                      selectedCategory === c.id
                        ? 'text-velmora-ink font-medium'
                        : 'text-velmora-stone hover:text-velmora-ink'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setPriceRange(r.value)}
                    className={`text-left text-sm transition-colors ${
                      priceRange === r.value
                        ? 'text-velmora-ink font-medium'
                        : 'text-velmora-stone hover:text-velmora-ink'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-stone text-sm">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setPriceRange('all');
                  }}
                  className="mt-4 text-velmora-gold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          <div className="flex-1 bg-black/40" onClick={() => setFiltersOpen(false)} />
          <div className="w-80 bg-velmora-bg h-full shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl tracking-wide">Filters</h2>
              <button onClick={() => setFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-3 mb-8">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`text-left text-sm ${
                    !selectedCategory ? 'text-velmora-ink font-medium' : 'text-velmora-stone'
                  }`}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`text-left text-sm ${
                      selectedCategory === c.id
                        ? 'text-velmora-ink font-medium'
                        : 'text-velmora-stone'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <h3 className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-3">
                {priceRanges.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setPriceRange(r.value)}
                    className={`text-left text-sm ${
                      priceRange === r.value
                        ? 'text-velmora-ink font-medium'
                        : 'text-velmora-stone'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFiltersOpen(false)}
              className="w-full bg-velmora-ink text-white py-3.5 text-xs tracking-widest uppercase font-medium mt-4"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
