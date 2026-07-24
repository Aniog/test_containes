import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          result = result.filter(p => p.price < 50);
          break;
        case '50to75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case '75to100':
          result = result.filter(p => p.price > 75 && p.price <= 100);
          break;
        case 'over100':
          result = result.filter(p => p.price > 100);
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

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to75', label: '$50 - $75' },
    { value: '75to100', label: '$75 - $100' },
    { value: 'over100', label: 'Over $100' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  return (
    <div className="pt-[72px]">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Shop All</h1>
          <p className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>
            {filteredProducts.length} pieces
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
                Category
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-sm transition-colors ${
                    selectedCategory === 'all' ? 'font-medium' : 'hover:opacity-60'
                  }`}
                  style={{ color: selectedCategory === 'all' ? 'var(--color-charcoal)' : 'var(--color-muted)' }}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-sm transition-colors ${
                      selectedCategory === cat.id ? 'font-medium' : 'hover:opacity-60'
                    }`}
                    style={{ color: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'var(--color-muted)' }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
                Price
              </h3>
              <div className="space-y-3">
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block text-sm transition-colors ${
                      priceRange === range.value ? 'font-medium' : 'hover:opacity-60'
                    }`}
                    style={{ color: priceRange === range.value ? 'var(--color-charcoal)' : 'var(--color-muted)' }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 text-sm focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-sans text-lg mb-4" style={{ color: 'var(--color-muted)' }}>
                  No products found
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="underline text-sm"
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
            className="fixed inset-0 z-50 bg-black/30"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 p-6 overflow-y-auto" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
                Category
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-sm w-full text-left transition-colors ${
                    selectedCategory === 'all' ? 'font-medium' : 'hover:opacity-60'
                  }`}
                  style={{ color: selectedCategory === 'all' ? 'var(--color-charcoal)' : 'var(--color-muted)' }}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-sm w-full text-left transition-colors ${
                      selectedCategory === cat.id ? 'font-medium' : 'hover:opacity-60'
                    }`}
                    style={{ color: selectedCategory === cat.id ? 'var(--color-charcoal)' : 'var(--color-muted)' }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-muted)' }}>
                Price
              </h3>
              <div className="space-y-3">
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block text-sm w-full text-left transition-colors ${
                      priceRange === range.value ? 'font-medium' : 'hover:opacity-60'
                    }`}
                    style={{ color: priceRange === range.value ? 'var(--color-charcoal)' : 'var(--color-muted)' }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsFilterOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}