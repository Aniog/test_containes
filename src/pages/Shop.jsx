import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const sortOption = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      const range = priceRanges.find(r => r.value === priceFilter);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.shortDescription.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, sortOption, searchQuery]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all' || searchQuery;

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Shop All Jewelry</h1>
        <p>Thoughtfully crafted pieces for everyday elegance</p>
      </div>

      <div className="shop-layout">
        {/* Desktop Filters */}
        <aside className="shop-filters">
          <div className="filter-section">
            <div className="filter-title">Category</div>
            <div className="filter-options">
              {categories.map((cat) => (
                <label key={cat.value} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    checked={categoryFilter === cat.value}
                    onChange={() => updateFilter('category', cat.value)}
                  />
                  {cat.label}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-title">Price</div>
            <div className="filter-options">
              {priceRanges.map((range) => (
                <label key={range.value} className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceFilter === range.value}
                    onChange={() => updateFilter('price', range.value)}
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button 
              className="btn btn-outline btn-sm" 
              onClick={clearFilters}
              style={{ marginTop: '0.5rem' }}
            >
              Clear Filters
            </button>
          )}
        </aside>

        {/* Mobile Filters Toggle */}
        <div className="shop-filters-mobile">
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            {isMobileFiltersOpen ? 'Hide' : 'Show'} Filters
          </button>
          
          {isMobileFiltersOpen && (
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#fff', border: '1px solid #d4ccc3' }}>
              <div className="filter-section">
                <div className="filter-title">Category</div>
                <div className="filter-options">
                  {categories.map((cat) => (
                    <label key={cat.value} className="filter-option">
                      <input
                        type="radio"
                        name="category-mobile"
                        checked={categoryFilter === cat.value}
                        onChange={() => updateFilter('category', cat.value)}
                      />
                      {cat.label}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter-section">
                <div className="filter-title">Price</div>
                <div className="filter-options">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="filter-option">
                      <input
                        type="radio"
                        name="price-mobile"
                        checked={priceFilter === range.value}
                        onChange={() => updateFilter('price', range.value)}
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products */}
        <div>
          <div className="shop-toolbar">
            <span className="results-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
            <select 
              className="sort-select"
              value={sortOption}
              onChange={(e) => updateFilter('sort', e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="shop-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h4>No pieces found</h4>
              <p>Try adjusting your filters.</p>
              <button className="btn btn-outline mt-4" onClick={clearFilters}>
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
