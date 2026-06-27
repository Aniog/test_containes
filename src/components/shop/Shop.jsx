import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Get unique materials
  const materials = [...new Set(products.map(p => p.material))];

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
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80 - $120' }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Shop All
          </h1>
          <p
            className="text-sm md:text-base"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div
          className="flex items-center justify-between py-4 mb-8 border-b"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && (
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--color-gold)' }}
              />
            )}
          </button>

          {/* Desktop Filter Tags */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Filter:
            </span>
            <button
              onClick={clearFilters}
              className={`text-sm hover:opacity-70 transition-opacity ${hasActiveFilters ? 'opacity-100' : 'opacity-40 cursor-not-allowed'}`}
              style={{ color: 'var(--color-text-primary)' }}
              disabled={!hasActiveFilters}
            >
              Clear All
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 py-1 text-sm cursor-pointer focus:outline-none"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--color-text-secondary)' }}
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3
                  className="font-serif text-sm tracking-wider mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm block text-left transition-colors ${
                      selectedCategory === 'all' ? 'font-medium' : ''
                    }`}
                    style={{
                      color: selectedCategory === 'all' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                    }}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-sm block text-left transition-colors ${
                        selectedCategory === cat.id ? 'font-medium' : ''
                      }`}
                      style={{
                        color: selectedCategory === cat.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                      }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3
                  className="font-serif text-sm tracking-wider mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`text-sm block text-left transition-colors ${
                        priceRange === range.value ? 'font-medium' : ''
                      }`}
                      style={{
                        color: priceRange === range.value ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                      }}
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
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p
                  className="font-serif text-lg mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  No products found
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Try adjusting your filters to find what you're looking for
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 text-sm tracking-wider transition-all hover:opacity-80"
                  style={{
                    backgroundColor: 'var(--color-charcoal)',
                    color: 'white'
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <p
                  className="text-sm mb-6"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />
          <div
            className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-[var(--color-surface)] shadow-xl animate-slide-in-right overflow-y-auto"
          >
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <h2
                className="font-serif text-lg"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Filters
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X size={20} style={{ color: 'var(--color-text-primary)' }} />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Category */}
              <div>
                <h3
                  className="font-serif text-sm tracking-wider mb-3"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`text-sm block text-left w-full py-2 transition-colors ${
                      selectedCategory === 'all' ? 'font-medium' : ''
                    }`}
                    style={{
                      color: selectedCategory === 'all' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                    }}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-sm block text-left w-full py-2 transition-colors ${
                        selectedCategory === cat.id ? 'font-medium' : ''
                      }`}
                      style={{
                        color: selectedCategory === cat.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                      }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3
                  className="font-serif text-sm tracking-wider mb-3"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`text-sm block text-left w-full py-2 transition-colors ${
                        priceRange === range.value ? 'font-medium' : ''
                      }`}
                      style={{
                        color: priceRange === range.value ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
                      }}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="p-4 border-t space-y-3"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 text-sm tracking-wider transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'white'
                }}
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="w-full py-3 text-sm tracking-wider border transition-all hover:opacity-70"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-secondary)'
                }}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}