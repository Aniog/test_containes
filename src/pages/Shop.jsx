import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

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
  const [gridKey, setGridKey] = useState(0); // For re-triggering grid animations

  const searchQuery = searchParams.get('search') || '';

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

    // Material filter - all products available in Gold and Silver tones
    if (selectedMaterials.length > 0) {
      // Products support both Gold and Silver variants in the UI
      // Show products that match any selected material
      result = result.filter(p => {
        // All products have Gold variant; some conceptually support Silver
        const availableMaterials = p.material === 'Gold' ? ['Gold', 'Silver'] : [p.material];
        return selectedMaterials.some(m => availableMaterials.includes(m));
      });
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
    setGridKey(prev => prev + 1);
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
    setGridKey(prev => prev + 1);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setMinPrice(0);
    setMaxPrice(120);
    setSortBy('featured');
    setSearchParams({});
    setGridKey(prev => prev + 1);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0 || minPrice > 0 || maxPrice < 120;

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-1">Curated Collection</p>
          <h1 className="serif text-4xl tracking-[0.03em]">Shop All</h1>
          {searchQuery && (
            <p className="mt-2 text-sm text-velmora-text-secondary">Results for "{searchQuery}"</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* FILTER SIDEBAR */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="uppercase tracking-[0.15em] text-xs">Filters</span>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-velmora-gold-dark hover:underline"
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
                      onChange={() => toggleCategory(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="mb-8">
                <p className="filter-label">Material</p>
                {['Gold', 'Silver'].map((mat) => (
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
                <p className="filter-label mb-4">Price Range</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span>$</span>
                    <input 
                      type="number" 
                      value={minPrice} 
                      onChange={(e) => setMinPrice(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-16 border border-velmora-border px-2 py-1 text-sm"
                    />
                    <span>to</span>
                    <input 
                      type="number" 
                      value={maxPrice} 
                      onChange={(e) => setMaxPrice(Math.min(120, parseInt(e.target.value) || 120))}
                      className="w-16 border border-velmora-border px-2 py-1 text-sm"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="w-full accent-velmora-gold"
                  />
                </div>
              </div>

              <Link to="/shop" className="text-xs uppercase tracking-[0.1em] text-velmora-muted hover:text-velmora-base">
                View All Products
              </Link>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {/* Sort + Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-velmora-border">
              <p className="text-sm text-velmora-text-secondary">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.1em] text-velmora-muted">Sort</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setGridKey(prev => prev + 1);
                  }}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div key={gridKey} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-velmora-text-secondary mb-4">No products match your filters.</p>
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