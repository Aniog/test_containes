import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import FilterSidebar from '@/components/collection/FilterSidebar';
import ProductGrid from '@/components/collection/ProductGrid';
import { ArrowUpDown } from 'lucide-react';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: null,
    material: null,
  });
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters((prev) => ({ ...prev, category }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange) {
      result = result.filter(
        (p) => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
      );
    }

    // Filter by material
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
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-[var(--velmora-cream)] py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="velmora-heading text-4xl md:text-5xl mb-3">Our Collection</h1>
          <p className="text-[var(--velmora-text-muted)] max-w-2xl">
            Discover our curated selection of demi-fine jewelry pieces, crafted with care and designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            productCount={filteredProducts.length}
          />

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort and count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--velmora-text-muted)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-2">
                <ArrowUpDown size={16} className="text-[var(--velmora-text-muted)]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-transparent border border-[var(--velmora-border)] rounded px-3 py-2 focus:outline-none focus:border-[var(--velmora-warm)]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </main>
  );
}
