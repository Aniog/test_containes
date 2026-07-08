import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, sort]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="section-title">Shop</h1>
            <p className="mt-2 text-sm text-brand-muted">{filtered.length} product{filtered.length === 1 ? '' : 's'}</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-xs font-semibold uppercase tracking-widest text-brand-ink">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-brand-divider bg-brand-surface px-3 py-2 text-xs text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-48 flex-shrink-0">
            <div className="md:sticky md:top-24 space-y-1">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-brand-ink text-white'
                      : 'text-brand-ink hover:bg-brand-warm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-sm text-brand-muted">No products found in this category.</p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full"
                  onClick={() => handleCategoryChange('All')}
                >
                  View all products
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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

export default Shop;
