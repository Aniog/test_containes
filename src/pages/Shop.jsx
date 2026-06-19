import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' },
];

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-[var(--color-ivory)] overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Hover Image */}
          <img
            src={product.hoverImage}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Quick Add Button */}
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, 1, product.variants[0]);
              }}
              className="w-full py-3 bg-white/90 backdrop-blur-sm font-sans text-sm tracking-wide hover:bg-white transition-colors flex items-center justify-center gap-2"
              style={{ color: 'var(--color-warm-black)' }}
            >
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-xs mb-2" style={{ color: 'var(--color-warm-black)' }}>
          {product.name}
        </h3>
        <p className="font-sans text-sm mb-2" style={{ color: 'var(--color-muted)' }}>
          {product.description}
        </p>
        <p className="font-sans font-medium" style={{ color: 'var(--color-warm-black)' }}>
          ${product.price}
        </p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3"
              fill={i < product.rating ? 'var(--color-gold)' : 'none'}
              style={{ color: 'var(--color-gold)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const currentCategory = searchParams.get('category') || 'all';
  const currentPrice = searchParams.get('price') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (currentCategory !== 'all') {
      result = result.filter((p) => p.category === currentCategory);
    }

    // Filter by price
    if (currentPrice !== 'all') {
      result = result.filter((p) => {
        switch (currentPrice) {
          case 'under-50':
            return p.price < 50;
          case '50-75':
            return p.price >= 50 && p.price <= 75;
          case '75-100':
            return p.price >= 75 && p.price <= 100;
          case 'over-100':
            return p.price > 100;
          default:
            return true;
        }
      });
    }

    // Sort
    switch (currentSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [currentCategory, currentPrice, currentSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = currentCategory !== 'all' || currentPrice !== 'all';

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Page Header */}
      <div className="bg-[var(--color-ivory)] py-16">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: 'var(--color-warm-black)' }}>
            Shop All
          </h1>
          <p className="font-sans text-sm max-w-md mx-auto" style={{ color: 'var(--color-muted)' }}>
            Discover our complete collection of premium demi-fine jewelry
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 font-sans text-sm"
            style={{ color: 'var(--color-warm-black)' }}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
            )}
          </button>
          
          <div className="relative">
            <select
              value={currentSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none px-4 py-2 pr-8 font-sans text-sm border bg-transparent cursor-pointer"
              style={{ 
                borderColor: 'var(--color-border)',
                color: 'var(--color-warm-black)'
              }}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'var(--color-muted)' }} />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-warm-black)' }}>
                  Category
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block font-sans text-sm text-left transition-colors ${
                      currentCategory === 'all' ? 'font-medium' : ''
                    }`}
                    style={{ color: currentCategory === 'all' ? 'var(--color-gold-dark)' : 'var(--color-muted)' }}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block font-sans text-sm text-left capitalize transition-colors ${
                        currentCategory === cat.id ? 'font-medium' : ''
                      }`}
                      style={{ color: currentCategory === cat.id ? 'var(--color-gold-dark)' : 'var(--color-muted)' }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-warm-black)' }}>
                  Price
                </h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`block font-sans text-sm text-left transition-colors ${
                        currentPrice === range.value ? 'font-medium' : ''
                      }`}
                      style={{ color: currentPrice === range.value ? 'var(--color-gold-dark)' : 'var(--color-muted)' }}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-sm underline"
                  style={{ color: 'var(--color-muted)' }}
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>
                {filteredProducts.length} products
              </p>
              
              <div className="relative">
                <select
                  value={currentSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 font-sans text-sm border bg-transparent cursor-pointer"
                  style={{ 
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-warm-black)'
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: 'var(--color-muted)' }} />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-4" style={{ color: 'var(--color-warm-black)' }}>
                  No products found
                </p>
                <p className="font-sans text-sm mb-6" style={{ color: 'var(--color-muted)' }}>
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-[var(--color-cream)] p-6 transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-xl" style={{ color: 'var(--color-warm-black)' }}>
              Filters
            </h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-warm-black)' }}>
              Category
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => {
                  updateFilter('category', 'all');
                }}
                className={`block font-sans text-sm text-left w-full ${
                  currentCategory === 'all' ? 'font-medium' : ''
                }`}
                style={{ color: currentCategory === 'all' ? 'var(--color-gold-dark)' : 'var(--color-muted)' }}
              >
                All Jewelry
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => updateFilter('category', cat.id)}
                  className={`block font-sans text-sm text-left w-full capitalize ${
                    currentCategory === cat.id ? 'font-medium' : ''
                  }`}
                  style={{ color: currentCategory === cat.id ? 'var(--color-gold-dark)' : 'var(--color-muted)' }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-warm-black)' }}>
              Price
            </h3>
            <div className="space-y-3">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => updateFilter('price', range.value)}
                  className={`block font-sans text-sm text-left w-full ${
                    currentPrice === range.value ? 'font-medium' : ''
                  }`}
                  style={{ color: currentPrice === range.value ? 'var(--color-gold-dark)' : 'var(--color-muted)' }}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Button */}
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
              className="w-full mt-4 py-3 font-sans text-sm"
              style={{ color: 'var(--color-muted)' }}
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}