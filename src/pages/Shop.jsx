import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, materials } from '../data/products';

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

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

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
        // Add
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
    minPrice > 0 || maxPrice < 200 || sortBy !== 'featured' || searchQuery;

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] text-velmora-text-light mb-2">DISCOVER</p>
          <h1 className="serif text-4xl tracking-[0.05em]">The Collection</h1>
          {searchQuery && (
            <p className="mt-2 text-sm text-velmora-text-light">
              Showing results for "{searchQuery}"
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile filter toggle */}
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between border border-velmora-border p-3 mb-4 text-sm"
            >
              FILTERS
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
              {/* Categories */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => updateFilter('category', cat, true)}
                        className="accent-velmora-accent"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="filter-label">Material</p>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => updateFilter('material', mat, true)}
                        className="accent-velmora-accent"
                      />
                      {mat} Tone
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="filter-label">Price Range</p>
                <div className="space-y-3">
                  <div className="flex gap-2 items-center text-sm">
                    <span>$</span>
                    <input 
                      type="number" 
                      value={minPrice} 
                      onChange={(e) => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('minPrice', e.target.value || '0');
                        setSearchParams(newParams);
                      }}
                      className="input w-20 py-1 text-sm" 
                      min="0"
                    />
                    <span>to</span>
                    <span>$</span>
                    <input 
                      type="number" 
                      value={maxPrice} 
                      onChange={(e) => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('maxPrice', e.target.value || '200');
                        setSearchParams(newParams);
                      }}
                      className="input w-20 py-1 text-sm" 
                      min="0"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={maxPrice}
                    onChange={(e) => {
                      const newParams = new URLSearchParams(searchParams);
                      newParams.set('maxPrice', e.target.value);
                      setSearchParams(newParams);
                    }}
                    className="w-full accent-velmora-accent"
                  />
                </div>
              </div>

              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs tracking-widest underline text-velmora-text-light hover:text-velmora-text"
                >
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort & Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-velmora-border">
              <p className="text-sm text-velmora-text-light">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-velmora-text-light">Sort:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="sort-select text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg mb-2">No products found</p>
                <p className="text-sm text-velmora-text-light mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn btn-outline">
                  CLEAR FILTERS
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