import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Filters from '@/components/shop/Filters';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import { useImageLoader } from '@/hooks/useImageLoader';

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name-asc', label: 'Name: A–Z' },
];

const priceMatches = (product, priceFilters) => {
  if (priceFilters.length === 0) return true;
  return priceFilters.some((range) => {
    if (range === 'under40') return product.price < 40;
    if (range === '40to60') return product.price >= 40 && product.price <= 60;
    if (range === '60to100') return product.price > 60 && product.price <= 100;
    if (range === 'over100') return product.price > 100;
    return false;
  });
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [searchParams.get('category')] : [],
    price: [],
    material: [],
  });
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useImageLoader([filters, sort]);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters((prev) => ({ ...prev, category: [category] }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
      const priceMatch = priceMatches(product, filters.price);
      const materialMatch = filters.material.length === 0 || filters.material.includes(product.material);
      return categoryMatch && priceMatch && materialMatch;
    });

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return result;
  }, [filters, sort]);

  return (
    <Layout>
      <div className="pt-28 pb-20 bg-velmora-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <h1 className="font-serif text-4xl md:text-5xl mb-3">The Collection</h1>
            <p className="text-sm text-velmora-muted">Timeless demi-fine pieces designed for everyday luxury.</p>
          </div>

          <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
            <p className="hidden lg:block text-sm text-velmora-muted">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-xs uppercase tracking-[0.15em] text-velmora-muted">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border border-velmora-border px-3 py-2 text-sm focus:outline-none focus:border-velmora-charcoal"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-10">
            <Filters
              filters={filters}
              setFilters={setFilters}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />

            <div className="flex-1" ref={containerRef}>
              <p className="lg:hidden text-sm text-velmora-muted mb-4">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl mb-3">No products found</p>
                  <p className="text-sm text-velmora-muted">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
