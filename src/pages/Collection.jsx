import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import CollectionHeader from '@/components/collection/CollectionHeader';
import FilterSidebar from '@/components/collection/FilterSidebar';
import ProductCard from '@/components/collection/ProductCard';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOption, setSortOption] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    price: { min: 0, max: 200 }
  });

  // Initialize category from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({
        ...prev,
        categories: [category]
      }));
    }
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Filter by price
    result = result.filter(
      p => p.price >= filters.price.min && p.price <= filters.price.max
    );

    // Sort
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
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
  }, [filters, sortOption]);

  // Build active filters list for display
  const activeFilters = useMemo(() => {
    const active = [];
    filters.categories.forEach(cat => active.push(cat));
    if (filters.price.min > 0 || filters.price.max < 200) {
      active.push('price');
    }
    return active;
  }, [filters]);

  return (
    <div className="pt-20 md:pt-24">
      {/* Page Header */}
      <div className="bg-ivory py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Our Collection
          </h1>
          <p className="font-sans text-warmGray max-w-md mx-auto">
            Discover timeless demi-fine jewelry crafted with care. Each piece designed to become a treasured part of your story.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            priceRange={[0, 200]}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <CollectionHeader
              totalProducts={filteredProducts.length}
              sortOption={sortOption}
              setSortOption={setSortOption}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              activeFilters={activeFilters}
            />

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-warmGray mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-warmGray mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => setFilters({ categories: [], price: { min: 0, max: 200 } })}
                  className="text-gold hover:text-gold-dark font-sans text-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
