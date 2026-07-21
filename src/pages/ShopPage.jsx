import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');

  // Update filters from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    if (category) setSelectedCategory(category);
    if (sort) setSortBy(sort);
  }, [searchParams]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'category':
        setSelectedCategory(value);
        break;
      case 'material':
        setSelectedMaterial(value);
        break;
      case 'price':
        setPriceRange(value);
        break;
      default:
        break;
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const materials = ['all', ...new Set(products.map(p => p.material))];

  return (
    <main className="page-transition pt-24 md:pt-32">
      <div className="container-premium">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {selectedCategory === 'all' ? 'All Products' : selectedCategory}
          </h1>
          <div className="hairline w-24 mx-auto" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-wide"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          {/* Product Count */}
          <p className="text-sm text-velmora-warm-gray">
            {filteredProducts.length} products
          </p>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border-b border-gray-300 pb-1 bg-transparent outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="bestsellers">Bestsellers</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside
            className={`${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 fixed lg:static inset-0 z-40 w-72 bg-velmora-cream p-6 lg:p-0 lg:w-64 transform transition-transform duration-300 lg:transform-none overflow-y-auto lg:overflow-visible`}
          >
            <div className="lg:sticky lg:top-32">
              {/* Close Button (Mobile) */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="lg:hidden absolute top-4 right-4"
              >
                <X size={24} />
              </button>

              <h3 className="font-serif text-lg mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wide mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => handleFilterChange('category', cat)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="text-sm">{cat === 'all' ? 'All' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wide mb-4">Material</h4>
                <div className="space-y-3">
                  {materials.map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === mat}
                        onChange={() => handleFilterChange('material', mat)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="text-sm">{mat === 'all' ? 'All' : mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wide mb-4">Price</h4>
                <div className="space-y-3">
                  {[
                    { label: 'All', value: 'all' },
                    { label: 'Under $50', value: '0-50' },
                    { label: '$50 - $80', value: '50-80' },
                    { label: '$80+', value: '80-1000' },
                  ].map((range) => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range.value}
                        onChange={() => handleFilterChange('price', range.value)}
                        className="w-4 h-4 accent-velmora-gold"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-warm-gray mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="aspect-[3/4] bg-velmora-light-gray mb-4 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="product-name text-sm mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star size={14} className="text-velmora-gold fill-velmora-gold" />
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <p className="font-serif text-lg">${product.price}.00</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
