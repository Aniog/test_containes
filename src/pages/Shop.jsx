import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/layout/CartDrawer';
import ProductCard from '../components/home/ProductCard';
import { products, categories, materials, priceRanges } from '../data/products';
import { ChevronDown, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get filter values from URL
  const selectedCategory = searchParams.get('category') || 'All';
  const selectedMaterial = searchParams.get('material') || 'All';
  const selectedPrice = searchParams.get('price') || 'All';
  const sortOption = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  // Update URL params helper
  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchParams({});
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Material filter (note: all seed products are Gold, but we support Silver filter for future)
    if (selectedMaterial !== 'All') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    const priceRange = priceRanges.find(r => r.label === selectedPrice);
    if (priceRange && selectedPrice !== 'All') {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

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
      default:
        // featured - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedMaterial, selectedPrice, sortOption, searchQuery]);

  const activeFiltersCount = [
    selectedCategory !== 'All',
    selectedMaterial !== 'All',
    selectedPrice !== 'All',
    searchQuery,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-velmora-bg">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="heading-serif text-4xl md:text-5xl mb-2">Shop All</h1>
          <p className="text-velmora-muted">Demi-fine gold jewelry, made to last.</p>
        </div>

        {/* Mobile Filter Toggle + Sort */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm tracking-[0.08em] uppercase border border-velmora-border px-4 py-2"
          >
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            <ChevronDown size={16} className={isFilterOpen ? 'rotate-180' : ''} />
          </button>
          <select
            value={sortOption}
            onChange={(e) => updateParam('sort', e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">A–Z</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Active Filters */}
              {activeFiltersCount > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs tracking-[0.1em] uppercase text-velmora-muted">Active Filters</span>
                    <button onClick={clearFilters} className="text-xs text-velmora-gold-dark hover:underline">
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== 'All' && (
                      <span className="inline-flex items-center gap-1 text-xs bg-velmora-bg-alt px-3 py-1">
                        {selectedCategory}
                        <button onClick={() => updateParam('category', 'All')}><X size={12} /></button>
                      </span>
                    )}
                    {selectedMaterial !== 'All' && (
                      <span className="inline-flex items-center gap-1 text-xs bg-velmora-bg-alt px-3 py-1">
                        {selectedMaterial}
                        <button onClick={() => updateParam('material', 'All')}><X size={12} /></button>
                      </span>
                    )}
                    {selectedPrice !== 'All' && (
                      <span className="inline-flex items-center gap-1 text-xs bg-velmora-bg-alt px-3 py-1">
                        {selectedPrice}
                        <button onClick={() => updateParam('price', 'All')}><X size={12} /></button>
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Category */}
              <div>
                <h4 className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="filter-checkbox">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => updateParam('category', cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-3">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="filter-checkbox">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === range.label}
                        onChange={() => updateParam('price', range.label)}
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs tracking-[0.1em] uppercase text-velmora-muted mb-3">Material</h4>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <label key={mat} className="filter-checkbox">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => updateParam('material', mat)}
                      />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Desktop Clear */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="hidden md:block text-xs tracking-[0.08em] uppercase text-velmora-gold-dark hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.1em] uppercase text-velmora-muted">Sort</span>
                <select
                  value={sortOption}
                  onChange={(e) => updateParam('sort', e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">A–Z</option>
                </select>
              </div>
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
                <p className="text-velmora-muted mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline">
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
