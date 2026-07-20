import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import FilterSidebar from '../components/collection/FilterSidebar';
import { SlidersHorizontal } from 'lucide-react';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.material !== 'all') {
      result = result.filter((p) => p.material === filters.material);
    }

    if (filters.price !== 'all') {
      if (filters.price === '0-50') {
        result = result.filter((p) => p.price < 50);
      } else if (filters.price === '50-75') {
        result = result.filter((p) => p.price >= 50 && p.price <= 75);
      } else if (filters.price === '75-100') {
        result = result.filter((p) => p.price > 75 && p.price <= 100);
      } else if (filters.price === '100+') {
        result = result.filter((p) => p.price > 100);
      }
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.reverse();
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="pt-20 md:pt-24">
      <div className="bg-[var(--velmora-bg-alt)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-3">
            {filters.category !== 'all' ? filters.category : 'All'}
          </p>
          <h1 className="serif-heading text-3xl md:text-5xl tracking-wide">
            {filters.category !== 'all'
              ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1)
              : 'The Collection'}
          </h1>
          <div className="w-12 h-px bg-[var(--velmora-gold)] mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-[var(--velmora-text-muted)]">
                {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden flex items-center gap-2 text-sm text-[var(--velmora-text-muted)]"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-transparent border border-[var(--velmora-border)] rounded-sm px-3 py-2 text-[var(--velmora-text-muted)] focus:outline-none focus:border-[var(--velmora-accent)]"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="serif-heading text-xl text-[var(--velmora-text-muted)] mb-2">
                  No pieces found
                </p>
                <p className="text-sm text-[var(--velmora-text-light)]">
                  Try adjusting your filters
                </p>
                <button
                  onClick={() => setFilters({ category: 'all', price: 'all', material: 'all' })}
                  className="mt-4 btn-outline inline-block"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
