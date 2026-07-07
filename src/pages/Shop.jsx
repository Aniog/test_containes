import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', label: 'Under $50', min: 0, max: 50 },
    { id: '50to75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75to100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over100', label: 'Over $100', min: 100, max: Infinity },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Filter by price
    const range = priceRanges.find(r => r.id === priceRange);
    if (range) {
      result = result.filter(p => p.price >= range.min && p.price < range.max);
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

  const activeFiltersCount = [
    selectedCategory !== 'all',
    priceRange !== 'all',
  ].filter(Boolean).length;

  return (
    <main className="min-h-screen bg-velmora-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-velmora-charcoal">
            Shop All
          </h1>
          <p className="mt-4 text-velmora-charcoal/60">
            {filteredProducts.length} pieces
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6 flex items-center justify-between">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-velmora-sand text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
          
          {/* Mobile Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none px-4 py-2 pr-8 border border-velmora-sand bg-transparent text-velmora-charcoal text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-10">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-left text-sm transition-colors duration-300 ${
                    selectedCategory === 'all'
                      ? 'text-velmora-gold'
                      : 'text-velmora-charcoal/60 hover:text-velmora-gold'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-left text-sm transition-colors duration-300 ${
                      selectedCategory === cat.id
                        ? 'text-velmora-gold'
                        : 'text-velmora-charcoal/60 hover:text-velmora-gold'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-10">
              <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`block text-left text-sm transition-colors duration-300 ${
                      priceRange === range.id
                        ? 'text-velmora-gold'
                        : 'text-velmora-charcoal/60 hover:text-velmora-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors duration-300"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-8">
              <span className="text-sm text-velmora-charcoal/60 mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pr-8 py-1 bg-transparent text-velmora-charcoal text-sm border-b border-velmora-sand focus:outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-velmora-taupe" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-velmora-charcoal/60">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="mt-4 text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-velmora-charcoal/40 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-velmora-cream shadow-soft-lg z-50 lg:hidden overflow-y-auto animate-slide-up">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:text-velmora-gold transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Category</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-left text-sm transition-colors duration-300 ${
                      selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-charcoal/60'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-left text-sm transition-colors duration-300 ${
                        selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-charcoal/60'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-velmora-charcoal mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`block text-left text-sm transition-colors duration-300 ${
                        priceRange === range.id ? 'text-velmora-gold' : 'text-velmora-charcoal/60'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-4 bg-velmora-gold text-white font-medium tracking-wider hover:bg-velmora-gold-dark transition-colors duration-300"
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}