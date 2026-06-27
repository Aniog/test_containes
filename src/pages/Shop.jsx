import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Get unique price range from products
  const priceRange = { min: 30, max: 120 };

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
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || 
    selectedMaterials.length > 0 || 
    minPrice !== priceRange.min || 
    maxPrice !== priceRange.max ||
    searchQuery;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="section-title">Shop All</h1>
          <p className="text-sm text-[#5C5752] mt-1">{filteredProducts.length} pieces</p>
        </div>
        
        {/* Sort */}
        <div className="flex items-center gap-3">
          <label className="text-xs tracking-[0.1em] text-[#8A8178] hidden sm:block">SORT</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">A — Z</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-[0.15em] uppercase text-[#5C5752]">Filters</span>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-[#B89778] hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input text-sm py-2.5"
              />
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
                  <span>{mat} Tone</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div>
              <div className="filter-label mb-3">Price Range</div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#8A8178]">$</span>
                  <input 
                    type="number" 
                    value={minPrice}
                    onChange={(e) => setMinPrice(Math.max(0, parseInt(e.target.value) || 0))}
                    className="input py-1.5 text-sm w-20"
                  />
                  <span className="text-[#8A8178]">to</span>
                  <input 
                    type="number" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Math.min(200, parseInt(e.target.value) || 200))}
                    className="input py-1.5 text-sm w-20"
                  />
                </div>
                <input 
                  type="range" 
                  min={priceRange.min} 
                  max={priceRange.max} 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full accent-[#B89778]"
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#5C5752] mb-4">No products match your filters.</p>
              <button onClick={clearFilters} className="text-sm text-[#B89778] underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;