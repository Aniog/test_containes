import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75to100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over100', label: 'Over $100', min: 100, max: Infinity }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === priceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // For demo, just reverse
        filtered.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
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
    <main className="pt-20 min-h-screen bg-velmora-cream">
      {/* Header */}
      <div className="bg-velmora-creamDark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-dark">Shop All</h1>
          <p className="mt-4 text-velmora-textLight max-w-xl mx-auto">
            Discover our complete collection of premium demi-fine jewelry
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle & Sort */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-velmora-text"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-velmora-gold rounded-full" />
            )}
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 py-2 text-velmora-text focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-dark mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-left w-full ${
                    selectedCategory === 'all'
                      ? 'text-velmora-gold font-medium'
                      : 'text-velmora-textLight hover:text-velmora-gold'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-left w-full capitalize ${
                      selectedCategory === cat.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-textLight hover:text-velmora-gold'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-dark mb-4">Price</h3>
              <div className="space-y-3">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`block text-left w-full ${
                      priceRange === range.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-textLight hover:text-velmora-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-velmora-textLight">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-2 text-velmora-text focus:outline-none border-b border-velmora-border"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-muted pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-textLight mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-dark/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsFilterOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-velmora-cream shadow-2xl transform transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-velmora-dark">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-velmora-creamDark rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-dark mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-left w-full ${
                    selectedCategory === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-textLight'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-left w-full capitalize ${
                      selectedCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-textLight'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-serif text-lg text-velmora-dark mb-4">Price</h3>
              <div className="space-y-3">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`block text-left w-full ${
                      priceRange === range.id ? 'text-velmora-gold font-medium' : 'text-velmora-textLight'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full btn-outline"
                >
                  Clear Filters
                </button>
              )}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;