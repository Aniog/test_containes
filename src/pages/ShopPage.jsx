import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import FilterSidebar from '../components/collection/FilterSidebar';
import ProductCard from '../components/collection/ProductCard';

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({ category: [], price: null, material: [] });
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: [categoryParam] }));
    }
  }, [searchParams]);

  const categories = ['earrings', 'necklaces', 'huggies', 'sets'];
  const priceRanges = [
    { label: 'Under $50', value: 'under-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: 'over-100' }
  ];
  const materials = ['18K Gold Plated', 'Sterling Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category.length > 0) {
      result = result.filter(p => filters.category.includes(p.category));
    }

    // Price filter
    if (filters.price) {
      switch (filters.price) {
        case 'under-50':
          result = result.filter(p => p.price < 50);
          break;
        case '50-75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case '75-100':
          result = result.filter(p => p.price >= 75 && p.price <= 100);
          break;
        case 'over-100':
          result = result.filter(p => p.price > 100);
          break;
        default:
          break;
      }
    }

    // Material filter
    if (filters.material.length > 0) {
      result = result.filter(p => filters.material.some(m => p.material.includes(m)));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <main className="pt-20 md:pt-24">
      <div className="container-wide py-8 md:py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="serif-heading text-4xl md:text-5xl mb-2">Shop All</h1>
          <p className="text-[var(--color-warm-gray)]">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            priceRanges={priceRanges}
            materials={materials}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Product grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-[var(--color-warm-gray)]">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-[var(--color-border)] px-3 py-2 bg-transparent focus:outline-none focus:border-[var(--color-gold)]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
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
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-[var(--color-warm-gray)]">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
