import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const selectedCategory = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
      });
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-velmora-cream-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal-800 mb-4">
            {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            Discover our collection of demi-fine jewelry, crafted with 18K gold plating and designed for everyday elegance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 border-gray-300"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-velmora-gold-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </Button>
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-charcoal-500 hover:text-charcoal-800"
              >
                Clear all
              </Button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm text-charcoal-500">Sort by:</span>
            <div className="relative flex-1 sm:flex-initial">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:border-charcoal-800 w-full sm:w-auto"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="mb-8 p-6 bg-velmora-cream-50 rounded-lg animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Categories */}
              <div>
                <h3 className="font-medium text-charcoal-800 mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-full text-sm transition-colors",
                      selectedCategory === 'all'
                        ? "bg-charcoal-800 text-white"
                        : "bg-white text-charcoal-600 hover:bg-gray-100"
                    )}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', category.id)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-full text-sm transition-colors",
                        selectedCategory === category.id
                          ? "bg-charcoal-800 text-white"
                          : "bg-white text-charcoal-600 hover:bg-gray-100"
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium text-charcoal-800 mb-4">Price Range</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', 'all')}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-full text-sm transition-colors",
                      priceRange === 'all'
                        ? "bg-charcoal-800 text-white"
                        : "bg-white text-charcoal-600 hover:bg-gray-100"
                    )}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => updateFilter('price', '0-40')}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-full text-sm transition-colors",
                      priceRange === '0-40'
                        ? "bg-charcoal-800 text-white"
                        : "bg-white text-charcoal-600 hover:bg-gray-100"
                    )}
                  >
                    Under $40
                  </button>
                  <button
                    onClick={() => updateFilter('price', '40-70')}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-full text-sm transition-colors",
                      priceRange === '40-70'
                        ? "bg-charcoal-800 text-white"
                        : "bg-white text-charcoal-600 hover:bg-gray-100"
                    )}
                  >
                    $40 - $70
                  </button>
                  <button
                    onClick={() => updateFilter('price', '70-100')}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-full text-sm transition-colors",
                      priceRange === '70-100'
                        ? "bg-charcoal-800 text-white"
                        : "bg-white text-charcoal-600 hover:bg-gray-100"
                    )}
                  >
                    $70 - $100
                  </button>
                  <button
                    onClick={() => updateFilter('price', '100-')}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-full text-sm transition-colors",
                      priceRange === '100-'
                        ? "bg-charcoal-800 text-white"
                        : "bg-white text-charcoal-600 hover:bg-gray-100"
                    )}
                  >
                    $100+
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-charcoal-600 mb-4">No products match your current filters.</p>
            <Button onClick={clearFilters} variant="outline" className="border-charcoal-800 text-charcoal-800">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Results Count */}
        <p className="text-sm text-charcoal-500 mt-8 text-center">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>
    </div>
  );
};

export default ShopPage;
