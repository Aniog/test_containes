import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectItem } from '@/components/ui/select';
import ProductCard from '@/components/home/ProductCard';
import { products, categories } from '@/data/products';
import { SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // Sort
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
      case 'newest':
        result.reverse();
        break;
      default:
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [activeCategory, priceRange, sortBy]);

  const updateFilter = (key, value) => {
    if (value === 'all' || !value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-2 tracking-wide">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-[#5c5c5c]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-4 text-sm tracking-wider uppercase">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left text-sm py-1.5 transition-colors ${
                      activeCategory === 'all' ? 'text-[#b8860b] font-medium' : 'text-[#5c5c5c] hover:text-[#1a1a1a]'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', category.id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        activeCategory === category.id ? 'text-[#b8860b] font-medium' : 'text-[#5c5c5c] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-4 text-sm tracking-wider uppercase">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-200', label: '$100+' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('price', option.value)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        priceRange === option.value ? 'text-[#b8860b] font-medium' : 'text-[#5c5c5c] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                  Clear all filters
                </Button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e5e5e5]">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-sm text-[#5c5c5c]">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy} className="w-40">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#5c5c5c] mb-4">No products match your filters</p>
                <Button variant="secondary" onClick={clearFilters}>Clear Filters</Button>
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
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-[#e5e5e5]">
              <h2 className="font-serif text-lg">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 text-[#5c5c5c]">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-60px)]">
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-3 text-sm tracking-wider uppercase">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { updateFilter('category', 'all'); setIsFilterOpen(false); }}
                    className={`block w-full text-left text-sm py-2 ${activeCategory === 'all' ? 'text-[#b8860b] font-medium' : 'text-[#5c5c5c]'}`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => { updateFilter('category', category.id); setIsFilterOpen(false); }}
                      className={`block w-full text-left text-sm py-2 ${activeCategory === category.id ? 'text-[#b8860b] font-medium' : 'text-[#5c5c5c]'}`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] mb-3 text-sm tracking-wider uppercase">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: '100-200', label: '$100+' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => { updateFilter('price', option.value); setIsFilterOpen(false); }}
                      className={`block w-full text-left text-sm py-2 ${priceRange === option.value ? 'text-[#b8860b] font-medium' : 'text-[#5c5c5c]'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              {hasActiveFilters && (
                <Button variant="secondary" onClick={clearFilters} className="w-full">
                  Clear all filters
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
