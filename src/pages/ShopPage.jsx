import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const [filters, setFilters] = useState({
    category: categoryParam ? [categoryParam] : [],
    material: [],
    priceRange: [],
    sort: 'featured',
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category.length) {
      result = result.filter((product) => filters.category.includes(product.category));
    }

    if (filters.material.length) {
      result = result.filter((product) => filters.material.includes(product.variants[0]));
    }

    if (filters.priceRange.length) {
      result = result.filter((product) => {
        return filters.priceRange.some((rangeId) => {
          if (rangeId === 'under-50') return product.price < 50;
          if (rangeId === '50-80') return product.price >= 50 && product.price <= 80;
          if (rangeId === 'over-80') return product.price > 80;
          return true;
        });
      });
    }

    if (filters.sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filters]);

  return (
    <div className="pt-24 md:pt-28">
      <div className="section-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The collection</p>
            <h1 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Shop</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <div className="relative">
              <select
                value={filters.sort}
                onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
                className="appearance-none rounded-full border border-border bg-surface px-4 py-2 pr-10 font-ui text-sm text-ink focus:outline-none focus:ring-2 focus:ring-accent-soft"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[240px_1fr]">
          <div className={`md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-xl font-semibold">No pieces found</p>
                <p className="mt-2 font-ui text-sm text-ink-secondary">
                  Try adjusting your filters to discover more styles.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
