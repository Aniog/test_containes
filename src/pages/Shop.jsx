import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
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

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="section-title mb-2">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-brand-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className={cn(
            'md:w-64 flex-shrink-0',
            isFilterOpen ? 'block' : 'hidden md:block'
          )}>
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-serif text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={cn(
                      'block w-full text-left py-2 text-sm transition-colors',
                      activeCategory === 'all' ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                    )}
                  >
                    All
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={cn(
                        'block w-full text-left py-2 text-sm transition-colors',
                        activeCategory === category.id ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-2">
                  {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map(range => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-brand-line text-brand-accent focus:ring-brand-accent" />
                      <span className="text-sm text-brand-muted">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Silver', 'Crystal'].map(material => (
                    <label key={material} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-brand-line text-brand-accent focus:ring-brand-accent" />
                      <span className="text-sm text-brand-muted">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden flex items-center gap-2 text-sm font-medium text-brand-ink"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>

              <div className="ml-auto flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-brand-muted">Sort by:</label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent pr-8 pl-2 py-1.5 text-sm text-brand-ink border border-brand-line rounded-lg focus:outline-none focus:border-brand-ink cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-muted">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
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
