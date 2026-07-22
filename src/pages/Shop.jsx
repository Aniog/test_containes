import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
        p.description.toLowerCase().includes(q)
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

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedMaterials.length > 0 || 
    minPrice > 0 || 
    maxPrice < 200 ||
    searchQuery;

  return (
    <div className="pt-20">
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <span className="text-xs tracking-[0.1em] text-[#6B635C] uppercase">Discover</span>
            <h1 className="mt-1">The Collection</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {searchQuery && (
              <span className="text-sm text-[#6B635C]">
                Results for "{searchQuery}"
              </span>
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
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <span className="text-xs tracking-[0.1em] uppercase text-[#6B635C]">Filters</span>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-[#B89778] hover:underline"
                  >
                    CLEAR ALL
                  </button>
                )}
                <button 
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                  className="lg:hidden text-sm"
                >
                  {isMobileFiltersOpen ? 'HIDE' : 'SHOW'}
                </button>
              </div>

              <div className={`space-y-8 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <div className="filter-label">CATEGORY</div>
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

                {/* Material Filter */}
                <div>
                  <div className="filter-label">MATERIAL</div>
                  {materials.map((mat) => (
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

                {/* Price Filter */}
                <div>
                  <div className="filter-label mb-4">PRICE RANGE</div>
                  <div className="space-y-2">
                    <input 
                      type="range" 
                      min="30" 
                      max="120" 
                      value={maxPrice}
                      onChange={(e) => updateFilter('maxPrice', e.target.value)}
                      className="w-full accent-[#B89778]"
                    />
                    <div className="flex justify-between text-xs text-[#6B635C]">
                      <span>$30</span>
                      <span>${maxPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B635C] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-gold-outline">
                  CLEAR FILTERS
                </button>
              </div>
            )}

            {filteredProducts.length > 0 && (
              <p className="text-center text-xs text-[#6B635C] mt-12 tracking-wider">
                SHOWING {filteredProducts.length} OF {products.length} PIECES
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
