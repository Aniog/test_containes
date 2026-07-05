import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : ['All']
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

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
    if (!selectedCategories.includes('All')) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    const priceRange = priceRanges.find(r => r.label === selectedPriceRange);
    if (priceRange && priceRange.min > 0 || priceRange?.max < Infinity) {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Material filter (based on variant availability)
    if (selectedMaterial !== 'All') {
      result = result.filter(p => 
        p.variants.some(v => v.label === selectedMaterial && v.available)
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
  }, [selectedCategories, selectedPriceRange, selectedMaterial, sortBy, searchQuery]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      setSelectedCategories(['All']);
    } else {
      let newCats = selectedCategories.includes('All') 
        ? [cat] 
        : selectedCategories.includes(cat)
          ? selectedCategories.filter(c => c !== cat)
          : [...selectedCategories, cat];
      
      if (newCats.length === 0) newCats = ['All'];
      setSelectedCategories(newCats);
    }
  };

  const clearFilters = () => {
    setSelectedCategories(['All']);
    setSelectedPriceRange('All');
    setSelectedMaterial('All');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-velmora-bg-light">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Discover</span>
          <h1 className="heading-serif text-4xl mt-1">The Collection</h1>
          <p className="text-velmora-taupe mt-2">Timeless pieces for the modern woman.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.12em] uppercase">Filters</span>
                <button 
                  onClick={clearFilters}
                  className="text-xs text-velmora-gold hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-velmora-border px-4 py-2 text-sm bg-white focus:outline-none focus:border-velmora-gold"
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
                      onChange={() => handleCategoryChange(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="filter-label">Price</p>
                {priceRanges.map((range) => (
                  <label key={range.label} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === range.label}
                      onChange={() => setSelectedPriceRange(range.label)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>

              {/* Material */}
              <div>
                <p className="filter-label">Material</p>
                {['All', 'Gold', 'Silver'].map((mat) => (
                  <label key={mat} className="filter-option">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === mat}
                      onChange={() => setSelectedMaterial(mat)}
                    />
                    <span>{mat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <p className="text-sm text-velmora-taupe">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
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
              <div className="text-center py-20">
                <p className="text-velmora-taupe mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-sm underline text-velmora-gold">
                  Clear filters
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