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
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const searchQuery = searchParams.get('search') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 120 ||
    searchQuery;

  return (
    <div className="pt-8 pb-16">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">The Collection</h1>
          <p className="body-text">Demi-fine jewelry, crafted with intention.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between p-4 border border-[#e5e0d8] mb-4"
            >
              <span className="text-sm uppercase tracking-[0.1em]">Filters</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
              {/* Active Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-[0.1em] text-[#b89778] mb-6 hover:underline"
                >
                  Clear All Filters
                </button>
              )}

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
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-[#b89778]"
                  />
                  <div className="flex justify-between text-xs text-[#8a8178] mt-1">
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
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e5e0d8]">
              <span className="text-sm text-[#8a8178]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.1em] text-[#8a8178] hidden sm:inline">
                  Sort
                </span>
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

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#8a8178] mb-4">No products match your filters.</p>
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
