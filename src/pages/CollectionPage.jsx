import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './CollectionPage.css';

function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: 'under50' },
    { label: '$50 - $80', value: '50to80' },
    { label: 'Over $80', value: 'over80' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price
    if (priceRange !== 'All') {
      filtered = filtered.filter(p => {
        if (priceRange === 'under50') return p.price < 50;
        if (priceRange === '50to80') return p.price >= 50 && p.price <= 80;
        if (priceRange === 'over80') return p.price > 80;
        return true;
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
    setSortBy('featured');
  };

  return (
    <div className="collection-page">
      <div className="container">
        {/* Header */}
        <div className="collection-header">
          <h1 className="collection-title">Shop All</h1>
          <p className="collection-subtitle">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          className="filter-toggle-mobile"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        <div className="collection-content">
          {/* Filter Sidebar */}
          <aside className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="clear-filters" onClick={clearFilters}>
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">Category</h4>
              {categories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <span className="filter-radio"></span>
                  {category}
                </label>
              ))}
            </div>

            {/* Material Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">Material</h4>
              {materials.map((material) => (
                <label key={material} className="filter-option">
                  <input
                    type="radio"
                    name="material"
                    checked={selectedMaterial === material}
                    onChange={() => setSelectedMaterial(material)}
                  />
                  <span className="filter-radio"></span>
                  {material}
                </label>
              ))}
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">Price</h4>
              {priceRanges.map((range) => (
                <label key={range.value} className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === range.value}
                    onChange={() => setPriceRange(range.value)}
                  />
                  <span className="filter-radio"></span>
                  {range.label}
                </label>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="collection-main">
            {/* Sort Bar */}
            <div className="sort-bar">
              <div className="active-filters">
                {selectedCategory !== 'All' && (
                  <span className="active-filter">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')}>×</button>
                  </span>
                )}
                {selectedMaterial !== 'All' && (
                  <span className="active-filter">
                    {selectedMaterial}
                    <button onClick={() => setSelectedMaterial('All')}>×</button>
                  </span>
                )}
                {priceRange !== 'All' && (
                  <span className="active-filter">
                    {priceRanges.find(r => r.value === priceRange)?.label}
                    <button onClick={() => setPriceRange('All')}>×</button>
                  </span>
                )}
              </div>
              <div className="sort-dropdown-wrapper">
                <select
                  className="sort-dropdown"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="no-products">
                <p>No products match your filters.</p>
                <button className="btn-secondary" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;