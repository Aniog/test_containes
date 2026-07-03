import React, { useState, useMemo } from 'react';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
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
  }, [selectedCategory, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All';

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif-display text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-[#6B6560] text-lg">Discover our complete collection of demi-fine jewelry</p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal size={18} />
            Filters
            {hasActiveFilters && <span className="ml-1 bg-[#B8860B] text-white text-xs px-2 py-0.5 rounded-full">!</span>}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-[#D4CFC8] rounded px-3 py-2 focus:outline-none focus:border-[#B8860B]"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="bestsellers">Best Sellers</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="lg:sticky lg:top-24">
              {/* Mobile Close Button */}
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="font-serif-display text-2xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium uppercase tracking-wider text-sm mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-[#B8860B] font-medium'
                          : 'text-[#6B6560] hover:text-[#2A2520]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-medium uppercase tracking-wider text-sm mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block text-sm ${
                        selectedMaterial === material
                          ? 'text-[#B8860B] font-medium'
                          : 'text-[#6B6560] hover:text-[#2A2520]'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#B8860B] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p className="text-sm text-[#6B6560]">{filteredProducts.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-[#D4CFC8] rounded px-3 py-2 focus:outline-none focus:border-[#B8860B]"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="bestsellers">Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-[#6B6560] mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-[#B8860B] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
