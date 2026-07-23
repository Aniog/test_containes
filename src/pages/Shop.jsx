import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, materials, priceRanges } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states from URL or defaults
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    // Price range filter
    const priceRange = priceRanges.find(r => r.label === selectedPriceRange);
    if (priceRange && selectedPriceRange !== 'All') {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Search query
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
        // featured: keep original order (bestsellers first)
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, selectedPriceRange, sortBy, searchQuery]);

  const updateFilter = (key, value) => {
    if (key === 'category') setSelectedCategory(value);
    if (key === 'material') setSelectedMaterial(value);
    if (key === 'price') setSelectedPriceRange(value);
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams);
    if (value !== 'All' && key === 'category') {
      newParams.set('category', value);
    } else if (key === 'category') {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setSelectedPriceRange('All');
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || selectedPriceRange !== 'All' || searchQuery;

  return (
    <div className="pt-8 pb-20">
      <div className="container">
        {/* Header */}
        <div className="mb-10">
          <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] mb-2">Discover</div>
          <h1 className="text-3xl">The Collection</h1>
          {searchQuery && (
            <p className="mt-2 text-[#6B6560]">Results for "{searchQuery}"</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* SIDEBAR FILTERS */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Active Filters */}
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs text-[#B8976E] hover:underline"
                >
                  Clear all filters
                </button>
              )}

              {/* Category */}
              <div>
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => updateFilter('category', cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat} className="filter-option">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === mat}
                      onChange={() => updateFilter('material', mat)}
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <div className="filter-label">Price</div>
                {priceRanges.map((range) => (
                  <label key={range.label} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === range.label}
                      onChange={() => updateFilter('price', range.label)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1">
            {/* Sort + Count */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5DFD6]">
              <span className="text-sm text-[#6B6560]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#6B6560] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline btn-sm">
                  Clear Filters
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
