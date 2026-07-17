import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const filters = {
  category: [
    { value: 'all', label: 'All Jewelry' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
    { value: 'sets', label: 'Sets' }
  ],
  price: [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to75', label: '$50 - $75' },
    { value: 'over75', label: 'Over $75' }
  ],
  material: [
    { value: 'all', label: 'All Materials' },
    { value: '18K Gold Plated', label: '18K Gold Plated' },
    { value: 'Sterling Silver', label: 'Sterling Silver' }
  ]
};

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' }
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const [selectedFilters, setSelectedFilters] = useState({
    category: searchParams.get('category') || 'all',
    price: 'all',
    material: 'all'
  });

  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedFilters.category !== 'all') {
      result = result.filter(p => p.category === selectedFilters.category);
    }

    // Price filter
    if (selectedFilters.price !== 'all') {
      result = result.filter(p => {
        if (selectedFilters.price === 'under50') return p.price < 50;
        if (selectedFilters.price === '50to75') return p.price >= 50 && p.price <= 75;
        if (selectedFilters.price === 'over75') return p.price > 75;
        return true;
      });
    }

    // Material filter
    if (selectedFilters.material !== 'all') {
      result = result.filter(p => p.material === selectedFilters.material);
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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedFilters, sortBy]);

  const handleFilterChange = (key, value) => {
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category' && value !== 'all') {
      setSearchParams({ category: value });
    } else if (key === 'category' && value === 'all') {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSelectedFilters({
      category: 'all',
      price: 'all',
      material: 'all'
    });
    setSearchParams({});
  };

  const hasActiveFilters = 
    selectedFilters.category !== 'all' || 
    selectedFilters.price !== 'all' || 
    selectedFilters.material !== 'all';

  return (
    <main className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-velmora-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            The Collection
          </h1>
          <p className="font-sans text-velmora-charcoal/60">
            Discover pieces crafted to be treasured
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Mobile Filter Toggle & Sort */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && <span className="w-2 h-2 bg-velmora-gold rounded-full" />}
          </button>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 font-sans text-sm text-velmora-charcoal focus:outline-none"
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
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-sans text-sm tracking-widest uppercase text-velmora-charcoal">
                  Filters
                </h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="font-sans text-xs text-velmora-gold hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal/60 mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  {filters.category.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedFilters.category === option.value}
                        onChange={() => handleFilterChange('category', option.value)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className={`font-sans text-sm transition-colors ${
                        selectedFilters.category === option.value
                          ? 'text-velmora-charcoal'
                          : 'text-velmora-charcoal/60 group-hover:text-velmora-charcoal'
                      }`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal/60 mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {filters.price.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedFilters.price === option.value}
                        onChange={() => handleFilterChange('price', option.value)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className={`font-sans text-sm transition-colors ${
                        selectedFilters.price === option.value
                          ? 'text-velmora-charcoal'
                          : 'text-velmora-charcoal/60 group-hover:text-velmora-charcoal'
                      }`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal/60 mb-4">
                  Material
                </h3>
                <div className="space-y-3">
                  {filters.material.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedFilters.material === option.value}
                        onChange={() => handleFilterChange('material', option.value)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className={`font-sans text-sm transition-colors ${
                        selectedFilters.material === option.value
                          ? 'text-velmora-charcoal'
                          : 'text-velmora-charcoal/60 group-hover:text-velmora-charcoal'
                      }`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <span className="font-sans text-sm text-velmora-charcoal/60 mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 font-sans text-sm text-velmora-charcoal focus:outline-none border-b border-velmora-sand pb-1"
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

            {/* Results Count */}
            <p className="font-sans text-sm text-velmora-charcoal/60 mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className={`w-full h-full object-cover transition-all duration-500 ${
                            hoveredProduct === product.id ? 'opacity-0 scale-105' : 'opacity-100'
                          }`}
                        />
                        <img
                          src={product.images[1]}
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                            hoveredProduct === product.id ? 'opacity-100' : 'opacity-0 scale-95'
                          }`}
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-charcoal text-white font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-velmora-gold ${
                            hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <h3 className="product-name text-velmora-charcoal">{product.name}</h3>
                      <p className="font-sans text-sm text-velmora-gold mt-1">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-charcoal/60 mb-4">
                  No pieces found
                </p>
                <p className="font-sans text-sm text-velmora-charcoal/40 mb-6">
                  Try adjusting your filters to find what you're looking for
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-velmora-cream shadow-soft-lg animate-slide-up overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
              <h2 className="font-serif text-xl tracking-wider">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal/60 mb-4">
                  Category
                </h3>
                <div className="space-y-3">
                  {filters.category.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedFilters.category === option.value}
                        onChange={() => handleFilterChange('category', option.value)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="font-sans text-sm text-velmora-charcoal">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal/60 mb-4">
                  Price
                </h3>
                <div className="space-y-3">
                  {filters.price.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={selectedFilters.price === option.value}
                        onChange={() => handleFilterChange('price', option.value)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="font-sans text-sm text-velmora-charcoal">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal/60 mb-4">
                  Material
                </h3>
                <div className="space-y-3">
                  {filters.material.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-material"
                        checked={selectedFilters.material === option.value}
                        onChange={() => handleFilterChange('material', option.value)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="font-sans text-sm text-velmora-charcoal">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-velmora-sand bg-velmora-ivory sticky bottom-0">
              <div className="flex gap-4">
                <button
                  onClick={clearFilters}
                  className="flex-1 btn-outline"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 btn-primary"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}