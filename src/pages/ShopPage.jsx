import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: 'over-80', label: 'Over $80' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-40':
          result = result.filter(p => p.price < 40);
          break;
        case '40-60':
          result = result.filter(p => p.price >= 40 && p.price <= 60);
          break;
        case '60-80':
          result = result.filter(p => p.price >= 60 && p.price <= 80);
          break;
        case 'over-80':
          result = result.filter(p => p.price > 80);
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
        // For demo, just reverse
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
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
          Category
        </h3>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => handleCategoryChange('all')}
              className={`text-sm transition-colors ${
                selectedCategory === 'all' ? 'font-medium' : ''
              }`}
              style={{ 
                color: selectedCategory === 'all' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
              }}
            >
              All Products
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-sm transition-colors ${
                  selectedCategory === cat.id ? 'font-medium' : ''
                }`}
                style={{ 
                  color: selectedCategory === cat.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                }}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>
          Price
        </h3>
        <ul className="space-y-3">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => setPriceRange(range.value)}
                className={`text-sm transition-colors ${
                  priceRange === range.value ? 'font-medium' : ''
                }`}
                style={{ 
                  color: priceRange === range.value ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                }}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm underline"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Clear all filters
        </button>
      )}
    </>
  );

  return (
    <main className="pt-20">
      <div className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasActiveFilters && (
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              )}
            </button>
          </div>

          {/* Mobile Filter Overlay */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div 
                className="absolute inset-0 bg-black/30"
                onClick={() => setShowMobileFilters(false)}
              />
              <div 
                className="absolute left-0 top-0 h-full w-80 max-w-[85vw] p-6 overflow-y-auto"
                style={{ backgroundColor: 'var(--color-bg-primary)' }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    aria-label="Close filters"
                  >
                    <X size={24} />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full btn btn-primary mt-8"
                  style={{ 
                    backgroundColor: 'var(--color-base)', 
                    color: 'var(--color-white)' 
                  }}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-2 text-sm cursor-pointer"
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    border: 'none'
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown 
                  size={16} 
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: 'var(--color-text-secondary)' }}
                />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid-products">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  No products found
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn btn-outline">
                  Clear Filters
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