import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products } from '../data/products';
import FilterSidebar from '../components/collection/FilterSidebar';
import ProductCard from '../components/collection/ProductCard';

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'name', name: 'Name' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: null,
    priceRange: null,
    material: null,
  });

  // Sync filters with URL params on mount and URL change
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setFilters(prev => ({ ...prev, category: categoryFromUrl }));
    }
  }, [searchParams]);

  // Get product counts by category
  const productCounts = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange) {
      const rangeMap = {
        'under-50': { min: 0, max: 50 },
        '50-75': { min: 50, max: 75 },
        '75-100': { min: 75, max: 100 },
        'over-100': { min: 100, max: Infinity },
      };
      const range = rangeMap[filters.priceRange];
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order (bestsellers first)
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update URL
    if (newFilters.category) {
      setSearchParams({ category: newFilters.category });
    } else {
      setSearchParams({});
    }
  };

  const activeFilterCount = [filters.category, filters.priceRange, filters.material]
    .filter(Boolean).length;

  return (
    <main className="pt-8 pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="heading-1 mb-4" style={{ color: 'var(--color-text)' }}>
            Shop Our Collection
          </h1>
          <p className="text-[#6B6560] max-w-xl mx-auto">
            Discover our curated selection of demi-fine jewelry, crafted with 
            18K gold plating for lasting elegance.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DC]">
          {/* Left: Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm"
            style={{ color: 'var(--color-text)' }}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full text-[10px] flex items-center justify-center text-white" style={{ backgroundColor: 'var(--color-gold)' }}>
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Results Count */}
          <p className="text-sm text-[#6B6560] hidden md:block">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          {/* Right: Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm pr-6 py-1 cursor-pointer focus:outline-none"
              style={{ color: 'var(--color-text)' }}
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-[#6B6560]" />
          </div>
        </div>

        {/* Active Filters (Mobile) */}
        {activeFilterCount > 0 && (
          <div className="md:hidden flex flex-wrap gap-2 mb-6">
            {filters.category && (
              <button
                onClick={() => handleFilterChange({ ...filters, category: null })}
                className="flex items-center gap-1 px-3 py-1 bg-[#F5F2ED] text-sm"
              >
                {filters.category}
                <X className="w-3 h-3" />
              </button>
            )}
            {filters.priceRange && (
              <button
                onClick={() => handleFilterChange({ ...filters, priceRange: null })}
                className="flex items-center gap-1 px-3 py-1 bg-[#F5F2ED] text-sm"
              >
                {filters.priceRange}
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        )}

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            productCounts={productCounts}
          />

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              /* Empty State */
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-4" style={{ color: 'var(--color-text)' }}>
                  No products found
                </p>
                <p className="text-[#6B6560] mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => handleFilterChange({ category: null, priceRange: null, material: null })}
                  className="btn btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
