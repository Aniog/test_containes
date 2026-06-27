import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
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
      newParams.set(key, value);
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
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Discover</span>
              <h1 className="font-serif text-4xl md:text-5xl tracking-tight">The Collection</h1>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase text-velmora-text-muted hover:text-velmora-gold"
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
                <option value="name">Name: A–Z</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Filters Sidebar */}
            <aside className="lg:w-56 flex-shrink-0">
              {/* Mobile Filter Toggle */}
              <button 
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="lg:hidden w-full mb-4 py-2 border border-velmora-border text-sm tracking-widest"
              >
                {isMobileFiltersOpen ? 'HIDE FILTERS' : 'SHOW FILTERS'}
              </button>

              <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
                {/* Category */}
                <div>
                  <div className="filter-label">Category</div>
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 filter-option py-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => updateFilter('category', cat, true)}
                        className="accent-velmora-gold"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>

                {/* Material */}
                <div>
                  <div className="filter-label">Material</div>
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-2 filter-option py-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => updateFilter('material', mat, true)}
                        className="accent-velmora-gold"
                      />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>

                {/* Price Range */}
                <div>
                  <div className="filter-label mb-3">Price Range</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-velmora-text-muted">$</span>
                      <input 
                        type="number" 
                        value={minPrice} 
                        onChange={(e) => updateFilter('minPrice', e.target.value)}
                        className="w-20 border border-velmora-border px-2 py-1 text-sm"
                        min="0"
                      />
                      <span className="text-velmora-text-muted">to</span>
                      <input 
                        type="number" 
                        value={maxPrice} 
                        onChange={(e) => updateFilter('maxPrice', e.target.value)}
                        className="w-20 border border-velmora-border px-2 py-1 text-sm"
                        min="0"
                      />
                    </div>
                    <input 
                      type="range" 
                      min="30" 
                      max="120" 
                      step="1"
                      value={maxPrice}
                      onChange={(e) => updateFilter('maxPrice', e.target.value)}
                      className="w-full accent-velmora-gold"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {searchQuery && (
                <p className="text-sm text-velmora-text-muted mb-4">
                  Showing results for "<span className="text-velmora-text">{searchQuery}</span>"
                </p>
              )}

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-velmora-text-muted mb-4">No pieces match your filters.</p>
                  <button onClick={clearFilters} className="btn btn-outline btn-sm">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
