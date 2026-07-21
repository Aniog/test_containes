import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Sets' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', name: 'Under $50', min: 0, max: 50 },
    { id: '50to75', name: '$50 - $75', min: 50, max: 75 },
    { id: '75to100', name: '$75 - $100', min: 75, max: 100 },
    { id: 'over100', name: 'Over $100', min: 100, max: Infinity },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const range = priceRanges.find((r) => r.id === priceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Shop All
          </h1>
          <p className="text-velmora-taupe">
            {filteredProducts.length} pieces
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-velmora-gold rounded-full" />
            )}
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 text-sm uppercase tracking-wider focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-sm transition-colors ${
                          selectedCategory === category.id
                            ? 'text-velmora-gold'
                            : 'text-velmora-taupe hover:text-velmora-charcoal'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <ul className="space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.id}>
                      <button
                        onClick={() => setPriceRange(range.id)}
                        className={`text-sm transition-colors ${
                          priceRange === range.id
                            ? 'text-velmora-gold'
                            : 'text-velmora-taupe hover:text-velmora-charcoal'
                        }`}
                      >
                        {range.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-taupe hover:text-velmora-gold transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <span className="text-sm text-velmora-taupe mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-6 text-sm uppercase tracking-wider focus:outline-none border-b border-velmora-taupe/30 pb-1"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-taupe mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
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

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-velmora-cream shadow-xl transform transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'text-velmora-gold'
                          : 'text-velmora-taupe'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Price</h3>
              <ul className="space-y-3">
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <button
                      onClick={() => setPriceRange(range.id)}
                      className={`text-sm transition-colors ${
                        priceRange === range.id
                          ? 'text-velmora-gold'
                          : 'text-velmora-taupe'
                      }`}
                    >
                      {range.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full btn-primary"
              >
                Apply Filters
              </button>
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                  className="w-full btn-outline"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}