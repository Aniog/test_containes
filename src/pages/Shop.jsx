import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories, materials, priceRanges, sortOptions } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states from URL or defaults
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [selectedMaterial, setSelectedMaterial] = useState(
    searchParams.get('material') || 'all'
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    searchParams.get('price') || 'all'
  );
  const [sortBy, setSortBy] = useState(
    searchParams.get('sort') || 'featured'
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );

  // Update URL when filters change
  const updateFilters = (updates) => {
    const newParams = new URLSearchParams(searchParams);
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '') {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    
    setSearchParams(newParams);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    updateFilters({ category: value });
  };

  const handleMaterialChange = (value) => {
    setSelectedMaterial(value);
    updateFilters({ material: value });
  };

  const handlePriceChange = (value) => {
    setSelectedPriceRange(value);
    updateFilters({ price: value });
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    updateFilters({ sort: value });
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    updateFilters({ search: value });
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedPriceRange('all');
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Price range filter
    const priceRange = priceRanges.find((r) => r.id === selectedPriceRange);
    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
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
      case 'featured':
      default:
        // Keep original order for featured
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, selectedPriceRange, sortBy, searchQuery]);

  const activeFilterCount = [
    selectedCategory !== 'all',
    selectedMaterial !== 'all',
    selectedPriceRange !== 'all',
    searchQuery !== '',
  ].filter(Boolean).length;

  return (
    <div className="pt-20">
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Shop All</h1>
          <p className="text-[var(--velmora-muted)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.1em] uppercase">Filters</span>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[var(--velmora-gold-dark)] hover:underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="input text-sm py-2"
                />
              </div>

              {/* Category */}
              <div className="mb-6">
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat.id} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.value}
                      onChange={() => handleCategoryChange(cat.value)}
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="mb-6">
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat.id} className="filter-option">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === mat.value}
                      onChange={() => handleMaterialChange(mat.value)}
                    />
                    <span>{mat.label}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="filter-label">Price</div>
                {priceRanges.map((range) => (
                  <label key={range.id} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === range.id}
                      onChange={() => handlePriceChange(range.id)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--velmora-border)]">
              <div className="text-sm text-[var(--velmora-muted)] hidden md:block">
                {activeFilterCount > 0 && `${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} applied`}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs tracking-[0.08em] uppercase text-[var(--velmora-muted)]">Sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="sort-select"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg mb-2">No products found</p>
                <p className="text-sm text-[var(--velmora-muted)] mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn btn-outline">
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