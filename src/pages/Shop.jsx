import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, X, ShoppingBag, Star } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart, isLoading } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // Get filter values from URL
  const categoryFilter = searchParams.get('category') || 'all';
  const priceMin = searchParams.get('min') || 0;
  const priceMax = searchParams.get('max') || 200;
  const sortBy = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (categoryFilter !== 'all' && product.category !== categoryFilter) return false;
      if (product.price < priceMin || product.price > priceMax) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 0 || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryFilter !== 'all' || priceMin > 0 || priceMax < 200;

  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-[var(--color-cream)] py-16">
        <div className="container text-center">
          <h1 style={{ fontFamily: 'var(--font-serif)' }}>Shop All</h1>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* Categories */}
              <div className="mb-8">
                <h3 
                  className="text-sm tracking-widest uppercase mb-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      categoryFilter === 'all' 
                        ? 'text-[var(--color-gold)] font-medium' 
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left py-2 text-sm transition-colors capitalize ${
                        categoryFilter === cat.id 
                          ? 'text-[var(--color-gold)] font-medium' 
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 
                  className="text-sm tracking-widest uppercase mb-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { updateFilter('min', 0); updateFilter('max', 200); }}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      priceMin == 0 && priceMax == 200
                        ? 'text-[var(--color-gold)] font-medium' 
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                    }`}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => { updateFilter('min', 0); updateFilter('max', 50); }}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      priceMin == 0 && priceMax == 50
                        ? 'text-[var(--color-gold)] font-medium' 
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                    }`}
                  >
                    Under $50
                  </button>
                  <button
                    onClick={() => { updateFilter('min', 50); updateFilter('max', 80); }}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      priceMin == 50 && priceMax == 80
                        ? 'text-[var(--color-gold)] font-medium' 
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                    }`}
                  >
                    $50 - $80
                  </button>
                  <button
                    onClick={() => { updateFilter('min', 80); updateFilter('max', 200); }}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      priceMin == 80 && priceMax == 200
                        ? 'text-[var(--color-gold)] font-medium' 
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)]'
                    }`}
                  >
                    $80+
                  </button>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-border)]">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Filter size={18} strokeWidth={1.5} />
                Filter
              </button>

              <span className="text-sm text-[var(--color-text-secondary)] hidden lg:block">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </span>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-3">
                <label 
                  className="text-sm text-[var(--color-text-secondary)] hidden sm:block"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="bg-transparent text-sm border-none focus:outline-none cursor-pointer text-[var(--color-charcoal)]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[var(--color-cream)]">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Quick Add */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className={`absolute bottom-4 left-4 right-4 bg-[var(--color-charcoal)] text-white py-3 flex items-center justify-center gap-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                          hoveredId === product.id 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <ShoppingBag size={16} strokeWidth={1.5} />
                        Add to Cart
                      </button>
                    </div>

                    {/* Info */}
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            fill={i < Math.floor(product.rating) ? 'var(--color-gold)' : 'none'}
                            stroke="var(--color-gold)"
                          />
                        ))}
                      </div>
                      <h3 
                        className="product-name mb-1"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-[var(--color-text-secondary)]">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsFilterOpen(false)}
        />
        <div 
          className={`absolute left-0 top-0 bottom-0 w-80 bg-[var(--color-primary)] transform transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 
                className="text-lg tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Filters
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 
                className="text-sm tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => { updateFilter('category', 'all'); setIsFilterOpen(false); }}
                  className={`block w-full text-left py-2 text-sm ${
                    categoryFilter === 'all' ? 'text-[var(--color-gold)] font-medium' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { updateFilter('category', cat.id); setIsFilterOpen(false); }}
                    className={`block w-full text-left py-2 text-sm capitalize ${
                      categoryFilter === cat.id ? 'text-[var(--color-gold)] font-medium' : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 
                className="text-sm tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Price
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => { updateFilter('min', 0); updateFilter('max', 200); setIsFilterOpen(false); }}
                  className={`block w-full text-left py-2 text-sm ${
                    priceMin == 0 && priceMax == 200 ? 'text-[var(--color-gold)] font-medium' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  All Prices
                </button>
                <button
                  onClick={() => { updateFilter('min', 0); updateFilter('max', 50); setIsFilterOpen(false); }}
                  className={`block w-full text-left py-2 text-sm ${
                    priceMin == 0 && priceMax == 50 ? 'text-[var(--color-gold)] font-medium' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  Under $50
                </button>
                <button
                  onClick={() => { updateFilter('min', 50); updateFilter('max', 80); setIsFilterOpen(false); }}
                  className={`block w-full text-left py-2 text-sm ${
                    priceMin == 50 && priceMax == 80 ? 'text-[var(--color-gold)] font-medium' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  $50 - $80
                </button>
                <button
                  onClick={() => { updateFilter('min', 80); updateFilter('max', 200); setIsFilterOpen(false); }}
                  className={`block w-full text-left py-2 text-sm ${
                    priceMin == 80 && priceMax == 200 ? 'text-[var(--color-gold)] font-medium' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  $80+
                </button>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="btn btn-outline w-full"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
