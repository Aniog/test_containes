import React, { useState, useMemo, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import SortDropdown from '@/components/shop/SortDropdown';
import ProductGrid from '@/components/shop/ProductGrid';

const Shop = () => {
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    material: [],
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    // Price filter
    if (filters.price.length > 0) {
      result = result.filter((p) => {
        return filters.price.some((range) => {
          if (range === 'under40') return p.price < 40;
          if (range === '40to60') return p.price >= 40 && p.price <= 60;
          if (range === '60to100') return p.price > 60 && p.price <= 100;
          if (range === 'over100') return p.price > 100;
          return false;
        });
      });
    }

    // Sort
    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
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
  }, [filters, sort]);

  const activeFilterCount =
    filters.category.length + filters.price.length + filters.material.length;

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-velmora-espresso tracking-widest uppercase">
            Shop All
          </h1>
          <p className="font-sans text-sm text-velmora-warmgray mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-velmora-warmgray"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-velmora-espresso text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {/* Content */}
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onFilterChange={setFilters}
            mobileOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
