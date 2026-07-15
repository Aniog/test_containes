import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(120);
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Price range options
  const priceRanges = [
    { label: 'Under $40', min: 0, max: 39 },
    { label: '$40 – $60', min: 40, max: 60 },
    { label: '$60 – $90', min: 61, max: 90 },
    { label: '$90+', min: 91, max: 200 },
  ];

  const [activePriceRange, setActivePriceRange] = useState(null);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
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
    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    // Sort
    switch (sortOption) {
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
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortOption, searchQuery]);

  // Handlers
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

  const selectPriceRange = (range) => {
    if (activePriceRange === range.label) {
      // Clear
      setActivePriceRange(null);
      setMinPrice(0);
      setMaxPrice(120);
    } else {
      setActivePriceRange(range.label);
      setMinPrice(range.min);
      setMaxPrice(range.max);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setMinPrice(0);
    setMaxPrice(120);
    setActivePriceRange(null);
    setSortOption('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    minPrice > 0 ||
    maxPrice < 120 ||
    searchQuery;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-2">The Collection</h1>
        <p className="text-[var(--color-text-muted)]">Demi-fine gold jewelry, crafted for everyday wear.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <span className="uppercase tracking-[0.1em] text-xs text-[var(--color-text-muted)]">Filter</span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-[var(--color-gold-dark)] hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search (mobile) */}
            <div className="lg:hidden mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="search-input w-full px-3 py-2 border border-[var(--color-border)] bg-[var(--color-surface)]"
              />
            </div>

            {/* Category */}
            <div className="mb-8">
              <p className="filter-label">Category</p>
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
              <p className="filter-label">Material</p>
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

            {/* Price */}
            <div>
              <p className="filter-label">Price</p>
              {priceRanges.map((range) => (
                <label key={range.label} className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={activePriceRange === range.label}
                    onChange={() => selectPriceRange(range)}
                  />
                  <span>{range.label}</span>
                </label>
              ))}
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
              <label className="text-sm text-[var(--color-text-muted)] hidden sm:inline">Sort</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
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
            <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-[var(--color-text-muted)] mb-4">No pieces match your filters.</p>
              <button onClick={clearFilters} className="btn btn-outline">
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
