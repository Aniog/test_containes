import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import FilterSidebar from '../components/shop/FilterSidebar';
import Nav from '../components/ui/Nav';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';

  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    materials: [],
    priceRange: null,
  });

  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Material filter (simulated - all our products are Gold by default)
    if (filters.materials.length > 0) {
      result = result.filter((p) => filters.materials.includes(p.material));
    }

    // Price filter
    if (filters.priceRange) {
      result = result.filter(
        (p) =>
          p.price >= filters.priceRange.min && p.price < filters.priceRange.max
      );
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
        // featured - keep original order
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          {/* Header */}
          <div className="mb-10">
            <div className="text-xs tracking-[0.12em] uppercase text-vel-muted mb-2">Discover</div>
            <h1 className="text-4xl md:text-5xl">The Collection</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-vel-border">
                <div className="text-sm text-vel-muted">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </div>

                <div className="flex items-center gap-4">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                    className="lg:hidden btn btn-outline text-xs py-2 px-4"
                  >
                    {isMobileFiltersOpen ? 'Hide Filters' : 'Filters'}
                  </button>

                  {/* Search */}
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input w-40 sm:w-56 text-sm"
                  />

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="border border-vel-border bg-white px-4 py-2 text-sm focus:outline-none focus:border-vel-gold"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">A–Z</option>
                  </select>
                </div>
              </div>

              {/* Mobile Filters */}
              {isMobileFiltersOpen && (
                <div className="lg:hidden mb-8 p-6 bg-vel-bg-alt">
                  <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
                </div>
              )}

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-vel-muted mb-4">No pieces match your selection.</p>
                  <button
                    onClick={() => {
                      setFilters({ categories: [], materials: [], priceRange: null });
                      setSearchQuery('');
                    }}
                    className="text-sm uppercase tracking-widest hover:text-vel-gold-dark"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
