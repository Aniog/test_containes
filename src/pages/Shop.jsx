import React, { useState, useMemo } from 'react';
import { products, categories, materials } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial) {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial(null);
    setPriceRange([0, 200]);
  };

  return (
    <div className="py-8 md:py-16">
      <div className="container-luxury">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center gap-2 mb-6 text-sm uppercase tracking-wider"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-light hover:text-velmora-charcoal'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map(material => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(selectedMaterial === material ? null : material)}
                      className={`block text-sm ${
                        selectedMaterial === material
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-light hover:text-velmora-charcoal'
                      } transition-colors`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $80', range: [50, 80] },
                    { label: '$80+', range: [80, 200] }
                  ].map(({ label, range }) => (
                    <button
                      key={label}
                      onClick={() => setPriceRange(range)}
                      className="block text-sm text-velmora-text-light hover:text-velmora-charcoal transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-text-light hover:text-velmora-gold transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-text-light">
                {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-velmora-border px-4 py-2 focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-text-light mb-4">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
