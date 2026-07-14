import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories, priceRanges } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter state from URL
  const categoryParam = searchParams.get('category') || 'all';
  const priceParam = searchParams.get('price') || 'all';
  const searchParam = searchParams.get('search') || '';
  const sortParam = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPrice, setSelectedPrice] = useState(priceParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [sortBy, setSortBy] = useState(sortParam);

  // Update URL when filters change
  const updateFilters = (updates) => {
    const newParams = new URLSearchParams(searchParams);
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '') {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    
    setSearchParams(newParams);
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    updateFilters({ category: catId });
  };

  const handlePriceChange = (priceId) => {
    setSelectedPrice(priceId);
    updateFilters({ price: priceId });
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    updateFilters({ search: val });
  };

  const handleSortChange = (e) => {
    const val = e.target.value;
    setSortBy(val);
    updateFilters({ sort: val });
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find((r) => r.id === selectedPrice);
    if (priceRange && priceRange.id !== 'all') {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
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
        // featured: keep original order (bestsellers first)
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, searchQuery, sortBy]);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2">Shop All</h1>
          <p className="text-velmora-text-muted text-sm">
            {filteredProducts.length} pieces
          </p>
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
                  onChange={handleSearchChange}
                  placeholder="Search jewelry..."
                  className="input text-sm py-2"
                />
              </div>

              {/* Category */}
              <div>
                <div className="filter-label mb-2">Category</div>
                {categories.map((cat) => (
                  <label key={cat.id} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                    />
                    {cat.label}
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <div className="filter-label mb-2">Price</div>
                {priceRanges.map((range) => (
                  <label key={range.id} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === range.id}
                      onChange={() => handlePriceChange(range.id)}
                    />
                    {range.label}
                  </label>
                ))}
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPrice('all');
                  setSearchQuery('');
                  setSortBy('featured');
                  setSearchParams({});
                }}
                className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted hover:text-velmora-gold"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
              <div className="text-sm text-velmora-text-muted hidden md:block">
                {filteredProducts.length} results
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs uppercase tracking-[0.1em] text-velmora-text-muted">Sort</span>
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="sort-select"
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p className="mb-4">No pieces match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPrice('all');
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  className="btn btn-outline btn-sm"
                >
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
