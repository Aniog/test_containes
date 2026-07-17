import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');

  const urlCategory = searchParams.get('category') || 'All';
  const urlSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState(urlSearch);

  // Sync with URL params
  React.useEffect(() => {
    if (urlCategory !== selectedCategory) setSelectedCategory(urlCategory);
    if (urlSearch !== searchQuery) setSearchQuery(urlSearch);
  }, [urlCategory, urlSearch]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Material filter
    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Sorting
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
  }, [selectedCategory, searchQuery, priceRange, selectedMaterial, sortBy]);

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

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setPriceRange([0, 120]);
    setSelectedMaterial('All');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.15em] text-velmora-accent mb-1">DISCOVER</p>
          <h1 className="serif text-4xl tracking-[0.02em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Active Filters */}
              {(selectedCategory !== 'All' || searchQuery || selectedMaterial !== 'All' || priceRange[0] > 0 || priceRange[1] < 120) && (
                <button
                  onClick={clearFilters}
                  className="text-xs underline text-velmora-text-muted hover:text-velmora-text"
                >
                  CLEAR ALL FILTERS
                </button>
              )}

              {/* Category */}
              <div>
                <p className="filter-label mb-3">Category</p>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateCategory(cat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedCategory === cat ? 'text-velmora-accent font-medium' : 'hover:text-velmora-accent'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="filter-label mb-3">Price Range</p>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="1"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-velmora-accent"
                  />
                  <div className="flex justify-between text-xs text-velmora-text-muted">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="filter-label mb-3">Material</p>
                <div className="space-y-2 text-sm">
                  {['All', '18K Gold Plated', 'Sterling Silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedMaterial === mat ? 'text-velmora-accent font-medium' : 'hover:text-velmora-accent'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-velmora-border gap-4">
              <p className="text-sm text-velmora-text-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-velmora-text-muted">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none focus:outline-none cursor-pointer pr-6"
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-14">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-velmora-text-muted mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="text-sm underline">
                  Clear filters
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
