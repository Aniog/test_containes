import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, materials } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

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
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="shop-page">
      <Navigation />
      
      <div className="shop-header">
        <h1>Shop All</h1>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
          Demi-fine gold jewelry, crafted for everyday
        </p>
      </div>

      <div className="shop-content">
        {/* Filters */}
        <aside className="filter-sidebar">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ margin: 0 }}>Filters</h4>
            {(selectedCategories.length > 0 || selectedMaterials.length > 0) && (
              <button 
                onClick={clearFilters}
                style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer' }}
              >
                Clear All
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Category</h4>
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
          <div className="filter-group">
            <h4>Material</h4>
            {materials.map((mat) => (
              <label key={mat} className="filter-option">
                <input 
                  type="checkbox" 
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggleMaterial(mat)}
                />
                {mat} Tone
              </label>
            ))}
          </div>

          {/* Price Filter */}
          <div className="filter-group">
            <h4>Price</h4>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              ${priceRange[0]} — ${priceRange[1]}
            </div>
            <input 
              type="range" 
              min="0" 
              max="120" 
              step="5"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              style={{ width: '100%', marginTop: '0.5rem', accentColor: 'var(--color-gold)' }}
            />
          </div>
        </aside>

        {/* Products */}
        <div>
          <div className="sort-bar">
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
              {filteredProducts.length} products
            </span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No products match your filters.</p>
              <button onClick={clearFilters} className="btn btn-outline btn-sm">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;