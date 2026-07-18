import React, { useState, useMemo } from 'react';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

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
  }, [selectedCategory, selectedMaterial, sortBy]);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-velmora">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <h1 className="heading-serif text-4xl md:text-5xl mb-4">Collection</h1>
          <p className="body-text max-w-2xl mx-auto">
            Discover our curated selection of demi-fine jewelry, designed for everyday luxury.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 space-y-4 sm:space-y-0">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden btn-secondary text-sm py-3 px-6"
          >
            Filters
          </button>

          {/* Category Pills */}
          <div className={`flex flex-wrap gap-3 ${isFilterOpen ? 'block' : 'hidden sm:flex'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-colors ${
                  selectedCategory === category
                    ? 'bg-charcoal text-white'
                    : 'border border-border hover:border-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-4">
            <label className="text-sm text-warm-gray">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-charcoal cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Material Filter (Mobile) */}
        {isFilterOpen && (
          <div className="sm:hidden mb-8 p-6 bg-cream-dark">
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Material</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedMaterial('All')}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-colors ${
                  selectedMaterial === 'All'
                    ? 'bg-charcoal text-white'
                    : 'border border-border'
                }`}
              >
                All
              </button>
              {materials.map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 text-sm tracking-wider uppercase transition-colors ${
                    selectedMaterial === material
                      ? 'bg-charcoal text-white'
                      : 'border border-border'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="heading-serif text-2xl mb-4">No products found</p>
            <p className="body-text">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
