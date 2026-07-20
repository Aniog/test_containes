import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
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
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
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
        // Featured - keep original order
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

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80 - $120' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  return (
    <div className="pt-20">
      <div className="container py-section-mobile lg:py-section">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
            {selectedCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-taupe">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-divider">
          {/* Mobile Filter Button */}
          <button 
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-wider text-taupe"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          {/* Desktop Filters Summary */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-sm text-taupe">Filter:</span>
            <button 
              onClick={() => handleCategoryChange('all')}
              className={`text-sm ${selectedCategory === 'all' ? 'text-charcoal' : 'text-taupe hover:text-charcoal'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-sm capitalize ${selectedCategory === cat.id ? 'text-charcoal' : 'text-taupe hover:text-charcoal'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border-none text-sm text-charcoal cursor-pointer pr-6 focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-taupe" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-charcoal mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => handleCategoryChange('all')}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-taupe">All Jewelry</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm text-taupe capitalize">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-charcoal mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range.value}
                        onChange={() => setPriceRange(range.value)}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-sm text-taupe">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'all' || priceRange !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="text-sm text-taupe hover:text-gold transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-taupe mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="text-gold hover:text-gold-hover transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div 
            className="fixed inset-0 bg-charcoal/50 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 lg:hidden animate-slide-in-right max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl text-charcoal">Filters</h3>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                  aria-label="Close filters"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-charcoal mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`px-4 py-2 text-sm border ${
                      selectedCategory === 'all' 
                        ? 'border-charcoal bg-charcoal text-cream' 
                        : 'border-divider text-taupe'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`px-4 py-2 text-sm border capitalize ${
                        selectedCategory === cat.id 
                          ? 'border-charcoal bg-charcoal text-cream' 
                          : 'border-divider text-taupe'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price Filter */}
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-charcoal mb-3">Price</h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`px-4 py-2 text-sm border ${
                        priceRange === range.value 
                          ? 'border-charcoal bg-charcoal text-cream' 
                          : 'border-divider text-taupe'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-gold text-charcoal py-4 text-sm uppercase tracking-wider font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;