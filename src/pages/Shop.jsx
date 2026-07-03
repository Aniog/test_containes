import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
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
        filtered.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80 - $120' }
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-content mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4">Shop All</h1>
          <p className="text-stone text-lg">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 text-charcoal"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters & Sort</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-charcoal mb-4">Category</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-left text-sm ${
                      selectedCategory === 'all' ? 'text-champagne font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-left text-sm capitalize ${
                        selectedCategory === cat.id ? 'text-champagne font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-charcoal mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block text-left text-sm ${
                        priceRange === range.value ? 'text-champagne font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown - Desktop */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-light-stone px-4 py-2 pr-10 text-sm text-charcoal focus:outline-none focus:border-champagne cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" />
              </div>
            </div>

            {/* Results Count */}
            <p className="text-stone text-sm mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-stone text-lg mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="text-champagne hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-cream md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-light-stone">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-medium text-charcoal mb-4">Category</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-left text-sm ${
                      selectedCategory === 'all' ? 'text-champagne font-medium' : 'text-stone'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-left text-sm capitalize ${
                        selectedCategory === cat.id ? 'text-champagne font-medium' : 'text-stone'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-medium text-charcoal mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block text-left text-sm ${
                        priceRange === range.value ? 'text-champagne font-medium' : 'text-stone'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-medium text-charcoal mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-light-stone px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-champagne"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            <div className="p-6 border-t border-light-stone">
              <button
                onClick={() => setShowFilters(false)}
                className="w-full py-4 bg-champagne text-charcoal font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}