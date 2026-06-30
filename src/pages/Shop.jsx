import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/products';

const categories = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Sets', value: 'sets' },
];

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 - $75', value: '50-75' },
  { label: '$75 - $100', value: '75-100' },
  { label: 'Over $100', value: '100-999' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    setLoading(true);
    const filters = {};
    if (activeCategory) filters.category = activeCategory;
    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      filters.minPrice = min;
      if (max < 999) filters.maxPrice = max;
    }
    if (activeSort === 'price-asc') {
      filters.sortBy = 'price';
      filters.sortOrder = 'asc';
    } else if (activeSort === 'price-desc') {
      filters.sortBy = 'price';
      filters.sortOrder = 'desc';
    } else if (activeSort === 'newest') {
      filters.sortBy = 'created_at';
      filters.sortOrder = 'desc';
    }

    fetchProducts(filters)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, [activeCategory, activePrice, activeSort]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const activeFiltersCount =
    (activeCategory ? 1 : 0) + (activePrice ? 1 : 0);

  return (
    <div className="min-h-screen bg-surface pt-20 md:pt-24">
      <div className="container-main">
        {/* Header */}
        <div className="py-8 md:py-12 border-b border-hairline">
          <h1 className="font-serif text-4xl md:text-5xl text-base mb-2">
            Shop All
          </h1>
          <p className="font-sans text-sm text-text-secondary">
            {products.length} pieces curated for everyday elegance
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-5 border-b border-hairline">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-medium text-base"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold text-base text-[10px] font-medium flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => updateParam('category', cat.value)}
                className={`font-sans text-xs uppercase tracking-widest font-medium px-4 py-2 border transition-colors duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-base text-surface border-base'
                    : 'bg-transparent text-base border-hairline hover:border-base'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-medium text-base"
            >
              Sort
              <ChevronDown className="w-4 h-4" />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 bg-card border border-hairline shadow-lg z-50 min-w-[200px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        updateParam('sort', opt.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 font-sans text-xs uppercase tracking-widest transition-colors ${
                        activeSort === opt.value
                          ? 'bg-gold/10 text-base font-medium'
                          : 'text-text-secondary hover:bg-hairline'
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
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0 py-8">
            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest font-medium text-base mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => updateParam('category', cat.value)}
                    className={`text-left font-sans text-sm transition-colors ${
                      activeCategory === cat.value
                        ? 'text-base font-medium'
                        : 'text-text-secondary hover:text-base'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest font-medium text-base mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => updateParam('price', range.value)}
                    className={`text-left font-sans text-sm transition-colors ${
                      activePrice === range.value
                        ? 'text-base font-medium'
                        : 'text-text-secondary hover:text-base'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  updateParam('category', '');
                  updateParam('price', '');
                }}
                className="font-sans text-xs uppercase tracking-widest text-text-muted hover:text-base transition-colors underline"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1 py-8">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-hairline mb-4" />
                    <div className="h-3 bg-hairline w-2/3 mx-auto mb-2" />
                    <div className="h-3 bg-hairline w-1/3 mx-auto" />
                  </div>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-base mb-2">
                  No pieces found
                </p>
                <p className="font-sans text-sm text-text-secondary">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-base/40 z-[60]"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-[300px] bg-surface z-[70] shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-serif text-xl text-base">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-base"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-widest font-medium text-base mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        updateParam('category', cat.value);
                        setMobileFiltersOpen(false);
                      }}
                      className={`text-left font-sans text-sm transition-colors ${
                        activeCategory === cat.value
                          ? 'text-base font-medium'
                          : 'text-text-secondary'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest font-medium text-base mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => {
                        updateParam('price', range.value);
                        setMobileFiltersOpen(false);
                      }}
                      className={`text-left font-sans text-sm transition-colors ${
                        activePrice === range.value
                          ? 'text-base font-medium'
                          : 'text-text-secondary'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {activeFiltersCount > 0 && (
              <div className="px-6 py-5 border-t border-hairline">
                <button
                  onClick={() => {
                    updateParam('category', '');
                    updateParam('price', '');
                    setMobileFiltersOpen(false);
                  }}
                  className="w-full border border-base text-base font-sans text-xs uppercase tracking-widest font-medium py-3"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
