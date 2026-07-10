import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Get filter values from URL
  const categoryParam = searchParams.get('category') || '';
  const collectionParam = searchParams.get('collection') || '';

  const [filters, setFilters] = useState({
    category: categoryParam,
    priceRange: 'all',
    material: 'all',
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: categoryParam,
    }));
  }, [categoryParam]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) {
          if (product.price < min || product.price > max) return false;
        } else {
          if (product.price < min) return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id.localeCompare(a.id);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: 'all',
      material: 'all',
    });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category || filters.priceRange !== 'all' || filters.material !== 'all';

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: 'Under $50' },
    { value: '50-75', label: '$50 - $75' },
    { value: '75-100', label: '$75 - $100' },
    { value: '100-', label: '$100+' },
  ];

  return (
    <div className="min-h-screen bg-velmora-bg-primary">
      {/* Hero Banner */}
      <div className="bg-velmora-bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text-primary mb-4">
            {filters.category 
              ? categories.find(c => c.id === filters.category)?.name || 'Shop'
              : collectionParam === 'new'
              ? 'New Arrivals'
              : 'Shop All'}
          </h1>
          <p className="text-velmora-text-secondary max-w-xl mx-auto">
            {filteredProducts.length} pieces to discover
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Sidebar Filter - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h2 className="font-serif text-xl mb-6">Filters</h2>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === ''}
                      onChange={() => handleFilterChange('category', '')}
                      className="w-4 h-4 accent-velmora-accent"
                    />
                    <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-text-primary transition-colors">
                      All Categories
                    </span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.id}
                        onChange={() => handleFilterChange('category', cat.id)}
                        className="w-4 h-4 accent-velmora-accent"
                      />
                      <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-text-primary transition-colors">
                        {cat.name} ({cat.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange === range.value}
                        onChange={() => handleFilterChange('priceRange', range.value)}
                        className="w-4 h-4 accent-velmora-accent"
                      />
                      <span className="text-sm text-velmora-text-secondary group-hover:text-velmora-text-primary transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-accent hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-velmora-accent text-white text-xs rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-velmora-bg-primary overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-velmora-border">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium mb-4">Category</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-category"
                          checked={filters.category === ''}
                          onChange={() => handleFilterChange('category', '')}
                          className="w-4 h-4 accent-velmora-accent"
                        />
                        <span className="text-sm">All Categories</span>
                      </label>
                      {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="mobile-category"
                            checked={filters.category === cat.id}
                            onChange={() => handleFilterChange('category', cat.id)}
                            className="w-4 h-4 accent-velmora-accent"
                          />
                          <span className="text-sm">{cat.name} ({cat.count})</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium mb-4">Price</h3>
                    <div className="space-y-3">
                      {priceRanges.map((range) => (
                        <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="mobile-price"
                            checked={filters.priceRange === range.value}
                            onChange={() => handleFilterChange('priceRange', range.value)}
                            className="w-4 h-4 accent-velmora-accent"
                          />
                          <span className="text-sm">{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                        clearFilters();
                      }}
                      className="w-full btn-outline"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="w-full btn-primary"
                    >
                      View {filteredProducts.length} Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort & Results Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
              <p className="text-sm text-velmora-text-secondary">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  Sort by: {sortOptions.find(o => o.value === sortBy)?.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-velmora-border shadow-lg z-10">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-velmora-bg-secondary transition-colors ${
                          sortBy === option.value ? 'font-medium text-velmora-accent' : ''
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-text-secondary mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-accent hover:underline"
                >
                  Clear filters
                </button>
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
    </div>
  );
};

export default Shop;
