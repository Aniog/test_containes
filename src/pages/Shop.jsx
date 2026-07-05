import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Update URL params when filters change
  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'All') {
      newParams.set(key.toLowerCase(), value);
    } else {
      newParams.delete(key.toLowerCase());
    }
    setSearchParams(newParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find((r) => r.label === selectedPriceRange);
    if (priceRange && priceRange.label !== 'All') {
      result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Material filter (all our products are Gold, but support Silver filter for demo)
    if (selectedMaterial !== 'All') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sorting
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
        // Keep original order (bestsellers first)
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortOption, searchQuery]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    updateFilters('category', cat);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedPriceRange('All');
    setSelectedMaterial('All');
    setSearchQuery('');
    setSortOption('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedPriceRange !== 'All' || selectedMaterial !== 'All' || searchQuery;

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#8B7355]">THE COLLECTION</span>
            <h1 className="font-serif text-4xl tracking-[0.02em] mt-1">All Jewelry</h1>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-[0.1em] text-[#6B6058] hidden sm:inline">SORT</span>
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
              className="sort-select text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pieces..."
                  className="w-full border-b border-[#D4C9B8] bg-transparent py-2 text-sm focus:outline-none placeholder:text-[#A89C8F]"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label">Category</div>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left py-0.5 transition-colors ${
                        selectedCategory === cat ? 'text-[#8B7355] font-medium' : 'text-[#2C2522] hover:text-[#8B7355]'
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
                <div className="space-y-2 text-sm">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(range.label)}
                      className={`block w-full text-left py-0.5 transition-colors ${
                        selectedPriceRange === range.label ? 'text-[#8B7355] font-medium' : 'text-[#2C2522] hover:text-[#8B7355]'
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
                <div className="space-y-2 text-sm">
                  {['All', 'Gold', 'Silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left py-0.5 transition-colors ${
                        selectedMaterial === mat ? 'text-[#8B7355] font-medium' : 'text-[#2C2522] hover:text-[#8B7355]'
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
                  className="text-xs tracking-[0.1em] text-[#8B7355] hover:text-[#2C2522] underline"
                >
                  CLEAR ALL FILTERS
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-xs tracking-[0.1em] text-[#6B6058] mb-4">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'PIECE' : 'PIECES'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#6B6058]">No pieces match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-sm text-[#8B7355] underline">
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
