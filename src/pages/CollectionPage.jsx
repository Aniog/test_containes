import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import FilterSidebar from '../components/collection/FilterSidebar';
import ProductCard from '../components/collection/ProductCard';

export default function CollectionPage() {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    material: 'all',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Price filter
    if (filters.price === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (filters.price === '50to75') {
      result = result.filter(p => p.price >= 50 && p.price <= 75);
    } else if (filters.price === 'over75') {
      result = result.filter(p => p.price > 75);
    }

    // Material filter
    if (filters.material !== 'all') {
      result = result.filter(p => p.material === filters.material);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page header */}
      <div className="mb-8 md:mb-12">
        <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-3">
          All Pieces
        </h1>
        <p className="text-sm text-[var(--velmora-text-muted)]">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="flex gap-8">
        {/* Filter sidebar */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          mobileOpen={mobileFiltersOpen}
          setMobileOpen={setMobileFiltersOpen}
        />

        {/* Product grid */}
        <div className="flex-1">
          {/* Sort & toolbar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[var(--velmora-text-muted)] hidden md:block">
              Showing {filteredProducts.length} of {products.length} pieces
            </p>
            <div className="flex items-center gap-3 ml-auto">
              <label htmlFor="sort" className="text-xs tracking-widest uppercase text-[var(--velmora-text-muted)]">
                Sort
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[var(--velmora-border)] px-3 py-2 bg-transparent focus:outline-none focus:border-[var(--velmora-gold)]"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="serif-heading text-xl mb-2">No pieces found</p>
              <p className="text-sm text-[var(--velmora-text-muted)]">
                Try adjusting your filters to discover more.
              </p>
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
    </main>
  );
}
