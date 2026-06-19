import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          result = result.filter(p => p.price < 50);
          break;
        case '50to75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case '75to100':
          result = result.filter(p => p.price > 75 && p.price <= 100);
          break;
        case 'over100':
          result = result.filter(p => p.price > 100);
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
        result.reverse();
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
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-h2 lg:text-h1 text-charcoal">Shop All</h1>
          <p className="text-warm-gray font-sans mt-3">
            {filteredProducts.length} pieces
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-6">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-sans font-medium"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && <span className="w-2 h-2 bg-gold rounded-full" />}
          </button>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 py-2 text-sm font-sans focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm font-medium tracking-wider text-charcoal mb-4">CATEGORY</h3>
                <div className="space-y-3">
                  {[
                    { id: 'all', name: 'All Jewelry' },
                    ...categories
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-left font-sans text-sm ${
                        selectedCategory === cat.id 
                          ? 'text-gold font-medium' 
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                      {cat.count && <span className="ml-2 text-warm-gray/60">({cat.count})</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-sm font-medium tracking-wider text-charcoal mb-4">PRICE</h3>
                <div className="space-y-3">
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: 'under50', label: 'Under $50' },
                    { id: '50to75', label: '$50 - $75' },
                    { id: '75to100', label: '$75 - $100' },
                    { id: 'over100', label: 'Over $100' }
                  ].map((price) => (
                    <button
                      key={price.id}
                      onClick={() => setPriceRange(price.id)}
                      className={`block text-left font-sans text-sm ${
                        priceRange === price.id 
                          ? 'text-gold font-medium' 
                          : 'text-warm-gray hover:text-charcoal'
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-gold text-sm font-sans hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <span className="text-warm-gray text-sm mr-4">Sort by:</span>
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-2 text-sm font-sans focus:outline-none border-b border-warm-gray/30"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-warm-gray" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray font-sans">No products found matching your criteria.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 text-gold font-sans font-medium hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-cream animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-warm-gray/15">
              <h2 className="font-serif text-xl">Filters</h2>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-sans text-sm font-medium tracking-wider text-charcoal mb-4">CATEGORY</h3>
                <div className="space-y-3">
                  {[
                    { id: 'all', name: 'All Jewelry' },
                    ...categories
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-left font-sans text-sm w-full ${
                        selectedCategory === cat.id 
                          ? 'text-gold font-medium' 
                          : 'text-warm-gray'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-sans text-sm font-medium tracking-wider text-charcoal mb-4">PRICE</h3>
                <div className="space-y-3">
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: 'under50', label: 'Under $50' },
                    { id: '50to75', label: '$50 - $75' },
                    { id: '75to100', label: '$75 - $100' },
                    { id: 'over100', label: 'Over $100' }
                  ].map((price) => (
                    <button
                      key={price.id}
                      onClick={() => setPriceRange(price.id)}
                      className={`block text-left font-sans text-sm w-full ${
                        priceRange === price.id 
                          ? 'text-gold font-medium' 
                          : 'text-warm-gray'
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-warm-gray/15">
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="flex-1 py-3 border border-warm-gray/30 font-sans text-sm"
                  >
                    Clear
                  </button>
                )}
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 py-3 bg-gold text-white font-sans text-sm"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}