import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';
import { products } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get initial filters from URL
  const initialCategory = searchParams.get('category');
  const initialSearch = searchParams.get('search') || '';

  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    materials: [],
    priceRanges: [],
  });
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Update filters
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      materials: [],
      priceRanges: [],
    });
    setSearchQuery('');
    setSearchParams({});
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (filters.categories && filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Material filter (based on variant availability)
    if (filters.materials && filters.materials.length > 0) {
      result = result.filter((p) =>
        filters.materials.some((m) => p.variants.includes(m))
      );
    }

    // Price range filter
    if (filters.priceRanges && filters.priceRanges.length > 0) {
      result = result.filter((p) => {
        return filters.priceRanges.some((rangeKey) => {
          const [min, max] = rangeKey.split('-').map(Number);
          return p.price >= min && p.price < max;
        });
      });
    }

    // Sorting
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
      case 'featured':
      default:
        // Keep original order (bestsellers first)
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Header */}
        <div className="border-b border-[#E5DFD6] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="font-serif-custom text-4xl tracking-[0.05em]">The Collection</h1>
            <p className="text-[#6B5F57] mt-2">Demi-fine jewelry, thoughtfully made.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
              />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E5DFD6]">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                    className="lg:hidden text-sm uppercase tracking-[0.1em] border border-[#E5DFD6] px-4 py-2"
                  >
                    Filters
                  </button>
                  <p className="text-sm text-[#6B5F57]">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                  </p>
                </div>

                {/* Search (mobile visible) */}
                <div className="lg:hidden">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="input-premium w-full text-sm py-2"
                  />
                </div>

                {/* Sort */}
                <div className="flex items-center gap-3">
                  <label className="text-xs uppercase tracking-[0.1em] text-[#6B5F57]">Sort</label>
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="sort-select text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
              </div>

              {/* Mobile Filters Panel */}
              {isMobileFiltersOpen && (
                <div className="lg:hidden mb-8 p-6 bg-white border border-[#E5DFD6]">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={clearFilters}
                  />
                </div>
              )}

              {/* Product Grid */}
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
