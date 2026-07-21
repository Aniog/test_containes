import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/shared/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryParam = searchParams.get('category') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (categoryParam) {
      filtered = filtered.filter((p) => p.category === categoryParam);
    }

    // Filter by price
    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.reverse();
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [categoryParam, minPrice, maxPrice, sortBy]);

  const hasActiveFilters = categoryParam || minPrice || maxPrice;

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'p-6' : ''}`}>
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-lg font-medium"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Filters
          </h2>
          <button
            onClick={() => setIsMobileFiltersOpen(false)}
            className="p-2"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Clear Filters */}
      {hasActiveFilters && !isMobile && (
        <button
          onClick={clearFilters}
          className="text-sm text-[var(--champagne-gold)] hover:underline mb-6"
        >
          Clear all filters
        </button>
      )}

      {/* Category Filter */}
      <div className="mb-8">
        <h3
          className="text-sm font-medium tracking-wider text-[var(--deep-espresso)] mb-4"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          CATEGORY
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              checked={!categoryParam}
              onChange={() => updateFilter('category', '')}
              className="w-4 h-4 accent-[var(--champagne-gold)]"
            />
            <span className="text-sm text-[var(--charcoal)] group-hover:text-[var(--champagne-gold)] transition-colors">
              All
            </span>
          </label>
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                checked={categoryParam === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="w-4 h-4 accent-[var(--champagne-gold)]"
              />
              <span className="text-sm text-[var(--charcoal)] group-hover:text-[var(--champagne-gold)] transition-colors capitalize">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3
          className="text-sm font-medium tracking-wider text-[var(--deep-espresso)] mb-4"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          PRICE
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={!minPrice && !maxPrice}
              onChange={() => {
                updateFilter('minPrice', '');
                updateFilter('maxPrice', '');
              }}
              className="w-4 h-4 accent-[var(--champagne-gold)]"
            />
            <span className="text-sm text-[var(--charcoal)] group-hover:text-[var(--champagne-gold)] transition-colors">
              All Prices
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={minPrice === '30' && maxPrice === '50'}
              onChange={() => {
                updateFilter('minPrice', '30');
                updateFilter('maxPrice', '50');
              }}
              className="w-4 h-4 accent-[var(--champagne-gold)]"
            />
            <span className="text-sm text-[var(--charcoal)] group-hover:text-[var(--champagne-gold)] transition-colors">
              $30 - $50
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={minPrice === '50' && maxPrice === '80'}
              onChange={() => {
                updateFilter('minPrice', '50');
                updateFilter('maxPrice', '80');
              }}
              className="w-4 h-4 accent-[var(--champagne-gold)]"
            />
            <span className="text-sm text-[var(--charcoal)] group-hover:text-[var(--champagne-gold)] transition-colors">
              $50 - $80
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={minPrice === '80' && !maxPrice}
              onChange={() => {
                updateFilter('minPrice', '80');
                updateFilter('maxPrice', '');
              }}
              className="w-4 h-4 accent-[var(--champagne-gold)]"
            />
            <span className="text-sm text-[var(--charcoal)] group-hover:text-[var(--champagne-gold)] transition-colors">
              $80+
            </span>
          </label>
        </div>
      </div>

      {/* Apply Filters Button (Mobile) */}
      {isMobile && (
        <button
          onClick={() => setIsMobileFiltersOpen(false)}
          className="w-full py-4 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] font-medium text-sm"
        >
          Apply Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl text-[var(--deep-espresso)] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop All
          </h1>
          <p className="text-[var(--charcoal)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--light-warm-gray)]">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] text-xs rounded-full flex items-center justify-center">
                    {hasActiveFilters ? '!' : ''}
                  </span>
                )}
              </button>

              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="hidden md:flex items-center gap-2 flex-wrap">
                  {categoryParam && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--warm-stone)] text-sm">
                      {categoryParam}
                      <button
                        onClick={() => updateFilter('category', '')}
                        className="ml-1 hover:text-[var(--champagne-gold)]"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {(minPrice || maxPrice) && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--warm-stone)] text-sm">
                      ${minPrice || '0'} - ${maxPrice || '∞'}
                      <button
                        onClick={() => {
                          updateFilter('minPrice', '');
                          updateFilter('maxPrice', '');
                        }}
                        className="ml-1 hover:text-[var(--champagne-gold)]"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[var(--champagne-gold)] hover:underline"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Sort Dropdown */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm pr-6 py-2 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-[var(--soft-gray)]" />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p
                  className="text-lg mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  No products found
                </p>
                <p className="text-[var(--soft-gray)] mb-6">
                  Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-[var(--ivory-cream)] z-50 lg:hidden max-h-[85vh] overflow-y-auto rounded-t-2xl">
            <FilterSidebar isMobile />
          </div>
        </>
      )}
    </main>
  );
};

export default ShopPage;
