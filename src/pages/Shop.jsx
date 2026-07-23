import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
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

    // Price filter
    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
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
  }, [selectedCategories, minPrice, maxPrice, sortBy, searchQuery]);

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
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs tracking-[0.2em] uppercase text-[#8B7355]">Discover</span>
        <h1 className="heading-serif text-4xl mt-1">The Collection</h1>
        {searchQuery && (
          <p className="text-[#6B6058] mt-2">Results for "{searchQuery}"</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className="lg:w-56 flex-shrink-0">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="lg:hidden w-full flex items-center justify-between border border-[#D4C9B9] p-3 mb-4"
          >
            <span className="text-sm tracking-[0.1em] uppercase">Filters</span>
            <ChevronDown className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} size={16} />
          </button>

          <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
            {/* Categories */}
            <div>
              <div className="filter-label">Category</div>
              {categories.map((cat) => (
                <label key={cat} className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => updateFilter('category', cat, true)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div>
              <div className="filter-label">Price Range</div>
              <div className="space-y-2 text-sm">
                <label className="filter-option">
                  <input 
                    type="radio" 
                    name="price" 
                    checked={minPrice === 0 && maxPrice === 200}
                    onChange={() => {
                      const p = new URLSearchParams(searchParams);
                      p.delete('minPrice');
                      p.delete('maxPrice');
                      setSearchParams(p);
                    }}
                  />
                  All Prices
                </label>
                <label className="filter-option">
                  <input 
                    type="radio" 
                    name="price" 
                    checked={minPrice === 0 && maxPrice === 50}
                    onChange={() => {
                      const p = new URLSearchParams(searchParams);
                      p.set('minPrice', '0');
                      p.set('maxPrice', '50');
                      setSearchParams(p);
                    }}
                  />
                  Under $50
                </label>
                <label className="filter-option">
                  <input 
                    type="radio" 
                    name="price" 
                    checked={minPrice === 50 && maxPrice === 80}
                    onChange={() => {
                      const p = new URLSearchParams(searchParams);
                      p.set('minPrice', '50');
                      p.set('maxPrice', '80');
                      setSearchParams(p);
                    }}
                  />
                  $50 – $80
                </label>
                <label className="filter-option">
                  <input 
                    type="radio" 
                    name="price" 
                    checked={minPrice === 80 && maxPrice === 200}
                    onChange={() => {
                      const p = new URLSearchParams(searchParams);
                      p.set('minPrice', '80');
                      p.set('maxPrice', '200');
                      setSearchParams(p);
                    }}
                  />
                  $80 & Above
                </label>
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="filter-label">Material</div>
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={selectedMaterials.includes('gold')}
                  onChange={() => updateFilter('material', 'gold', true)}
                />
                18K Gold Plated
              </label>
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={selectedMaterials.includes('crystal')}
                  onChange={() => updateFilter('material', 'crystal', true)}
                />
                Crystal Accents
              </label>
            </div>

            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="text-xs tracking-[0.1em] uppercase text-[#8B7355] hover:underline"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D4C9B9]">
            <span className="text-sm text-[#6B6058]">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
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
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="text-lg mb-2">No pieces found</p>
              <p className="text-sm text-[#6B6058] mb-4">Try adjusting your filters.</p>
              <button onClick={clearFilters} className="btn btn-outline btn-sm">
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
