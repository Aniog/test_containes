import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, materials } from '../data/products';

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

  // Apply filters
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
        // featured - keep original order
        break;
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
    setMinPrice(0);
    setMaxPrice(120);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedMaterials.length > 0 || 
    minPrice > 0 || 
    maxPrice < 120;

  return (
    <div className="container section">
      <div className="mb-10">
        <div className="uppercase text-xs tracking-[3px] text-gold mb-1">Discover</div>
        <h1 className="text-3xl">The Collection</h1>
        <p className="body-muted mt-2 max-w-md">
          Demi-fine gold jewelry designed for everyday elegance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* FILTER SIDEBAR */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-20">
            <div className="flex items-center justify-between mb-6">
              <span className="uppercase text-xs tracking-[2px]">Filters</span>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-gold hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="filter-section">
              <div className="filter-title">Category</div>
              {categories.map((cat) => (
                <label key={cat} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>

            {/* Material Filter */}
            <div className="filter-section">
              <div className="filter-title">Material</div>
              {materials.map((mat) => (
                <label key={mat} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => toggleMaterial(mat)}
                  />
                  {mat}
                </label>
              ))}
            </div>

            {/* Price Filter */}
            <div className="filter-section">
              <div className="filter-title">Price Range</div>
              <div className="px-1">
                <div className="flex justify-between text-xs text-text-muted mb-2">
                  <span>${minPrice}</span>
                  <span>${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="1"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full accent-gold"
                />
                <div className="flex gap-2 mt-3">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.max(0, Math.min(parseInt(e.target.value) || 0, maxPrice)))}
                    className="input text-sm py-1"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.min(120, Math.max(parseInt(e.target.value) || 120, minPrice)))}
                    className="input text-sm py-1"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          {/* Sort + Count */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <span className="text-sm text-text-muted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
            
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-text-muted hidden sm:inline">Sort</span>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="body-muted mb-4">No products match your filters.</p>
              <button onClick={clearFilters} className="btn btn-gold-outline">
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
