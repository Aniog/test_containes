import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/shop/FilterSidebar';
import { products } from '../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFromUrl = searchParams.get('category');

  const [filters, setFilters] = useState({
    category: categoryFromUrl,
    priceRange: null,
    priceMin: null,
    priceMax: null,
    material: null,
    sort: 'featured',
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.priceMin !== null && filters.priceMax !== null) {
      result = result.filter((p) => p.price >= filters.priceMin && p.price <= filters.priceMax);
    }

    // Material filter
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
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
        break;
    }

    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    if (newFilters.category) {
      setSearchParams({ category: newFilters.category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-base-cream">
      {/* Page header */}
      <div className="pt-24 pb-8 bg-white border-b border-base-sand">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-medium text-base-charcoal mb-2">
              {filters.category
                ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
                : 'All Jewelry'}
            </h1>
            <p className="text-base-muted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                isOpen={false}
                onClose={() => {}}
              />
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-base-ink hover:text-gold transition-colors duration-200"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <div className="flex items-center gap-3 ml-auto">
                  <span className="text-sm text-base-muted hidden sm:inline">Sort by:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-transparent border border-base-sand pl-4 pr-10 py-2 text-sm text-base-charcoal focus:outline-none focus:border-gold transition-colors duration-200 cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-muted pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Active filters */}
              {(filters.category || filters.priceRange || filters.material) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {filters.category && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent-soft text-gold text-xs font-medium tracking-wider uppercase">
                      {filters.category}
                      <button
                        onClick={() => handleFilterChange({ ...filters, category: null })}
                        className="hover:text-gold-dark"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.priceRange && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent-soft text-gold text-xs font-medium tracking-wider uppercase">
                      {filters.priceRange.replace('-', ' – $')}
                      <button
                        onClick={() => handleFilterChange({ ...filters, priceRange: null, priceMin: null, priceMax: null })}
                        className="hover:text-gold-dark"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.material && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent-soft text-gold text-xs font-medium tracking-wider uppercase">
                      {filters.material === 'gold' ? '18K Gold' : 'Sterling Silver'}
                      <button
                        onClick={() => handleFilterChange({ ...filters, material: null })}
                        className="hover:text-gold-dark"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Product grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-base-muted mb-4">No products match your filters.</p>
                  <button
                    onClick={() => handleFilterChange({
                      category: null,
                      priceRange: null,
                      priceMin: null,
                      priceMax: null,
                      material: null,
                    })}
                    className="btn-outline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default ShopPage;
