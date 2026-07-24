import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, formatPrice } from '../data/products';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Sets' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under50', name: 'Under $50' },
    { id: '50to75', name: '$50 - $75' },
    { id: 'over75', name: 'Over $75' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          result = result.filter((p) => p.price < 50);
          break;
        case '50to75':
          result = result.filter((p) => p.price >= 50 && p.price <= 75);
          break;
        case 'over75':
          result = result.filter((p) => p.price > 75);
          break;
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const FilterContent = () => (
    <>
      {/* Categories */}
      <div className="filter-section">
        <h3 className="filter-title">Category</h3>
        {categories.map((category) => (
          <label key={category.id} className="filter-option">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category.id}
              onChange={() => handleCategoryChange(category.id)}
            />
            {category.name}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="filter-section">
        <h3 className="filter-title">Price</h3>
        {priceRanges.map((range) => (
          <label key={range.id} className="filter-option">
            <input
              type="radio"
              name="price"
              checked={priceRange === range.id}
              onChange={() => setPriceRange(range.id)}
            />
            {range.name}
          </label>
        ))}
      </div>
    </>
  );

  return (
    <main className="pt-20">
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ letterSpacing: '0.1em' }}
          >
            {selectedCategory === 'all' ? 'Shop All' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p style={{ color: 'var(--color-stone)' }}>
            {filteredProducts.length} pieces
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center justify-center gap-2 py-3 border w-full"
            style={{ borderColor: 'var(--color-border-dark)' }}
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter size={18} />
            Filters
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filters Panel */}
          {isMobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setIsMobileFiltersOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <FilterContent />
                <button
                  className="btn-primary w-full mt-6"
                  onClick={() => setIsMobileFiltersOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg mb-4" style={{ color: 'var(--color-stone)' }}>
                  No products found
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;