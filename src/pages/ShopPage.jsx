import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

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
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === priceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
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
        // For demo, just reverse
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
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl mb-4">Shop All</h1>
          <p className="text-velmora-taupe max-w-md mx-auto">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-taupe/20">
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && <span className="w-2 h-2 bg-velmora-gold rounded-full" />}
          </button>

          {/* Desktop Filter Tags */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={clearFilters}
              className={`text-sm ${hasActiveFilters ? 'text-velmora-gold' : 'text-velmora-taupe/50 cursor-not-allowed'}`}
              disabled={!hasActiveFilters}
            >
              Clear All
            </button>
          </div>

          {/* Result Count & Sort */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-velmora-taupe hidden sm:block">
              {filteredProducts.length} products
            </span>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm border border-velmora-taupe/30 focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-velmora-taupe mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-sm w-full text-left py-1 transition-colors ${
                    selectedCategory === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal/70 hover:text-velmora-gold'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-sm w-full text-left py-1 capitalize transition-colors ${
                      selectedCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal/70 hover:text-velmora-gold'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-velmora-taupe mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`block text-sm w-full text-left py-1 transition-colors ${
                      priceRange === range.id ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal/70 hover:text-velmora-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-taupe mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-velmora-charcoal/50"
          onClick={() => setIsFilterOpen(false)}
        />
        <div className={`absolute left-0 top-0 h-full w-80 bg-velmora-cream shadow-soft-lg transform transition-transform duration-300 ${
          isFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-sm w-full text-left py-1 ${
                    selectedCategory === 'all' ? 'text-velmora-gold font-medium' : ''
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-sm w-full text-left py-1 capitalize ${
                      selectedCategory === cat.id ? 'text-velmora-gold font-medium' : ''
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">Price</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`block text-sm w-full text-left py-1 ${
                      priceRange === range.id ? 'text-velmora-gold font-medium' : ''
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-velmora-taupe/20">
              <button 
                onClick={clearFilters}
                className="flex-1 btn-outline text-xs py-2"
              >
                Clear
              </button>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 btn-primary text-xs py-2"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;