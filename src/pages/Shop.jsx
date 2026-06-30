import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [searchParams.get('category')] : [],
    priceRange: [],
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category && filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.priceRange && filters.priceRange.length > 0) {
      result = result.filter((p) =>
        filters.priceRange.some(
          (range) => p.price >= range.min && p.price <= range.max,
        ),
      );
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters, sort]);

  const handleCategoryChange = (category) => {
    const current = filters.category || [];
    const next = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    setFilters({ ...filters, category: next });
    if (next.length > 0) {
      setSearchParams({ category: next[0] });
    } else {
      setSearchParams({});
    }
  };

  const handleClear = () => {
    setFilters({ category: [], priceRange: [] });
    setSearchParams({});
  };

  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-ink">Shop</h1>
            <p className="mt-1.5 text-sm text-ink/60">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 rounded-full border border-base-300 px-4 py-2 text-sm font-medium text-ink hover:border-gold-500 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-base-300 bg-cream pl-4 pr-10 py-2 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-gold-400 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            onClear={handleClear}
            isOpen={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}
          />

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-ink/70">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={handleClear}
                  className="mt-4 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
