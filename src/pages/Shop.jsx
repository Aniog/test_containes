import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(120);
  const [sortBy, setSortBy] = useState('featured');

  // Get unique price range from products
  const priceRange = useMemo(() => {
    const prices = products.map(p => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, []);

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
        // featured - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setMinPrice(priceRange.min);
    setMaxPrice(priceRange.max);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedMaterials.length > 0 || 
    minPrice !== priceRange.min || 
    maxPrice !== priceRange.max;

  return (
    <div className="container section">
      <div className="mb-10">
        <span className="caption">Discover</span>
        <h1 className="mt-1">The Collection</h1>
        <p className="text-text-muted mt-2 max-w-md">
          Demi-fine pieces crafted from 18K gold-plated brass and sterling silver. 
          Designed for everyday elegance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium">Filters</span>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-gold underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Category */}
            <div className="mb-8">
              <div className="filter-label">Category</div>
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

            {/* Material */}
            <div className="mb-8">
              <div className="filter-label">Material</div>
              {materials.map((mat) => (
                <label key={mat} className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleMaterial(mat)}
                  />
                  <span>{mat}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <div className="filter-label mb-3">Price Range</div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span>$</span>
                  <input 
                    type="number" 
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-20 px-2 py-1 text-sm"
                  />
                  <span>to</span>
                  <span>$</span>
                  <input 
                    type="number" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.min(200, parseInt(e.target.value) || 200))}
                    className="w-20 px-2 py-1 text-sm"
                  />
                </div>
                <input 
                  type="range" 
                  min={priceRange.min} 
                  max={priceRange.max} 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full accent-gold"
                />
              </div>
            </div>

            <div className="text-xs text-text-muted pt-4 border-t border-border">
              {filteredProducts.length} products
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Controls */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <span className="text-sm text-text-muted">
              Showing {filteredProducts.length} of {products.length}
            </span>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-muted hidden sm:inline">Sort:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-border bg-surface px-3 py-1.5"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-muted mb-4">No products match your filters.</p>
              <Button variant="outline" onClick={clearFilters}>Clear filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
