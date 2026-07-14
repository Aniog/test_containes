import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  
  // Get filters from URL
  const categoryFilter = searchParams.get('category') || '';
  const priceFilter = searchParams.get('price') || '';
  const materialFilter = searchParams.get('material') || '';

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Price filter
    if (priceFilter) {
      if (priceFilter === 'under50') {
        result = result.filter(p => p.price < 50);
      } else if (priceFilter === '50to80') {
        result = result.filter(p => p.price >= 50 && p.price <= 80);
      } else if (priceFilter === 'over80') {
        result = result.filter(p => p.price > 80);
      }
    }

    // Material filter (simplified - all our products are gold plated)
    if (materialFilter) {
      result = result.filter(p => p.material.includes(materialFilter));
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    // 'featured' keeps original order

    return result;
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = categoryFilter || priceFilter || materialFilter;

  return (
    <div className="pt-16 md:pt-20">
      <div className="container py-8">
        <div className="mb-8">
          <div className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-text-muted)] mb-1">Browse</div>
          <h1 className="text-3xl">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.1em] uppercase">Filters</span>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-[var(--velmora-gold)] hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-6">
                <div className="filter-label">Category</div>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <label key={cat} className="filter-option">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={categoryFilter === cat}
                        onChange={() => updateFilter('category', cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                  <label className="filter-option">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={categoryFilter === ''}
                      onChange={() => updateFilter('category', '')}
                    />
                    <span>All</span>
                  </label>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="filter-label">Price</div>
                <div className="space-y-1">
                  {[
                    { label: 'Under $50', value: 'under50' },
                    { label: '$50 – $80', value: '50to80' },
                    { label: 'Over $80', value: 'over80' },
                  ].map(opt => (
                    <label key={opt.value} className="filter-option">
                      <input 
                        type="radio" 
                        name="price" 
                        checked={priceFilter === opt.value}
                        onChange={() => updateFilter('price', opt.value)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                  <label className="filter-option">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceFilter === ''}
                      onChange={() => updateFilter('price', '')}
                    />
                    <span>Any Price</span>
                  </label>
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                <div className="space-y-1">
                  <label className="filter-option">
                    <input 
                      type="checkbox" 
                      checked={materialFilter === 'Gold'}
                      onChange={(e) => updateFilter('material', e.target.checked ? 'Gold' : '')}
                    />
                    <span>18K Gold Plated</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--velmora-border)]">
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              <select 
                className="sort-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A – Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="text-[var(--velmora-text-muted)] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-sm underline">Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;