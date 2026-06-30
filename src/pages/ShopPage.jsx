import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const ranges = {
        'under-50': [0, 50],
        '50-75': [50, 75],
        '75-100': [75, 100],
        'over-100': [100, Infinity]
      };
      const [min, max] = ranges[priceRange];
      result = result.filter(p => p.price >= min && p.price < max);
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

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-serif text-lg text-charcoal mb-4">Category</h3>
        <div className="space-y-3">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`block text-sm text-left w-full ${
              selectedCategory === 'all' ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm text-left w-full capitalize ${
                selectedCategory === cat.id ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-serif text-lg text-charcoal mb-4">Price</h3>
        <div className="space-y-3">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under-50', label: 'Under $50' },
            { value: '50-75', label: '$50 - $75' },
            { value: '75-100', label: '$75 - $100' },
            { value: 'over-100', label: 'Over $100' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-sm text-left w-full ${
                priceRange === option.value ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h3 className="font-serif text-lg text-charcoal mb-4">Material</h3>
        <div className="space-y-3">
          <button className="block text-sm text-left w-full text-charcoal font-medium">
            18K Gold Plated
          </button>
          <button className="block text-sm text-left w-full text-warm-gray hover:text-charcoal">
            Sterling Silver
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl text-charcoal">Shop All</h1>
          <p className="text-warm-gray mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm text-charcoal"
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-gold rounded-full" />
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div 
                className="absolute inset-0 bg-charcoal/30"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <FilterSidebar />
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-8 text-sm text-warm-gray hover:text-charcoal underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Results Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-divider">
              <p className="text-sm text-warm-gray">
                Showing {filteredProducts.length} results
              </p>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 pl-0 py-1 text-sm text-charcoal focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-warm-gray" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-warm-gray mb-4">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-charcoal border-b border-charcoal hover:text-gold hover:border-gold transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;