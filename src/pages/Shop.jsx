import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  // Get filter values from URL
  const activeCategory = searchParams.get('category') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Material filter
    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material === activeMaterial);
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
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    return result;
  }, [activeCategory, activeMaterial, priceRange, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: '0-40', label: 'Under $40' },
    { id: '40-60', label: '$40 - $60' },
    { id: '60-80', label: '$60 - $80' },
    { id: '80-120', label: '$80+' }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'newest', label: 'Newest' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' }
  ];

  const hasActiveFilters = activeCategory !== 'all' || activeMaterial !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
            Shop All
          </h1>
          <p className="text-velmora-taupe mt-3">
            {filteredProducts.length} pieces
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-taupe/20">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Filters Summary */}
          <div className="hidden md:flex items-center gap-4">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-velmora-taupe hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border-none text-velmora-charcoal focus:outline-none cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block text-sm text-left w-full ${
                      activeCategory === 'all'
                        ? 'text-velmora-gold'
                        : 'text-velmora-taupe hover:text-velmora-charcoal'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block text-sm text-left w-full ${
                        activeCategory === cat.id
                          ? 'text-velmora-gold'
                          : 'text-velmora-taupe hover:text-velmora-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => updateFilter('price', range.id)}
                      className={`block text-sm text-left w-full ${
                        priceRange === range.id
                          ? 'text-velmora-gold'
                          : 'text-velmora-taupe hover:text-velmora-charcoal'
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
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-taupe mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addToCart(product)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-charcoal/50 transition-opacity md:hidden ${
          isFilterOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsFilterOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-velmora-cream shadow-lg transform transition-transform ${
            isFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-velmora-charcoal">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-6 h-6 text-velmora-charcoal" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className={`block text-sm w-full text-left ${
                    activeCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-taupe'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`block text-sm w-full text-left ${
                      activeCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-taupe'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-velmora-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-3">
                {priceRanges.map(range => (
                  <button
                    key={range.id}
                    onClick={() => updateFilter('price', range.id)}
                    className={`block text-sm w-full text-left ${
                      priceRange === range.id ? 'text-velmora-gold' : 'text-velmora-taupe'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full py-3 bg-velmora-charcoal text-white text-sm uppercase tracking-widest"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group product-card">
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className="secondary-image w-full h-full object-cover"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="absolute bottom-4 left-4 right-4 py-3 bg-velmora-charcoal text-white text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-velmora-taupe mt-1">${product.price}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-taupe/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}