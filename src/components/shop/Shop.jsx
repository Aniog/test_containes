import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../home/ProductCard';
import { cn } from '../../lib/utils';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, sortBy]);

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  const handlePriceChange = (price) => {
    const params = new URLSearchParams(searchParams);
    if (price === 'all') {
      params.delete('price');
    } else {
      params.set('price', price);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80+' },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            {categoryFilter === 'all' ? 'Shop All' : categories.find((c) => c.id === categoryFilter)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-velmora-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 py-2 text-sm text-velmora-charcoal focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={cn(
                        'text-sm transition-colors',
                        categoryFilter === 'all'
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-charcoal'
                      )}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={cn(
                          'text-sm transition-colors',
                          categoryFilter === cat.id
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-muted hover:text-velmora-charcoal'
                        )}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
                <ul className="space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => handlePriceChange(range.value)}
                        className={cn(
                          'text-sm transition-colors',
                          priceFilter === range.value
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-muted hover:text-velmora-charcoal'
                        )}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear Filters */}
              {(categoryFilter !== 'all' || priceFilter !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-2 text-sm text-velmora-muted focus:outline-none"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-muted pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-muted">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-velmora-charcoal/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 bg-velmora-cream shadow-xl animate-slide-in">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-velmora-charcoal/10">
                <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {/* Categories */}
                <div className="mb-8">
                  <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => handleCategoryChange('all')}
                        className={cn(
                          'text-sm transition-colors',
                          categoryFilter === 'all'
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-muted'
                        )}
                      >
                        All Jewelry
                      </button>
                    </li>
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <button
                          onClick={() => handleCategoryChange(cat.id)}
                          className={cn(
                            'text-sm transition-colors',
                            categoryFilter === cat.id
                              ? 'text-velmora-gold font-medium'
                              : 'text-velmora-muted'
                          )}
                        >
                          {cat.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div>
                  <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
                  <ul className="space-y-3">
                    {priceRanges.map((range) => (
                      <li key={range.value}>
                        <button
                          onClick={() => handlePriceChange(range.value)}
                          className={cn(
                            'text-sm transition-colors',
                            priceFilter === range.value
                              ? 'text-velmora-gold font-medium'
                              : 'text-velmora-muted'
                          )}
                        >
                          {range.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 border-t border-velmora-charcoal/10">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-3 bg-velmora-gold text-white text-sm uppercase tracking-widest"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}