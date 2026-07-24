import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory !== 'all') {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.isNew ? 1 : -1;
        case 'bestselling':
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: '$100+', min: 100, max: 150 }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="py-16 md:py-20 text-center"
        style={{ backgroundColor: 'var(--color-warm-white)' }}
      >
        <div className="container-luxury">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            The Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl mb-4">
            Shop All Jewelry
          </h1>
          <p className="max-w-md mx-auto" style={{ color: 'var(--color-walnut)' }}>
            Discover our curated collection of demi-fine gold jewelry, designed for everyday luxury.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-luxury py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'font-medium'
                          : 'hover:text-[var(--color-gold-dark)]'
                      }`}
                      style={{
                        color: selectedCategory === category.id
                          ? 'var(--color-espresso)'
                          : 'var(--color-walnut)'
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setPriceRange([0, 150])}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      priceRange[0] === 0 && priceRange[1] === 150
                        ? 'font-medium'
                        : 'hover:text-[var(--color-gold-dark)]'
                    }`}
                    style={{
                      color: priceRange[0] === 0 && priceRange[1] === 150
                        ? 'var(--color-espresso)'
                        : 'var(--color-walnut)'
                    }}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange([range.min, range.max])}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'font-medium'
                          : 'hover:text-[var(--color-gold-dark)]'
                      }`}
                      style={{
                        color: priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'var(--color-espresso)'
                          : 'var(--color-walnut)'
                      }}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: 'var(--color-sand)' }}>
              <p className="text-sm" style={{ color: 'var(--color-taupe)' }}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 text-sm"
                  style={{ color: 'var(--color-espresso)' }}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm bg-transparent border-none cursor-pointer focus:outline-none"
                  style={{ color: 'var(--color-espresso)' }}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="bestselling">Best Selling</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || priceRange[0] !== 0 || priceRange[1] !== 150) && (
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-sm" style={{ color: 'var(--color-taupe)' }}>Active filters:</span>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="flex items-center gap-1 px-3 py-1 text-sm border transition-colors hover:border-[var(--color-gold-dark)]"
                    style={{ borderColor: 'var(--color-sand)' }}
                  >
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <X className="w-3 h-3" />
                  </button>
                )}
                {(priceRange[0] !== 0 || priceRange[1] !== 150) && (
                  <button
                    onClick={() => setPriceRange([0, 150])}
                    className="flex items-center gap-1 px-3 py-1 text-sm border transition-colors hover:border-[var(--color-gold-dark)]"
                    style={{ borderColor: 'var(--color-sand)' }}
                  >
                    ${priceRange[0]} - ${priceRange[1]}
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="stagger-item" style={{ animationDelay: `${index * 0.05}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg mb-4" style={{ color: 'var(--color-walnut)' }}>
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 150]);
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setShowFilters(false)}
          />
          <div
            className="fixed inset-y-0 left-0 z-50 w-80 max-w-full overflow-y-auto p-6"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'font-medium'
                        : 'hover:text-[var(--color-gold-dark)]'
                    }`}
                    style={{
                      color: selectedCategory === category.id
                        ? 'var(--color-espresso)'
                        : 'var(--color-walnut)'
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Price</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setPriceRange([0, 150])}
                  className={`block w-full text-left py-2 text-sm transition-colors ${
                    priceRange[0] === 0 && priceRange[1] === 150
                      ? 'font-medium'
                      : 'hover:text-[var(--color-gold-dark)]'
                  }`}
                  style={{
                    color: priceRange[0] === 0 && priceRange[1] === 150
                      ? 'var(--color-espresso)'
                      : 'var(--color-walnut)'
                  }}
                >
                  All Prices
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange([range.min, range.max])}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      priceRange[0] === range.min && priceRange[1] === range.max
                        ? 'font-medium'
                        : 'hover:text-[var(--color-gold-dark)]'
                    }`}
                    style={{
                      color: priceRange[0] === range.min && priceRange[1] === range.max
                        ? 'var(--color-espresso)'
                        : 'var(--color-walnut)'
                    }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowFilters(false)}
              className="btn-primary w-full"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Shop;
