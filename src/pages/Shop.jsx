import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.shortDescription.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, priceRange, sortBy, searchQuery]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) 
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 120]);
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 120;

  return (
    <div className="container py-10 md:py-16">
      <div className="mb-10">
        <h1 className="heading-serif text-4xl mb-2">Shop All</h1>
        <p className="text-[var(--velmora-text-muted)]">Demi-fine gold jewelry, crafted for everyday wear.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-[0.1em] uppercase text-[var(--velmora-text-muted)]">Filters</span>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-[var(--velmora-gold-dark)] hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search */}
            <div className="mb-8">
              <div className="filter-label">Search</div>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pieces..."
                className="w-full border border-[var(--velmora-border)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--velmora-gold)]"
              />
            </div>

            {/* Category */}
            <div className="mb-8">
              <div className="filter-label mb-3">Category</div>
              {categories.map((cat) => (
                <label key={cat} className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <div className="filter-label mb-3">Price Range</div>
              <div className="space-y-2">
                <input 
                  type="range" 
                  min="0" 
                  max="120" 
                  step="1"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[var(--velmora-deep)]"
                />
                <div className="flex justify-between text-xs text-[var(--velmora-text-muted)]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block pt-4 border-t border-[var(--velmora-border-light)] text-xs text-[var(--velmora-text-muted)]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          {/* Sort + Count */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--velmora-border-light)]">
            <span className="text-sm text-[var(--velmora-text-muted)]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
            </span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg mb-4">No pieces match your filters.</p>
              <button onClick={clearFilters} className="btn btn-outline">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
