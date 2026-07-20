import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, materials } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);

  // Get filters from URL
  const selectedCategories = searchParams.getAll('category');
  const selectedMaterials = searchParams.getAll('material');
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

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
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
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, searchQuery, priceRange, sortBy]);

  const toggleFilter = (type, value) => {
    const params = new URLSearchParams(searchParams);
    const current = params.getAll(type);
    
    if (current.includes(value)) {
      // Remove
      params.delete(type);
      current.filter(v => v !== value).forEach(v => params.append(type, v));
    } else {
      // Add
      params.append(type, value);
    }
    
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
    setPriceRange([0, 120]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || searchQuery || sortBy !== 'featured' || priceRange[0] !== 0 || priceRange[1] !== 120;

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="section-title mb-2">Shop All</h1>
          <p className="text-[var(--color-text-muted)]">Discover our collection of demi-fine gold jewelry</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">Filters</span>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-[var(--color-gold)] hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="filter-label">Category</p>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleFilter('category', cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="mb-8">
                <p className="filter-label">Tone</p>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleFilter('material', mat)}
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div>
                <p className="filter-label">Price Range</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="120" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-[var(--color-gold)]"
                    />
                  </div>
                  <div className="flex justify-between text-[var(--color-text-muted)] text-xs">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--color-border-light)]">
              <p className="text-sm text-[var(--color-text-muted)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              
              <div className="flex items-center gap-3">
                <label className="text-xs tracking-widest uppercase text-[var(--color-text-muted)]">Sort</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[var(--color-text-muted)] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-sm underline hover:text-[var(--color-gold)]">
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
