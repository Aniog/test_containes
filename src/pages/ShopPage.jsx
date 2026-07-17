import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

const ShopPage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A to Z' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  const handleAddToCart = (product) => {
    addToCart({ ...product, selectedTone: 'gold', quantity: 1 });
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm uppercase tracking-wider text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block text-left text-sm transition-colors ${
                selectedCategory === category
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-graphite hover:text-velmora-charcoal'
              }`}
            >
              {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-sm uppercase tracking-wider text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100', label: 'Over $100' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-left text-sm transition-colors ${
                priceRange === option.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-graphite hover:text-velmora-charcoal'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1
            className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Shop All
          </h1>
          <div className="w-16 h-px bg-velmora-gold" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-gold/20">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden text-sm uppercase tracking-wider text-velmora-charcoal"
          >
            Filter
          </button>
          <span className="text-sm text-velmora-graphite">
            {filteredAndSortedProducts.length} products
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border-b border-velmora-gold/30 bg-transparent text-velmora-charcoal focus:outline-none focus:border-velmora-gold"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Filter Sidebar - Mobile */}
          {mobileFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-velmora-charcoal/50" onClick={() => setMobileFilterOpen(false)}>
              <div className="absolute right-0 top-0 h-full w-80 bg-velmora-ivory p-8 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg uppercase tracking-wider text-velmora-charcoal">Filter</h2>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <svg className="w-6 h-6 text-velmora-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-square bg-velmora-cream mb-4 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-charcoal text-white px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-charcoal/90"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-velmora-charcoal mb-1">
                    {product.name}
                  </h3>
                  <p className="text-velmora-graphite">${product.price}</p>
                </div>
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-graphite">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
