import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    { id: 'over100', label: 'Over $100', min: 100, max: Infinity }
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

  return (
    <div className="min-h-screen bg-velmora-bg-primary pt-20">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-text-primary mb-4">
            Shop All
          </h1>
          <div className="w-16 h-px bg-velmora-accent mx-auto" />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-velmora-text-secondary"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm">Filters & Sort</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-velmora-text-primary tracking-wider uppercase mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-sm text-left transition-colors duration-300 ${
                      selectedCategory === 'all' 
                        ? 'text-velmora-accent' 
                        : 'text-velmora-text-secondary hover:text-velmora-text-primary'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-sm text-left capitalize transition-colors duration-300 ${
                        selectedCategory === cat.id 
                          ? 'text-velmora-accent' 
                          : 'text-velmora-text-secondary hover:text-velmora-text-primary'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium text-velmora-text-primary tracking-wider uppercase mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`block text-sm text-left transition-colors duration-300 ${
                        priceRange === range.id 
                          ? 'text-velmora-accent' 
                          : 'text-velmora-text-secondary hover:text-velmora-text-primary'
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
            <div className="hidden md:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-velmora-bg-secondary border border-velmora-border px-4 py-2 pr-10 text-sm text-velmora-text-primary outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-text-secondary pointer-events-none" />
              </div>
            </div>

            {/* Results Count */}
            <p className="text-sm text-velmora-text-secondary mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-text-secondary">No products found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="mt-4 text-velmora-accent text-sm"
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
            className="fixed inset-0 bg-velmora-bg-primary/80 backdrop-blur-sm z-50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-full max-w-sm bg-velmora-bg-secondary border-r border-velmora-border z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl text-velmora-text-primary">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5 text-velmora-text-secondary" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-velmora-text-primary tracking-wider uppercase mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-sm transition-colors duration-300 ${
                      selectedCategory === 'all' ? 'text-velmora-accent' : 'text-velmora-text-secondary'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block text-sm capitalize transition-colors duration-300 ${
                        selectedCategory === cat.id ? 'text-velmora-accent' : 'text-velmora-text-secondary'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-velmora-text-primary tracking-wider uppercase mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`block text-sm transition-colors duration-300 ${
                        priceRange === range.id ? 'text-velmora-accent' : 'text-velmora-text-secondary'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-velmora-text-primary tracking-wider uppercase mb-4">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-velmora-bg-primary border border-velmora-border px-4 py-3 text-sm text-velmora-text-primary outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-velmora-accent text-velmora-bg-primary py-4 text-sm font-medium tracking-wider uppercase"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}