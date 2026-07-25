import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductCard from '@/components/home/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { products } from '@/data/products';

const Shop = () => {
  const [filters, setFilters] = useState({ category: [], material: [] });
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category?.length) {
      result = result.filter((product) => filters.category.includes(product.category));
    }

    if (filters.material?.length) {
      result = result.filter((product) => filters.material.includes(product.material));
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [filters, sort]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="container-editorial py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="section-title">Shop</h1>
            <p className="mt-2 text-sm text-brand-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-brand-line bg-white px-4 py-2 text-xs uppercase tracking-widest text-brand-ink outline-none focus:border-brand-ink"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-brand-ink">No pieces match your filters</p>
                <button
                  onClick={() => setFilters({ category: [], material: [] })}
                  className="mt-4 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
