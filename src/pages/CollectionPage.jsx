import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '@/components/product/ProductCard';
import { FilterSidebar } from '@/components/shop/FilterSidebar';
import { SortDropdown } from '@/components/shop/SortDropdown';
import { products } from '@/data/products';

export function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  
  const [filters, setFilters] = useState({
    category: categoryParam,
    priceRange: 'all',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sync URL params with filters
  useEffect(() => {
    if (categoryParam !== filters.category) {
      setFilters((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  const updateCategory = (category) => {
    setFilters((prev) => ({ ...prev, category }));
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(
        (p) => p.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Filter by price
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [filters, sortBy]);

  const getCategoryTitle = () => {
    if (filters.category === 'all') return 'All Jewelry';
    return filters.category.charAt(0).toUpperCase() + filters.category.slice(1);
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container-wide text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warmblack mb-3">
            {getCategoryTitle()}
          </h1>
          <p className="text-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-wide py-8 md:py-12">
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={false}
              onClose={() => {}}
              productCount={filteredProducts.length}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-hairline">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center gap-2 px-4 py-2 text-sm border border-hairline hover:border-gold transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Spacer for mobile */}
              <div className="hidden md:block" />

              {/* Sort Dropdown */}
              <SortDropdown currentSort={sortBy} onSortChange={setSortBy} />
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-stone mb-4">
                  No products found
                </p>
                <p className="text-sm text-stone/70 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setFilters({ category: 'all', priceRange: 'all' });
                    setSearchParams({});
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <FilterSidebar
        filters={filters}
        setFilters={(newFilters) => {
          setFilters(newFilters);
          // Sync category with URL
          if (newFilters.category !== filters.category) {
            updateCategory(newFilters.category);
          }
        }}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        productCount={filteredProducts.length}
      />
    </div>
  );
}
