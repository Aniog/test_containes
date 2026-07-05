import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { FilterSidebar } from '../components/collection/FilterSidebar';
import { products, categories } from '../data/products';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || null,
    priceRange: null,
    material: null,
    sort: 'featured',
  });

  // Update URL when category filter changes
  useEffect(() => {
    if (filters.category) {
      setSearchParams({ category: filters.category });
    } else {
      setSearchParams({});
    }
  }, [filters.category, setSearchParams]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.material && !product.material.toLowerCase().includes(filters.material)) return false;
      if (filters.priceRange) {
        const range = filters.priceRange;
        if (range === 'under-50' && product.price >= 50) return false;
        if (range === '50-75' && (product.price < 50 || product.price > 75)) return false;
        if (range === '75-100' && (product.price < 75 || product.price > 100)) return false;
        if (range === 'over-100' && product.price < 100) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id.localeCompare(a.id);
        case 'featured':
        default:
          return 0;
      }
    });

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
  ];

  const currentSort = sortOptions.find((opt) => opt.id === filters.sort) || sortOptions[0];

  return (
    <main className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <section className="border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
                {filters.category
                  ? categories.find((c) => c.id === filters.category)?.name || 'Shop'
                  : 'All Jewelry'}
              </h1>
              <p className="text-sm text-charcoal/50 mt-1">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal/10">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-charcoal/70 hover:text-charcoal transition-colors"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>

              {/* Sort Dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-sm text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  Sort by: <span className="font-medium text-charcoal">{currentSort.label}</span>
                  <ChevronDown size={16} className={isSortOpen ? 'rotate-180' : ''} />
                </button>

                {isSortOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsSortOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-charcoal/10 rounded shadow-lg z-20 overflow-hidden">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setFilters((prev) => ({ ...prev, sort: option.id }));
                            setIsSortOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm hover:bg-charcoal/5 transition-colors ${
                            filters.sort === option.id ? 'bg-charcoal/5 text-gold-600' : 'text-charcoal'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal/60 mb-4">
                  No products found
                </p>
                <p className="text-sm text-charcoal/40 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      category: null,
                      priceRange: null,
                      material: null,
                      sort: 'featured',
                    })
                  }
                  className="text-sm text-gold-600 hover:text-gold-700 underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
