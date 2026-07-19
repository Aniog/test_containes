import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const selectedCategories = searchParams.getAll('category');
  const selectedMaterials = searchParams.getAll('material');
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '200');
  const sortBy = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

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
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortBy, searchQuery]);

  const updateFilter = (key, value, isMulti = false) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (isMulti) {
      const current = newParams.getAll(key);
      if (current.includes(value)) {
        // Remove
        newParams.delete(key);
        current.filter(v => v !== value).forEach(v => newParams.append(key, v));
      } else {
        newParams.append(key, value);
      }
    } else {
      if (newParams.get(key) === value) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    }
    
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || 
    minPrice > 0 || maxPrice < 200 || searchQuery;

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">Discover</span>
            <h1 className="font-serif-custom text-4xl">The Collection</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="text-xs tracking-[0.1em] text-velmora-muted hover:text-velmora-ink transition-colors"
              >
                Clear Filters
              </button>
            )}
            
            <select 
              value={sortBy} 
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="sort-select"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>

            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="md:hidden text-sm tracking-[0.05em] border border-velmora-taupe px-4 py-2"
            >
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className={`w-full md:w-56 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="space-y-8 sticky top-24">
              {/* Search (mobile) */}
              <div className="md:hidden">
                <label className="filter-label block">Search</label>
                <input 
                  type="text"
                  placeholder="Search jewelry..."
                  value={searchQuery}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value) {
                      newParams.set('search', e.target.value);
                    } else {
                      newParams.delete('search');
                    }
                    setSearchParams(newParams);
                  }}
                  className="w-full border border-velmora-taupe px-3 py-2 text-sm bg-transparent focus:outline-none focus:border-velmora-gold"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => updateFilter('category', cat, true)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                {['Gold', 'Silver'].map((mat) => (
                  <label key={mat} className="filter-option">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => updateFilter('material', mat, true)}
                    />
                    <span>{mat} Tone</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-velmora-muted">$</span>
                    <input 
                      type="number" 
                      value={minPrice}
                      onChange={(e) => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('minPrice', e.target.value || '0');
                        setSearchParams(newParams);
                      }}
                      className="w-20 border border-velmora-taupe px-2 py-1 text-sm bg-transparent"
                    />
                    <span className="text-velmora-muted">to</span>
                    <input 
                      type="number" 
                      value={maxPrice}
                      onChange={(e) => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('maxPrice', e.target.value || '200');
                        setSearchParams(newParams);
                      }}
                      className="w-20 border border-velmora-taupe px-2 py-1 text-sm bg-transparent"
                    />
                  </div>
                  <div className="text-xs text-velmora-muted">$30 — $120 typical range</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-sm text-velmora-muted mb-6">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg font-serif-custom mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn btn-outline">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
