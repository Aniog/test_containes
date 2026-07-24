import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import ProductCard from '../components/ui/ProductCard';
import { products, categories, materials } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : ['All']
  );
  const [selectedMaterials, setSelectedMaterials] = useState(['All']);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

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
    if (!selectedCategories.includes('All')) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter
    if (!selectedMaterials.includes('All')) {
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
        // featured - keep original order or sort by rating
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy, searchQuery]);

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      setSelectedCategories(['All']);
    } else {
      let newCats = selectedCategories.includes(cat)
        ? selectedCategories.filter((c) => c !== cat)
        : [...selectedCategories.filter((c) => c !== 'All'), cat];
      
      if (newCats.length === 0) newCats = ['All'];
      setSelectedCategories(newCats);
    }
  };

  const toggleMaterial = (mat) => {
    if (mat === 'All') {
      setSelectedMaterials(['All']);
    } else {
      let newMats = selectedMaterials.includes(mat)
        ? selectedMaterials.filter((m) => m !== mat)
        : [...selectedMaterials.filter((m) => m !== 'All'), mat];
      
      if (newMats.length === 0) newMats = ['All'];
      setSelectedMaterials(newMats);
    }
  };

  const clearFilters = () => {
    setSelectedCategories(['All']);
    setSelectedMaterials(['All']);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />
      <CartDrawer />

      <div className="container py-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-dark">Discover</div>
            <h1 className="text-3xl">The Collection</h1>
          </div>
          <div className="hidden md:block text-sm text-velmora-text-muted">
            {filteredProducts.length} pieces
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <div className="filter-label">Search</div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Find a piece..."
                  className="w-full text-sm"
                />
              </div>

              {/* Categories */}
              <div>
                <div className="filter-label">Category</div>
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
              <div>
                <div className="filter-label">Tone</div>
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

              {/* Price Range */}
              <div>
                <div className="filter-label">Price</div>
                <div className="flex items-center gap-2 text-sm">
                  <span>${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 accent-velmora-gold"
                  />
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="text-xs tracking-widest text-velmora-text-muted hover:text-velmora-gold-dark"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
              <div className="text-sm text-velmora-text-muted lg:hidden">
                {filteredProducts.length} pieces
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs tracking-widest text-velmora-text-muted">SORT</span>
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

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline btn-sm">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;