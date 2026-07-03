import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-50', label: 'Under $50' },
  { id: '50-80', label: '$50 – $80' },
  { id: '80-plus', label: '$80+' },
];

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: 'Gold Plated' },
  { id: 'silver', label: 'Silver Plated' },
  { id: 'rose-gold', label: 'Rose Gold' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

function FilterSidebar({ filters, setFilters, onClear, isMobile, onClose }) {
  const setFilter = (key, val) => setFilters((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <p className="label text-charcoal-900 mb-3">Category</p>
        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter('category', c.id)}
              className={`text-left text-sm font-sans py-1 transition-colors duration-150 ${
                filters.category === c.id
                  ? 'font-semibold text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              {filters.category === c.id && (
                <span className="inline-block w-1 h-1 rounded-full bg-gold-500 mr-2 mb-0.5" />
              )}
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="label text-charcoal-900 mb-3">Price</p>
        <div className="flex flex-col gap-2">
          {priceRanges.map((p) => (
            <button
              key={p.id}
              onClick={() => setFilter('price', p.id)}
              className={`text-left text-sm font-sans py-1 transition-colors duration-150 ${
                filters.price === p.id
                  ? 'font-semibold text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              {filters.price === p.id && (
                <span className="inline-block w-1 h-1 rounded-full bg-gold-500 mr-2 mb-0.5" />
              )}
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <p className="label text-charcoal-900 mb-3">Material</p>
        <div className="flex flex-col gap-2">
          {materials.map((m) => (
            <button
              key={m.id}
              onClick={() => setFilter('material', m.id)}
              className={`text-left text-sm font-sans py-1 transition-colors duration-150 ${
                filters.material === m.id
                  ? 'font-semibold text-charcoal-900'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              {filters.material === m.id && (
                <span className="inline-block w-1 h-1 rounded-full bg-gold-500 mr-2 mb-0.5" />
              )}
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all',
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    // Category
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price range
    if (filters.price === 'under-50') result = result.filter((p) => p.price < 50);
    else if (filters.price === '50-80') result = result.filter((p) => p.price >= 50 && p.price <= 80);
    else if (filters.price === '80-plus') result = result.filter((p) => p.price > 80);

    // Sort
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [filters, sort]);

  const activeFilterCount = [
    filters.category !== 'all',
    filters.price !== 'all',
    filters.material !== 'all',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setFilters({ category: 'all', price: 'all', material: 'all' });
  };

  const currentSortLabel = sortOptions.find((s) => s.id === sort)?.label;

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Page header */}
      <div className="bg-cream-100 border-b border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="label text-gold-500 mb-2">Velmora Collection</p>
          <h1 className="heading-1 text-charcoal-900">Shop All</h1>
          <p className="body-text text-charcoal-600 mt-2 max-w-md">
            Every piece hand-finished by artisans. Designed for everyday luxury.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-100">
          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal-700"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-charcoal-900 text-cream-50 text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Desktop filter pills */}
          <div className="hidden md:flex items-center gap-3 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilters((f) => ({ ...f, category: c.id }))}
                className={`px-4 py-1.5 text-xs font-sans font-medium transition-all duration-150 border ${
                  filters.category === c.id
                    ? 'bg-charcoal-900 text-cream-50 border-charcoal-900'
                    : 'bg-white text-charcoal-600 border-charcoal-200 hover:border-charcoal-900'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Active filter count */}
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="hidden md:flex items-center gap-1 text-xs font-sans text-charcoal-500 hover:text-charcoal-900 transition-colors"
              >
                <X size={12} />
                Clear filters
              </button>
            )}

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="flex items-center gap-2 text-sm font-sans text-charcoal-700 hover:text-charcoal-900 transition-colors"
              >
                Sort: <span className="font-medium">{currentSortLabel}</span>
                <ChevronDown size={14} className={`transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {sortDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-charcoal-200 shadow-soft z-20">
                  {sortOptions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSort(s.id);
                        setSortDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-sans transition-colors ${
                        sort === s.id
                          ? 'font-semibold text-charcoal-900 bg-cream-50'
                          : 'text-charcoal-600 hover:bg-cream-50'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile filter sidebar */}
        {mobileFiltersOpen && (
          <>
            <div
              className="fixed inset-0 bg-charcoal-950/50 z-40 md:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="fixed left-0 bottom-0 top-0 w-72 bg-cream-50 z-50 md:hidden overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-lg text-charcoal-900">Filters</span>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1">
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                onClear={clearFilters}
                isMobile
                onClose={() => setMobileFiltersOpen(false)}
              />
              <div className="mt-8 pt-6 border-t border-charcoal-100">
                <button
                  onClick={() => { clearFilters(); setMobileFiltersOpen(false); }}
                  className="btn-secondary w-full mb-3"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="btn-primary w-full"
                >
                  Show {filtered.length} Results
                </button>
              </div>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block col-span-1">
            <div className="sticky top-24">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                onClear={clearFilters}
              />
            </div>
          </aside>

          {/* Product grid */}
          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="heading-4 text-charcoal-700 mb-3">No pieces found</p>
                <p className="body-text text-charcoal-500 mb-6">
                  Try adjusting your filters to discover more jewelry.
                </p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <p className="body-text-sm text-charcoal-500 mb-6">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} showReviews />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
