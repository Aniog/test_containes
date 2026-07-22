import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from './ProductCard';

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
];

const ShopPage = () => {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = PRICE_RANGES.find(p => p.id === selectedPriceRange);
    if (priceRange) {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPriceRange !== 'all',
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 bg-charcoal-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="shop-hero-bg-d4e5f6"
          data-strk-bg="[shop-hero-title] [shop-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container-luxury text-center">
          <h1 id="shop-hero-title" className="font-serif text-4xl md:text-5xl text-cream-50 mb-4">
            {category ? categories.find(c => c.id === category)?.name || 'Shop' : 'Shop All'}
          </h1>
          <p id="shop-hero-subtitle" className="font-sans text-base text-cream-200/80 max-w-lg mx-auto">
            Discover our complete collection of demi-fine gold jewelry, crafted for everyday luxury.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container-luxury">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-200">
            {/* Left: Filter button (mobile) */}
            <button
              onClick={() => setShowFilters(true)}
              className="md:hidden flex items-center gap-2 text-sm font-sans text-charcoal-700"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-charcoal-900 text-cream-50 text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Left: Results count (desktop) */}
            <p className="hidden md:block text-sm text-charcoal-500 font-sans">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {/* Right: Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="flex items-center gap-2 text-sm font-sans text-charcoal-700 hover:text-charcoal-900"
              >
                <span>Sort by:</span>
                <span className="font-medium">
                  {SORT_OPTIONS.find(o => o.id === sortBy)?.label}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {sortDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setSortDropdownOpen(false)} 
                  />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-cream-50 border border-cream-200 shadow-lg z-20">
                    {SORT_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSortBy(option.id);
                          setSortDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm font-sans hover:bg-cream-100 transition-colors ${
                          sortBy === option.id ? 'text-gold-600 font-medium' : 'text-charcoal-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-charcoal-900 mb-4">
                    Category
                  </h3>
                  <div className="space-y-2">
                    <Link
                      to="/shop"
                      onClick={() => setSelectedCategory('all')}
                      className={`block text-sm font-sans py-1 transition-colors ${
                        selectedCategory === 'all'
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600 hover:text-charcoal-900'
                      }`}
                    >
                      All Products
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/collections/${cat.id}`}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`block text-sm font-sans py-1 transition-colors ${
                          selectedCategory === cat.id
                            ? 'text-gold-600 font-medium'
                            : 'text-charcoal-600 hover:text-charcoal-900'
                        }`}
                      >
                        {cat.name}
                        <span className="text-charcoal-400 ml-2">({products.filter(p => p.category === cat.id).length})</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-charcoal-900 mb-4">
                    Price
                  </h3>
                  <div className="space-y-2">
                    {PRICE_RANGES.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPriceRange(range.id)}
                        className={`block text-sm font-sans py-1 w-full text-left transition-colors ${
                          selectedPriceRange === range.id
                            ? 'text-gold-600 font-medium'
                            : 'text-charcoal-600 hover:text-charcoal-900'
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
                    onClick={clearAllFilters}
                    className="text-sm font-sans text-charcoal-500 hover:text-charcoal-900 underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="font-serif text-xl text-charcoal-900 mb-4">
                    No products found
                  </p>
                  <p className="text-sm text-charcoal-500 mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="btn-secondary text-xs"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div 
            className="fixed inset-0 bg-charcoal-900/50 z-50"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-cream-50 z-50 shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl text-charcoal-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 text-charcoal-500 hover:text-charcoal-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-charcoal-900 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <Link
                    to="/shop"
                    onClick={() => {
                      setSelectedCategory('all');
                      setShowFilters(false);
                    }}
                    className={`block text-sm font-sans py-2 transition-colors ${
                      selectedCategory === 'all'
                        ? 'text-gold-600 font-medium'
                        : 'text-charcoal-600'
                    }`}
                  >
                    All Products
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/collections/${cat.id}`}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setShowFilters(false);
                      }}
                      className={`block text-sm font-sans py-2 transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-medium tracking-widest uppercase text-charcoal-900 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => {
                        setSelectedPriceRange(range.id);
                      }}
                      className={`block text-sm font-sans py-2 w-full text-left transition-colors ${
                        selectedPriceRange === range.id
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="w-full btn-primary"
              >
                Show {filteredProducts.length} Results
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    clearAllFilters();
                    setShowFilters(false);
                  }}
                  className="w-full mt-3 text-sm font-sans text-charcoal-500 hover:text-charcoal-900 underline underline-offset-4"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopPage;
