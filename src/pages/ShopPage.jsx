import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductGrid from '../components/shop/ProductGrid';
import FilterSidebar from '../components/shop/FilterSidebar';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filters, setFilters] = useState({ category: categoryParam, maxPrice: null });
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= filters.maxPrice);
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [filters, sort]);

  const activeCategory = categories.find((c) => c.id === filters.category);

  return (
    <main className="section-container py-10 md:py-16">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif text-3xl text-ink md:text-4xl">{activeCategory ? activeCategory.label : 'All Jewelry'}</h1>
          <p className="mt-1 text-sm text-ink-secondary">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[240px_1fr]">
        <FilterSidebar filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
        <ProductGrid products={filtered} />
      </div>
    </main>
  );
};

export default ShopPage;
