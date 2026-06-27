import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Price filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          result = result.filter(p => p.price < 50);
          break;
        case '50to75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case 'over75':
          result = result.filter(p => p.price > 75);
          break;
      }
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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }
    
    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-[var(--color-cream)] pt-20 md:pt-24">
      {/* Header */}
      <div className="container py-8">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-2">
          Shop All
        </h1>
        <p className="font-sans text-[var(--color-text-secondary)]">
          {filteredProducts.length} products
        </p>
      </div>

      <div className="container pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsFilterOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 w-2 h-2 bg-[var(--color-gold)] rounded-full" />
              )}
            </Button>
            
            {/* Mobile Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[var(--color-border)] px-4 py-2 pr-8 font-sans text-sm focus:outline-none focus:border-[var(--color-charcoal)]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`
                      font-sans text-sm block text-left w-full
                      ${selectedCategory === 'all' 
                        ? 'text-[var(--color-charcoal)] font-medium' 
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                      }
                    `}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`
                        font-sans text-sm block text-left w-full capitalize
                        ${selectedCategory === cat.id 
                          ? 'text-[var(--color-charcoal)] font-medium' 
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                        }
                      `}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`
                        font-sans text-sm block text-left w-full
                        ${priceRange === option.value 
                          ? 'text-[var(--color-charcoal)] font-medium' 
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                        }
                      `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-sm text-[var(--color-accent)] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <span className="font-sans text-sm text-[var(--color-text-muted)] mr-3">
                Sort by:
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-[var(--color-border)] px-4 py-2 pr-8 font-sans text-sm focus:outline-none focus:border-[var(--color-charcoal)]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-sans text-[var(--color-text-secondary)] mb-4">
                  No products found with your current filters.
                </p>
                <Button variant="secondary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[var(--color-cream)] overflow-y-auto animate-slide-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-charcoal)] mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`
                      font-sans text-sm block text-left w-full py-2
                      ${selectedCategory === 'all' 
                        ? 'text-[var(--color-charcoal)] font-medium' 
                        : 'text-[var(--color-text-secondary)]'
                      }
                    `}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`
                        font-sans text-sm block text-left w-full py-2 capitalize
                        ${selectedCategory === cat.id 
                          ? 'text-[var(--color-charcoal)] font-medium' 
                          : 'text-[var(--color-text-secondary)]'
                        }
                      `}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-charcoal)] mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`
                        font-sans text-sm block text-left w-full py-2
                        ${priceRange === option.value 
                          ? 'text-[var(--color-charcoal)] font-medium' 
                          : 'text-[var(--color-text-secondary)]'
                        }
                      `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-[var(--color-border)]">
                <Button 
                  variant="outline" 
                  size="full"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
                <Button 
                  variant="primary" 
                  size="full"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;