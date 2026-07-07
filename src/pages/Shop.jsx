import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, priceRanges } from '../data/products';
import { formatPrice } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Get unique materials from products
  const materials = ['All', '18K Gold Plated', 'Crystal'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find(r => r.label === selectedPriceRange);
    if (priceRange && selectedPriceRange !== 'All') {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Material filter (simplified - check if material string contains)
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material.includes(selectedMaterial));
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order (bestsellers first)
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy, searchQuery]);

  const updateFilter = (key, value) => {
    if (key === 'category') setSelectedCategory(value);
    if (key === 'price') setSelectedPriceRange(value);
    if (key === 'material') setSelectedMaterial(value);
    if (key === 'search') setSearchQuery(value);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedPriceRange('All');
    setSelectedMaterial('All');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedPriceRange !== 'All' || 
                           selectedMaterial !== 'All' || searchQuery.trim();

  return (
    <div className="min-h-screen bg-velmora-bg text-velmora-text">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        {/* Header */}
        <div className="mb-10">
          <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-1">Discover</div>
          <h1 className="font-serif text-5xl tracking-[-0.01em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <div className="filter-label">Search</div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => updateFilter('search', e.target.value)}
                  placeholder="Search jewelry..."
                  className="input py-2 text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-1.5 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedCategory === cat ? 'text-velmora-gold font-medium' : 'hover:text-velmora-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="filter-label">Price</div>
                <div className="space-y-1.5 text-sm">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedPriceRange === range.label ? 'text-velmora-gold font-medium' : 'hover:text-velmora-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="filter-label">Material</div>
                <div className="space-y-1.5 text-sm">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedMaterial === mat ? 'text-velmora-gold font-medium' : 'hover:text-velmora-gold'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-velmora-text-light hover:text-velmora-text"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4 pb-6 border-b border-velmora-border mb-8">
              <div className="text-sm text-velmora-text-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-velmora-text-light">Sort</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="font-serif text-2xl mb-3">No pieces found</div>
                <p className="text-velmora-text-muted mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline text-sm">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
