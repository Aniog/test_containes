import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryFromUrl = searchParams.get('category');

  const [filters, setFilters] = useState({
    category: categoryFromUrl ? [categoryFromUrl] : undefined,
    priceRange: undefined,
    material: undefined,
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update URL
    const params = new URLSearchParams();
    if (newFilters.category?.length === 1) {
      params.set('category', newFilters.category[0]);
    }
    setSearchParams(params);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category && filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    // Filter by price range
    if (filters.priceRange && filters.priceRange.length > 0) {
      result = result.filter((p) => {
        return filters.priceRange.some((rangeId) => {
          const range = sortOptions.find((o) => o.id === rangeId);
          // We'll handle this inline
          switch (rangeId) {
            case 'under-50': return p.price < 50;
            case '50-75': return p.price >= 50 && p.price <= 75;
            case '75-100': return p.price >= 75 && p.price <= 100;
            case 'over-100': return p.price > 100;
            default: return true;
          }
        });
      });
    }

    // Filter by material
    if (filters.material && filters.material.length > 0) {
      result = result.filter((p) => {
        return filters.material.some((matId) => {
          if (matId === 'gold') return p.variants?.includes('gold');
          if (matId === 'silver') return p.variants?.includes('silver');
          return true;
        });
      });
    }

    // Sort
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
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order (bestsellers first)
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
    }

    return result;
  }, [filters, sortBy]);

  const activeFilterCount = (filters.category?.length || 0) + (filters.priceRange?.length || 0) + (filters.material?.length || 0);

  return (
    <div className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-velmora-warm py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-black text-center">
            {categoryFromUrl ? `${categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1)}` : 'All Jewelry'}
          </h1>
          <p className="text-sm text-velmora-muted text-center mt-2 max-w-md mx-auto">
            Discover our collection of demi-fine jewelry, designed to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            isOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <p className="text-sm text-velmora-muted">
                {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-velmora-border text-xs font-sans font-medium tracking-widest uppercase text-velmora-black hover:border-velmora-black transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-velmora-border pl-4 pr-10 py-2 text-xs font-sans font-medium tracking-widest uppercase text-velmora-black focus:outline-none focus:border-velmora-black cursor-pointer"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active filters */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.category?.map((catId) => (
                  <span
                    key={catId}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-warm text-xs font-sans text-velmora-black"
                  >
                    {catId}
                    <button
                      onClick={() => handleFilterChange({ ...filters, category: filters.category.filter((c) => c !== catId) })}
                      className="text-velmora-stone hover:text-velmora-black"
                    >
                      &times;
                    </button>
                  </span>
                ))}
                {filters.priceRange?.map((rangeId) => {
                  const range = { 'under-50': 'Under $50', '50-75': '$50-$75', '75-100': '$75-$100', 'over-100': 'Over $100' }[rangeId];
                  return (
                    <span
                      key={rangeId}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-warm text-xs font-sans text-velmora-black"
                    >
                      {range}
                      <button
                        onClick={() => handleFilterChange({ ...filters, priceRange: filters.priceRange.filter((r) => r !== rangeId) })}
                        className="text-velmora-stone hover:text-velmora-black"
                      >
                        &times;
                      </button>
                    </span>
                  );
                })}
                {filters.material?.map((matId) => {
                  const mat = { gold: '18K Gold', silver: 'Silver Tone' }[matId];
                  return (
                    <span
                      key={matId}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-warm text-xs font-sans text-velmora-black"
                    >
                      {mat}
                      <button
                        onClick={() => handleFilterChange({ ...filters, material: filters.material.filter((m) => m !== matId) })}
                        className="text-velmora-stone hover:text-velmora-black"
                      >
                        &times;
                      </button>
                    </span>
                  );
                })}
              </div>
            )}

            {/* Product grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-muted mb-2">No pieces found</p>
                <p className="text-sm text-velmora-stone">Try adjusting your filters to discover more jewelry.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
