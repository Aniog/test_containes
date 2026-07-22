import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const filterOptions = {
  category: ['Earrings', 'Necklaces', 'Huggies', 'Sets'],
  price: ['Under $50', '$50 - $75', '$75 - $100', 'Over $100'],
  material: ['18K Gold Plated', 'Sterling Silver', 'Rose Gold']
};

function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  const clearFilters = () => {
    setFilters({ category: [], price: [], material: [] });
  };

  const hasFilters = filters.category.length > 0 || filters.price.length > 0 || filters.material.length > 0;

  const filterContent = (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-xl">Filters</h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-charcoal)]"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div className="filter-section">
        <h4 className="text-sm uppercase tracking-wider mb-4">Category</h4>
        {filterOptions.category.map((option) => (
          <label key={option} className="filter-option">
            <div
              className={`filter-checkbox ${filters.category.includes(option) ? 'checked' : ''}`}
              onClick={() => toggleFilter('category', option)}
            >
              {filters.category.includes(option) && (
                <span className="text-white text-xs">✓</span>
              )}
            </div>
            <span>{option}</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="filter-section">
        <h4 className="text-sm uppercase tracking-wider mb-4">Price</h4>
        {filterOptions.price.map((option) => (
          <label key={option} className="filter-option">
            <div
              className={`filter-checkbox ${filters.price.includes(option) ? 'checked' : ''}`}
              onClick={() => toggleFilter('price', option)}
            >
              {filters.price.includes(option) && (
                <span className="text-white text-xs">✓</span>
              )}
            </div>
            <span>{option}</span>
          </label>
        ))}
      </div>

      {/* Material */}
      <div className="filter-section">
        <h4 className="text-sm uppercase tracking-wider mb-4">Material</h4>
        {filterOptions.material.map((option) => (
          <label key={option} className="filter-option">
            <div
              className={`filter-checkbox ${filters.material.includes(option) ? 'checked' : ''}`}
              onClick={() => toggleFilter('material', option)}
            >
              {filters.material.includes(option) && (
                <span className="text-white text-xs">✓</span>
              )}
            </div>
            <span>{option}</span>
          </label>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Filter Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50 w-80 md:w-64 bg-[var(--color-warm-white)] p-6 md:p-0
          transform transition-transform duration-300 md:transform-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={onClose} aria-label="Close filters">
            <X className="w-6 h-6" />
          </button>
        </div>
        {filterContent}
      </aside>
    </>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] bg-[var(--color-ivory)] relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="secondary-image">
            <img
              src={product.images[1]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="quick-view-overlay">
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              className="btn btn-primary text-xs"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-xs">{product.name}</h3>
        </Link>
        <p className="text-sm mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const { category } = useParams();
  const [filters, setFilters] = useState({ category: [], price: [], material: [] });
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category from URL
    if (category) {
      const categoryMap = {
        'earrings': 'Earrings',
        'necklaces': 'Necklaces',
        'huggies': 'Huggies',
        'sets': 'Sets'
      };
      if (categoryMap[category]) {
        result = result.filter(p => p.category === categoryMap[category].toLowerCase());
      }
    }

    // Apply filters
    if (filters.category.length > 0) {
      result = result.filter(p => filters.category.includes(p.category.charAt(0).toUpperCase() + p.category.slice(1)));
    }

    if (filters.price.length > 0) {
      result = result.filter(p => {
        return filters.price.some(range => {
          if (range === 'Under $50') return p.price < 50;
          if (range === '$50 - $75') return p.price >= 50 && p.price <= 75;
          if (range === '$75 - $100') return p.price > 75 && p.price <= 100;
          if (range === 'Over $100') return p.price > 100;
          return false;
        });
      });
    }

    if (filters.material.length > 0) {
      result = result.filter(p => filters.material.includes(p.material));
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, filters, sortBy]);

  const pageTitle = category 
    ? categories.find(c => c.id === category)?.name || 'Shop'
    : 'All Jewelry';

  return (
    <main className="pt-20 md:pt-24">
      <div className="container">
        {/* Header */}
        <div className="py-8 md:py-12">
          <h1 className="font-serif text-3xl md:text-4xl mb-2">{pageTitle}</h1>
          <p className="text-[var(--color-muted)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter & Sort */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              isOpen={false}
              onClose={() => {}}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-2 text-sm border border-[var(--color-border)] px-4 focus:outline-none"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[var(--color-muted)] mb-4">No products found</p>
                <button
                  onClick={() => setFilters({ category: [], price: [], material: [] })}
                  className="btn btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}