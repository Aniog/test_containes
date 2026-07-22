import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory);
    }

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
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const setCategory = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="section-title">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">{filteredProducts.length} products</p>
        </div>

        <div className="flex items-center justify-between gap-4 border-b border-brand-border pb-4">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-charcoal md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <span className="text-xs uppercase tracking-widest text-brand-muted">Filter by</span>
            <div className="flex gap-4">
              <button
                onClick={() => setCategory('all')}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  activeCategory === 'all' ? 'text-brand-charcoal' : 'text-brand-muted hover:text-brand-charcoal'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`text-xs uppercase tracking-widest transition-colors ${
                    activeCategory === cat.id ? 'text-brand-charcoal' : 'text-brand-muted hover:text-brand-charcoal'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 text-xs uppercase tracking-widest text-brand-charcoal outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted pointer-events-none" />
          </div>
        </div>

        {mobileFiltersOpen && (
          <div className="mt-4 flex flex-wrap gap-3 border-b border-brand-border pb-4 md:hidden">
            <button
              onClick={() => setCategory('all')}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${
                activeCategory === 'all' ? 'border-brand-charcoal bg-brand-charcoal text-white' : 'border-brand-border text-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${
                  activeCategory === cat.id ? 'border-brand-charcoal bg-brand-charcoal text-white' : 'border-brand-border text-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-xl text-brand-muted">No products found in this category.</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
