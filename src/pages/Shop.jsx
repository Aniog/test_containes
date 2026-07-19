import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, materials } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states from URL params
  const urlCategory = searchParams.get('category') || 'All';
  const urlSearch = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [showFilters, setShowFilters] = useState(false);

  // Update URL when category changes
  const updateCategory = (cat) => {
    setSelectedCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

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

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Search filter
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
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
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 120]);
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || 
    priceRange[0] !== 0 || priceRange[1] !== 120 || searchQuery;

  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif-custom text-4xl tracking-[0.02em] mb-2">Shop All</h1>
          <p className="text-[#6B665F] text-sm">Demi-fine jewelry crafted to be treasured</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.1em] text-[#6B665F]">FILTERS</span>
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-[#C5A46E] hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3 tracking-[0.02em]">Category</p>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <label key={cat} className="filter-checkbox text-sm">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat}
                        onChange={() => updateCategory(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3 tracking-[0.02em]">Material</p>
                <div className="space-y-1">
                  {materials.map((mat) => (
                    <label key={mat} className="filter-checkbox text-sm">
                      <input 
                        type="radio" 
                        name="material" 
                        checked={selectedMaterial === mat}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                      />
                      <span>{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="text-sm font-medium mb-3 tracking-[0.02em]">Price Range</p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2 items-center">
                    <input 
                      type="number" 
                      value={priceRange[0]} 
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20 border border-[#E8E4DE] px-2 py-1 text-sm"
                    />
                    <span className="text-[#6B665F]">to</span>
                    <input 
                      type="number" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 120])}
                      className="w-20 border border-[#E8E4DE] px-2 py-1 text-sm"
                    />
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C5A46E]"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Toggle + Sort */}
            <div className="flex items-center justify-between mb-6 lg:mb-8">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden text-sm tracking-[0.05em] border border-[#E8E4DE] px-4 py-2"
              >
                {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs text-[#6B665F] hidden sm:inline">SORT</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-8 p-5 border border-[#E8E4DE] bg-white">
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-medium">Filters</span>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-xs text-[#C5A46E]">Clear</button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="mb-2 text-[#6B665F]">Category</p>
                    {categories.map(cat => (
                      <label key={cat} className="filter-checkbox block">
                        <input 
                          type="radio" 
                          name="m-category" 
                          checked={selectedCategory === cat}
                          onChange={() => updateCategory(cat)}
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                  <div>
                    <p className="mb-2 text-[#6B665F]">Material</p>
                    {materials.map(mat => (
                      <label key={mat} className="filter-checkbox block">
                        <input 
                          type="radio" 
                          name="m-material" 
                          checked={selectedMaterial === mat}
                          onChange={(e) => setSelectedMaterial(e.target.value)}
                        />
                        <span>{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-[#6B665F] mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B665F] mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-sm">
                  CLEAR FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
